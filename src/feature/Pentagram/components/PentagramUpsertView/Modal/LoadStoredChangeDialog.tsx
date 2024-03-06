import type { MouseEvent } from "react"
import type { AppRootState } from "$lib/stores/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { usePentagramNavigate } from "../../../hooks"
import { abortChanges, pendingChangeSelector, setPentagramId } from "$feature/Pentagram/store/pentagramUpsertSlice"
import Modal from "$feature/portal/components/Modal"
import Button from "$lib/components/common/Button"
import "./style/loadStoredChangeDialog.scss"

export default function LoadStoredChangeDialog(props: { pentagramId: string }) {
    const { pentagramId } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const description = useSelector((state: AppRootState) => state.pentagramUpsert.description)
    const storedPentagramId = useSelector((state: AppRootState) => state.pentagramUpsert.pentagramId)
    const changes = useSelector((state: AppRootState) => pendingChangeSelector.selectAll(state))
    const navigate = usePentagramNavigate()

    useEffect(() => {
        if (!changes.length && !description) {
            setLoaded(true)
            dispatch(setPentagramId(pentagramId))
        }
    }, [description, dispatch, changes, pentagramId])

    const isCurrentPentagram = Boolean(
        storedPentagramId === pentagramId || 
        (!pentagramId && !storedPentagramId)
    )

    const onClickAbortChanges = (e: MouseEvent) => {
        e.stopPropagation()
        dispatch(abortChanges())
        setLoaded(true)
        dispatch(setPentagramId(pentagramId))
    }
    
    const onClickPreserveChanges = (e: MouseEvent) => {
        e.stopPropagation()
        setLoaded(true)
        dispatch(setPentagramId(pentagramId))
    }

    const onClickNavigateRelated = (e: MouseEvent) => {
        e.stopPropagation()
        if (storedPentagramId) navigate.view(pentagramId)
        else navigate.create()
    }

    // TODO i18n
    return (
        <>
            {Boolean(!loaded && changes.length) &&
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
