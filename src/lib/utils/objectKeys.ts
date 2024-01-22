// Improving OBJECT.KEYS in TypeScript - Advanced TypeScript by Matt Pocock
// https://www.youtube.com/watch?v=GW00zebIt0g
export const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[];
};