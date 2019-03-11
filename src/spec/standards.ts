import { standardConfigurations } from './configurations'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
} from './constants'
import { Spec, StandardSpec, StandardSpecs } from './types'

const standardInitialSpecs: StandardSpecs = {
    [ StandardSpec.DURATION_TRANSLATION ]: STANDARD_DURATION_TRANSLATION,
    [ StandardSpec.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardSpec.FREQUENCY_TRANSLATION ]: STANDARD_FREQUENCY_TRANSLATION,
    [ StandardSpec.BASE_FREQUENCY ]: STANDARD_BASE_FREQUENCY,
    [ StandardSpec.BASE_POSITION ]: STANDARD_BASE_POSITION,
    [ StandardSpec.BASE_POSITION_SCALAR ]: STANDARD_BASE_POSITION_SCALAR,
}

const standardSpec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initial: standardInitialSpecs,
}

export {
    standardInitialSpecs,
    standardSpec,
}
