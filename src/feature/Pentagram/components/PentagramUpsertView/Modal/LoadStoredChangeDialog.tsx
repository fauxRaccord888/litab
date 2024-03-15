import type { MouseEvent } from "react"
import type { AppRootState } from "$lib/stores/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { abortChanges, pendingChangeSelector, setDescription, setPentagramId } from "$feature/Pentagram/store/pentagramUpsertSlice"
import Modal from "$feature/portal/components/Modal"
import Button from "$lib/components/common/Button"
import "./style/loadStoredChangeDialog.scss"

export default function LoadStoredChangeDialog(props: { 
    pentagramId: string | null, 
    description: string | null 
}) {
    const { pentagramId, description } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const storedPentagramId = useSelector((state: AppRootState) => state.pentagramUpsert.pentagramId)
    const storedDescription = useSelector((state: AppRootState) => state.pentagramUpsert.description)
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectAll(state))
    const navigate = usePentagramNavigate()

    // COMMENT storedDescription이 존재하는지 확인하는 기능
    // 공백 문자열 역시 사용자의 저장사항일 수 있음을 주의
    const storedChangesExist = Boolean(
        changes.length ||
        (typeof storedDescription === 'string' &&
        description !== storedDescription)
    )

    const isCurrentPentagram = Boolean(
        storedPentagramId === pentagramId || 
        (!pentagramId && !storedPentagramId)
    )

    useEffect(() => {
        if (!storedChangesExist) {
            setLoaded(true)
            dispatch(setPentagramId(pentagramId))
        }
    }, [dispatch, pentagramId, storedChangesExist])

    const onClickAbortChanges = (e: MouseEvent) => {
        e.stopPropagation()
        dispatch(abortChanges())
        setLoaded(true)
        dispatch(setPentagramId(pentagramId))
        dispatch(setDescription(description))
    }
    
    const onClickPreserveChanges = (e: MouseEvent) => {
        e.stopPropagation()
        setLoaded(true)
    }

    const onClickNavigateRelated = (e: MouseEvent) => {
        e.stopPropagation()
        if (storedPentagramId) navigate.viewPentagram(storedPentagramId)
        else navigate.createPentagram()
    }

    return (
        <>
            {Boolean(!loaded) &&
            storedChangesExist &&
                <Modal title={t('pentagram.dialog.title.temp')} >
                    <div className="load-stored-change-dialog__inner-container">
                        <span className="load-stored-change-dialog__message">
                            {isCurrentPentagram 
                                ? t('pentagram.dialog.message.loadOrDiscard')
                                : t('pentagram.dialog.message.navigateOrDiscard')
                            }
                        </span>

                        <Button danger onClick={onClickAbortChanges}>
                            {t('pentagram.dialog.button.discardChanges')}
                        </Button>

                        {isCurrentPentagram &&
                            <Button success onClick={onClickPreserveChanges}>
                                {t('pentagram.dialog.button.loadChanges')}
                            </Button>
                        }

                        {!isCurrentPentagram &&
                            <Button info onClick={onClickNavigateRelated}>
                                {t('pentagram.dialog.button.navigateRelated')}
                            </Button>
                        }
                    </div>
                </Modal>
            }
        </>
    )

}
