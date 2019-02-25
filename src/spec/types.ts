import {
    AnyOtherProperties,
    DictionaryOf,
    Hz,
    Maybe,
    Meters,
    Ms,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Presentable } from '../types'
import { SpecAttributes } from './attributes'

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

interface Spec extends StandardSpec, AnyOtherProperties {}

type SpecPropertyMap<SpecType, ValueType> = { [P in keyof SpecType]: ValueType }

type SpecValidationResults<SpecType = Spec> = Maybe<Partial<SpecPropertyMap<SpecType, string>>>

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
    SpecPropertyMap,
    Spec,
    StandardSpecData,
    SpecData,
    SpecValidationFunction,
    SpecValidationResults,
}
