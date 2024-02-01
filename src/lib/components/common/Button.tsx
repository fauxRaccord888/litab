import type { MouseEventHandler, PropsWithChildren } from "react";
import './style/button.scss'

interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>
    primary?: boolean,
    danger?: boolean,
    lg?: boolean
    icon?: boolean
    disabled?: boolean
    className?: string
}

export default function Button(props: ButtonProps) {
    const { children, primary, danger, icon, lg, disabled, className, ...restProps } = props
    return (
        <button 
            className={[
                'button',
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