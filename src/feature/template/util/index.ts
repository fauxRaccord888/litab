import type { ISlotComponent, ISlotRenderConfig } from "../type"

export function filterComponents<K extends string>(components: ISlotComponent<K>, options: ISlotRenderConfig<K>){
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
