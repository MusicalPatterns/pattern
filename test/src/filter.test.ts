import { buildPatterns, filter, Id, Patterns } from '../../src/indexForTest'

describe('filter', () => {
    it('removes the development-only patterns', () => {
        const allPatterns: Patterns = buildPatterns({})
        const patterns: Patterns = Object.keys(Id)
            .reduce(
                (allPatternsAccumulator: Patterns, id: string): Patterns => ({
                    ...allPatternsAccumulator,
                    [ id ]: {},
                }),
                allPatterns,
            )
        const filteredPatternIds: string[] = Object.keys(filter(patterns))

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
