import { isUndefined, Maybe, totalElements } from '@musical-patterns/utilities'
import { ArrayedConstraint, Configuration } from '../configuration'
import { isSingularValidation } from '../typeGuards'
import { ArrayedDomSpecValue, SingularDomSpecValue } from '../types'
import { validateSpec } from './specs'
import { ArrayedValidation, SingularValidation, Validation } from './types'

const validateByArrayedConstraintMinimum:
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, minLength: Maybe<number>) => ArrayedValidation =
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, minLength: Maybe<number>): ArrayedValidation => {
        if (
            !isUndefined(minLength) &&
            totalElements(arrayedDisplayedSpecValue) < minLength
        ) {
            return arrayedDisplayedSpecValue.map(() => `minimum length for this arrayed control is ${minLength}`)
        }

        return undefined
    }

const validateByArrayedConstraintMaximum:
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, maxLength: Maybe<number>) => ArrayedValidation =
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, maxLength: Maybe<number>): ArrayedValidation => {
        if (
            !isUndefined(maxLength) &&
            totalElements(arrayedDisplayedSpecValue) > maxLength
        ) {
            return arrayedDisplayedSpecValue.map(() => `maximum length for this arrayed control is ${maxLength}`)
        }

        return undefined
    }

const validateByArrayedConstraint:
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration) => ArrayedValidation =
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration): ArrayedValidation => {
        let results: ArrayedValidation = undefined
        const arrayedConstraint: Maybe<ArrayedConstraint> = configuration.arrayedConstraint
        if (!isUndefined(arrayedConstraint)) {
            const minLength: Maybe<number> = arrayedConstraint.minLength
            const maxLength: Maybe<number> = arrayedConstraint.maxLength
            results = validateByArrayedConstraintMinimum(arrayedDisplayedSpecValue, minLength)
            results = validateByArrayedConstraintMaximum(arrayedDisplayedSpecValue, maxLength) || results
        }

        return results
    }

const validateArrayedSpec:
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration) => Validation =
    (arrayedDisplayedSpecValue: ArrayedDomSpecValue, configuration: Configuration): Validation => {
        let isValid: boolean = true

        const arrayedConstraintValidationResults: ArrayedValidation = validateByArrayedConstraint(
            arrayedDisplayedSpecValue,
            configuration,
        )
        if (!isUndefined(arrayedConstraintValidationResults)) {
            return arrayedConstraintValidationResults
        }

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

        return results
    }

export {
    validateArrayedSpec,
}
