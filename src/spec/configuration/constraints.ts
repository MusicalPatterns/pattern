import { keys, map, ObjectOf } from '@musical-patterns/utilities'
import { OptionedConstraint, OptionedConstraintOption } from './types'

const computeBasicOptionedConstraintFromEnum: (enumerator: unknown) => OptionedConstraint =
    (enumerator: unknown): OptionedConstraint =>
        map(keys(enumerator as ObjectOf<string>), (key: string): OptionedConstraintOption => ({
            value: key,
        }))

export {
    computeBasicOptionedConstraintFromEnum,
}
