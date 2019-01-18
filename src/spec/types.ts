import { DictionaryOf, Maybe, Offset, Scalar } from '@musical-patterns/utilities'

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

type PatternSpecPropertyMap<PatternSpecType, ValueType> = { [P in keyof PatternSpecType]: ValueType }

type PatternSpecAttributes<PatternSpecType> = StandardPatternSpecAttributes &
    PatternSpecPropertyMap<PatternSpecType, PatternSpecPropertyAttributes>

type PatternSpecValidationResults<PatternSpecType> = Maybe<Partial<PatternSpecPropertyMap<PatternSpecType, string>>>

type PatternSpecValidationFunction<PatternSpecType> =
    (patternSpec: PatternSpecType) => PatternSpecValidationResults<PatternSpecType>

interface PatternSpecs<PatternSpecType> extends DictionaryOf<PatternSpecType> {
    initial: PatternSpecType,
}

interface PatternSpecData<PatternSpecType> {
    specAttributes: PatternSpecAttributes<PatternSpecType>,
    specs: PatternSpecs<PatternSpecType>,
    validationFunction?: PatternSpecValidationFunction<PatternSpecType>,
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
    StandardPatternSpec,
    StandardPatternSpecProperties,
    PatternSpecValidationFunction,
    PatternSpecData,
    PatternSpecs,
    PatternSpecValidationResults,
    PatternSpecPropertyMap,
    StandardPatternSpecAttributes,
}