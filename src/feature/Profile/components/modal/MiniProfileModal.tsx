import type { DBMiniProfile } from "../../types";

import Modal from "$feature/portal/components/Modal";
import MiniProfile from '../MiniProfile';

import './style/miniProfileModal.scss'

type MiniProfileModalProps = {
    items: DBMiniProfile[]
    title: string,
    handleClickClose: () => void
}

export default function MiniProfileModal(props: MiniProfileModalProps) {
    const { items, title, handleClickClose } = props
    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="mini-profile-modal-component__inner-cotainer">
                {items.map((item) => (
                    <MiniProfile 
                        key={item.id}
                        item={item}
                        options={{
                            displayFollow: true,
                            enableSelect: true
                        }}
                    />
                ))}
            </div>
        </Modal>
    )
}
