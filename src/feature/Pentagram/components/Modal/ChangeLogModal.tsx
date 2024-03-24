import type { TPentagramChange } from "../common/PentagramChange";
import Modal from "$feature/portal/components/Modal";
import PentagramChange from "../common/PentagramChange";
import './style/changeLogModal.scss'

type ChangeLogModalProps = {
    title: string,
    handleClickClose: () => void,
    changes: TPentagramChange[]
}

export default function ChangeLogModal(props: ChangeLogModalProps) {
    const { title, handleClickClose, changes } = props

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="change-log-modal-component__inner-cotainer">
                {changes.map((change) => (
                    <PentagramChange 
                        key={change.id}
                        item={change}
                    />
                ))}
            </div>
        </Modal>
    )
}