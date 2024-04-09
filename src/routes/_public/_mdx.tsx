import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/_mdx')({
    component: () => <Outlet />
})