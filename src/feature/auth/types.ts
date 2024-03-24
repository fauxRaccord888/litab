import type { AuthInfoFragment } from "$lib/graphql/__generated__/graphql";

export type DBAuthUser = AuthInfoFragment

export type RegisterPayload = {
    email: string,
    password: string,
}

export type SignInPayload = {
    email: string,
    password: string,
}