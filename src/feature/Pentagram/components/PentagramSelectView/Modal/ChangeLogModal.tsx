import type { PentagramChangeProps } from "../../common/PentagramChange";
import Modal from "$feature/portal/components/Modal";
import ItemIterator from "$lib/components/common/ItemIterator";
import PentagramChange from "../../common/PentagramChange";
import './style/changeLogModal.scss'

type ChangeLogModalProps = {
    title: string,
    handleClickClose: () => void,
    changes: PentagramChangeProps[]
}

export default function ChangeLogModal(props: ChangeLogModalProps) {
    const { title, handleClickClose, changes } = props

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="change-log-modal-component__inner-cotainer">
                <ItemIterator
                    additionalProps={{}}
                    items={changes}
                    componentFunction={PentagramChange}
                />
            </div>
        </Modal>
    )
}