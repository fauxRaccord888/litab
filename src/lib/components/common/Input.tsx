import { useTranslation } from "react-i18next"
import "./style/input.scss"

export interface InputProps<K extends string> {
    label: K,
    icon: () => JSX.Element
    type?: "password"
    invalid?: boolean,
}

export type PropsWithValueAction<K extends string> = InputProps<K> & {
    onChange: (value: string) => void,
    value: string,
}

export default function Input<K extends string>(props: PropsWithValueAction<K>) {
    const { t } = useTranslation()
    const { value, label, onChange, invalid, type, icon } = props
    const placeholder = t(`form.${label}.label`)

    return (
        <div className={`input-with-icon-container ${invalid ? 'invalid' : ''}`}>
            <div className="icon">
                {icon()}
            </div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </div>
    )
}