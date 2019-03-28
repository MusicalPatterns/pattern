import { entries, isUndefined, Maybe, objectSet } from '@musical-patterns/utilities'
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
                        objectSet(validations, specKey, validation)
                    }
                })
        }

        return validations
    }

export {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint,
    validationRequired,
}
