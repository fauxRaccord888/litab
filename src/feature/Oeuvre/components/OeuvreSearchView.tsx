import type { DBOeuvre } from '../types';
import { useOeuvresQuery } from '../hooks';

import OeuvreInfo from './common/OeuvreInfo';
import SearchPanel from '$lib/components/common/SearchPanel';
import ItemIterator from '$lib/components/common/ItemIterator';

import { formatProps } from '$lib/utils';
import "./style/oeuvreSearchView.scss"

export default function OeuvreSearchView() {
    const [searchOeuvres, {data}] = useOeuvresQuery()
    const result :DBOeuvre[] = data?.oeuvresCollection?.edges.map((edge) => formatProps(edge.node)) || []

    // TODO navigate w/ query param
    return (
        <div className="oeuvre-search-view-container">
            <SearchPanel
                submitFunction={searchOeuvres}
            />
            <ItemIterator
                items={result}
                componentFunction={OeuvreInfo}                
            />
        </div>
    )
}