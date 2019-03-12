import { isUndefined } from '@musical-patterns/utilities'
import { Configuration } from '../configuration'
import { isSingularValidation } from '../typeGuards'
import { ArrayedDomSpecValue, SingularDomSpecValue } from '../types'
import { validateSpec } from './spec'
import { ArrayedValidation, SingularValidation, Validation } from './types'

const validateArrayedSpec: (arrayedDomSpecValue: ArrayedDomSpecValue, configuration: Configuration) => Validation =
    (arrayedDomSpecValue: ArrayedDomSpecValue, configuration: Configuration): Validation => {
        let isValid: boolean = true
        const results: ArrayedValidation = arrayedDomSpecValue.map(
            (singularDomSpecValue: SingularDomSpecValue): SingularValidation => {
                const validation: Validation = validateSpec(singularDomSpecValue, configuration)
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
