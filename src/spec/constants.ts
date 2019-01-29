// tslint:disable no-magic-numbers

import { Frequency, Index, Millisecond, Offset, Scalar, to } from '@musical-patterns/utilities'

const STANDARD_BASE_FREQUENCY: Frequency = to.Frequency(700)
const STANDARD_BASE_DURATION: Millisecond = to.Millisecond(700)
const STANDARD_BASE_POSITION: Offset[] = [ 0, 0, 0 ].map(to.Offset)
const STANDARD_BASE_POSITION_SCALAR: Scalar = to.Scalar(1)
const STANDARD_DURATION_OFFSET: Offset = to.Offset(0)
const STANDARD_FREQUENCY_OFFSET: Offset = to.Offset(0)

export {
    STANDARD_BASE_POSITION,
    STANDARD_BASE_POSITION_SCALAR,
    STANDARD_BASE_DURATION,
    STANDARD_BASE_FREQUENCY,
    STANDARD_DURATION_OFFSET,
    STANDARD_FREQUENCY_OFFSET,
}
