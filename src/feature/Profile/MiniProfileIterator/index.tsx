import type { DBProfiles } from "../types";

import MiniProfile from "../MiniProfile";
import ItemIterator from "$lib/components/common/ItemIterator";
import './style/miniProfileIterator.scss'

export default function MiniProfileIterator(props: {
    items: DBProfiles[]
}) {
    return (
        <div className="user-collection-iterator-container">
            <ItemIterator
                items={props.items}
                additionalProps={{interaction: true}}
                componentFunction={MiniProfile}
            />
        </div>
    )
}