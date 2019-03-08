import {
    DictionaryOf,
    HtmlValueOrChecked,
    Hz,
    KeyMap,
    Maybe,
    Meters,
    Ms,
    NominalNumber,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Presentable } from '../types'
import { Attributes } from './attributes'

type SingularValue = HtmlValueOrChecked | NominalNumber
type ArrayedValue = SingularValue[]
type Value = SingularValue | ArrayedValue

type SingularDomValue = HtmlValueOrChecked
type ArrayedDomValue = SingularDomValue[]
type DomValue = SingularDomValue | ArrayedDomValue

enum StandardProperties {
    DURATION_TRANSLATION = 'baseDurationTranslation',
    BASE_DURATION = 'baseDuration',
    FREQUENCY_TRANSLATION = 'baseFrequencyTranslation',
    BASE_FREQUENCY = 'baseFrequency',
    BASE_POSITION = 'basePosition',
    BASE_POSITION_SCALAR = 'basePositionScalar',
}

type StandardSpec = Partial<{
    [ StandardProperties.DURATION_TRANSLATION ]: Translation<Ms>,
    [ StandardProperties.BASE_DURATION ]: Scalar<Ms>,
    [ StandardProperties.FREQUENCY_TRANSLATION ]: Translation<Hz>,
    [ StandardProperties.BASE_FREQUENCY ]: Scalar<Hz>,
    [ StandardProperties.BASE_POSITION ]: Array<Translation<Meters>>,
    [ StandardProperties.BASE_POSITION_SCALAR ]: Scalar<Meters>,
}>

interface Spec extends StandardSpec {
    [ index: string ]: Maybe<Value>,
}

interface DomSpec extends KeyMap<StandardSpec, DomValue> {
    [ index: string ]: Maybe<DomValue>
}

type SingularValidationResult = Maybe<string>

type ArrayedValidationResult = Maybe<SingularValidationResult[]>

type ValidationResult = SingularValidationResult | ArrayedValidationResult

type ValidationResults<SpecType = Spec> = Maybe<Partial<KeyMap<SpecType, ValidationResult>>>

type ValidationFunction<SpecType = Spec> = (spec: SpecType) => ValidationResults<SpecType>

interface Preset<SpecType = Spec> extends Partial<Presentable> {
    spec: SpecType,
}

interface Data<SpecType = Spec> {
    attributes: Attributes<SpecType>,
    initial: SpecType,
    presets?: DictionaryOf<Preset<SpecType>>,
    validationFunction?: ValidationFunction<SpecType>,
}

type StandardData = Data<StandardSpec>

export {
    Preset,
    StandardSpec,
    StandardProperties,
    Spec,
    StandardData,
    Data,
    ValidationFunction,
    ValidationResults,
    SingularValidationResult,
    ArrayedValidationResult,
    ValidationResult,
    Value,
    SingularValue,
    ArrayedValue,
    DomSpec,
    SingularDomValue,
    ArrayedDomValue,
    DomValue,
}
