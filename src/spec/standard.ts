import { from, to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import { PatternSpec, PatternSpecAttributes, PatternSpecPropertyType } from './types'

const standardPatternSpec: PatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: DEFAULT_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: DEFAULT_PITCH_SCALAR,
}

const standardPatternSpecAttributes: PatternSpecAttributes = {
    patternDurationOffset: {
        initial: 0,
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternDurationScalar: {
        initial: from.Scalar(DEFAULT_DURATION_SCALAR),
        patternSpecPropertyRange: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPitchOffset: {
        initial: 0,
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    patternPitchScalar: {
        initial: from.Scalar(DEFAULT_PITCH_SCALAR),
        patternSpecPropertyRange: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

export {
    standardPatternSpecAttributes,
    standardPatternSpec,
}
