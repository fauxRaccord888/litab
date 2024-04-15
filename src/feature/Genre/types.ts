import type { GenresInfoFragment, GenresMinimalInfoFragment } from '$lib/graphql/__generated__/graphql';

export type DBGenre = GenresInfoFragment
export type DBMiniGenre = GenresMinimalInfoFragment

export type GenreEventHandler = {
    selectGenre?: (genre: DBMiniGenre) => void
    updateGenre?: (genre: DBMiniGenre) => void
}
