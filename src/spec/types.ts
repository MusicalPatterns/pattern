import { AnyOtherProperties, DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'
import { PatternSpecAttributesFor } from './attributes'

enum StandardPatternSpecProperties {
    PATTERN_DURATION_OFFSET = 'patternDurationOffset',
    PATTERN_DURATION_SCALAR = 'patternDurationScalar',
    PATTERN_PITCH_OFFSET = 'patternPitchOffset',
    PATTERN_PITCH_SCALAR = 'patternPitchScalar',
}

type StandardPatternSpec = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: Offset,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: Scalar,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: Offset,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: Scalar,
}>

interface PatternSpec extends StandardPatternSpec, AnyOtherProperties {}

type PatternSpecPropertyMap<PatternSpecType, ValueType> = { [P in keyof PatternSpecType]: ValueType }

type PatternSpecValidationResultsFor<PatternSpecType> = Maybe<Partial<PatternSpecPropertyMap<PatternSpecType, string>>>

type PatternSpecValidationFunctionFor<PatternSpecType> =
    (patternSpec: PatternSpecType) => PatternSpecValidationResultsFor<PatternSpecType>

type PatternSpecValidationFunction = PatternSpecValidationFunctionFor<PatternSpec>

type PatternSpecValidationResults = PatternSpecValidationResultsFor<PatternSpec>

interface PatternSpecDataFor<PatternSpecType> {
    attributes: PatternSpecAttributesFor<PatternSpecType>,
    initial: PatternSpecType,
    presets?: DictionaryOf<PatternSpecType>,
    validationFunction?: PatternSpecValidationFunctionFor<PatternSpecType>,
}

type StandardPatternSpecData = PatternSpecDataFor<StandardPatternSpec>

type PatternSpecData = PatternSpecDataFor<PatternSpec>

export {
    StandardPatternSpec,
    StandardPatternSpecProperties,
    PatternSpecValidationFunctionFor,
    PatternSpecValidationResultsFor,
    PatternSpecPropertyMap,
    PatternSpec,
    PatternSpecDataFor,
    StandardPatternSpecData,
    PatternSpecData,
    PatternSpecValidationFunction,
    PatternSpecValidationResults,
}
