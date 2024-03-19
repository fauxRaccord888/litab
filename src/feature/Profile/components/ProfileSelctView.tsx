import type { ProcessedContext } from '$lib/types/components';
import type { DBProfiles, ProfileEventHandler } from "../types";
import type { PentagramEventHandler } from '$feature/Pentagram/types';

import { useTranslation } from 'react-i18next';
import { TIME } from '$feature/Pentagram/constants';

import SelectViewTemplate from '$feature/template/components/SelectViewTemplate';
import PentagramSelectView from '$feature/Pentagram/components/PentagramSelectView';
import FeedItem from '$feature/feed/components/FeedItem';
import ProfileInfoCard from './UserInfoCard';
import Tab from '$lib/components/common/Tab';

import "./style/profileSelectView.scss"

export default function ProfileSelectView(props: {
    item: DBProfiles
    context: ProcessedContext,
    eventHandler: ProfileEventHandler & PentagramEventHandler
}) {
    const { item, context, eventHandler } = props
    const { t } = useTranslation()

    const infoCardComponent = (
        <ProfileInfoCard 
            item={item} 
            renderConfig={{
                coverImage: true,
                title: true,
                mainInfo: true,
                subInfo: true,
            }}
            options={{
                roundedCover: true,
                miniView: false,
                displayFollow: true,
                displayInteraction: true,
            }}
            eventHandler={eventHandler}
            context={context}
        />
    )

    const tabComponent = (
        <Tab items={[
            {
                label: t("user.tab.pentagram"),
                items: item?.pentagramsCollection?.edges.map((edge) => (
                    <PentagramSelectView
                        item={edge.node}
                        renderConfig={{
                            metaInfo: true,
                            mainPentagon: true,
                            description: true,
                            revision: false
                        }}
                        eventHandler={eventHandler}
                        options={{
                            horizontalMain: true
                        }}
                        timestamp={new Date(Date.now() + TIME.NOW_OFFSET)}
                        context={context}
                    />
                )) || []
            },
            {
                label: t("user.tab.feed"),
                items: item?.pentagram_revisionsCollection?.edges.map((edge) => (
                    <FeedItem
                        item={edge.node}
                        renderConfig={{
                            item: true,
                            message: false,
                        }}
                        eventHandler={eventHandler}
                        context={context}
                    />
                )) || []
            }
        ]} />
    )

    return (
        <div className="profile-select-view-component">
            <SelectViewTemplate
                components={{
                    infoCard: infoCardComponent,
                    tab: tabComponent
                }}
            />
        </div>
    )
}