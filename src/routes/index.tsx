/* routes */
import { FileRoute } from "@tanstack/react-router";
/* hooks */
import { useSelector } from "react-redux";
import { useSignOutHandler } from "$lib/hooks/mutation";
/* types */
import type { AppRootState } from "$lib/stores/store";
/* components */
import Button from "$lib/components/common/Button";
/* utils */
import { rgba } from "$lib/utils/rgba";

export const Route = new FileRoute('/').createRoute({
    component: Home
})

export default function Home() {
    const { user } = useSelector((state: AppRootState) => state.auth)
    const handleSignOut = useSignOutHandler()

    return (
        // TODO 색상 변수 처리 및 전달 방법 필요
        <div style={{color: rgba(user?.preference)}}>
            {user?.preference?.join(',') || 'please sign in'}
            {user && <Button onClick={handleSignOut}>로그아웃</Button>}
        </div>
    )
}