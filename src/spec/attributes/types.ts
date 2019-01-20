import { PatternSpec, PatternSpecPropertyMap, StandardPatternSpecProperties } from '../types'

enum PatternSpecPropertyType {
    RANGED = 'RANGED',
    OPTIONED = 'OPTIONED',
    TOGGLED = 'TOGGLED',
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

interface ToggledPatternSpecPropertyAttributes {
    constraint?: undefined,
    formattedName?: string,
    patternSpecPropertyType: PatternSpecPropertyType.TOGGLED,
}

type PatternSpecPropertyAttributes =
    RangedPatternSpecPropertyAttributes |
    OptionedPatternSpecPropertyAttributes |
    ToggledPatternSpecPropertyAttributes

type StandardPatternSpecAttributes = Partial<{
    [ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ]: RangedPatternSpecPropertyAttributes,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: RangedPatternSpecPropertyAttributes,
}>

type PatternSpecAttributesFor<PatternSpecType> = StandardPatternSpecAttributes &
    PatternSpecPropertyMap<PatternSpecType, PatternSpecPropertyAttributes>

type PatternSpecAttributes = PatternSpecAttributesFor<PatternSpec>

export {
    PatternSpecAttributesFor,
    PatternSpecPropertyAttributes,
    OptionedPatternSpecPropertyAttributes,
    RangedPatternSpecPropertyAttributes,
    ToggledPatternSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    Constraint,
    PatternSpecPropertyType,
    StandardPatternSpecAttributes,
    PatternSpecAttributes,
    OptionedConstraintOption,
}
