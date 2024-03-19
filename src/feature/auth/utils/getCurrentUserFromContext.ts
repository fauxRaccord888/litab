import type { UnprocessedContext } from "$lib/types/components";
import { getFirstNodeOfCollection } from "$lib/utils/graphql";

export function getCurrentUserFromContext(context: UnprocessedContext) {
    const userObservable = context.userObservable;
    if (!userObservable) return null;

    const { data } = userObservable.getCurrentResult();
    const userData = getFirstNodeOfCollection(data?.usersCollection);

    return userData;
}
