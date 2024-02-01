import { useUserData } from "$feature/auth/hooks/useUserData";
import { useMemo } from "react";

export function useCheckFollowed(id: string) {
    const { followings } = useUserData()

    const followed = useMemo(()=> {
        return followings.has(id)
    }, [followings, id])

    return followed
}