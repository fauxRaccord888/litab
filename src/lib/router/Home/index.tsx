import { AppRootState } from "$lib/stores/store";
import { useSelector } from "react-redux";

export default function Index() {
    const { user } = useSelector((state: AppRootState) => state.auth)
    return (
        <>
            {user?.user_metadata.display_name || 'please sign in'}
        </>
    )
}