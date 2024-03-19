import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from "../../../types";
import Revision from "./Revision";
import "./style/selectRvisionList.scss"

type SelectRevisionListProps = {
    pentagram_revisionsCollection: DBPentagram_SELECT["pentagram_revisionsCollection"],
    eventHandler?: PentagramEventHandler
    options: PentagramSelectOptions
}

export default function SelectRevisionList(props: SelectRevisionListProps) {
    const { pentagram_revisionsCollection, eventHandler, options } = props
    const revisionIdsSet = new Set(options.displayRevisionIds)

    const revisions = (options.displayRevisionIds?.length && pentagram_revisionsCollection)
        ? pentagram_revisionsCollection.edges.filter((edge) => revisionIdsSet.has(edge.node.id))
        : pentagram_revisionsCollection?.edges

    const items = revisions?.map((edge) => edge.node)

    return items && (
        <div className="select-revision-list-component">
            {items.map((item) => (
                <Revision 
                    key={item.id}
                    item={item}
                    eventHandler={eventHandler}
                />
            ))}
        </div>
    )
}
