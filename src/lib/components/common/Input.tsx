import { useTranslation } from "react-i18next"
import "./style/input.scss"

export interface InputMinimalProps<K extends string> {
    label: K,
    iconFunction: () => JSX.Element
    type?: "password"
    invalid?: boolean,
}

export type InputProps<K extends string> = InputMinimalProps<K> & {
    onChange: (value: string) => void,
    value: string,
    className?: string,
    regex?: string
}

export default function Input<K extends string>(props: InputProps<K>) {
    const { t } = useTranslation()
    const { value, label, className, onChange, regex, invalid, type, iconFunction } = props
    const placeholder = t(`form.${label}.label`)

    return (
        <div className={[
            "input-component",
            className ? className : "",
        ].join(" ")}>
            <div className="input-component__icon">
                {iconFunction()}
            </div>
            <input
                className="input-component__input"
                name={label}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
            {regex &&
                <span className={[
                    "input-component__indicator",
                    invalid ? "input-component__indicator--invalid" : "input-component__indicator--valid"
                ].join(" ")}>
                    {invalid ? "!" : "✔"}
                </span>
            }
        </div>
    )
}