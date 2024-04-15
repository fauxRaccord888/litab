/* hooks */
import { useTranslation } from 'react-i18next';
/* components */
import MetaDataNavigateModal from '$feature/metaData/components/modal/MetaDataNavigateModal';

export default function MetaData(props: { 
    handleClickClose: () => void; 
}) {
    const { t } = useTranslation();
    const { handleClickClose } = props

    const title = t("portal.modal.title.metaData");
    
    return (
        <MetaDataNavigateModal
            title={title}
            handleClickClose={handleClickClose}
        />
    )
}
