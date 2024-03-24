import { useTranslation } from "react-i18next"
import "./style/dropdown.scss"

export type DropdownProps = {
    name: string
    keys: readonly string[]
}

export default function Dropdown(props: DropdownProps) {
    const { name, keys } = props
    const { t } = useTranslation()
    return (
        <select className="dropdown-component" name={name}>
            {keys.map((key) => (
                <option key={key} value={key}>
                    {t(`form.dropdown.${key}`)}
                </option>
            ))}
        </select>
    )
}