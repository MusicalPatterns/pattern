import { StandardSpec, StandardSpecProperties } from '../types'
import { SpecAttributesFor, SpecPropertyType } from './types'

const standardSpecAttributes: SpecAttributesFor<StandardSpec>  = {
    [ StandardSpecProperties.DURATION_OFFSET ]: {
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.BASE_DURATION ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: {
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ StandardSpecProperties.BASE_FREQUENCY ]: {
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
