/* routes */
import { FileRoute } from "@tanstack/react-router"
/* hooks */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateUserPreference } from "$lib/hooks/mutation"
/* types */
import type { AppRootState } from "$lib/stores/store"
import type { Tables } from "$lib/types/supabase"
/* stores */
import { setPreference, setPreferenceTest } from "$lib/stores/preferenceSlice"
/* database */
import { fetchPreferenceTest_DB } from "$lib/database/preferenceTests"
/* components */
import Carousel from "$lib/components/common/Carousel"
/* utils */
import { message } from "$lib/constants/components/Register"

export const Route = new FileRoute('/_auth/preference/').createRoute({
    loader: () => fetchPreferenceTest_DB(),
    component: Preference
  })  

export default function Preference() {
    const {data: preferenceData} = Route.useLoaderData()
    const dispatch = useDispatch()
    const handleUpdateUserPreference = useUpdateUserPreference()

    // loader로 캐싱이 되지만 별도 상태관리가 필요함 -> DB에 값을 보낼 때 데이터가 필요
    // 데이터 query는 커스텀 훅 최소화(tanstack router의 캐시 우선)
    useEffect(() => {
        dispatch(setPreferenceTest(preferenceData))
    }, [dispatch, preferenceData])
    
    return (
        <div className="preference-outer-container">
            {preferenceData && 
                <Carousel>
                    {...preferenceData.map((d) => 
                        <PreferenceTestItem key={d.id} data={d} />
                    )}
                    <button onClick={handleUpdateUserPreference}>제출 완료</button>
                </Carousel>
            }
        </div>
    )
}

//TODO 단순 렌더링 로직을 담당해야 할 컴포넌트임 - 상위 컴포넌트 구조 개선 필요
function PreferenceTestItem(props: {data: Tables<"preference_tests">}) {
    const lang = 'kr'

    const { data } = props
    const { userPreference } = useSelector((state: AppRootState) => state.preference)
    const dispatch = useDispatch()
    
    const preferenceValues = [data.test_a, data.test_b]
    const idxToBoolean = [true, false]

    const handleChecked = (value:number) => {
        dispatch(setPreference({userValue: idxToBoolean[value], item: data}))
    }

    return (
        <div className="preference-main-container">
            <div className="preference-title">{message.preference[lang]}</div>

            <div className="preference-mid-container">
                {preferenceValues.map((text, idx) => (
                    <div className="preference-content-container" key={text}>
                        {text}
                        <input 
                            type="checkbox" 
                            className="preference-checkbox"
                            checked={userPreference[data.id] === idxToBoolean[idx]} 
                            onChange={() => handleChecked(idx)}
                        />
                    </div> 
                ))}
            </div>
        </div>
    )
}