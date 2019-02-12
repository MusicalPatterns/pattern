// tslint:disable no-magic-numbers

import { ContourElement, ContourPiece, Coordinate, DictionaryOf, Meters, sum, to } from '@musical-patterns/utilities'
import { PitchDuration, PitchDurationXYZ } from './types'

const unpackPitchDurationContourElement: (contourElement: ContourElement<PitchDuration>) => DictionaryOf<number> =
    (contourElement: ContourElement<PitchDuration>): DictionaryOf<number> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

const unpackPitchDurationXYZContourElement:
    (contourElement: ContourElement<PitchDurationXYZ>) => {
        duration: number,
        pitch: number,
        position: Coordinate<Meters>,
    } =
    (contourElement: ContourElement<PitchDurationXYZ>): {
        duration: number,
        pitch: number,
        position: Coordinate<Meters>,
    } => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
        position: [ contourElement[ 2 ], contourElement[ 3 ], contourElement[ 4 ] ].map(to.Meters),
    })

const calculateTotalPitchDurationContourDuration: (notes: ContourPiece<PitchDuration>) => number =
    (notes: ContourPiece<PitchDuration>): number =>
        notes.reduce(
            (accumulator: number, contourElement: ContourElement<PitchDuration>) => {
                const { duration } = unpackPitchDurationContourElement(contourElement)

                return sum(accumulator, duration)
            },
            0,
        )

const pitchDurationRest: (duration: number) => ContourPiece<PitchDuration> =
    (duration: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>([ [ 0, duration ] ])

export {
    calculateTotalPitchDurationContourDuration,
    unpackPitchDurationContourElement,
    unpackPitchDurationXYZContourElement,
    pitchDurationRest,
}
