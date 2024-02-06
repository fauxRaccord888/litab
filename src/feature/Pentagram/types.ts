import type { OeuvresCollectionsFragment, SearchPentagramsQuery } from "$lib/graphql/__generated__/graphql";
import type { FirstNodeOfCollection } from "$lib/types/graphql";

export type DBPentagram = FirstNodeOfCollection<SearchPentagramsQuery["pentagramsCollection"]>
export type DBOeuvresCollection = OeuvresCollectionsFragment