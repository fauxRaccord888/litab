/* routes */
import { createFileRoute } from "@tanstack/react-router";
/* hooks */
import { useSelector } from "react-redux";
import { useSignOutHandler } from "$lib/hooks/mutation";
/* types */
import type { AppRootState } from "$lib/stores/store";
/* components */
import Button from "$lib/components/common/Button";

export const Route = createFileRoute('/')({
    component: Home
})

export default function Home() {
    const { user } = useSelector((state: AppRootState) => state.auth)
    const handleSignOut = useSignOutHandler()

    return (
        <div>
            {user?.id || 'please sign in'}
            {user && <Button onClick={handleSignOut}>로그아웃</Button>}
        </div>
    )
}