import { useTranslation } from 'react-i18next';
import Button from '$lib/components/common/Button';
import SubmarineIcon from '$lib/components/icons/Submarine';
import "./style/authGate.scss"

export default function AuthGate(props: {menuModal: () => void}) {
    const { menuModal } = props
    const { t } = useTranslation()

    return (
        <div className="auth-gate-component">
            <div className="auth-gate-component__inner-container">
                <div className="auth-gate-component__message-container">
                    <span className="auth-gate-component__message auth-gate-component__message--main">{t('navigate.authGate.mainMessage')}</span>
                    <span className="auth-gate-component__message auth-gate-component__message--sub">{t('navigate.authGate.subMessage')}</span>
                </div>
                <SubmarineIcon className="auth-gate-component__icon"/>
                <div className="auth-gate-component__account-button-container">
                    <Button primary onClick={menuModal}>{t('navigate.authGate.button')}</Button>
                </div>
            </div>
        </div>
    )
}