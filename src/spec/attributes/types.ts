import { DomValueOrChecked, KeyMap, Units } from '@musical-patterns/utilities'
import { Presentable } from '../../types'
import { Spec, StandardProperties } from '../types'

enum PropertyType {
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
    maxLength?: number,
    minLength?: number,
}

interface OptionedConstraintOption extends Partial<Presentable> {
    key: string,
}

type OptionedConstraint = OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint | StringedConstraint

interface SharedPropertyAttributes extends Partial<Presentable> {
    arrayedNewFieldInitialValue?: DomValueOrChecked,
    isArrayed?: boolean,
    units?: Units,
}

interface RangedPropertyAttributes extends SharedPropertyAttributes {
    constraint?: RangedConstraint,
    hideInput?: RangedInputType,
    propertyType: PropertyType.RANGED,
}

interface OptionedPropertyAttributes extends SharedPropertyAttributes {
    constraint: OptionedConstraint,
    propertyType: PropertyType.OPTIONED,
}

interface StringedPropertyAttributes extends SharedPropertyAttributes {
    constraint?: StringedConstraint,
    propertyType: PropertyType.STRINGED,
}

interface ToggledPropertyAttributes extends SharedPropertyAttributes {
    constraint?: undefined,
    propertyType: PropertyType.TOGGLED,
}

type PropertyAttributes =
    RangedPropertyAttributes |
    OptionedPropertyAttributes |
    StringedPropertyAttributes |
    ToggledPropertyAttributes

interface StandardAttributes {
    [ StandardProperties.DURATION_TRANSLATION ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_DURATION ]: RangedPropertyAttributes,
    [ StandardProperties.FREQUENCY_TRANSLATION ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_FREQUENCY ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_POSITION ]: RangedPropertyAttributes,
    [ StandardProperties.BASE_POSITION_SCALAR ]: RangedPropertyAttributes,
}

// tslint:disable-next-line no-useless-intersection
type Attributes<SpecType = Spec> = StandardAttributes &
    KeyMap<SpecType, PropertyAttributes>

export {
    PropertyAttributes,
    OptionedPropertyAttributes,
    RangedPropertyAttributes,
    StringedPropertyAttributes,
    ToggledPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    StringedConstraint,
    Constraint,
    PropertyType,
    StandardAttributes,
    Attributes,
    OptionedConstraintOption,
    RangedInputType,
}
