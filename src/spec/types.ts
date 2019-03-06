import {
    DictionaryOf,
    DomValueOrChecked,
    Hz,
    Maybe,
    Meters,
    Ms,
    NominalNumber,
    PropertyMap,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Presentable } from '../types'
import { SpecAttributes } from './attributes'

type SingularSpecValue = DomValueOrChecked | NominalNumber
type ArrayedSpecValue = SingularSpecValue[]
type SpecValue = SingularSpecValue | ArrayedSpecValue

type SingularDomSpecValue = DomValueOrChecked
type ArrayedDomSpecValue = SingularDomSpecValue[]
type DomSpecValue = SingularDomSpecValue | ArrayedDomSpecValue

enum StandardSpecProperties {
    DURATION_TRANSLATION = 'baseDurationTranslation',
    BASE_DURATION = 'baseDuration',
    FREQUENCY_TRANSLATION = 'baseFrequencyTranslation',
    BASE_FREQUENCY = 'baseFrequency',
    BASE_POSITION = 'basePosition',
    BASE_POSITION_SCALAR = 'basePositionScalar',
}

type StandardSpec = Partial<{
    [ StandardSpecProperties.DURATION_TRANSLATION ]: Translation<Ms>,
    [ StandardSpecProperties.BASE_DURATION ]: Scalar<Ms>,
    [ StandardSpecProperties.FREQUENCY_TRANSLATION ]: Translation<Hz>,
    [ StandardSpecProperties.BASE_FREQUENCY ]: Scalar<Hz>,
    [ StandardSpecProperties.BASE_POSITION ]: Array<Translation<Meters>>,
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: Scalar<Meters>,
}>

interface Spec extends StandardSpec {
    [ index: string ]: Maybe<SpecValue>,
}

interface DomSpec extends PropertyMap<StandardSpec, DomSpecValue> {
    [ index: string ]: Maybe<DomSpecValue>
}

type SingularPropertyInvalidSpecMessage = Maybe<string>

type ArrayedPropertyInvalidSpecMessage = Maybe<SingularPropertyInvalidSpecMessage[]>

type InvalidSpecMessage = SingularPropertyInvalidSpecMessage | ArrayedPropertyInvalidSpecMessage

type SpecValidationResults<SpecType = Spec> = Maybe<Partial<PropertyMap<SpecType, InvalidSpecMessage>>>

type SpecValidationFunction<SpecType = Spec> = (spec: SpecType) => SpecValidationResults<SpecType>

interface Preset<SpecType = Spec> extends Partial<Presentable> {
    spec: SpecType,
}

interface SpecData<SpecType = Spec> {
    attributes: SpecAttributes<SpecType>,
    initial: SpecType,
    presets?: DictionaryOf<Preset<SpecType>>,
    validationFunction?: SpecValidationFunction<SpecType>,
}

type StandardSpecData = SpecData<StandardSpec>

export {
    Preset,
    StandardSpec,
    StandardSpecProperties,
    Spec,
    StandardSpecData,
    SpecData,
    SpecValidationFunction,
    SpecValidationResults,
    SingularPropertyInvalidSpecMessage,
    ArrayedPropertyInvalidSpecMessage,
    InvalidSpecMessage,
    SpecValue,
    SingularSpecValue,
    ArrayedSpecValue,
    DomSpec,
    SingularDomSpecValue,
    ArrayedDomSpecValue,
    DomSpecValue,
}
