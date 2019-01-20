import { Id } from './registry'
import { Patterns, PatternsFilter } from './types'

const patternIdsToFilter: Id[] = [
    Id.HAFUHAFU_WITH_PITCH_CIRCULARITY,
    Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    Id.PLAYROOM_TEST_POST,
    Id.PLAYROOM_TEST_PRESETS,
    Id.PLAYROOM_TEST_SPEC_CONTROLS,
    Id.PLAYROOM_TEST_TIME_CONTROLS,
    Id.PLAYROOM_TEST_VALIDATION,
    Id.PERFORMER_QA,
    Id.TEMPLATE,
]

const filter: PatternsFilter =
    (patterns: Patterns): Patterns => {
        const patternIds: Id[] = Object.keys(patterns) as Id[]
        const filteredPatternIds: Id[] = patternIds
            .sort()
            .filter((id: Id): boolean =>
                patternIdsToFilter.every((filteredPatternId: Id): boolean =>
                    id !== filteredPatternId),
            )

        return filteredPatternIds
            .reduce(
                (filteredPatterns: Patterns, id: Id): Patterns =>
                    ({ ...filteredPatterns, [ id ]: patterns[ id ] }),
                // tslint:disable-next-line:no-object-literal-type-assertion
                {} as Patterns,
            )
    }

export {
    filter,
}
