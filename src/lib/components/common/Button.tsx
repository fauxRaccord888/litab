import type { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";
import './style/button.scss'

interface ButtonStyle extends CSSProperties {
    '--bg-color'?: string
    '--font-color'?: string
}

interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>
    style?: ButtonStyle
    lg?: boolean
    icon?: boolean
    disabled?: boolean
    className?: string
}

export default function Button(props: ButtonProps) {
    const { children, icon, lg, disabled, className, ...restProps } = props
    return (
        <button 
            className={[
                'button',
                className,
                (icon ? 'icon' : ''),
                (lg ? 'lg' : ''),
                (disabled ? 'disabled' : '')
            ].join(' ')} 
            {...restProps}
        >
            {children}
        </button>
    )
}