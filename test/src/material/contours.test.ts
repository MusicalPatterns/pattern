import { ContourPiece, to } from '@musical-patterns/utilities'
import { computeTotalPitchDurationContourDuration, PitchDuration } from '../../../src/indexForTest'

describe('total standard contour duration', () => {
    it('totals the durations of the contour, standard where first element is pitch and second is duration', () => {
        const contour: ContourPiece<PitchDuration> = to.ContourPiece<PitchDuration>([
            [ 1, 3 ], [ 0, 4 ], [ 7, 3 ],
        ])

        expect(computeTotalPitchDurationContourDuration(contour))
            .toBe(10)
    })
})