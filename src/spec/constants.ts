// tslint:disable no-magic-numbers

import { Frequency, Milliseconds, NO_TRANSLATION, Scalar, to, Translation } from '@musical-patterns/utilities'

const STANDARD_BASE_FREQUENCY: Frequency = to.Frequency(700)
const STANDARD_BASE_DURATION: Milliseconds = to.Milliseconds(700)
const STANDARD_BASE_POSITION: Translation[] = [ NO_TRANSLATION, NO_TRANSLATION, NO_TRANSLATION ]
const STANDARD_BASE_POSITION_SCALAR: Scalar = to.Scalar(1)
const STANDARD_DURATION_TRANSLATION: Translation = NO_TRANSLATION
const STANDARD_FREQUENCY_TRANSLATION: Translation = NO_TRANSLATION

export {
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
}
