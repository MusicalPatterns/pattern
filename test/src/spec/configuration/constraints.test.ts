import { computeBasicOptionedConstraintFromEnum } from '../../../../src/indexForTest'
import { ExampleEnum } from '../../../support'

describe('constraints', () => {
    it('compute basic optioned constraint from enum', () => {
        expect(computeBasicOptionedConstraintFromEnum(ExampleEnum))
            .toEqual([
                {
                    value: ExampleEnum.OPTION_ONE,
                },
                {
                    value: ExampleEnum.OPTION_TWO,
                },
                {
                    value: ExampleEnum.OPTION_THREE,
                },
            ])
    })
})
