import type { RegisterPayload, SignInPayload } from "../../types";
import { useCallback } from "react";
import { useRegisterOnAuthMutation, useSignInOnAuthMutation } from "..";
import { PendingError } from "$lib/error";

export function useAuthMutationHandler() {
    const [registerMutation, registerResponse] = useRegisterOnAuthMutation() 
    const [signInMutation, signInResponse] = useSignInOnAuthMutation()

    const isPending = (registerResponse.loading || signInResponse.loading)

    const registerHandler = useCallback(async (
        payload: RegisterPayload,
    ) => {
        if (isPending) throw new PendingError()

        const response = await registerMutation(payload)
        if (response.error) {
            throw response.error
        }
        return response        
    }, [isPending, registerMutation])

    const signInHandler = useCallback(async (
        payload: SignInPayload,
    ) => {
        if (isPending) throw new PendingError()

        const response = await signInMutation(payload)
        if (response.error) {
            throw response.error
        }
        return response        
    }, [isPending, signInMutation])

    return { 
        register: [registerHandler, registerResponse] as [typeof registerHandler, typeof registerResponse], 
        signIn: [signInHandler, signInResponse] as [typeof signInHandler, typeof signInResponse],
    }
}