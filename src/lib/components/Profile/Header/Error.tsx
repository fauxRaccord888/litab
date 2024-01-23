import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header"
import Main from "./Main"

const errorProfile = (errorMessage: string) =>  ({
    mutable_id: errorMessage,
    description: errorMessage,
    follower: null,
    following: null,
    id: null,
    nickname: null,
    posts: null,
    preference: null,
})

// TODO ERROR_MESSAGE CONSTANTS

export default function ErrorComponent(props: {error: unknown}) {
    const { error } = props
    let errorMessage = 'USER_NOT_FOUND'
    if (error instanceof Error) errorMessage = error.message

    const errorProps: IHeaderProfileProps = {
        profile: errorProfile(errorMessage),
        mutualFollower: [],
        action: {},
        settings: {lang: 'kr'}
    }
    
    return <Main {...errorProps}/>
}