import type { PentagramRevisionFeedInfoFragment } from "$lib/graphql/__generated__/graphql";

export type FeedItems = PentagramRevisionFeedInfoFragment

export type FeedItemRenderConfig = "message" | "item"
export type FeedItemOptions = {
    "showMessage"?: boolean
}