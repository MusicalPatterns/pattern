import { ContourElement, ContourPiece, DictionaryOf, to } from '@musical-patterns/utilities'
import { StandardContour } from './types'

const unpackStandardContourElement: (contourElement: ContourElement<StandardContour>) => DictionaryOf<number> =
    (contourElement: ContourElement<StandardContour>): DictionaryOf<number> => ({
        duration: contourElement[ 1 ],
        pitch: contourElement[ 0 ],
    })

const calculateTotalStandardContourDuration: (notes: ContourPiece<StandardContour>) => number =
    (notes: ContourPiece<StandardContour>): number =>
        notes.reduce(
            (accumulator: number, contourElement: ContourElement<StandardContour>) => {
                const { duration } = unpackStandardContourElement(contourElement)

                return accumulator + duration
            },
            0,
        )

const standardRest: (duration: number) => ContourPiece<StandardContour> =
    (duration: number): ContourPiece<StandardContour> =>
        to.ContourPiece<StandardContour>([ [ 0, duration ] ])

export {
    calculateTotalStandardContourDuration,
    unpackStandardContourElement,
    standardRest,
}
