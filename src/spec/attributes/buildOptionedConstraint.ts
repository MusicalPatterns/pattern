import { OptionedConstraintOption } from './types'

const buildOptionedConstraint: (enumerator: object) => OptionedConstraintOption[] =
    (enumerator: object): OptionedConstraintOption[] =>
        Object.entries(enumerator)
            .map(([ key, formattedName ]: [ string, string ]): OptionedConstraintOption => ({
                formattedName,
                key,
            }))

export {
    buildOptionedConstraint,
}
