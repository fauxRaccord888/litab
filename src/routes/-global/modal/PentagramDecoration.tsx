import { useState } from "react";
import { useRedirectOnError } from "$feature/navigate/hooks"
import { useInventoryItems } from "$feature/Inventory/hooks";
import { usePentagramDecorationMutation } from '$feature/Pentagram/hooks';
import DecorationModal from "$feature/Pentagram/components/Modal/DecorationModal";

export default function PentagramDecoration(props: {
    pentagramId: string;
    handleClickClose: () => void;
}) {
    const { pentagramId, handleClickClose } = props;
    const [keyword, setKeyword] = useState("")

    const {
        foregroundData,
        foregroundItems,
        foregroundError,
        backgroundData,
        backgroundItems,
        backgroundError,
        loadMore
    } = useInventoryItems(keyword)

    useRedirectOnError(Boolean(
        (backgroundData && !backgroundItems)
        || (foregroundData && !foregroundItems) 
        || backgroundError
        || foregroundError
    ))

    const {
        handleAddDecoration,
        handleRemoveDecoration
    } = usePentagramDecorationMutation()


    return (
        <DecorationModal
            title={""}
            pentagramId={pentagramId}
            foregroundItems={foregroundItems}
            backgroundItems={backgroundItems}
            handleClickClose={handleClickClose}
            handleAddDecoration={handleAddDecoration}
            handleRemoveDecoration={handleRemoveDecoration}
            setKeyword={setKeyword}
            handleSearch={loadMore}
        />
    );
}
