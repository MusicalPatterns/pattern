import { standardAttributes } from './attributes'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
} from './constants'
import { StandardData, StandardProperties, StandardSpec } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardProperties.DURATION_TRANSLATION ]: STANDARD_DURATION_TRANSLATION,
    [ StandardProperties.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardProperties.FREQUENCY_TRANSLATION ]: STANDARD_FREQUENCY_TRANSLATION,
    [ StandardProperties.BASE_FREQUENCY ]: STANDARD_BASE_FREQUENCY,
    [ StandardProperties.BASE_POSITION ]: STANDARD_BASE_POSITION,
    [ StandardProperties.BASE_POSITION_SCALAR ]: STANDARD_BASE_POSITION_SCALAR,
}

const standardData: StandardData = {
    attributes: standardAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardData,
}
