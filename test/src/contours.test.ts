import { ContourPiece, to } from '@musical-patterns/utilities'
import { calculateTotalStandardContourDuration } from '../../src/indexForTest'

describe('calculate total standard contour duration', () => {
    it('totals the durations of the contour, standard where first element is pitch and second is duration', () => {
        const contour: ContourPiece<2> = to.ContourPiece<2>([
            [ 1, 3 ], [ 0, 4 ], [ 7, 3 ],
        ])

        expect(calculateTotalStandardContourDuration(contour))
            .toBe(10)
    })
})
