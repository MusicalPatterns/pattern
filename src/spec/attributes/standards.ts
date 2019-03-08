import { Units } from '@musical-patterns/utilities'
import { StandardProperties, StandardSpec } from '../types'
import { Attributes, PropertyType, RangedInputType } from './types'

const standardAttributes: Attributes<StandardSpec> = {
    [ StandardProperties.DURATION_TRANSLATION ]: {
        description: 'translate each duration by this amount (does not preserve temporal ratios)',
        propertyType: PropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardProperties.BASE_DURATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        propertyType: PropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardProperties.FREQUENCY_TRANSLATION ]: {
        description: 'translate each pitch by this amount (does not preserve harmonic ratios)',
        propertyType: PropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardProperties.BASE_FREQUENCY ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        propertyType: PropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardProperties.BASE_POSITION ]: {
        description: 'where in your virtual space the pattern will be centered',
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        order: 1,
        propertyType: PropertyType.RANGED,
        units: Units.METERS,
    },
    [ StandardProperties.BASE_POSITION_SCALAR ]: {
        description: 'how far apart the voices will be placed',
        order: 2,
        propertyType: PropertyType.RANGED,
        units: Units.METERS,
    },
}

export {
    standardAttributes,
}
