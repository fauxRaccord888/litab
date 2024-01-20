import { MouseEventHandler, PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<{onClick: MouseEventHandler<HTMLButtonElement>}>) {
    const { children, ...restProps } = props
    return (
        <button {...restProps}>
            {children}
        </button>
    )
}