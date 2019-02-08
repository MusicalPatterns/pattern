import { keys } from '@musical-patterns/utilities'
import { filter, Id, Pattern, Patterns } from '../../src/indexForTest'

describe('filter', () => {
    it('removes the development-only patterns', () => {
        const patternAccumulator: Patterns = {}
        const patterns: Patterns = keys(Id)
            .reduce(
                (accumulator: Patterns, id: keyof typeof Id): Patterns => ({
                    ...accumulator,
                    [ id ]: {},
                }),
                patternAccumulator,
            )

        const filteredPatterns: Patterns = filter(patterns)

        const filteredPatternIds: Id[] = keys(filteredPatterns as { [ key in Id ]: Pattern })
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
