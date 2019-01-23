import { AnyOtherProperties, DictionaryOf, Frequency, Maybe, Millisecond, Offset } from '@musical-patterns/utilities'
import { Presentable } from '../types'
import { SpecAttributesFor } from './attributes'

enum StandardSpecProperties {
    DURATION_OFFSET = 'baseDurationOffset',
    BASE_DURATION = 'baseDuration',
    FREQUENCY_OFFSET = 'baseFrequencyOffset',
    BASE_FREQUENCY = 'baseFrequency',
}

type StandardSpec = Partial<{
    [ StandardSpecProperties.DURATION_OFFSET ]: Offset,
    [ StandardSpecProperties.BASE_DURATION ]: Millisecond,
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: Offset,
    [ StandardSpecProperties.BASE_FREQUENCY ]: Frequency,
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
