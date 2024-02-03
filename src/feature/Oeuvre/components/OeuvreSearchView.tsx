import type { DBOeuvre } from '../types';
import { useOeuvresQuery } from '../hooks';

import OeuvreInfo from './common/OeuvreInfo';
import SearchPanel from '$lib/components/common/SearchPanel';
import ItemIterator from '$lib/components/common/ItemIterator';

import "./style/oeuvreSearchView.scss"

export default function OeuvreSearchView() {
    const [searchOeuvres, {data}] = useOeuvresQuery()
    const items = data?.oeuvresCollection?.edges.map((edge):DBOeuvre => edge.node) || []

    // TODO navigate w/ query param
    return (
        <div className="oeuvre-search-view-container">
            <SearchPanel
                submitFunction={searchOeuvres}
            />
            <ItemIterator
                items={items}
                componentFunction={OeuvreInfo}                
            />
        </div>
    )
}