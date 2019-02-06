import { standardSpecAttributes } from './attributes'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
} from './constants'
import { StandardSpec, StandardSpecData, StandardSpecProperties } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardSpecProperties.DURATION_TRANSLATION ]: STANDARD_DURATION_TRANSLATION,
    [ StandardSpecProperties.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardSpecProperties.FREQUENCY_TRANSLATION ]: STANDARD_FREQUENCY_TRANSLATION,
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
