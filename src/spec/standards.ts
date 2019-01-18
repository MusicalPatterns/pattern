import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import { StandardPatternSpec, StandardPatternSpecProperties } from './types'

const standardInitialPatternSpec: StandardPatternSpec = {
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: DEFAULT_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: DEFAULT_PITCH_SCALAR,
}

export {
    standardInitialPatternSpec,
}
