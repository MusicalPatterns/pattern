import { standardConfigurations } from './configuration'
import {
    STANDARD_BASE_DURATION,
    STANDARD_BASE_DURATION_TRANSLATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_BASE_FREQUENCY_TRANSLATION,
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
} from './constants'
import { Spec, StandardSpec, StandardSpecs } from './types'

const standardInitialSpecs: StandardSpecs = {
    [ StandardSpec.BASE_DURATION_TRANSLATION ]: STANDARD_BASE_DURATION_TRANSLATION,
    [ StandardSpec.BASE_DURATION ]: STANDARD_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY_TRANSLATION ]: STANDARD_BASE_FREQUENCY_TRANSLATION,
    [ StandardSpec.BASE_FREQUENCY ]: STANDARD_BASE_FREQUENCY,
    [ StandardSpec.BASE_POSITION ]: STANDARD_BASE_POSITION,
    [ StandardSpec.BASE_POSITION_SCALAR ]: STANDARD_BASE_POSITION_SCALAR,
}

const standardSpec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs: standardInitialSpecs,
}

export {
    standardInitialSpecs,
    standardSpec,
}
