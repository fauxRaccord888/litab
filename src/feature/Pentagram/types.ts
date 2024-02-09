import type { SearchPentagramsQuery } from "$lib/graphql/__generated__/graphql";
import type { FirstNodeOfCollection } from "$lib/types/graphql";

export type DBPentagram = FirstNodeOfCollection<SearchPentagramsQuery["pentagramsCollection"]>
export type DBOeuvresCollection = DBPentagram["pentagrams_oeuvresCollection"]
export type DBPentagramsNodesCollection = DBPentagram["pentagrams_nodesCollection"]
export type DBPentagramsNodes = FirstNodeOfCollection<DBPentagramsNodesCollection>