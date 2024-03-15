export type ISlotItem = React.JSX.Element | string | undefined | null
export type ISlotComponent<K extends string> = Record<K, ISlotItem>
export type ISlotRenderConfig<K extends string> = Record<K, boolean>
export type ISlotOptions<K extends string, V extends (boolean | string)> = Record<K, V>