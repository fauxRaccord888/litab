import type { RouterContext, FormatProps } from "$lib/types/components"
import type { DBMiniProfile } from "../../types";

import Modal from "$feature/portal/components/Modal";
import ItemIterator from "$lib/components/common/ItemIterator";
import MiniProfile from '../MiniProfile';

import './style/miniProfileModal.scss'

type MiniProfileModalProps = {
    items: FormatProps<DBMiniProfile>[]
    title: string,
    context: RouterContext,
    handleClickClose: () => void
}

export default function MiniProfileModal(props: MiniProfileModalProps) {
    const { items, title, context, handleClickClose } = props
    return (
        <Modal title={title} handleClickClose={handleClickClose}>
            <div className="mini-profile-modal-component__inner-cotainer">
                <ItemIterator
                    items={items}
                    additionalProps={{
                        context,
                        displayFollow: true
                    }}
                    componentFunction={MiniProfile}
                />
            </div>
        </Modal>
    )
}
