type IAccountModalEventHandler = {
    navigateToSignIn: () => void,
    navigateToRegister: () => void,
    closeModal: () => void
}

export type AccountMenuModalEventHandler = IAccountModalEventHandler & {
    navigateToProfile: (mutableId: string) => void,
    navigateToUpdateAccount: () => void,
    navigateToInventory: () => void
    signOut: () => void
}

export type GuestMenuModalEventHandler = IAccountModalEventHandler 

export type UpdateProfilePayload = {
    mutableId: string,
    nickname: string,
    description: string,
}

export type UpdateAuthPayload = {
    newPassword: string,
}

export type UploadCoverPayload = {
    file: File
}