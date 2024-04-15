import type { UploadCoverPayload } from "$feature/Account/types"

export type UpdateMetaDataPayload = {
    title: string,
    description: string
}

export type OeuvreRelationPayload = {
    key: "genres" | "artists"
    oeuvreId: string,
    metaId: string
}

export type MetaDataFields<T=string> = {
    title: T,
    description: T
}

export type MetaDataUpdateEventHandler = {
    handleMutation?: (payload: FormData) => void,
    handleUploadCover?: (payload: UploadCoverPayload) => void
    handleCreateRelation?: (payload: OeuvreRelationPayload) => void
    handleDeleteRelation?: (payload: OeuvreRelationPayload) => void
}
