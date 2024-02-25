import type { DBOeuvre } from '../types';
import { useOeuvresQuery } from '../hooks';
import { formatProps } from '$lib/utils';

import OeuvreInfo from './common/OeuvreInfo';
import SearchPanel from '$lib/components/common/SearchPanel';
import ItemIterator from '$lib/components/common/ItemIterator';

import "./style/oeuvreSearchView.scss"

type OeuvreSearchViewProps = {
    handleClickResult: (item: DBOeuvre) => void
}

export default function OeuvreSearchView(props: OeuvreSearchViewProps) {
    const { handleClickResult } = props
    const [searchOeuvres, {data}] = useOeuvresQuery()
    const result = data?.oeuvresCollection?.edges.map((edge) => formatProps(edge.node)) || []

    // TODO navigate w/ query param
    return (
        <div className="oeuvre-search-view-container">
            <SearchPanel
                submitFunction={searchOeuvres}
            />
            <div className="result-container">
                <ItemIterator
                    items={result}
                    additionalProps={{
                        handleClickItem: handleClickResult
                    }}
                    componentFunction={OeuvreInfo}
                />
            </div>
        </div>
    )
}