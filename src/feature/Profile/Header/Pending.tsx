import PendingImage from "$lib/components/common/PendingImage";

export default function Pending() {
    return (
        <div className="profile-header-container">
            <div className="profile-image-container">
                <PendingImage className="rounded-full" />
            </div>
            <div className="account-info-container">
                <PendingImage className="h-50 w-50" />
            </div>
            <div className="profile-info-container">
                <PendingImage className="w-50" />
            </div>
        </div>
    )
}