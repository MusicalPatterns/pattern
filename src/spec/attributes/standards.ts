import { StandardPatternSpecProperties } from '../types'
import { PatternSpecPropertyType, StandardPatternSpecAttributes } from './types'

const standardPatternSpecAttributes: StandardPatternSpecAttributes = {
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

export {
    standardPatternSpecAttributes,
}
