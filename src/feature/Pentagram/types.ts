import type { OeuvresCollectionsFragment, OeuvresInfoFragment, PentagramsNodesInfoFragment, SearchPentagramsQuery } from "$lib/graphql/__generated__/graphql";
import type { FirstNodeOfCollection } from "$lib/types/graphql";
import type { FormatProps } from "$lib/types/components";

export type DBPentagram = FormatProps<FirstNodeOfCollection<SearchPentagramsQuery["pentagramsCollection"]>>
export type DBMainNodes = FormatProps<(MainNode & NodeAdditionalProps) | null | undefined> & NodeCollectionAdditionalProps
export type DBSubNodes = FormatProps<(SubNode | SelectedSubNode) & NodeAdditionalProps> & NodeCollectionAdditionalProps

type MainNode = FirstNodeOfCollection<OeuvresCollectionsFragment>
type SubNode = FirstNodeOfCollection<PentagramsNodesInfoFragment>
type NodeAdditionalProps = { id?: string | undefined } 
type NodeCollectionAdditionalProps = { selected?: boolean, index?: number }

type SelectedSubNode = {
    id?: string,
    angle: number,
    distance: number
    oeuvres?: OeuvresInfoFragment
}