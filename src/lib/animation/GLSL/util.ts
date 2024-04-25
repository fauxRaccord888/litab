import type { Vec2GLSL } from "./types";
import { mulVector2 } from "./base";
import type { NoiseFunction2D } from 'simplex-noise'

export function fbm(
    input: Vec2GLSL,
    noise: NoiseFunction2D,
    octave: number,
    st: number,
){
    let vec = input
    let value = 0;
    let scale = 0.5;

    for (let i = 0; i < octave; i++){
        value += (noise(vec[0], vec[1]) * 0.5 + 0.5) * scale ;
        vec = mulVector2(vec, st);
        scale *= 0.5;
    }
    return value;
}

