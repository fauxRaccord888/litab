import { supabase } from './client'

interface userRegisterRequestPayload {
    public_id: string,
    nickname: string,
    email: string,
    password: string,
}

export const requestUserRegistration_SERVER = async (payload: userRegisterRequestPayload) => {
    const { error } = await supabase
        .from('users')
        .insert(payload)

    if (error) {
        throw error
    }
}