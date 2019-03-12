import { entries, isUndefined, Maybe, reduce } from '@musical-patterns/utilities'
import { Configuration, InputType, RangedConstraint, StringedConstraint } from '../configuration'
import { isArrayedDomSpecValue } from '../typeGuards'
import { DomSpecValue, Specs } from '../types'
import { validateArrayedSpec } from './arrayedSpecs'
import { validByRangedConstraint } from './rangedConstraints'
import { validByStringedConstraint } from './stringedConstraints'
import { ValidateSpecsParameters, Validation, Validations, ValidationsResult } from './types'

const validationRequired: (configuration: Maybe<Configuration>) => configuration is Configuration =
    (configuration: Maybe<Configuration>): configuration is Configuration => {
        if (isUndefined(configuration)) {
            return false
        }

        return !(configuration.inputType === InputType.OPTIONED ||
            configuration.inputType === InputType.TOGGLED)
    }

const validateSpec: (domSpecValue: DomSpecValue, configuration: Maybe<Configuration>) => Validation =
    (domSpecValue: DomSpecValue, configuration: Maybe<Configuration>): Validation => {
        if (!validationRequired(configuration)) {
            return undefined
        }
        const { constraint, inputType } = configuration

        if (isArrayedDomSpecValue(domSpecValue)) {
            return validateArrayedSpec(domSpecValue, configuration)
        }

        if (inputType === InputType.STRINGED) {
            return validByStringedConstraint(domSpecValue as string, constraint as Maybe<StringedConstraint>)
        }

        let numericValue: number
        try {
            numericValue = JSON.parse(domSpecValue as string)
        }
        catch (e) {
            return 'this input is formatted in a way which cannot be parsed'
        }

        return validByRangedConstraint(numericValue, constraint as Maybe<RangedConstraint>)
    }

const validateSpecs: (parameters: ValidateSpecsParameters) => ValidationsResult =
    (parameters: ValidateSpecsParameters): ValidationsResult => {
        const { specs, configurations, computeValidations, specKey } = parameters

        const reevaluatedValidations: Validations = reduce(
            entries(specs),
            (accumulator: Validations, [ key, val ]: [ string, DomSpecValue ]) => ({
                ...accumulator,
                [ key ]: validateSpec(val, configurations[ key ]),
            }),
            {},
        )

        const validationForTheSpecInAndOfItself: Validation =
            reevaluatedValidations && reevaluatedValidations[ specKey ]

        let validationsFromFunctionOverAllSpecs: Validations
        if (computeValidations) {
            validationsFromFunctionOverAllSpecs = computeValidations(specs as Specs)
        }

        const validations: Validations = {
            ...reevaluatedValidations,
            [ specKey ]: validationForTheSpecInAndOfItself,
            ...validationsFromFunctionOverAllSpecs,
        }

        return {
            isValid: !validationForTheSpecInAndOfItself && !validationsFromFunctionOverAllSpecs,
            validations,
        }
    }

export {
    validateSpecs,
    validateSpec,
}
