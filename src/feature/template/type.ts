export type ISlotItem = React.JSX.Element | string | undefined | null
export type ISlotComponent<K extends string> = Record<K, ISlotItem>
export type ISlotOption<K extends string> = Record<K, (boolean | undefined)>
