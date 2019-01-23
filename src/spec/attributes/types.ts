import { Spec, SpecPropertyMap, StandardSpecProperties } from '../types'

enum SpecPropertyType {
    RANGED = 'RANGED',
    OPTIONED = 'OPTIONED',
    TOGGLED = 'TOGGLED',
}

enum RangedInputType {
    NUMBER = 'NUMBER',
    RANGE = 'RANGE',
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

interface SharedSpecPropertyAttributes {
    description?: string,
    formattedName?: string,
    isArray?: boolean,
    units?: string,
}

interface RangedSpecPropertyAttributes extends SharedSpecPropertyAttributes{
    constraint?: RangedConstraint,
    hideInput?: RangedInputType,
    specPropertyType: SpecPropertyType.RANGED,
}

interface OptionedSpecPropertyAttributes extends SharedSpecPropertyAttributes {
    constraint: OptionedConstraint,
    specPropertyType: SpecPropertyType.OPTIONED,
}

interface ToggledSpecPropertyAttributes extends SharedSpecPropertyAttributes{
    constraint?: undefined,
    specPropertyType: SpecPropertyType.TOGGLED,
}

type SpecPropertyAttributes =
    RangedSpecPropertyAttributes |
    OptionedSpecPropertyAttributes |
    ToggledSpecPropertyAttributes

interface StandardSpecAttributes {
    [ StandardSpecProperties.DURATION_OFFSET ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_DURATION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.FREQUENCY_OFFSET ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_FREQUENCY ]: RangedSpecPropertyAttributes,
}

type SpecAttributesFor<SpecType> = StandardSpecAttributes &
    SpecPropertyMap<SpecType, SpecPropertyAttributes>

type SpecAttributes = SpecAttributesFor<Spec>

export {
    SpecAttributesFor,
    SpecPropertyAttributes,
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    ToggledSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    Constraint,
    SpecPropertyType,
    StandardSpecAttributes,
    SpecAttributes,
    OptionedConstraintOption,
    RangedInputType,
}
