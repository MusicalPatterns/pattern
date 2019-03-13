import { isUndefined } from '@musical-patterns/utilities'
import {
    ArrayedDomSpecValue,
    ArrayedSpecValue,
    DomSpecValue,
    SingularDomSpecValue,
    SingularSpecValue,
    SpecValue,
} from './types'
import { ArrayedValidation, SingularValidation, Validation } from './validation'

const isArrayedSpecValue: (specValue: SpecValue) => specValue is ArrayedSpecValue =
    (specValue: SpecValue): specValue is ArrayedSpecValue =>
        specValue instanceof Array

const isArrayedDomSpecValue: (domSpecValue: DomSpecValue) => domSpecValue is ArrayedDomSpecValue =
    (domSpecValue: DomSpecValue): domSpecValue is ArrayedDomSpecValue =>
        domSpecValue instanceof Array

const isArrayedValidation: (validation: Validation) => validation is ArrayedValidation =
    (validation: Validation): validation is ArrayedValidation =>
        isUndefined(validation) || validation instanceof Array

const isSingularSpecValue: (specValue: SpecValue) => specValue is SingularSpecValue =
    (specValue: SpecValue): specValue is SingularSpecValue =>
        !isArrayedSpecValue(specValue)

const isSingularDomSpecValue: (domSpecValue: DomSpecValue) => domSpecValue is SingularDomSpecValue =
    (domSpecValue: DomSpecValue): domSpecValue is SingularDomSpecValue =>
        !isArrayedDomSpecValue(domSpecValue)

const isSingularValidation: (validation: Validation) => validation is SingularValidation =
    (validation: Validation): validation is SingularValidation =>
        isUndefined(validation) || !isArrayedValidation(validation)

export {
    isArrayedSpecValue,
    isArrayedDomSpecValue,
    isArrayedValidation,
    isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
}
