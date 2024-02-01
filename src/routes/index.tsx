/* routes */
import { createFileRoute } from "@tanstack/react-router";
/* hooks */
import { useUserData } from "$feature/auth/hooks/useUserData";

export const Route = createFileRoute('/')({
    component: Home
})

export default function Home() {
    const { user } = useUserData()
    return (
        <div>
            {user?.id || 'please sign in'}
        </div>
    )
}