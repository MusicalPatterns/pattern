import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import {
    PatternSpecPropertyType,
    StandardPatternSpec,
    StandardPatternSpecAttributes,
    StandardPatternSpecProperties,
} from './types'

const standardInitialPatternSpec: StandardPatternSpec = {
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: DEFAULT_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: DEFAULT_PITCH_SCALAR,
}

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
    standardInitialPatternSpec,
}
