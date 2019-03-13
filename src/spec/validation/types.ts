import { KeyMap, Maybe } from '@musical-patterns/utilities'
import { Configurations } from '../configuration'
import { DomSpecs, Specs } from '../types'

type SingularValidation = Maybe<string>

type ArrayedValidation = Maybe<SingularValidation[]>

type Validation = SingularValidation | ArrayedValidation

type Validations<SpecsType = Specs> = Maybe<Partial<KeyMap<SpecsType, Validation>>>

type ComputeValidations<SpecsType = Specs> = (specs: SpecsType) => Validations<SpecsType>

interface ValidateSpecsParameters {
    computeValidations: Maybe<ComputeValidations>,
    configurations: Configurations,
    keyOfSpecTriggeringValidation: string,
    specs: Specs,
}

interface ValidationsResult {
    specsShouldBeSubmitted: boolean,
    validations: Validations,
}

export {
    SingularValidation,
    ArrayedValidation,
    Validation,
    Validations,
    ComputeValidations,
    ValidateSpecsParameters,
    ValidationsResult,
}
