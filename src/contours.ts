import { ContourElement, ContourPiece, DictionaryOf, to } from '@musical-patterns/utilities'
import { PitchDuration } from './types'

const unpackPitchDurationContourElement: (contourElement: ContourElement<PitchDuration>) => DictionaryOf<number> =
    (contourElement: ContourElement<PitchDuration>): DictionaryOf<number> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

const calculateTotalPitchDurationContourDuration: (notes: ContourPiece<PitchDuration>) => number =
    (notes: ContourPiece<PitchDuration>): number =>
        notes.reduce(
            (accumulator: number, contourElement: ContourElement<PitchDuration>) => {
                const { duration } = unpackPitchDurationContourElement(contourElement)

                return accumulator + duration
            },
            0,
        )

const pitchDurationRest: (duration: number) => ContourPiece<PitchDuration> =
    (duration: number): ContourPiece<PitchDuration> =>
        to.ContourPiece<PitchDuration>([ [ 0, duration ] ])

export {
    calculateTotalPitchDurationContourDuration,
    unpackPitchDurationContourElement,
    pitchDurationRest,
}
