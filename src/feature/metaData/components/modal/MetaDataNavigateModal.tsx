import type { MouseEvent } from "react";
import { useArtistNavigate, useGenreNavigate, useOeuvreNavigate } from "$feature/navigate/hooks";
import { useTranslation } from "react-i18next";
import Modal from "$feature/portal/components/Modal";
import Button from "$lib/components/common/Button";
import './style/metaDataNavigateModal.scss'

type MetaDataNavigateModalProps = {
    title: string,
    handleClickClose: () => void
}

export default function MetaDataNavigateModal(props: MetaDataNavigateModalProps) {
    const { title, handleClickClose } = props
    const oeuvreNavigate = useOeuvreNavigate()
    const artistNavigate = useArtistNavigate()
    const genreNavigate = useGenreNavigate()
    const { t } = useTranslation()
    
    const onClickHandler = (e: MouseEvent, func: () => void) => {
        e.preventDefault()
        func()
        handleClickClose()
    }

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="meta-data-navigate-modal-component__inner-cotainer">
                <Button
                    className="meta-data-navigate-modal-component__button"
                    onClick={(e) => {
                        onClickHandler(e, oeuvreNavigate.add)
                    }}
                >
                    {t("portal.modal.button.navigateToAddOeuvre")}
                </Button>
                <Button
                    className="meta-data-navigate-modal-component__button"
                    onClick={(e) => {
                        onClickHandler(e, artistNavigate.add)
                    }}
                >
                    {t("portal.modal.button.navigateToAddArtist")}
                </Button>
                <Button
                    className="meta-data-navigate-modal-component__button"
                    onClick={(e) => {
                        onClickHandler(e, genreNavigate.add)
                    }}
                >
                    {t("portal.modal.button.navigateToAddGenre")}
                </Button>
            </div>
        </Modal>
    )
}