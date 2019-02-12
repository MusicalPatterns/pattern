// tslint:disable no-magic-numbers

import { Hz, Meters, Ms, NO_TRANSLATION, Scalar, to, Translation } from '@musical-patterns/utilities'

const STANDARD_BASE_FREQUENCY: Scalar<Hz> = to.Hz(to.Scalar(700))
const STANDARD_BASE_DURATION: Scalar<Ms> = to.Ms(to.Scalar(700))
const STANDARD_BASE_POSITION: Array<Translation<Meters>> =
    [ NO_TRANSLATION, NO_TRANSLATION, NO_TRANSLATION ].map(to.Meters)
const STANDARD_BASE_POSITION_SCALAR: Scalar<Meters> = to.Scalar(to.Meters(1))
const STANDARD_DURATION_TRANSLATION: Translation<Ms> = to.Ms(NO_TRANSLATION)
const STANDARD_FREQUENCY_TRANSLATION: Translation<Hz> = to.Hz(NO_TRANSLATION)

export {
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_DURATION_TRANSLATION,
    STANDARD_FREQUENCY_TRANSLATION,
}
