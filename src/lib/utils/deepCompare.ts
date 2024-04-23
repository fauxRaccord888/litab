export function deepCompare(obj1: unknown, obj2: unknown) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    if (obj1 === null && obj2 === null) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!deepCompare(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    if (obj1 === null || obj2 === null) return false

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const [key, value] of Object.entries(obj1)) {
        try {
            hasKey(obj2, key)
            return deepCompare(value, obj2[key])
        } catch(e) {
            return false
        }
    }
    return true;
}

function hasKey<T extends object>(obj: T, key: string | number | symbol): asserts key is (keyof T) {
    if (!(key in obj)) throw new Error()
}

export function isProperKey<T extends object>(obj: T, key: string | number | symbol): key is (keyof T) {
    if (!(key in obj)) return false
    return true
}
