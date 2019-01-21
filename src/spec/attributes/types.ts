import { Spec, SpecPropertyMap, StandardSpecProperties } from '../types'

enum SpecPropertyType {
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

interface RangedSpecPropertyAttributes {
    constraint?: RangedConstraint,
    formattedName?: string,
    specPropertyType: SpecPropertyType.RANGED,
}

interface OptionedSpecPropertyAttributes {
    constraint: OptionedConstraint,
    formattedName?: string,
    specPropertyType: SpecPropertyType.OPTIONED,
}

interface ToggledSpecPropertyAttributes {
    constraint?: undefined,
    formattedName?: string,
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
}
