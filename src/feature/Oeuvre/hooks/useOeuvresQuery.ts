/* type */
import type { SearchOeuvresQuery } from "$lib/graphql/__generated__/graphql";
/* hook */
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
/* query */
import { searchOeuvres_QUERY } from "../graphql";

export function useOeuvresQuery(): [typeof searchOeuvresHandler, typeof queryResult] {
    const [query, queryResult] = useLazyQuery<SearchOeuvresQuery>(searchOeuvres_QUERY)

    const searchOeuvresHandler = useCallback((keyword: string) => {
        query({
            variables: { word: `%${keyword}%`}
        })
    }, [query]) 
    
    return [searchOeuvresHandler, queryResult]
}