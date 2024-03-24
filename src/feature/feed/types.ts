import type { FeedInfoFragment } from "$lib/graphql/__generated__/graphql";

export type FeedItems = FeedInfoFragment

export type FeedItemRenderConfig = "message" | "item"
export type FeedItemOptions = {
    "showMessage"?: boolean
}