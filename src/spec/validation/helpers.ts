import { entries, isUndefined, Maybe } from '@musical-patterns/utilities'
import { Configuration, InputType } from '../configuration'
import { Specs } from '../types'
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
    <SpecsType = Specs>(reevaluatedValidationsFromFunctionOverAllSpecs: Validations<SpecsType>) => boolean =
    <SpecsType = Specs>(reevaluatedValidationsFromFunctionOverAllSpecs: Validations<SpecsType>): boolean =>
        !reevaluatedValidationsFromFunctionOverAllSpecs ||
        Object.values(reevaluatedValidationsFromFunctionOverAllSpecs)
            .every(isUndefined)

const mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint:
    <SpecsType = Specs>(
        reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint: Validations<SpecsType>,
        reevaluatedValidationsFromFunctionOverAllSpecs: Validations<SpecsType>,
    ) => Validations<SpecsType> =
    <SpecsType = Specs>(
        reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint: Validations<SpecsType>,
        reevaluatedValidationsFromFunctionOverAllSpecs: Validations<SpecsType>,
    ): Validations<SpecsType> => {
        const validations: Validations<SpecsType> = { ...reevaluatedValidationsOfEachSpecInAndOfItsOwnConstraint }
        if (!isUndefined(reevaluatedValidationsFromFunctionOverAllSpecs)) {
            entries(reevaluatedValidationsFromFunctionOverAllSpecs)
                .forEach(([ specKey, validation ]: [ string, Validation ]): void => {
                    if (!isUndefined(validation)) {
                        // @ts-ignore
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
