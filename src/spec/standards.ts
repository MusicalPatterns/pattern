import { to } from '@musical-patterns/utilities'
import { DEFAULT_DURATION_SCALAR, DEFAULT_PITCH_SCALAR } from '../constants'
import { standardSpecAttributes } from './attributes'
import { StandardSpec, StandardSpecData, StandardSpecProperties } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardSpecProperties.PATTERN_DURATION_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: DEFAULT_DURATION_SCALAR,
    [ StandardSpecProperties.PATTERN_PITCH_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: DEFAULT_PITCH_SCALAR,
}

const standardSpecData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardSpecData,
}
