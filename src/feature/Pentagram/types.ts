import type { ISlotRenderConfig } from "$feature/template/type";
import type { PentagramNodesInfoFragment, PentagramRevisionsMinimalInfoFragment, PentagramsSelectInfoFragment, PentagramsUpdateInfoFragment } from "$lib/graphql/__generated__/graphql";

export type DBPentagram_SELECT = PentagramsSelectInfoFragment
export type DBPentagram_UPDATE = PentagramsUpdateInfoFragment

export type DBPentagramNodes = PentagramNodesInfoFragment
export type DBPentagramRevisions = PentagramRevisionsMinimalInfoFragment

export type PentagramSelectRenderConfig = ISlotRenderConfig<"metaInfo" | "mainPentagon" | "description" | "revision">
export type PentagramSelectOptions = {
    horizontalMain?: boolean | null | undefined,
    displayRevisionIds?: string[] | null | undefined
}
export type PentagramEventHandler = {
    pentagramMenuModal?: (pentagramId: string) => void,
    nodeSelectModal?: (nodeId: string) => void,
    revisionSelectModal?: (revisionId: string) => void 
}