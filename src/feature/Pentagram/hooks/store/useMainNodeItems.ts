import type { DBPentagram, DBMainNodes } from "../../types" 
import { formatProps } from "$lib/utils"
import { useMemo } from "react"


export function useMainNodeItems(mainNodes: DBPentagram["item"]["pentagrams_oeuvresCollection"], selected?: number | null) {
    const mainNodeItems = useMemo(() => {
        const items:DBMainNodes[] = Array.from({length:  5})
            .map((_, index) => ({
                index,
                ...formatProps(null)
            }));

        mainNodes && mainNodes.edges.forEach((edge) => {
            items[edge.node.index].item = {
                ...edge.node,
                id: edge.node.oeuvres.id
            }
        })

        if (selected || selected === 0) items[selected].selected = true
        return items
    }, [mainNodes, selected])
        
    return mainNodeItems
}