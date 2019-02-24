// tslint:disable no-magic-numbers

import { negative, Ordinal, Scalar, to } from '@musical-patterns/utilities'

const FULL_GAIN: Scalar = to.Scalar(1)

const STANDARD_PITCH_INDEX_INDICATING_REST: Ordinal = to.Ordinal(negative(1))

const STANDARD_DURATIONS_SCALE_INDEX: Ordinal = to.Ordinal(1)
const STANDARD_PITCH_SCALE_INDEX: Ordinal = to.Ordinal(2)

export {
    FULL_GAIN,
    STANDARD_PITCH_INDEX_INDICATING_REST,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
}
