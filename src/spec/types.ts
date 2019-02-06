import {
    AnyOtherProperties,
    DictionaryOf,
    Frequency,
    Maybe,
    Milliseconds,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { Presentable } from '../types'
import { SpecAttributesFor } from './attributes'

enum StandardSpecProperties {
    DURATION_TRANSLATION = 'baseDurationOffset',
    BASE_DURATION = 'baseDuration',
    FREQUENCY_TRANSLATION = 'baseFrequencyOffset',
    BASE_FREQUENCY = 'baseFrequency',
    BASE_POSITION = 'basePosition',
    BASE_POSITION_SCALAR = 'basePositionScalar',
}

type StandardSpec = Partial<{
    [ StandardSpecProperties.DURATION_TRANSLATION ]: Translation,
    [ StandardSpecProperties.BASE_DURATION ]: Milliseconds,
    [ StandardSpecProperties.FREQUENCY_TRANSLATION ]: Translation,
    [ StandardSpecProperties.BASE_FREQUENCY ]: Frequency,
    [ StandardSpecProperties.BASE_POSITION ]: Translation[],
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: Scalar,
}>

interface Spec extends StandardSpec, AnyOtherProperties {}

type SpecPropertyMap<SpecType, ValueType> = { [P in keyof SpecType]: ValueType }

type SpecValidationResultsFor<SpecType> = Maybe<Partial<SpecPropertyMap<SpecType, string>>>

type SpecValidationFunctionFor<SpecType> =
    (spec: SpecType) => SpecValidationResultsFor<SpecType>

type SpecValidationFunction = SpecValidationFunctionFor<Spec>

type SpecValidationResults = SpecValidationResultsFor<Spec>

interface PresetFor<SpecType> extends Partial<Presentable> {
    spec: SpecType,
}

type Preset = PresetFor<Spec>

interface SpecDataFor<SpecType> {
    attributes: SpecAttributesFor<SpecType>,
    initial: SpecType,
    presets?: DictionaryOf<PresetFor<SpecType>>,
    validationFunction?: SpecValidationFunctionFor<SpecType>,
}

type StandardSpecData = SpecDataFor<StandardSpec>

type SpecData = SpecDataFor<Spec>

export {
    Preset,
    PresetFor,
    StandardSpec,
    StandardSpecProperties,
    SpecValidationFunctionFor,
    SpecValidationResultsFor,
    SpecPropertyMap,
    Spec,
    SpecDataFor,
    StandardSpecData,
    SpecData,
    SpecValidationFunction,
    SpecValidationResults,
}
