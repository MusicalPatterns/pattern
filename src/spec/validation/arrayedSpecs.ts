import { isUndefined } from '@musical-patterns/utilities'
import { Configuration } from '../configuration'
import { isSingularValidation } from '../typeGuards'
import { ArrayedSpecValue, SingularSpecValue } from '../types'
import { validateSpec } from './specs'
import { ArrayedValidation, SingularValidation, Validation } from './types'

const validateArrayedSpec: (arrayedSpecValue: ArrayedSpecValue, configuration: Configuration) => Validation =
    (arrayedSpecValue: ArrayedSpecValue, configuration: Configuration): Validation => {
        let isValid: boolean = true
        const results: ArrayedValidation = arrayedSpecValue.map(
            (singularSpecValue: SingularSpecValue): SingularValidation => {
                const validation: Validation = validateSpec(singularSpecValue, configuration)
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
