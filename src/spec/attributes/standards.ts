import { Units } from '@musical-patterns/utilities'
import { StandardSpec, StandardSpecProperties } from '../types'
import { RangedInputType, SpecAttributes, SpecPropertyType } from './types'

const standardSpecAttributes: SpecAttributes<StandardSpec> = {
    [ StandardSpecProperties.DURATION_TRANSLATION ]: {
        description: 'translate each duration by this amount (does not preserve temporal ratios)',
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpecProperties.BASE_DURATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardSpecProperties.FREQUENCY_TRANSLATION ]: {
        description: 'translate each pitch by this amount (does not preserve harmonic ratios)',
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpecProperties.BASE_FREQUENCY ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardSpecProperties.BASE_POSITION ]: {
        description: 'where in your virtual space the pattern will be centered',
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        order: 1,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.METERS,
    },
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: {
        description: 'how far apart the voices will be placed',
        order: 2,
        specPropertyType: SpecPropertyType.RANGED,
        units: Units.METERS,
    },
}

export {
    standardSpecAttributes,
}
