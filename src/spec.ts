import { from, to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from './constants'
import { PatternSpec, PatternSpecPropertyType, SettledPatternSpec } from './types'

const standardSettledPatternSpec: SettledPatternSpec = {
    patternDurationOffset: to.Offset(0),
    patternDurationScalar: DEFAULT_DURATION_SCALAR,
    patternPitchOffset: to.Offset(0),
    patternPitchScalar: DEFAULT_PITCH_SCALAR,
}

const standardPatternSpec: PatternSpec = {
    patternDurationOffset: {
        initial: 0,
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
    patternDurationScalar: {
        initial: from.Scalar(DEFAULT_DURATION_SCALAR),
        patternSpecPropertyRange: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
    patternPitchOffset: {
        initial: 0,
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
    patternPitchScalar: {
        initial: from.Scalar(DEFAULT_PITCH_SCALAR),
        patternSpecPropertyRange: {
            excludeMin: true,
            min: 0,
        },
        patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
    },
}

export {
    standardPatternSpec,
    standardSettledPatternSpec,
}
