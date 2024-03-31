import type { DBOeuvre } from '../types';
import type { ISlotRenderConfig } from '$feature/template/type';
import type { InfoCardRenderConfigKey } from '$feature/template/components/InfoCardTemplate';
import { useState } from 'react';
import { useSearchQuery } from '$feature/search/hooks';
import { SEARCH } from '$feature/search/constants';

import OeuvreInfoCard from './common/OeuvreInfoCard';
import SearchPanel from '$lib/components/common/SearchPanel';
import InfiniteScrollTrigger from '$lib/components/common/InfiniteScrollTrigger';

import "./style/oeuvreSearchView.scss"

type OeuvreSearchViewProps = {
    handleClickResult: (item: DBOeuvre) => void
    oeuvreInfoCardRenderConfig: ISlotRenderConfig<InfoCardRenderConfigKey>
}

export default function OeuvreSearchView(props: OeuvreSearchViewProps) {
    const { handleClickResult, oeuvreInfoCardRenderConfig } = props
    const [keyword, setKeyword] = useState("")
    const [searchOeuvres, {data}] = useSearchQuery(keyword).oeuvres
    const items = data?.oeuvresCollection?.edges.map((edge) => edge.node) || []
    const hasNextPage = data?.oeuvresCollection?.pageInfo.hasNextPage

    const handleSearchOeuvres = (formData: FormData) => {
        setKeyword("")
        const formKeyword = formData.get(SEARCH.inputName)?.toString()
        if (!formKeyword) return
        setKeyword(formKeyword)
        searchOeuvres(formKeyword)
    }

    const handleFetchMore = () => {
        if (!keyword) return
        searchOeuvres(keyword, true)
    }

    const loader = (
        <InfiniteScrollTrigger 
            handleLoadMore={handleFetchMore}
            hasNextPage={hasNextPage}
        />
    )

    return (
        <div className="oeuvre-search-view-component">
            <SearchPanel
                submitFunction={handleSearchOeuvres}
            />
            <div className="oeuvre-search-view-component__result-container">
                {items.map((item) => (
                    <OeuvreInfoCard
                        key={item.id}
                        item={item}
                        renderConfig={oeuvreInfoCardRenderConfig}
                        eventHandler={{
                            selectOeuvre: () => handleClickResult(item)
                        }}
                        options={{
                            enableSelect: true
                        }}
                    />
                ))}
                {data?.oeuvresCollection?.edges.length !== 0 && loader}
            </div>
        </div>
    )
}