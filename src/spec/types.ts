import { AnyOtherProperties, DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'
import { SpecAttributesFor } from './attributes'

enum StandardSpecProperties {
    PATTERN_DURATION_OFFSET = 'patternDurationOffset',
    PATTERN_DURATION_SCALAR = 'patternDurationScalar',
    PATTERN_PITCH_OFFSET = 'patternPitchOffset',
    PATTERN_PITCH_SCALAR = 'patternPitchScalar',
}

type StandardSpec = Partial<{
    [ StandardSpecProperties.PATTERN_DURATION_OFFSET ]: Offset,
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: Scalar,
    [ StandardSpecProperties.PATTERN_PITCH_OFFSET ]: Offset,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: Scalar,
}>

interface Spec extends StandardSpec, AnyOtherProperties {}

type SpecPropertyMap<SpecType, ValueType> = { [P in keyof SpecType]: ValueType }

type SpecValidationResultsFor<SpecType> = Maybe<Partial<SpecPropertyMap<SpecType, string>>>

type SpecValidationFunctionFor<SpecType> =
    (spec: SpecType) => SpecValidationResultsFor<SpecType>

type SpecValidationFunction = SpecValidationFunctionFor<Spec>

type SpecValidationResults = SpecValidationResultsFor<Spec>

interface SpecDataFor<SpecType> {
    attributes: SpecAttributesFor<SpecType>,
    initial: SpecType,
    presets?: DictionaryOf<SpecType>,
    validationFunction?: SpecValidationFunctionFor<SpecType>,
}

type StandardSpecData = SpecDataFor<StandardSpec>

type SpecData = SpecDataFor<Spec>

export {
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
