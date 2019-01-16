import { AnyOtherProperties, DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'

enum PatternSpecPropertyType {
    CONTINUOUS = 'CONTINUOUS',
    DISCRETE = 'DISCRETE',
}

interface ContinuousPatternSpecPropertyRange {
    excludeMax?: boolean,
    excludeMin?: boolean,
    integer?: boolean,
    max?: number,
    min?: number,
}

type DiscretePatternSpecPropertyRange = string[]

type PatternSpecPropertyRange = ContinuousPatternSpecPropertyRange | DiscretePatternSpecPropertyRange

interface ContinuousPatternSpecProperty {
    initial: number,
    patternSpecPropertyRange?: ContinuousPatternSpecPropertyRange,
    patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
}

interface DiscretePatternSpecProperty {
    initial: string,
    patternSpecPropertyRange: DiscretePatternSpecPropertyRange,
    patternSpecPropertyType: PatternSpecPropertyType.DISCRETE,
}

type PatternSpecProperty = ContinuousPatternSpecProperty | DiscretePatternSpecProperty

enum StandardPatternSpecProperties {
    PATTERN_DURATION_OFFSET = 'patternDurationOffset',
    PATTERN_DURATION_SCALAR = 'patternDurationScalar',
    PATTERN_PITCH_OFFSET = 'patternPitchOffset',
    PATTERN_PITCH_SCALAR = 'patternPitchScalar',
}

type StandardSettledPatternSpec = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: Offset,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: Scalar,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: Offset,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: Scalar,
}>

type StandardPatternSpec = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: ContinuousPatternSpecProperty,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: ContinuousPatternSpecProperty,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: ContinuousPatternSpecProperty,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: ContinuousPatternSpecProperty,
}>

interface SettledPatternSpec extends StandardSettledPatternSpec, AnyOtherProperties {
}

type PatternSpec = StandardPatternSpec & DictionaryOf<Maybe<PatternSpecProperty>>

export {
    PatternSpec,
    PatternSpecProperty,
    DiscretePatternSpecProperty,
    ContinuousPatternSpecProperty,
    ContinuousPatternSpecPropertyRange,
    DiscretePatternSpecPropertyRange,
    PatternSpecPropertyRange,
    PatternSpecPropertyType,
    SettledPatternSpec,
}
