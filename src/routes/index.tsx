import { useDispatch, useSelector } from "react-redux";
import { FileRoute } from "@tanstack/react-router";

import type { AppRootState } from "$lib/stores/store";

import { signOut } from "$lib/stores/authSlice";
import { rgba } from "$lib/utils/rgba";

import Button from "$lib/components/common/Button";

export const Route = new FileRoute('/').createRoute({
    component: Home
})

export default function Home() {
    const { user } = useSelector((state: AppRootState) => state.auth)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        // TODO 색상 변수 처리 및 전달 방법 필요
        <div style={{color: rgba(user?.preference)}}>
            {user?.preference?.join(',') || 'please sign in'}
            {user && <Button onClick={handleSignOut}>로그아웃</Button>}
        </div>
    )
}