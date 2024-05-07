import type { ConstantsWithRange } from "$lib/utils"
import type { ObjectKey } from "$lib/types";
import type { InventoryFields } from "../../../../types";
import type { DecorationType } from "$lib/graphql/__generated__/graphql";
import { useTranslation } from "react-i18next";
import { SeedFactory } from "../../../../function";
import { isProperKey, getScore } from "$lib/utils";
import ColorIndicator from "./ColorIndicator";
import FieldWithRange from "./FieldWithRange";
import "./style/inventoryField.scss"

type InventoryFieldProps<T extends InventoryFields> = {
    category: DecorationType
    entryKey: keyof T
    entryValue: T[keyof T]
    hydratedItem: ReturnType<typeof SeedFactory.getHydratedSeed>
    constant: Partial<Record<keyof T, ConstantsWithRange>> | undefined | null
}

export default function InventoryField<T extends InventoryFields>(props: InventoryFieldProps<T>) {
    const { category, entryKey, entryValue, hydratedItem, constant } = props;
    const { t } = useTranslation()
    const isColorField = checkColorField(entryKey)
    const percentile = getPercentile(entryKey, entryValue, constant)

    if (!hydratedItem) return null

    return (
        (isColorField || typeof percentile === 'number') && (
            <div className="inventory-field-component">
                <span className="inventory-field-component__label">
                    {t(`inventory.${category}.label.${String(entryKey)}`)}
                </span>
                {(isColorField && Array.isArray(entryValue)) && (
                    <div className="inventory-field-component__color-indicator-container">
                        {entryValue.map((c, idx) => (
                            <ColorIndicator key={idx} c={c} />
                        ))}
                    </div>
                )}
                {(isColorField && typeof entryValue === 'string') && (
                    <ColorIndicator c={entryValue} />
                )}
                {typeof percentile === 'number' && 
                    <FieldWithRange percentage={percentile} />
                }
            </div>
        )
    )
}

function checkColorField(k: ObjectKey) {
    if (
        typeof k === 'string' &&
        (k.includes('color') || k.includes('Color'))
    ) {
        return true
    }
    return null
}

function getPercentile<T>(
    k: keyof T, 
    v: T[keyof T], 
    constant: Partial<Record<keyof T, ConstantsWithRange>> | undefined | null
) {
    if (!constant) return null
    const range = constant[k]
    const isFieldWithRange = isProperKey(constant, k) && typeof v === 'number' && range

    if (isFieldWithRange)  {
        return getScore(v, range.min, range.max, range.skew)
    }
    return null
}