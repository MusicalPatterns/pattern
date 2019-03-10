import { Units } from '@musical-patterns/utilities'
import { StandardProperty, StandardSpec } from '../types'
import { Attributes, PropertyType, RangedInputType } from './types'

const standardAttributes: Attributes<StandardSpec> = {
    [ StandardProperty.DURATION_TRANSLATION ]: {
        description: 'translate each duration by this amount (does not preserve temporal ratios)',
        propertyType: PropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardProperty.BASE_DURATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        propertyType: PropertyType.RANGED,
        units: Units.MILLISECONDS,
    },
    [ StandardProperty.FREQUENCY_TRANSLATION ]: {
        description: 'translate each pitch by this amount (does not preserve harmonic ratios)',
        propertyType: PropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardProperty.BASE_FREQUENCY ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        propertyType: PropertyType.RANGED,
        units: Units.HERTZ,
    },
    [ StandardProperty.BASE_POSITION ]: {
        description: 'where in your virtual space the pattern will be centered',
        hideInput: RangedInputType.RANGE,
        isArrayed: true,
        order: 1,
        propertyType: PropertyType.RANGED,
        units: Units.METERS,
    },
    [ StandardProperty.BASE_POSITION_SCALAR ]: {
        description: 'how far away the sounds will come from',
        order: 2,
        propertyType: PropertyType.RANGED,
        units: Units.METERS,
    },
}

export {
    standardAttributes,
}
