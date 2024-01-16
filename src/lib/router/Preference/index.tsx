import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootState } from "$lib/stores/store"

import type { Tables } from "$lib/api/supabase/types"

import { fetchPreferenceData, requestUpdatePreference, setPreference } from "$lib/stores/preferenceSlice"
import { router } from '$lib/router';
import { message } from "$lib/constants/components/Register"

import Carousel from "$lib/components/common/Carousel"
import Button from "$lib/components/common/Button"


export default function Preference() {
    const { preferenceData } = useSelector((state: AppRootState) => state.preference)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchPreferenceData())
    }, [dispatch])

    const handleUpdatePreference = () => {
        dispatch(requestUpdatePreference())
        router.history.push('/')
    }

    // TODO 서스펜스 추가
    return (
        <div className="preference-outer-container">
            <Carousel>
                {...preferenceData.map((d) => 
                    <PreferenceTestItem key={d.id} data={d} />
                )}
                <Button onClick={handleUpdatePreference}>제출 완료</Button>
            </Carousel>
        </div>
    )
}

//TODO 단순 렌더링 로직을 담당해야 할 컴포넌트임 - 상위 컴포넌트 구조 개선 필요
function PreferenceTestItem(props: {data: Tables<"preference_test">}) {
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