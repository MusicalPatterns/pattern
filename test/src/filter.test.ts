import { keys, reduce } from '@musical-patterns/utilities'
import { filter, Id, Patterns } from '../../src/indexForTest'

describe('filter', () => {
    it('removes the development-only patterns', () => {
        const patterns: Patterns = reduce(
            keys(Id),
            (accumulator: Patterns, id: keyof typeof Id): Patterns => ({
                ...accumulator,
                [ id ]: {},
            }),
            {},
        )

        const filteredPatterns: Patterns = filter(patterns)

        const filteredPatternIds: Id[] = keys(filteredPatterns)
        filteredPatternIds.forEach((filteredPatternId: string) => {
            expect(filteredPatternId.match(/PLAYROOM_TEST/))
                .toBeFalsy()
        })
        expect(filteredPatternIds.includes(Id.PERFORMER_QA))
            .toBeFalsy()
        expect(filteredPatternIds.includes(Id.TEMPLATE))
            .toBeFalsy()
    })
})
