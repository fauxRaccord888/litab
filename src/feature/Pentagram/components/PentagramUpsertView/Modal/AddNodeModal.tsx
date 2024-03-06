import type { DBOeuvre } from "$feature/Oeuvre/types";

import OeuvreSearchView from "$feature/Oeuvre/components/OeuvreSearchView";
import Modal from "$feature/portal/components/Modal";

import './style/addNodeModal.scss'

type AddNodeModalProps = {
    title: string,
    handleClickClose: () => void
    handleAddNode: (item: DBOeuvre) => void
}

export default function AddNodeModal(props: AddNodeModalProps) {
    const { title, handleClickClose, handleAddNode } = props

    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="add-node-modal-component__inner-cotainer">
                <OeuvreSearchView
                    oeuvreInfoCardRenderConfig={{
                        coverImage: true,
                        title: true,
                        mainInfo: true,
                        subInfo: false
                    }}
                    handleClickResult={handleAddNode}
                />
            </div>
        </Modal>
    )
}