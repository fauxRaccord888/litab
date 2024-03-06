import type { IUnmergedChangeInfo, RecoverChange, RemoveChange, UpdateChange, UpsertChange } from "../store/pentagramUpsertSlice/interface"

type DummyChange = {
    change : { changeType: string }
}

export function filterChanges(changes: IUnmergedChangeInfo[]) {
    const upsertChanges = filter<IUnmergedChangeInfo<UpsertChange>>(changes, "upsert")
    const updateChanges = filter<IUnmergedChangeInfo<UpdateChange>>(changes, "update")
    const recoverChanges = filter<IUnmergedChangeInfo<RecoverChange>>(changes, "recover")
    const removeChanges = filter<IUnmergedChangeInfo<RemoveChange>>(changes, "remove")

    return {
        upsertChanges,
        updateChanges,
        recoverChanges,
        removeChanges
    }
}

function typeChecker<T extends IUnmergedChangeInfo>(item: T | DummyChange, key: T["change"]["changeType"]): item is T {
    return item["change"]["changeType"] === key
}

function filter<T extends IUnmergedChangeInfo>(
    changes: IUnmergedChangeInfo[],
    key: T["change"]["changeType"]
):T[] { 
    const result = changes.reduce((acc: T[], change) => {
        if (typeChecker<T>(change, key)) return acc.concat(change)
        return acc
    }, [])

    return result
}