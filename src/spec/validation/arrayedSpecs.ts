import { isUndefined } from '@musical-patterns/utilities'
import { Configuration } from '../configuration'
import { isSingularValidation } from '../typeGuards'
import { ArrayedDomSpecValue, SingularDomSpecValue } from '../types'
import { validateSpec } from './specs'
import { ArrayedValidation, SingularValidation, Validation } from './types'

const validateArrayedSpec:
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration) => Validation =
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration): Validation => {
        let isValid: boolean = true
        const results: ArrayedValidation = arrayedDisplayedSpecValue.map(
            (singularDisplayedSpecValue: SingularDomSpecValue): SingularValidation => {
                const validation: Validation = validateSpec(singularDisplayedSpecValue, configuration)
                if (!isSingularValidation(validation)) {
                    throw new Error('validation for singular value was not singular')
                }
                if (!isUndefined(validation)) {
                    isValid = false
                }

                return validation
            })

        if (isValid) {
            return undefined
        }
        else {
            return results
        }
    }

export {
    validateArrayedSpec,
}
