import type { DBPentagram_SELECT } from "../../../types";
import { formatProps } from '$lib/utils/formatProps';
import ItemIterator from '$lib/components/common/ItemIterator';
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

    return revisions && (
        <div className="select-revision-list-component">
            <ItemIterator 
                additionalProps={{
                    handleClickRevision
                }}
                items={revisions.map((edge) => formatProps(edge.node))}
                componentFunction={Revision}
            />
        </div>
    )
}
