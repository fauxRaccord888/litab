/* routes */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/')({
    component: Home
})

export default function Home() {
    const { sessionUser } = Route.useRouteContext()
    return (
        <div>
            {sessionUser?.id || 'please sign in'}
        </div>
    )
}