import type { MouseEvent } from "react"
import type { AppRootState } from "$lib/stores/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { usePentagramNavigate } from "$feature/navigate/hooks"
import { abortChanges, pendingChangeSelector, setPentagramId } from "$feature/Pentagram/store/pentagramUpsertSlice"
import Modal from "$feature/portal/components/Modal"
import Button from "$lib/components/common/Button"
import "./style/loadStoredChangeDialog.scss"

export default function LoadStoredChangeDialog(props: { 
    pentagramId: string | null, 
}) {
    const { pentagramId } = props
    const { t } = useTranslation()
    const [initiated, setInitiated] = useState(false) 
    const dispatch = useDispatch()

    const storedPentagramId = useSelector((state: AppRootState) => state.pentagramUpsert.pentagramId)
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectAll(state))
    const pentagramNavigate = usePentagramNavigate()

    const storedChangesExist = Boolean(changes.length)

    const isCurrentPentagram = Boolean(
        storedPentagramId === pentagramId || 
        (!pentagramId && !storedPentagramId)
    )

    useEffect(() => {
        if (!storedChangesExist && !initiated) {
            setInitiated(true)
            dispatch(setPentagramId(pentagramId))
        }
    }, [dispatch, initiated, pentagramId, setInitiated, storedChangesExist])
    
    const onClickAbortChanges = (e: MouseEvent) => {
        e.stopPropagation()
        dispatch(abortChanges())
        dispatch(setPentagramId(pentagramId))
        setInitiated(true)
    }
    
    const onClickPreserveChanges = (e: MouseEvent) => {
        e.stopPropagation()
        setInitiated(true)
    }

    const onClickNavigateRelated = (e: MouseEvent) => {
        e.stopPropagation()
        if (storedPentagramId) pentagramNavigate.select(storedPentagramId)
        else pentagramNavigate.create()
    }

    return (
        <>
            {!initiated &&
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
