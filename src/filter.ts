import { Maybe } from '@musical-patterns/utilities'
import { Id } from './registry'
import { Pattern, Patterns, PatternsFilter } from './types'

const idsToFilter: Id[] = [
    Id.HAFUHAFU_WITH_PITCH_CIRCULARITY,
    Id.MOEOM,
    Id.PERFORMER_QA,
    Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPEC,
    Id.PLAYROOM_TEST_ONLY_STANDARD_SPEC,
    Id.PLAYROOM_TEST_POST,
    Id.PLAYROOM_TEST_PRESETS,
    Id.PLAYROOM_TEST_SPEC_CONTROLS,
    Id.PLAYROOM_TEST_TIME_CONTROLS,
    Id.PLAYROOM_TEST_VALIDATION,
    Id.TEMPLATE,
]

const filter: PatternsFilter =
    (patterns: Patterns): Patterns => {
        const maybeIds: Array<Maybe<Id>> = Object.values(patterns)
            .map((pattern: Maybe<Pattern>) =>
                pattern && pattern.id)

        const ids: Id[] = []
        maybeIds.forEach((maybeId: Maybe<Id>): void => {
            if (maybeId) {
                ids.push(maybeId)
            }
        })

        const filteredIds: Id[] = ids
            .sort()
            .filter((id: Id): boolean =>
                idsToFilter.every((filteredId: Id): boolean =>
                    id !== filteredId),
            )

        return filteredIds
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
