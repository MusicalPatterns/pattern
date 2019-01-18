import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import { standardPatternSpecAttributes } from './attributes'
import { StandardPatternSpec, StandardPatternSpecData, StandardPatternSpecProperties } from './types'

const standardInitialPatternSpec: StandardPatternSpec = {
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: DEFAULT_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: DEFAULT_PITCH_SCALAR,
}

const standardPatternSpecData: StandardPatternSpecData = {
    attributes: standardPatternSpecAttributes,
    initial: standardInitialPatternSpec,
}

export {
    standardInitialPatternSpec,
    standardPatternSpecData,
}
