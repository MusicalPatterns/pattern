import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    from,
    Index,
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
        for (
            let i: Index = to.Index(0);
            from.Index(i) < from.Count(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            i = apply.Offset(i, to.Offset(1))
        ) {
            octaveRepeatingScalars = octaveRepeatingScalars.concat(scalars.map((scalar: Scalar): Scalar =>
                apply.Scalar(scalar, to.Scalar(from.Base(apply.Power(OCTAVE, to.Power(from.Index(i))))))))
        }

        return octaveRepeatingScalars
    }

export {
    adjustScalars,
    generateOctaveRepeatingScalars,
}
