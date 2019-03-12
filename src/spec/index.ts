export {
    Configuration,
    OptionedConfiguration,
    RangedConfiguration,
    StringedConfiguration,
    ToggledConfiguration,
    RangedConstraint,
    OptionedConstraint,
    StringedConstraint,
    Constraint,
    InputType,
    StandardConfigurations,
    Configurations,
    standardConfigurations,
    OptionedConstraintOption,
    RangedInputType,
} from './configuration'
export {
    Preset,
} from './preset'
export { standardInitialSpecs, standardSpec } from './standards'
export {
    isArrayedSpecValue,
    isArrayedDomSpecValue,
    isArrayedValidation,
    isSingularDomSpecValue,
    isSingularSpecValue,
    isSingularValidation,
} from './typeGuards'
export {
    ComputeValidations,
    Validations,
    SingularValidation,
    ArrayedValidation,
    Validation,
    validateSpecs,
    ValidationsResult,
} from './validation'

export {
    StandardSpecs,
    StandardSpec,
    Specs,
    Spec,
    SpecValue,
    SingularSpecValue,
    ArrayedSpecValue,
    DomSpecs,
    SingularDomSpecValue,
    ArrayedDomSpecValue,
    DomSpecValue,
} from './types'
