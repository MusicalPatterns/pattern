import { StandardSpec, StandardSpecProperties } from '../types'
import { SpecAttributesFor, SpecPropertyType } from './types'

const standardSpecAttributes: SpecAttributesFor<StandardSpec>  = {
    [ StandardSpecProperties.PATTERN_DURATION_OFFSET ]: {
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.PATTERN_PITCH_OFFSET ]: {
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
}

export {
    standardSpecAttributes,
}
