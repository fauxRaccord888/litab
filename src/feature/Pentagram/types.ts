import type { ISlotRenderConfig } from "$feature/template/type";
import type { PentagramNodesInfoFragment, PentagramRevisionsMinimalInfoFragment, PentagramsSelectInfoFragment, PentagramsUpdateInfoFragment } from "$lib/graphql/__generated__/graphql";

export type DBPentagram_SELECT = PentagramsSelectInfoFragment
export type DBPentagram_UPDATE = PentagramsUpdateInfoFragment

export type DBPentagramNodes = PentagramNodesInfoFragment
export type DBPentagramRevisions = PentagramRevisionsMinimalInfoFragment

export type PentagramSelectRenderConfig = ISlotRenderConfig<"metaInfo" | "mainPentagon" | "description" | "revision" | "player">
export type PentagramSelectOptions = {
    displayRevisionIds?: string[] | null | undefined,
    enableAnimation?: boolean
}

export type PentagramEventHandler = {
    pentagramMenuModal?: (pentagramId: string) => void,
    nodeSelectModal?: (nodeId: string) => void,
    revisionSelectModal?: (revisionId: string) => void,
}

export type PentagramPlayerEventHandler = {
    setTimestamp?: (date: Date) => void
    playPentagram?: (interval?: number) => void
}

export type PentagramNodePosition = {
    angle: number | null | undefined;
    distance: number | null | undefined;
    deleted: boolean | null | undefined;
}