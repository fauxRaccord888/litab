/* type */
import type { SearchOeuvresQuery } from "$lib/graphql/__generated__/graphql";
import type { OperationVariables, QueryResult } from "@apollo/client";
/* hook */
import { useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
/* query */
import { searchOeuvres_QUERY } from "../graphql";

type Query = (keyword: string) => void
type Result = QueryResult<SearchOeuvresQuery, OperationVariables>

export function useOeuvresQuery(): [Query, Result] {
    const [query, queryResult] = useLazyQuery<SearchOeuvresQuery>(searchOeuvres_QUERY)

    const searchOeuvresHandler = useCallback((keyword: string) => {
        query({
            variables: { word: `%${keyword}%`}
        })
    }, [query]) 
    
    return [searchOeuvresHandler, queryResult]
}