import { argon2id, argon2Verify } from 'hash-wasm'

export const getHashed = async (plain: string) => {
    const salt = new Uint8Array(16);
    window.crypto.getRandomValues(salt);
    
    try {
        const hashed = await argon2id({
            salt,
            password: plain,
            parallelism: 1,
            iterations: 256,
            memorySize: 512,
            hashLength: 32,
            outputType: 'encoded',
        })
        return hashed
    } catch (e) {
        throw new Error()
    }
}

export const getVerify = async (hash: string, password: string) => {
    try {
        const result = await argon2Verify({
            hash, 
            password
        })
        return result
    } catch(e) {
        throw new Error()
    }
}