import {
    ComputeValidations,
    Configurations,
    InputType,
    validateSpecs,
    Validations,
    ValidationsResult,
} from '../../../../src/indexForTest'
import { MinimumTestableSpec } from './types'

const EXPECTED_CUSTOM_VALIDATION_MESSAGE: string = 'cannot be six'

describe('validation of specs', () => {
    it('works when one spec is invalid due to a basic constraint', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
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
        const { shouldSubmitUpdateToSpecTriggeringValidation, validations }: ValidationsResult<MinimumTestableSpec> =
            validateSpecs({
                computeValidations: undefined,
                configurations,
                displayedSpecs: {
                    justChangedSpec: 6,
                    otherSpec: 5,
                },
                keyOfSpecTriggeringValidation: 'justChangedSpec',
            })

        expect(shouldSubmitUpdateToSpecTriggeringValidation)
            .toBeFalsy()
        expect(validations)
            .toEqual({
                justChangedSpec: 'must be less than or equal to 5',
                otherSpec: undefined,
            })
    })

    it('works when one spec is invalid due to a custom validation', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
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
        const { shouldSubmitUpdateToSpecTriggeringValidation, validations }: ValidationsResult<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations,
                configurations,
                displayedSpecs: {
                    justChangedSpec: 6,
                    otherSpec: 5,
                },
                keyOfSpecTriggeringValidation: 'justChangedSpec',
            })

        expect(shouldSubmitUpdateToSpecTriggeringValidation)
            .toBeFalsy()
        expect(validations)
            .toEqual({
                justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                otherSpec: undefined,
            })
    })

    it('works when one spec is invalid due to a basic constraint and another is invalid due to a custom validation', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
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
        const { shouldSubmitUpdateToSpecTriggeringValidation, validations }: ValidationsResult<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations,
                configurations,
                displayedSpecs: {
                    justChangedSpec: 6,
                    otherSpec: 4,
                },
                keyOfSpecTriggeringValidation: 'justChangedSpec',
            })

        expect(shouldSubmitUpdateToSpecTriggeringValidation)
            .toBeFalsy()
        expect(validations)
            .toEqual({
                justChangedSpec: EXPECTED_CUSTOM_VALIDATION_MESSAGE,
                otherSpec: 'must be greater than or equal to 5',
            })
    })

    it('works when two specs are invalid due to basic constraints', () => {
        const configurations: Configurations<MinimumTestableSpec> = {
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
        const { shouldSubmitUpdateToSpecTriggeringValidation, validations }: ValidationsResult<MinimumTestableSpec> =
            validateSpecs<MinimumTestableSpec>({
                computeValidations: undefined,
                configurations,
                displayedSpecs: {
                    justChangedSpec: 6,
                    otherSpec: 4,
                },
                keyOfSpecTriggeringValidation: 'justChangedSpec',
            })

        expect(shouldSubmitUpdateToSpecTriggeringValidation)
            .toBeFalsy()
        expect(validations)
            .toEqual({
                justChangedSpec: 'must be less than or equal to 5',
                otherSpec: 'must be greater than or equal to 5',
            })
    })
})
