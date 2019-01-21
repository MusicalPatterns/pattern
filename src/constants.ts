// tslint:disable no-magic-numbers

import { Frequency, Index, Millisecond, Scalar, to } from '@musical-patterns/utilities'

const FULL_GAIN: Scalar = to.Scalar(1)

const DEFAULT_BASE_FREQUENCY: Frequency = to.Frequency(700)
const DEFAULT_BASE_DURATION: Millisecond = to.Millisecond(700)
const DEFAULT_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const DEFAULT_PITCH_SCALE_INDEX: Index = to.Index(2)

export {
    FULL_GAIN,
    DEFAULT_BASE_FREQUENCY,
    DEFAULT_BASE_DURATION,
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_PITCH_SCALE_INDEX,
}
