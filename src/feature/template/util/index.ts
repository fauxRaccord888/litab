import type { ISlotComponent, ISlotOption } from "../type"

export function filterComponents<K extends string>(components: ISlotComponent<K>, options: ISlotOption<K> | undefined){
    const filteredObject = {} as ISlotComponent<K>
    if (!options) return filteredObject

    const keys = Object.keys(options) as K[] 
    keys.forEach((key) => {
        if (!options[key]) return
        if (!components[key]) return
        filteredObject[key] = components[key]
    })

    return filteredObject;
}
