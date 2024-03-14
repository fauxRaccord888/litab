import type { DBPentagram_SELECT } from "../../../types";
import Revision from "./Revision";
import "./style/selectRvisionList.scss"

type SelectRevisionListProps = {
    pentagram_revisionsCollection: DBPentagram_SELECT["pentagram_revisionsCollection"],
    handleClickRevision?: (id: string) => void
    displayRevisionIds: string[] | null | undefined
}

export default function SelectRevisionList(props: SelectRevisionListProps) {
    const { pentagram_revisionsCollection, handleClickRevision, displayRevisionIds } = props
    const revisionIdsSet = new Set(displayRevisionIds)

    const revisions = (displayRevisionIds?.length && pentagram_revisionsCollection)
        ? pentagram_revisionsCollection.edges.filter((edge) => revisionIdsSet.has(edge.node.id))
        : pentagram_revisionsCollection?.edges

    const items = revisions?.map((edge) => edge.node)

    return items && (
        <div className="select-revision-list-component">
            {items.map((item) => (
                <Revision 
                    key={item.id}
                    item={item}
                    handleClickRevision={handleClickRevision}
                />
            ))}
        </div>
    )
}
