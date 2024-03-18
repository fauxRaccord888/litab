import type { ArtistsInfoFragment, ArtistsMinimalInfoFragment } from '$lib/graphql/__generated__/graphql';

export type DBArtist = ArtistsInfoFragment
export type DBMiniArtist = ArtistsMinimalInfoFragment

export type ArtistEventHandler = {
    selectArtist?: (artistId: string) => void
}