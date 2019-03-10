import { HtmlValueOrChecked, KeyMap, Units } from '@musical-patterns/utilities'
import { Presentable } from '../../types'
import { Spec, StandardProperty } from '../types'

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

interface OptionedConstraintOption extends Presentable {
    key: string,
}

type OptionedConstraint = OptionedConstraintOption[]

type Constraint = RangedConstraint | OptionedConstraint | StringedConstraint

interface SharedPropertyAttributes extends Presentable {
    arrayedNewFieldInitialValue?: HtmlValueOrChecked,
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
    [ StandardProperty.DURATION_TRANSLATION ]: RangedPropertyAttributes,
    [ StandardProperty.BASE_DURATION ]: RangedPropertyAttributes,
    [ StandardProperty.FREQUENCY_TRANSLATION ]: RangedPropertyAttributes,
    [ StandardProperty.BASE_FREQUENCY ]: RangedPropertyAttributes,
    [ StandardProperty.BASE_POSITION ]: RangedPropertyAttributes,
    [ StandardProperty.BASE_POSITION_SCALAR ]: RangedPropertyAttributes,
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
