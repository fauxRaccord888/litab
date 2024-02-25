import type { MouseEventHandler, PropsWithChildren, CSSProperties } from "react";
import './style/button.scss'

interface ButtonCSSProperties extends CSSProperties {
    "--bg-color": number[],
    "--font-color": string
}

interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>
    style?: ButtonCSSProperties,
    primary?: boolean,
    danger?: boolean,
    lg?: boolean
    icon?: boolean
    disabled?: boolean
    className?: string
}

export default function Button(props: ButtonProps) {
    const { children, style, primary, danger, icon, lg, disabled, className, ...restProps } = props
    return (
        <button 
            style={style}
            className={[
                'button-container',
                className,
                (primary ? 'primary' : ''),
                (danger ? 'danger' : ''),
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