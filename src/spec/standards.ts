import { standardAttributes } from './attributes'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
} from './constants'
import { StandardData, StandardProperty, StandardSpec } from './types'

const standardInitialSpec: StandardSpec = {
    [ StandardProperty.DURATION_TRANSLATION ]: STANDARD_DURATION_TRANSLATION,
    [ StandardProperty.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardProperty.FREQUENCY_TRANSLATION ]: STANDARD_FREQUENCY_TRANSLATION,
    [ StandardProperty.BASE_FREQUENCY ]: STANDARD_BASE_FREQUENCY,
    [ StandardProperty.BASE_POSITION ]: STANDARD_BASE_POSITION,
    [ StandardProperty.BASE_POSITION_SCALAR ]: STANDARD_BASE_POSITION_SCALAR,
}

const standardData: StandardData = {
    attributes: standardAttributes,
    initial: standardInitialSpec,
}

export {
    standardInitialSpec,
    standardData,
}
