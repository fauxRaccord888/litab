import type { GetPentagramSelectInfoByIdQuery, GetPentagramUpdateInfoByIdQuery, PentagramNodesInfoFragment, PentagramRevisionsInfoFragment } from "$lib/graphql/__generated__/graphql";
import type { FirstNodeOfCollection } from "$lib/types/graphql";

export type DBPentagram_SELECT = FirstNodeOfCollection<GetPentagramSelectInfoByIdQuery["pentagramsCollection"]>
export type DBPentagram_UPDATE = FirstNodeOfCollection<GetPentagramUpdateInfoByIdQuery["pentagramsCollection"]>

export type DBPentagramNodes = FirstNodeOfCollection<PentagramNodesInfoFragment>
export type DBPentagramRevisions = FirstNodeOfCollection<PentagramRevisionsInfoFragment>