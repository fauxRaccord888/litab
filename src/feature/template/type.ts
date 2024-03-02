export type ISlotItem = React.JSX.Element | string | undefined | null
export type ISlotComponent<K extends string> = Record<K, ISlotItem>
export type ISlotRenderConfig<K extends string, V=boolean> = Record<K, V>