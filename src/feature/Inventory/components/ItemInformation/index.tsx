import type { DBDecoration, InventoryEventHandler } from "../../types";
import type { CustomCanvasCSSProps } from "$lib/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SeedFactory } from "$feature/Inventory/function/factory";
import Button from "$lib/components/common/Button";
import InventoryModal from "./InventoryModal";
import DecorationCanvas from "$feature/PentagramDecoration/common/components/DecorationCanvas";
import InventoryInformationField from "./InventoryInformationField";

import "./style/inventoryInformation.scss"

type InventoryInformationProps= {
    item: DBDecoration
    eventHandler: InventoryEventHandler,
    disableModal?: boolean,
    canvasSize: number
}

export default function InventoryInformation(props: InventoryInformationProps) {
    const { item, eventHandler, canvasSize, disableModal } = props
    const [shadowModal, setShadowModal] = useState(false)
    const { t } = useTranslation()

    const hydratedItem = SeedFactory.getHydratedSeed(item)
    const constant = SeedFactory.getConstant(item.type)
    const entries = Object.entries(hydratedItem || {})
    const style: CustomCanvasCSSProps = { "--canvas-size": canvasSize }

    return (
        <>
            {(!disableModal && shadowModal) &&
                <InventoryModal 
                    item={item}
                    eventHandler={eventHandler}
                    handleClickClose={() => setShadowModal(false)}
                />
            }
            <div className="inventory-information-component">
                <div className="inventory-information-component__inner-container">
                    <div className="inventory-information-component__title-container">
                        <span className="inventory-information-component__name">
                            {item.name}
                        </span>
                        {!disableModal &&
                            <Button 
                                className="inventory-information-component__button--update-modal" 
                                onClick={() => setShadowModal(true)}
                            >
                                {t('inventory.shadow.button.updateShadow')}
                            </Button>
                        }
                    </div>
        
                    <div className="inventory-information-component__body-container">
                        <div style={style} className="inventory-information-component__canvas-container">
                            <DecorationCanvas
                                foregroundSeeds={[item]}
                                sides={4}
                                canvasSize={canvasSize}
                            />
                        </div>
                        <div className="inventory-information-component__fields-container">
                            {
                                entries.map(([k, v]) => (
                                    <InventoryInformationField 
                                        key={k}
                                        category={item.type}
                                        entryKey={k}
                                        entryValue={v}
                                        constant={constant}
                                        hydratedItem={hydratedItem}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}