import { useTranslation } from 'react-i18next'
import { useAccountNavigate, usePentagramNavigate, useUtilNavigate } from '../hooks'
import HomeIcon from '$lib/components/icons/HomeIcon'
import SearchIcon from '$lib/components/icons/SearchIcon'
import UserIcon from '$lib/components/icons/UserIcon'
import PentagonIcon from '$lib/components/icons/PentagonIcon'
import PlusIcon from '$lib/components/icons/PlusIcon'

import "./style/navigationBar.scss"

export default function NavigationBar() {
    const { t } = useTranslation()
    const utilNavigate = useUtilNavigate()
    const accountNavigate = useAccountNavigate()
    const pentagramNavigate = usePentagramNavigate()
    return (
        <div className="navigation-bar-component">
            <a onClick={utilNavigate.home} className="navigation-bar-component__link-container">
                <HomeIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.home")}
                </span>
            </a>

            <a onClick={utilNavigate.search} className="navigation-bar-component__link-container">
                <SearchIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.search")}
                </span>
            </a>

            <a onClick={() => accountNavigate.accountMenuModal()} className="navigation-bar-component__link-container">
                <UserIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.account")}
                </span>
            </a>

            <a onClick={pentagramNavigate.create} className="navigation-bar-component__link-container">
                <div className="pentagram-icon-place-holder">
                    <PentagonIcon />
                    <PlusIcon />
                </div>
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.pentagram")}
                </span>
            </a>
        </div>
    )
}
