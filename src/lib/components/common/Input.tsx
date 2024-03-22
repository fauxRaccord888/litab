import { useTranslation } from "react-i18next"
import "./style/input.scss"

export interface InputMinimalProps<K extends string> {
    label: K,
    icon: () => JSX.Element
    type?: "password"
    invalid?: boolean,
}

export type InputProps<K extends string> = InputMinimalProps<K> & {
    onChange: (value: string) => void,
    value: string,
}

export default function Input<K extends string>(props: InputProps<K>) {
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