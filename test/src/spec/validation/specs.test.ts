import {
    ComputeValidations,
    Configurations,
    InputType,
    validateSpecs,
    Validations,
} from '../../../../src/indexForTest'
import { MinimumTestableSpec } from '../../../support'

const EXPECTED_CUSTOM_VALIDATION_MESSAGE: string = 'cannot be six'

describe('validation of specs', () => {
    it('works when one spec is invalid due to a basic constraint', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
            arrayedSpec: {
                inputType: InputType.RANGED,
            },
            justChangedSpec: {
                constraint: {
                    max: 5,
                },
                inputType: InputType.RANGED,
            },
            otherSpec: {
                inputType: InputType.RANGED,
            },
        }
        const validations: Validations<MinimumTestableSpec> =
            validateSpecs({
                computeValidations: undefined,
                configurations,
                displayedSpecs: {
                    arrayedSpec: [],
                    justChangedSpec: 6,
                    otherSpec: 5,
                },
            })

        expect(validations)
            .toEqual({
                arrayedSpec: undefined,
                justChangedSpec: 'must be less than or equal to 5',
                otherSpec: undefined,
            })
    })

    it('works when one spec is invalid due to a custom validation', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
            arrayedSpec: {
                inputType: InputType.RANGED,
            },
            justChangedSpec: {
                inputType: InputType.RANGED,
            },
            otherSpec: {
                inputType: InputType.RANGED,
            },
        }
        const computeValidations: ComputeValidations<MinimumTestableSpec> =
            (spec: MinimumTestableSpec): Validations<MinimumTestableSpec> => {
                if (spec.justChangedSpec === 6) {
                    return {
                        justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                    }
                }

                return undefined
            }
        const validations: Validations<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations,
                configurations,
                displayedSpecs: {
                    arrayedSpec: [],
                    justChangedSpec: 6,
                    otherSpec: 5,
                },
            })

        expect(validations)
            .toEqual({
                arrayedSpec: undefined,
                justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                otherSpec: undefined,
            })
    })

    it('works when one spec is invalid due to a basic constraint and another is invalid due to a custom validation', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
            arrayedSpec: {
                inputType: InputType.RANGED,
            },
            justChangedSpec: {
                inputType: InputType.RANGED,
            },
            otherSpec: {
                constraint: {
                    min: 5,
                },
                inputType: InputType.RANGED,
            },
        }
        const computeValidations: ComputeValidations<MinimumTestableSpec> =
            (spec: MinimumTestableSpec): Validations<MinimumTestableSpec> => {
                if (spec.justChangedSpec === 6) {
                    return {
                        justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                    }
                }

                return undefined
            }
        const validations: Validations<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations,
                configurations,
                displayedSpecs: {
                    arrayedSpec: [],
                    justChangedSpec: 6,
                    otherSpec: 4,
                },
            })

        expect(validations)
            .toEqual({
                arrayedSpec: undefined,
                justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                otherSpec: 'must be greater than or equal to 5',
            })
    })

    it('works when two specs are invalid due to basic constraints', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
            arrayedSpec: {
                inputType: InputType.RANGED,
            },
            justChangedSpec: {
                constraint: {
                    max: 5,
                },
                inputType: InputType.RANGED,
            },
            otherSpec: {
                constraint: {
                    min: 5,
                },
                inputType: InputType.RANGED,
            },
        }
        const validations: Validations<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations: undefined,
                configurations,
                displayedSpecs: {
                    arrayedSpec: [],

                    justChangedSpec: 6,
                    otherSpec: 4,
                },
            })

        expect(validations)
            .toEqual({
                arrayedSpec: undefined,
                justChangedSpec: 'must be less than or equal to 5',
                otherSpec: 'must be greater than or equal to 5',
            })
    })

    it('works when a spec is invalid due to an arrayed constraint', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
            arrayedSpec: {
                arrayedConstraint: {
                    minLength: 3,
                },
                inputType: InputType.RANGED,
                isArrayed: true,
            },
            justChangedSpec: {
                inputType: InputType.RANGED,
            },
            otherSpec: {
                inputType: InputType.RANGED,
            },
        }
        const validations: Validations<MinimumTestableSpec> =
            validateSpecs({
                computeValidations: undefined,
                configurations,
                displayedSpecs: {
                    arrayedSpec: [ 2, 2 ],
                    justChangedSpec: 6,
                    otherSpec: 5,
                },
            })

        expect(validations)
            .toEqual({
                arrayedSpec: [
                  'minimum length for this arrayed control is 3',
                  'minimum length for this arrayed control is 3',
                ],
                justChangedSpec: undefined,
                otherSpec: undefined,
            })
    })
})
