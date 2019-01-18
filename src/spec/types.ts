import { AnyOtherProperties, DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'

enum PatternSpecPropertyType {
    RANGED = 'RANGED',
    OPTIONED = 'OPTIONED',
}

interface RangedConstraint {
    excludeMax?: boolean,
    excludeMin?: boolean,
    integer?: boolean,
    max?: number,
    min?: number,
}

type OptionedConstraint = string[]

type Constraint = RangedConstraint | OptionedConstraint

interface RangedPatternSpecPropertyAttributes {
    constraint?: RangedConstraint,
    formattedName?: string,
    patternSpecPropertyType: PatternSpecPropertyType.RANGED,
}

interface OptionedPatternSpecPropertyAttributes {
    constraint: OptionedConstraint,
    formattedName?: string,
    patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
}

type PatternSpecPropertyAttributes = RangedPatternSpecPropertyAttributes | OptionedPatternSpecPropertyAttributes

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

type StandardPatternSpecAttributes = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
}>

interface PatternSpec extends StandardPatternSpec, AnyOtherProperties {
}

type PatternSpecAttributes = StandardPatternSpecAttributes & DictionaryOf<Maybe<PatternSpecPropertyAttributes>>

type PatternSpecValidationFunction = (patternSpec: PatternSpec) => Maybe<DictionaryOf<string>>

interface PatternSpecs extends DictionaryOf<PatternSpec> {
    initial: PatternSpec,
}

interface PatternSpecData {
    specAttributes: PatternSpecAttributes,
    specs: PatternSpecs,
    validationFunction: PatternSpecValidationFunction,
}

export {
    PatternSpecAttributes,
    PatternSpecPropertyAttributes,
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    Constraint,
    PatternSpecPropertyType,
    PatternSpec,
    StandardPatternSpecProperties,
    PatternSpecValidationFunction,
    PatternSpecData,
    PatternSpecs,
}
