import type { DBPentagram_SELECT, PentagramEventHandler, PentagramSelectOptions } from "../../../types";
import Revision from "./Revision";
import "./style/selectRvisionList.scss"

type SelectRevisionListProps = {
    pentagramRevisionsCollection: DBPentagram_SELECT["pentagramRevisionsCollection"],
    eventHandler?: PentagramEventHandler
    options: PentagramSelectOptions
}

export default function SelectRevisionList(props: SelectRevisionListProps) {
    const { pentagramRevisionsCollection, eventHandler, options } = props
    const revisionIdsSet = new Set(options.displayRevisionIds)

    const revisions = (options.displayRevisionIds?.length && pentagramRevisionsCollection)
        ? pentagramRevisionsCollection.edges.filter((edge) => revisionIdsSet.has(edge.node.id))
        : pentagramRevisionsCollection?.edges

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
