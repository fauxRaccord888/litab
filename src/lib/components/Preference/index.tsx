import { useDispatch, useSelector } from "react-redux"
import { fetchPreferenceData, setPreference } from "$lib/stores/preferenceSlice"
import { AppDispatch, AppRootState } from "$lib/stores/store"

import Carousel from "$lib/components/common/Carousel"
import { message } from "$lib/constants/components/Register"
import { useEffect } from "react"


export default function Preference() {
    const { loading, data } = useSelector((state: AppRootState) => state.preference.preferenceData)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchPreferenceData())
    }, [dispatch])

    return (
        <div className="preference-outer-container">
            {(loading === 'idle' || loading === 'pending') && <div>로딩 중...</div>} {/* TODO 스피너 컴포넌트로 대체*/}
            {loading === 'failed' && <div>무언가 잘못되었나봐요. 다시 시도해주세요.</div>} {/* TODO error 컴포넌트로 대체 */}
            {loading === 'succeeded' && 
                <Carousel>
                    {data.map((d) => 
                        <PreferenceTestItem key={d.key} data={d} />    
                    )}
                </Carousel>
            }
        </div>
    )
}

function PreferenceTestItem(props: {data: {key: string, content: [string, string]}}) {
    // TODO 언어 Provider 추가
    // TODO 튜플형 이외의 자료에 대한 확장성 고려
    const lang = 'kr'

    const { data } = props
    const { userPreference } = useSelector((state: AppRootState) => state.preference)
    const dispatch = useDispatch()
    
    const preferenceValues = [true, false]

    const handleClick = (value:boolean) => {
        dispatch(setPreference({key: data.key, value}))
    }

    return (
        <div className="preference-main-container">
            <div className="preference-title">{message.preference[lang]}</div>

            <div className="preference-mid-container">
                {preferenceValues.map((val, idx) => (
                    <div className="preference-content-container" key={data.content[idx]}>
                        {data.content[idx]}
                        <input 
                            type="checkbox" 
                            className="preference-checkbox"
                            checked={userPreference[data.key] === val} 
                            onChange={() => handleClick(val)}
                        />
                    </div> 
                ))}
            </div>
        </div>
    )
}