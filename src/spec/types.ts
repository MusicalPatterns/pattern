import { AnyOtherProperties, DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'
import { PatternSpecAttributes } from './attributes'

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

interface AnyPatternSpec extends StandardPatternSpec, AnyOtherProperties {}

interface PatternSpecs<PatternSpecType> extends DictionaryOf<PatternSpecType> { initial: PatternSpecType }

type PatternSpecPropertyMap<PatternSpecType, ValueType> = { [P in keyof PatternSpecType]: ValueType }

type PatternSpecValidationResults<PatternSpecType> = Maybe<Partial<PatternSpecPropertyMap<PatternSpecType, string>>>

type PatternSpecValidationFunction<PatternSpecType> =
    (patternSpec: PatternSpecType) => PatternSpecValidationResults<PatternSpecType>

type AnyPatternSpecValidationFunction = PatternSpecValidationFunction<AnyPatternSpec>

type AnyPatternSpecValidationResults = PatternSpecValidationResults<AnyPatternSpec>

interface PatternSpecData<PatternSpecType> {
    attributes: PatternSpecAttributes<PatternSpecType>,
    specs: PatternSpecs<PatternSpecType>,
    validationFunction?: PatternSpecValidationFunction<PatternSpecType>,
}

type StandardPatternSpecData = PatternSpecData<StandardPatternSpec>

type AnyPatternSpecData = PatternSpecData<AnyPatternSpec>

export {
    StandardPatternSpec,
    StandardPatternSpecProperties,
    PatternSpecValidationFunction,
    PatternSpecs,
    PatternSpecValidationResults,
    PatternSpecPropertyMap,
    AnyPatternSpec,
    PatternSpecData,
    StandardPatternSpecData,
    AnyPatternSpecData,
    AnyPatternSpecValidationFunction,
    AnyPatternSpecValidationResults,
}
