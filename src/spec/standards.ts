import { standardSpecAttributes } from './attributes'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_DURATION_OFFSET,
    STANDARD_FREQUENCY_OFFSET,
} from './constants'
import { StandardSpec, StandardSpecData, StandardSpecProperties } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardSpecProperties.DURATION_OFFSET ]: STANDARD_DURATION_OFFSET,
    [ StandardSpecProperties.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: STANDARD_FREQUENCY_OFFSET,
    [ StandardSpecProperties.BASE_FREQUENCY ]: STANDARD_BASE_FREQUENCY,
    [ StandardSpecProperties.BASE_POSITION ]: STANDARD_BASE_POSITION,
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: STANDARD_BASE_POSITION_SCALAR,
}

const standardSpecData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardSpecData,
}
