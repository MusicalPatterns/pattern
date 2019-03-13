import { KeyMap, Maybe } from '@musical-patterns/utilities'
import { Configurations } from '../configuration'
import { DomSpecs, Specs } from '../types'

type SingularValidation = Maybe<string>

type ArrayedValidation = Maybe<SingularValidation[]>

type Validation = SingularValidation | ArrayedValidation

type Validations<SpecsType = Specs> = Maybe<Partial<KeyMap<SpecsType, Validation>>>

type ComputeValidations<SpecsType = DomSpecs> = (specs: SpecsType) => Validations<SpecsType>

interface ValidateSpecsParameters<SpecsType = DomSpecs> {
    computeValidations: Maybe<ComputeValidations<SpecsType>>,
    configurations: Configurations<SpecsType>,
    displayedSpecs: SpecsType,
    keyOfSpecTriggeringValidation: string,
}

interface ValidationsResult<SpecsType = Specs> {
    shouldSubmitUpdateToSpecTriggeringValidation: boolean,
    validations: Validations<SpecsType>,
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
