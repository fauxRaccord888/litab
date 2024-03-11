import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { IMergedNode } from "../../store/pentagramUpsertSlice/interface"
import { DuplicateError } from "../../error"

export const checkOeuvreUniqueOrThrow = (nodeEntities: Record<string, IMergedNode>, oeuvre: DBOeuvre) => {
    const isUnique = Object
        .values(nodeEntities)
        .every((node) => node.oeuvres.id !== oeuvre.id)

    if (!isUnique) throw new DuplicateError()
}