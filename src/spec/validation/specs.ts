import { entries, reduce } from '@musical-patterns/utilities'
import { DomSpecValue, Specs } from '../types'
import { validateSpec } from './spec'
import { ValidateSpecsParameters, Validation, Validations, ValidationsResult } from './types'

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
}
