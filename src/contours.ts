// tslint:disable no-magic-numbers

import { ContourElement, ContourPiece, sum, to } from '@musical-patterns/utilities'
import { STANDARD_PITCH_INDEX_INDICATING_REST } from './constants'
import { PitchDuration } from './types'

const calculateTotalPitchDurationContourDuration: (notes: ContourPiece<PitchDuration>) => number =
    (notes: ContourPiece<PitchDuration>): number =>
        notes.reduce(
            (accumulator: number, contourElement: ContourElement<PitchDuration>) => {
                const duration: number = contourElement[ 1 ]

                return sum(accumulator, duration)
            },
            0,
        )

const pitchDurationRest: (duration: number) => ContourPiece<PitchDuration> =
    (duration: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>([ [ STANDARD_PITCH_INDEX_INDICATING_REST, duration ] ])

export {
    calculateTotalPitchDurationContourDuration,
    pitchDurationRest,
}
