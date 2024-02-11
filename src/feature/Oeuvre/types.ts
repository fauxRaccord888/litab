import type { SearchOeuvresQuery } from '$lib/graphql/__generated__/graphql';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBOeuvre = FirstNodeOfCollection<SearchOeuvresQuery["oeuvresCollection"]>
