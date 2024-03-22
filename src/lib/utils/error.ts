import type { ApolloError } from "@apollo/client"
import { CustomError } from "$lib/error";

export function isError(error: unknown): error is Error {
    return typeof error === 'object' && error !== null && 'message' in error
}

export function isCustomError(error: unknown): error is CustomError {
    return typeof error === 'object' && error !== null && '__isStorageError' in error
}

// COMMENT 아폴로 유틸 함수 폴리필
export function isApolloError(error: unknown): error is ApolloError {
    return typeof error === 'object' && error !== null && "graphQLErrors" in error;
}