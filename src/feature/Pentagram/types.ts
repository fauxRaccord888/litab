import type { GetPentagramByIdQuery, OeuvresCollectionsFragment, PentagramsNodesInfoFragment } from "$lib/graphql/__generated__/graphql";
import type { FirstNodeOfCollection } from "$lib/types/graphql";

export type DBPentagram = FirstNodeOfCollection<GetPentagramByIdQuery["pentagramsCollection"]>

export type DBMainNodes = FirstNodeOfCollection<OeuvresCollectionsFragment>
export type DBSubNodes = FirstNodeOfCollection<PentagramsNodesInfoFragment>