import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    from,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    Maybe,
    OCTAVE,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { SpecPitchAdjustments } from './types'

const adjustScalars: (scalars: Maybe<Scalar[]>, spec: SpecPitchAdjustments) => Scale =
    (scalars: Maybe<Scalar[]>, { patternPitchScalar, patternPitchOffset }: SpecPitchAdjustments): Scale => ({
        offset: patternPitchOffset,
        scalar: patternPitchScalar,
        scalars,
    })

const generateOctaveRepeatingScalars: (scalars: Scalar[]) => Scalar[] =
    (scalars: Scalar[]): Scalar[] => {
        let octaveRepeatingScalars: Scalar[] = []
        for (let i: number = 0; i < MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS; i += 1) {
            octaveRepeatingScalars = octaveRepeatingScalars.concat(scalars.map((scalar: Scalar): Scalar =>
                apply.Scalar(scalar, to.Scalar(from.Base(apply.Power(OCTAVE, to.Power(i)))))))
        }

        return octaveRepeatingScalars
    }

export {
    adjustScalars,
    generateOctaveRepeatingScalars,
}
