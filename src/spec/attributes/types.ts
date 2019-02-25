import { Units } from '@musical-patterns/utilities'
import { Presentable } from '../../types'
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

interface OptionedConstraintOption extends Partial<Presentable> {
    key: string,
}

type OptionedConstraint = OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint

interface SharedSpecPropertyAttributes extends Partial<Presentable> {
    isArrayed?: boolean,
    units?: Units,
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
    [ StandardSpecProperties.DURATION_TRANSLATION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_DURATION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.FREQUENCY_TRANSLATION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_FREQUENCY ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_POSITION ]: RangedSpecPropertyAttributes,
    [ StandardSpecProperties.BASE_POSITION_SCALAR ]: RangedSpecPropertyAttributes,
}

// tslint:disable-next-line no-useless-intersection
type SpecAttributes<SpecType = Spec> = StandardSpecAttributes &
    SpecPropertyMap<SpecType, SpecPropertyAttributes>

export {
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
