import type { DBPentagram, DBSubNodes } from "../../types" 
import { formatProps } from "$lib/utils"
import { useMemo } from "react"


export function useSubNodeItems(subNodes: DBPentagram["item"]["pentagrams_nodesCollection"], selectedOeuvreId?: string | null) {
    const subNodesItems= useMemo(() => {
        const items: DBSubNodes[] = subNodes?.edges.map((edge) => formatProps({
            ...edge.node,
            id: edge.node.oeuvres.id
        })) || []

        if (selectedOeuvreId) {
            const selectedNode = items.find((item) => item.item.oeuvres?.id === selectedOeuvreId)
            if (selectedNode) selectedNode.selected = true
        }
        
        return items
    }, [subNodes, selectedOeuvreId])
        
    return subNodesItems
}