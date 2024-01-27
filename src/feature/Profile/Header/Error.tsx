import type { DBProfiles, IHeaderProfileProps } from "$feature/Profile/types"
import Main from "./Main"

const errorProfile = (errorMessage: string): DBProfiles =>  ({
    __typename: 'users',
    mutable_id: errorMessage,
    description: errorMessage,
    id: '',
    followers: null,
    followings: null,
    nickname: null,
    posts: null,
    preference: null,
})

// TODO ERROR_MESSAGE CONSTANTS

export default function ErrorComponent(props: {error: unknown}) {
    const { error } = props
    let errorMessage = 'USER_NOT_FOUND'
    if (error instanceof Error) errorMessage = error.message
    const profile = errorProfile(errorMessage)

    const errorProps: IHeaderProfileProps = {
        profile,
        id: profile.id,
        mutualFollowers: [],
        action: {},
    }
    
    return <Main {...errorProps}/>
}