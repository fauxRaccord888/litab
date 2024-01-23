import type { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import '$lib/style/common/button.scss'

interface ButtonStyle extends CSSProperties {
    '--bg-color'?: string
    '--font-color'?: string
}

interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>
    style?: ButtonStyle
    lg?: boolean
    icon?: boolean
}

export default function Button(props: ButtonProps) {
    const { children, icon, lg, ...restProps } = props
    return (
        <button 
            className={[
                'button',
                (icon ? 'icon' : ''),
                (lg ? 'lg' : '')
            ].join(' ')} 
            {...restProps}
        >
            {children}
        </button>
    )
}