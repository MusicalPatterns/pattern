import { Scale } from '@musical-patterns/compiler'
import { Maybe, Scalar } from '@musical-patterns/utilities'
import { PatternSpecPitchAdjustments } from './types'

const adjustScalars: (scalars: Maybe<Scalar[]>, patternSpec: PatternSpecPitchAdjustments) => Scale =
    (scalars: Maybe<Scalar[]>, { patternPitchScalar, patternPitchOffset }: PatternSpecPitchAdjustments): Scale => ({
        offset: patternPitchOffset,
        scalar: patternPitchScalar,
        scalars,
    })

export {
    adjustScalars,
}
