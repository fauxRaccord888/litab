import { createRandomizedObject, boxMullerRandom } from "$lib/utils";
import { t } from "i18next"
import { BOIDS } from "../constants";

export function createBoids() {
    const randomColorVal = () => Math.floor(boxMullerRandom(0, 255, 0.3))

    const obj = createRandomizedObject(BOIDS)
    const result = Object.assign({
        name: t('pentagramDecoration.boids.value.newRecord'),
        color: [randomColorVal(), randomColorVal(), randomColorVal()] as [number, number, number]
    }, obj)

    return result
}