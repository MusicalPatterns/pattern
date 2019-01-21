import { to } from '@musical-patterns/utilities'
import { DEFAULT_BASE_DURATION, DEFAULT_BASE_FREQUENCY } from '../constants'
import { standardSpecAttributes } from './attributes'
import { StandardSpec, StandardSpecData, StandardSpecProperties } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardSpecProperties.DURATION_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.BASE_DURATION ]: DEFAULT_BASE_DURATION,
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: to.Offset(0),
    [ StandardSpecProperties.BASE_FREQUENCY ]: DEFAULT_BASE_FREQUENCY,
}

const standardSpecData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardSpecData,
}
