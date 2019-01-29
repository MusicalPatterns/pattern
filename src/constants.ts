// tslint:disable no-magic-numbers

import { Frequency, Index, Milliseconds, Offset, Scalar, to } from '@musical-patterns/utilities'

const FULL_GAIN: Scalar = to.Scalar(1)

const STANDARD_DURATIONS_SCALE_INDEX: Index = to.Index(1)
const STANDARD_PITCH_SCALE_INDEX: Index = to.Index(2)

export {
    FULL_GAIN,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
}
