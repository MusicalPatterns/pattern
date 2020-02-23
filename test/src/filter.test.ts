import { Id } from '@musical-patterns/id'
import { keys, reduce } from '@musical-patterns/utilities'
import { filter, Patterns } from '../../src/indexForTest'

describe('filter', (): void => {
    it('removes the development-only patterns', (): void => {
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
        filteredPatternIds.forEach((filteredPatternId: Id): void => {
            expect(filteredPatternId.match(/PLAYROOM_TEST/))
                .toBeFalsy()
        })
        filteredPatternIds.forEach((filteredPatternId: Id): void => {
            expect(filteredPatternId.match(/MATERIAL_QA/))
                .toBeFalsy()
        })
        expect(filteredPatternIds.includes(Id.TEMPLATE))
            .toBeFalsy()
    })
})
