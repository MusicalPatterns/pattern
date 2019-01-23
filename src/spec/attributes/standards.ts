import { Units } from '@musical-patterns/utilities'
import { StandardSpec, StandardSpecProperties } from '../types'
import { SpecAttributesFor, SpecPropertyType } from './types'

const standardSpecAttributes: SpecAttributesFor<StandardSpec>  = {
    [ StandardSpecProperties.DURATION_OFFSET ]: {
        description: 'flatly offset each duration by this amount (does not preserve temporal ratios)',
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
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: {
        description: 'flatly offset each pitch by this amount (does not preserve harmonic ratios)',
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
}

export {
    standardSpecAttributes,
}
