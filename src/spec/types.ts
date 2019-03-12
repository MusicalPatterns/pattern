import {
    HtmlValueOrChecked,
    Hz,
    KeyMap,
    Maybe,
    Meters,
    Ms,
    NominalNumber,
    ObjectOf,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Presentable } from '../metadata'
import { Configurations } from './configurations'

type SingularSpecValue = HtmlValueOrChecked | NominalNumber
type ArrayedSpecValue = SingularSpecValue[]
type SpecValue = SingularSpecValue | ArrayedSpecValue

type SingularDomSpecValue = HtmlValueOrChecked
type ArrayedDomSpecValue = SingularDomSpecValue[]
type DomSpecValue = SingularDomSpecValue | ArrayedDomSpecValue

enum StandardSpec {
    DURATION_TRANSLATION = 'baseDurationTranslation',
    BASE_DURATION = 'baseDuration',
    FREQUENCY_TRANSLATION = 'baseFrequencyTranslation',
    BASE_FREQUENCY = 'baseFrequency',
    BASE_POSITION = 'basePosition',
    BASE_POSITION_SCALAR = 'basePositionScalar',
}

type StandardSpecs = Partial<{
    [ StandardSpec.DURATION_TRANSLATION ]: Translation<Ms>,
    [ StandardSpec.BASE_DURATION ]: Scalar<Ms>,
    [ StandardSpec.FREQUENCY_TRANSLATION ]: Translation<Hz>,
    [ StandardSpec.BASE_FREQUENCY ]: Scalar<Hz>,
    [ StandardSpec.BASE_POSITION ]: Array<Translation<Meters>>,
    [ StandardSpec.BASE_POSITION_SCALAR ]: Scalar<Meters>,
}>

interface Specs extends StandardSpecs, ObjectOf<Maybe<SpecValue>> {}

interface DomSpecs extends KeyMap<StandardSpecs, DomSpecValue>, ObjectOf<Maybe<DomSpecValue>> {}

type SingularValidation = Maybe<string>

type ArrayedValidation = Maybe<SingularValidation[]>

type Validation = SingularValidation | ArrayedValidation

type Validations<SpecsType = Specs> = Maybe<Partial<KeyMap<SpecsType, Validation>>>

type ComputeValidations<SpecsType = Specs> = (specs: SpecsType) => Validations<SpecsType>

interface Preset<SpecsType = Specs> extends Presentable {
    specs: SpecsType,
}

interface Spec<SpecsType = Specs> {
    computeValidations?: ComputeValidations<SpecsType>,
    configurations: Configurations<SpecsType>,
    initial: SpecsType,
    presets?: ObjectOf<Preset<SpecsType>>,
}

export {
    Preset,
    StandardSpecs,
    StandardSpec,
    Specs,
    Spec,
    ComputeValidations,
    Validations,
    SingularValidation,
    ArrayedValidation,
    Validation,
    SpecValue,
    SingularSpecValue,
    ArrayedSpecValue,
    DomSpecs,
    SingularDomSpecValue,
    ArrayedDomSpecValue,
    DomSpecValue,
}
