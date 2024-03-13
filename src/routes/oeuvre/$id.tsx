/* route */
import OeuvreSearchView from "$feature/Oeuvre/components/OeuvreSearchView";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/oeuvre/$id')({
    component: Profile
})

function Profile() {
    return <ProfileComponent />
}

// TODO Profile.index에 추가
function ProfileComponent() {
    return (
        <div className="profile-container">
            <OeuvreSearchView 
                handleClickResult={() => {}}
                oeuvreInfoCardRenderConfig={{
                    coverImage: true,
                    title: true,
                    mainInfo: true,
                    subInfo: true
                }}
            />
            <Outlet />
        </div>
    )
}