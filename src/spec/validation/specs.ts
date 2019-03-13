import { entries, Maybe, reduce } from '@musical-patterns/utilities'
import { Configuration, InputType, RangedConstraint, StringedConstraint } from '../configuration'
import { isArrayedDomSpecValue } from '../typeGuards'
import { DomSpecValue, Specs } from '../types'
import { validateArrayedSpec } from './arrayedSpecs'
import {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint,
    updateForSpecWhichTriggeredReevaluatingValidationsIsValid,
    updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs,
    validationRequired,
} from './helpers'
import { validByRangedConstraint } from './rangedConstraints'
import { validByStringedConstraint } from './stringedConstraints'
import { ValidateSpecsParameters, Validation, Validations, ValidationsResult } from './types'

const validateSpec: (displayedSpecValue: DomSpecValue, configuration: Maybe<Configuration>) => Validation =
    (displayedSpecValue: DomSpecValue, configuration: Maybe<Configuration>): Validation => {
        if (!validationRequired(configuration)) {
            return undefined
        }
        const { constraint, inputType } = configuration
        if (isArrayedDomSpecValue(displayedSpecValue)) {
            return validateArrayedSpec(displayedSpecValue, configuration)
        }
        if (inputType === InputType.STRINGED) {
            return validByStringedConstraint(displayedSpecValue as string, constraint as Maybe<StringedConstraint>)
        }
        let numericValue: number
        try {
            numericValue = JSON.parse(displayedSpecValue as string)
        }
        catch (e) {
            return 'this input is formatted in a way which cannot be parsed'
        }

        return validByRangedConstraint(numericValue, constraint as Maybe<RangedConstraint>)
    }

const validateSpecs: (parameters: ValidateSpecsParameters) => ValidationsResult =
    (parameters: ValidateSpecsParameters): ValidationsResult => {
        const { displayedSpecs, configurations, computeValidations, keyOfSpecTriggeringValidation } = parameters
        const reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint: Validations = reduce(
            entries(displayedSpecs),
            (accumulator: Validations, [ key, val ]: [ string, DomSpecValue ]) => ({
                ...accumulator,
                [ key ]: validateSpec(val, configurations[ key ]),
            }),
            {},
        )
        let reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed: Validations
        if (computeValidations) {
            const displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern: Specs =
                displayedSpecs as Specs
            reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed = computeValidations(
                displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern,
            )
        }
        const validations: Validations =
            mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint(
                reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint,
                reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed,
            )
        const newValidationForTheTriggeringSpecInAndOfItself: Validation =
            reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint &&
            reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint[
                keyOfSpecTriggeringValidation ]
        const specsShouldBeSubmitted: boolean =
            updateForSpecWhichTriggeredReevaluatingValidationsIsValid(newValidationForTheTriggeringSpecInAndOfItself) &&
            updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs(
                reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed,
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
