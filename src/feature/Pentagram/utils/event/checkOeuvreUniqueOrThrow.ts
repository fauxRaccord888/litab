import type { DBOeuvre } from "$feature/Oeuvre/types"
import type { IMergedNode } from "../../store/pentagramUpsertSlice/interface"
import { DuplicateError } from "$lib/error/customError"

export const checkOeuvreUniqueOrThrow = (nodeEntities: Record<string, IMergedNode>, oeuvre: DBOeuvre) => {
    const isUnique = Object
        .values(nodeEntities)
        .every((node) => node.oeuvre.id !== oeuvre.id)

    if (!isUnique) throw new DuplicateError()
}