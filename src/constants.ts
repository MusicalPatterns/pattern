// tslint:disable no-magic-numbers

import { Index, Scalar, to } from '@musical-patterns/utilities'

const FULL_GAIN: Scalar = to.Scalar(1)

const DEFAULT_PITCH_SCALAR: Scalar = to.Scalar(700)
const DEFAULT_DURATION_SCALAR: Scalar = to.Scalar(700)
const DEFAULT_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const DEFAULT_PITCH_SCALE_INDEX: Index = to.Index(2)

export {
    FULL_GAIN,
    DEFAULT_PITCH_SCALAR,
    DEFAULT_DURATION_SCALAR,
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
}
