import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import { PatternSpec, PatternSpecAttributes, PatternSpecPropertyType } from './types'

const standardInitialPatternSpec: PatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: DEFAULT_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: DEFAULT_PITCH_SCALAR,
}

const standardPatternSpecAttributes: PatternSpecAttributes = {
    patternDurationOffset: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternDurationScalar: {
        constraint: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPitchOffset: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPitchScalar: {
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
