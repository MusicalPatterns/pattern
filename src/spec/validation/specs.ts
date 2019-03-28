import { entries, Maybe, reduce } from '@musical-patterns/utilities'
import { Configuration, InputType, RangedConstraint, StringedConstraint } from '../configuration'
import { isArrayedDomSpecValue } from '../typeGuards'
import { DomSpecValue, Specs } from '../types'
import { validateArrayedSpec } from './arrayedSpecs'
import {
    mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint,
    validationRequired,
} from './helpers'
import { validByRangedConstraint } from './rangedConstraints'
import { validByStringedConstraint } from './stringedConstraints'
import { ValidateSpecsParameters, Validation, Validations } from './types'

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

const validateSpecs:
    <SpecsType = Specs>(parameters: ValidateSpecsParameters<SpecsType>) => Validations<SpecsType> =
    <SpecsType = Specs>(parameters: ValidateSpecsParameters<SpecsType>): Validations<SpecsType> => {
        const { displayedSpecs, configurations, computeValidations } = parameters
        const reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint: Validations<SpecsType> =
            reduce<[ string, DomSpecValue ], Validations<SpecsType>>(
                entries(displayedSpecs),
                // @ts-ignore
                (accumulator: Validations<SpecsType>, [ key, val ]: [ string, DomSpecValue ]) => ({
                    ...accumulator,
                    // @ts-ignore
                    [ key ]: validateSpec(val, configurations[ key ]),
                }),
                {},
            )

        let reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed: Validations<SpecsType>
        if (computeValidations) {
            const displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern: SpecsType =
                displayedSpecs as unknown as SpecsType
            reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed = computeValidations(
                displayedSpecsTreatedAsRealSpecsForTheBenefitOfTheComputeValidationsFunctionOfThePattern,
            )
        }

        return mergeAnyValidationResultsFromFunctionOverAllSpecsOntoValidationsOfEachSpecBasedSolelyOnItsOwnConstraint(
            reevaluatedValidationsOfEachSpecAsItIsDisplayedAndBasedSolelyOnItsOwnConstraint,
            reevaluatedValidationsFromFunctionOverAllSpecsAsTheyAreDisplayed,
        )
    }

export {
    validateSpecs,
    validateSpec,
}
