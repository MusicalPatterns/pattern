import { Scale } from '@musical-patterns/compiler'
import { Maybe, Scalar } from '@musical-patterns/utilities'
import { SpecPitchAdjustments } from './types'

const adjustScalars: (scalars: Maybe<Scalar[]>, spec: SpecPitchAdjustments) => Scale =
    (scalars: Maybe<Scalar[]>, { patternPitchScalar, patternPitchOffset }: SpecPitchAdjustments): Scale => ({
        offset: patternPitchOffset,
        scalar: patternPitchScalar,
        scalars,
    })

export {
    adjustScalars,
}
