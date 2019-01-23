import { buildPatterns, filter, Id, Patterns } from '../../src/indexForTest'

describe('filter', () => {
    it('removes the development-only patterns', () => {
        const patternAccumulator: Patterns = buildPatterns({})
        const patterns: Patterns = Object.keys(Id)
            .reduce(
                (accumulator: Patterns, id: string): Patterns => ({
                    ...accumulator,
                    [ id ]: {},
                }),
                patternAccumulator,
            )

        const filteredPatterns: Patterns = filter(patterns)

        const filteredPatternIds: string[] = Object.keys(filteredPatterns)
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
