import { createFileRoute } from '@tanstack/react-router'

// TODO ERROR PAGE NOT FOUND
export const Route = createFileRoute('/error')({
    component: () => <div>Hello /error!</div>
})