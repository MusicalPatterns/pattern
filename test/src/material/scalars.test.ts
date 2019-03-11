import { Frequency, Scalar, to } from '@musical-patterns/utilities'
import { computeOctaveRepeatingScalars } from '../../../src/indexForTest'

describe('octave repeating scalars', () => {
    it('given scalars, will provide 10 octaves worth of them repeating', () => {
        const scalars: Array<Scalar<Frequency>> = [
            1,
            4 / 3,
            15 / 8,
        ]
            .map(to.Scalar)
            .map(to.Frequency)

        const actualScalars: Array<Scalar<Frequency>> = computeOctaveRepeatingScalars(scalars)
        expect(actualScalars)
            .toEqual(
                [
                    1 * 1,
                    1 * 4 / 3,
                    1 * 15 / 8,
                    2 * 1,
                    2 * 4 / 3,
                    2 * 15 / 8,
                    4 * 1,
                    4 * 4 / 3,
                    4 * 15 / 8,
                    8 * 1,
                    8 * 4 / 3,
                    8 * 15 / 8,
                    16 * 1,
                    16 * 4 / 3,
                    16 * 15 / 8,
                    32 * 1,
                    32 * 4 / 3,
                    32 * 15 / 8,
                    64 * 1,
                    64 * 4 / 3,
                    64 * 15 / 8,
                    128 * 1,
                    128 * 4 / 3,
                    128 * 15 / 8,
                    256 * 1,
                    256 * 4 / 3,
                    256 * 15 / 8,
                    512 * 1,
                    512 * 4 / 3,
                    512 * 15 / 8,
                ]
                    .map(to.Scalar)
                    .map(to.Frequency),
            )
    })
})
