import { useTranslation } from 'react-i18next'
import HomeIcon from '$lib/components/icons/HomeIcon'
import SearchIcon from '$lib/components/icons/SearchIcon'
import UserIcon from '$lib/components/icons/UserIcon'
import PentagonIcon from '$lib/components/icons/PentagonIcon'
import PlusIcon from '$lib/components/icons/PlusIcon'

import { Link } from '@tanstack/react-router'

import "./style/navigationBar.scss"
export default function NavigationBar() {
    const { t } = useTranslation()
    return (
        <div className="navigation-bar-component">
            <Link to="/home" className="navigation-bar-component__link-container">
                <HomeIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.home")}
                </span>
            </Link>

            <Link to="/search" className="navigation-bar-component__link-container">
                <SearchIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.search")}
                </span>
            </Link>

            <Link to="/account/menu" className="navigation-bar-component__link-container">
                <UserIcon />
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.account")}
                </span>
            </Link>

            <Link to="/pentagram/create" className="navigation-bar-component__link-container">
                <div className="pentagram-icon-place-holder">
                    <PentagonIcon />
                    <PlusIcon />
                </div>
                <span className="navigation-bar-component__link-description">
                    {t("navigate.route.pentagram")}
                </span>
            </Link>
        </div>
    )
}
