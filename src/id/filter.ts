import { Maybe, reduce } from '@musical-patterns/utilities'
import { Pattern, Patterns } from '../types'
import { Id } from './registry'
import { PatternsFilter } from './types'

const idsToFilter: Id[] = [
    Id.PERFORMER_QA,
    Id.PROTOTYPER,
    Id.PLAYROOM_TEST_LONG_DURATION,
    Id.PLAYROOM_TEST_ONLY_PATTERN_PARTICULAR_SPECS,
    Id.PLAYROOM_TEST_ONLY_STANDARD_SPECS,
    Id.PLAYROOM_TEST_POST,
    Id.PLAYROOM_TEST_PRESETS,
    Id.PLAYROOM_TEST_SPEC_CONTROLS,
    Id.PLAYROOM_TEST_TIME_CONTROLS,
    Id.PLAYROOM_TEST_VALIDATION,
    Id.TEMPLATE,
    Id.ZDAUBYAOS,
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

        return reduce(
            filteredIds,
            (filteredPatterns: Patterns, id: Id): Patterns =>
                ({ ...filteredPatterns, [ id ]: patterns[ id ] }),
            {},
        )
    }

export {
    filter,
}
