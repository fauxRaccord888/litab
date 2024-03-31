import type { OeuvresInfoFragment, OeuvresMinimalInfoFragment } from '$lib/graphql/__generated__/graphql';

export type DBOeuvre = OeuvresInfoFragment
export type DBMiniOeuvre = OeuvresMinimalInfoFragment

export type OeuvreEventHandler = {
    selectOeuvre?: (oeuvreId: string) => void,
    selectArtistTag?: (artistId: string) => void,
    selectGenreTag?: (genreId: string) => void 
}