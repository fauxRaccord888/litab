import type { IHeaderProfileProps } from "$lib/types/components/Profile/Header";
import type { PropsWithStatus } from "$lib/types/components";

import Error from "./Error";
import Pending from './Pending';
import Main from "./Main";

import "$lib/style/profile/header/index.scss";

export default function ProfileHeader(props: PropsWithStatus<IHeaderProfileProps>) {
    const { status } = props
    if (status === 'error') return <Error error={props.error}/>
    if (status === 'pending') return <Pending />
    return <Main {...props}/>
}