import { PropertyMap, Units } from '@musical-patterns/utilities'
import { Presentable } from '../../types'
import { Spec, StandardSpecProperties } from '../types'

enum SpecPropertyType {
    RANGED = 'RANGED',
    OPTIONED = 'OPTIONED',
    STRINGED = 'STRINGED',
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

interface StringedConstraint {
    maxLength: number,
    minLength: number,
}

interface OptionedConstraintOption extends Partial<Presentable> {
    key: string,
}

type OptionedConstraint = OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint | StringedConstraint

interface SharedSpecPropertyAttributes extends Partial<Presentable> {
    arrayedNewElementInitialValue?: string | number | boolean,
    isArrayed?: boolean,
    units?: Units,
}

interface RangedSpecPropertyAttributes extends SharedSpecPropertyAttributes {
    constraint?: RangedConstraint,
    hideInput?: RangedInputType,
    specPropertyType: SpecPropertyType.RANGED,
}

interface OptionedSpecPropertyAttributes extends SharedSpecPropertyAttributes {
    constraint: OptionedConstraint,
    specPropertyType: SpecPropertyType.OPTIONED,
}

interface StringedSpecPropertyAttributes extends SharedSpecPropertyAttributes {
    constraint: StringedConstraint,
    specPropertyType: SpecPropertyType.STRINGED,
}

interface ToggledSpecPropertyAttributes extends SharedSpecPropertyAttributes {
    constraint?: undefined,
    specPropertyType: SpecPropertyType.TOGGLED,
}

type SpecPropertyAttributes =
    RangedSpecPropertyAttributes |
    OptionedSpecPropertyAttributes |
    StringedSpecPropertyAttributes |
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
    PropertyMap<SpecType, SpecPropertyAttributes>

export {
    SpecPropertyAttributes,
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    StringedSpecPropertyAttributes,
    ToggledSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    StringedConstraint,
    Constraint,
    SpecPropertyType,
    StandardSpecAttributes,
    SpecAttributes,
    OptionedConstraintOption,
    RangedInputType,
}
