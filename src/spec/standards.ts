import { to } from '@musical-patterns/utilities'
import {
    DEFAULT_BASE_DURATION,
    DEFAULT_BASE_FREQUENCY,
    DEFAULT_BASE_POSITION,
    DEFAULT_BASE_POSITION_SCALAR,
} from '../constants'
import { standardSpecAttributes } from './attributes'
import { StandardSpec, StandardSpecData, StandardSpecProperties } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardSpecProperties.DURATION_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.BASE_DURATION ]: DEFAULT_BASE_DURATION,
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.BASE_FREQUENCY ]: DEFAULT_BASE_FREQUENCY,
    [ StandardSpecProperties.BASE_POSITION ]: DEFAULT_BASE_POSITION,
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: DEFAULT_BASE_POSITION_SCALAR,
}

const standardSpecData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardSpecData,
}
