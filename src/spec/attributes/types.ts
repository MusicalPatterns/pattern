import { AnyPatternSpec, PatternSpecPropertyMap, StandardPatternSpecProperties } from '../types'

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

interface OptionedConstraintOption {
    formattedName: string,
    key: string,
}

type OptionedConstraint = OptionedConstraintOption[]

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

type StandardPatternSpecAttributes = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
}>

type PatternSpecAttributes<PatternSpecType> = StandardPatternSpecAttributes &
    PatternSpecPropertyMap<PatternSpecType, PatternSpecPropertyAttributes>

type AnyPatternSpecAttributes = PatternSpecAttributes<AnyPatternSpec>

export {
    PatternSpecAttributes,
    PatternSpecPropertyAttributes,
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    Constraint,
    PatternSpecPropertyType,
    StandardPatternSpecAttributes,
    AnyPatternSpecAttributes,
    OptionedConstraintOption,
}
