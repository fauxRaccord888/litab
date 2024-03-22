export type AccountMenuModalEventHandler = {
    navigateToSignIn: () => void,
    navigateToRegister: () => void,
    navigateToProfile: (mutableId: string) => void,
    navigateToUpdateAccount: () => void,
    signOut: () => void
    closeModal: () => void
}

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