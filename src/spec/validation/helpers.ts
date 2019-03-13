import { entries, isUndefined, Maybe } from '@musical-patterns/utilities'
import { Configuration, InputType } from '../configuration'
import { Validation, Validations } from './types'

const validationRequired: (configuration: Maybe<Configuration>) => configuration is Configuration =
    (configuration: Maybe<Configuration>): configuration is Configuration => {
        if (isUndefined(configuration)) {
            return false
        }

        return !(configuration.inputType === InputType.OPTIONED ||
            configuration.inputType === InputType.TOGGLED)
    }

const updateForSpecWhichTriggeredReevaluatingValidationsIsValid:
    (newValidationForTheSpecInAndOfItself: Validation) => boolean =
    (newValidationForTheSpecInAndOfItself: Validation): boolean =>
        !newValidationForTheSpecInAndOfItself

const updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs:
    (reevaluatedValidationsFromFunctionOverAllSpecs: Validations) => boolean =
    (reevaluatedValidationsFromFunctionOverAllSpecs: Validations): boolean =>
        !reevaluatedValidationsFromFunctionOverAllSpecs ||
        Object.values(reevaluatedValidationsFromFunctionOverAllSpecs)
            .every(isUndefined)

const mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint: (
    reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint: Validations,
    reevaluatedValidationsFromFunctionOverAllSpecs: Validations,
) => Validations =
    (
        reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint: Validations,
        reevaluatedValidationsFromFunctionOverAllSpecs: Validations,
    ): Validations => {
        const validations: Validations = { ...reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint }
        if (!isUndefined(reevaluatedValidationsFromFunctionOverAllSpecs)) {
            entries(reevaluatedValidationsFromFunctionOverAllSpecs)
                .forEach(([ specKey, validation ]: [ string, Validation ]): void => {
                    if (!isUndefined(validation)) {
                        validations[ specKey ] = validation
                    }
                })
        }

        return validations
    }

export {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint,
    validationRequired,
    updateForSpecWhichTriggeredReevaluatingValidationsIsValid,
    updateWouldNotResultInThereBeingAnyInvaliditiesFromFunctionOverAllSpecs,
}
