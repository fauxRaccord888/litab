import type { MouseEventHandler, PropsWithChildren } from "react";
import './style/button.scss'

interface ButtonProps extends PropsWithChildren {
    onClick?: MouseEventHandler<HTMLButtonElement>
    primary?: boolean,
    success?: boolean,
    info?: boolean,
    danger?: boolean,
    icon?: boolean
    disabled?: boolean
    className?: string
}

export default function Button(props: ButtonProps) {
    const { children, primary, danger, success, info, icon, disabled, className, ...restProps } = props
    return (
        <button 
            className={[
                'button-component',
                className,
                (primary ? 'primary' : ''),
                (danger ? 'danger' : ''),
                (success ? 'success' : ''),
                (info ? 'info' : ''),
                (icon ? 'icon' : ''),
                (disabled ? 'disabled' : '')
            ].join(' ')} 
            {...restProps}
        >
            {children}
        </button>
    )
}