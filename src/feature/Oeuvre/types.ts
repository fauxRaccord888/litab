import type { SearchOeuvresQuery } from '$lib/graphql/__generated__/graphql';
import type { FormatProps, Nullable } from '$lib/types/components';
import type { FirstNodeOfCollection } from '$lib/types/graphql';

export type DBOeuvre = FormatProps<FirstNodeOfCollection<SearchOeuvresQuery["oeuvresCollection"]>>
export type SelectableDBOeuvre = Nullable<DBOeuvre> & { selected? : boolean}