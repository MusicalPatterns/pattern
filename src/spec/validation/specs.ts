import { entries, Maybe, reduce } from '@musical-patterns/utilities'
import { Configuration, InputType, RangedConstraint, StringedConstraint } from '../configuration'
import { isArrayedSpecValue } from '../typeGuards'
import { SpecValue } from '../types'
import { validateArrayedSpec } from './arrayedSpecs'
import {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecInAndOfItsOwnConstraint,
    updateForSpecWhichTriggeredReevaluatingValidationsIsValid,
    updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs,
    validationRequired,
} from './helpers'
import { validByRangedConstraint } from './rangedConstraints'
import { validByStringedConstraint } from './stringedConstraints'
import { ValidateSpecsParameters, Validation, Validations, ValidationsResult } from './types'

const validateSpec: (specValue: SpecValue, configuration: Maybe<Configuration>) => Validation =
    (specValue: SpecValue, configuration: Maybe<Configuration>): Validation => {
        if (!validationRequired(configuration)) {
            return undefined
        }
        const { constraint, inputType } = configuration
        if (isArrayedSpecValue(specValue)) {
            return validateArrayedSpec(specValue, configuration)
        }
        if (inputType === InputType.STRINGED) {
            return validByStringedConstraint(specValue as string, constraint as Maybe<StringedConstraint>)
        }
        let numericValue: number
        try {
            numericValue = JSON.parse(specValue as string)
        }
        catch (e) {
            return 'this input is formatted in a way which cannot be parsed'
        }

        return validByRangedConstraint(numericValue, constraint as Maybe<RangedConstraint>)
    }

const validateSpecs: (parameters: ValidateSpecsParameters) => ValidationsResult =
    (parameters: ValidateSpecsParameters): ValidationsResult => {
        const { specs, configurations, computeValidations, keyOfSpecTriggeringValidation } = parameters
        const reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint: Validations = reduce(
            entries<string, SpecValue>(specs),
            (accumulator: Validations, [ key, val ]: [ string, SpecValue ]) => ({
                ...accumulator,
                [ key ]: validateSpec(val, configurations[ key ]),
            }),
            {},
        )
        let reevaluatedValidationsFromFunctionOverAllSpecs: Validations
        if (computeValidations) {
            reevaluatedValidationsFromFunctionOverAllSpecs = computeValidations(specs)
        }
        const validations: Validations =
            mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecInAndOfItsOwnConstraint(
                reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint,
                reevaluatedValidationsFromFunctionOverAllSpecs,
            )
        const newValidationForTheTriggeringSpecInAndOfItself: Validation =
            reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint &&
            reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint[ keyOfSpecTriggeringValidation ]
        const specsShouldBeSubmitted: boolean =
            updateForSpecWhichTriggeredReevaluatingValidationsIsValid(newValidationForTheTriggeringSpecInAndOfItself) &&
            updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs(
                reevaluatedValidationsFromFunctionOverAllSpecs,
            )

        return {
            specsShouldBeSubmitted,
            validations,
        }
    }

export {
    validateSpecs,
    validateSpec,
}
