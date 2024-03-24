import { AppRootState } from "$lib/stores/store";
import { useSelector, useStore } from "react-redux";
import { checkUserAndStore } from "../utils";

export function useCurrentUser() {
    const store = useStore<AppRootState>()
    const { sessionUser } = useSelector((state: AppRootState) => state.auth )
    
    if (!sessionUser) {
        checkUserAndStore(store)
    }

    return sessionUser
}