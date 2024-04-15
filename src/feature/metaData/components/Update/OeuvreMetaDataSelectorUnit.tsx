import type { OeuvreMetadataSelectorProps } from "./OeuvreMetadataSelector";
import type { DBArtist } from "$feature/Artist/types";
import type { DBGenre } from "$feature/Genre/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "$lib/components/common/Button";
import AddRelationModal from "../modal/AddRelationModal";
import "./style/oeuvreMetaDataSelectorUnit.scss"

export type OeuvreMetadataSelectorUnitProps = OeuvreMetadataSelectorProps & {
    entity: "artists" | "genres"
}

export default function OeuvreMetaDataSelectorUnit(props: OeuvreMetadataSelectorUnitProps) {
    const { record, entity, eventHandler } = props
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const collections = (
        entity === "artists" ? record?.oeuvres_artistsCollection
        : entity === "genres" ? record?.oeuvres_genresCollection
        : null
    )

    const handleAddRelation = (
        item: DBArtist | DBGenre
    ) => {
        if (eventHandler.handleCreateRelation && record && entity) {
            eventHandler.handleCreateRelation({
                key: entity,
                oeuvreId: record?.id,
                metaId: item.id
            });
            setIsOpen(false);
        }
    };

    const handleDeleteRelation = (
        item: DBArtist | DBGenre
    ) => {
        if (eventHandler.handleDeleteRelation && record && entity) {
            eventHandler.handleDeleteRelation({
                key: entity,
                oeuvreId: record?.id,
                metaId: item.id
            });
        }
    };

    return (
        <div key={entity} className="oeuvre-meta-data-selector-unit-component">
            <div className="oeuvre-meta-data-selector-unit-component__inner-container">
                <h3 className="oeuvre-meta-data-selector-unit-component__title">
                    {t(`metaData.oeuvres.title.${entity}Added`)}
                </h3>
                {collections?.edges.map((edge) => {
                    const item = edge?.__typename === "oeuvres_artistsEdge" ? edge.node.artists : edge.node.genres

                    return (
                        <div key={item.id} className="oeuvre-meta-data-selector-unit-component__meta-tag-container">
                            <span className="oeuvre-meta-data-selector-unit-component__meta-tag">
                                {item.name}
                            </span>
                            <span className="oeuvre-meta-data-selector-unit-component__divider"/>
                            <Button
                                className="oeuvre-meta-data-selector-unit-component__meta-tag-button--delete"
                                onClick={() => handleDeleteRelation(item)}    
                            >
                                {t('button.delete')}
                            </Button>
                        </div>
                    )
                })}
                    
                <Button 
                    className="oeuvre-meta-data-selector-unit-component__modal-button"
                    onClick={() => setIsOpen(true)}
                >
                    {t(`metaData.oeuvres.button.${entity}Modal`)}
                </Button>
            </div>
            
            {isOpen &&
                <AddRelationModal
                    title={t(`portal.modal.title.${entity}Relation`)}
                    type={entity} 
                    handleClickClose={() => setIsOpen(false)}
                    handleAddRelation={(item) => handleAddRelation(item)}
                />
            }
        </div>
    )
}
