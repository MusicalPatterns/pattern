import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    from,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    Maybe,
    OCTAVE,
    Ordinal,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { SpecPitchAdjustments } from './types'

const adjustScalars: (scalars: Maybe<Scalar[]>, spec: SpecPitchAdjustments) => Scale =
    (scalars: Maybe<Scalar[]>, { patternPitchScalar, patternPitchTranslation }: SpecPitchAdjustments): Scale => ({
        scalar: patternPitchScalar,
        scalars,
        translation: patternPitchTranslation,
    })

const generateOctaveRepeatingScalars: (scalars: Scalar[]) => Scalar[] =
    (scalars: Scalar[]): Scalar[] => {
        let octaveRepeatingScalars: Scalar[] = []
        for (
            let index: Ordinal = to.Ordinal(0);
            from.Ordinal(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, to.Translation(1))
        ) {
            octaveRepeatingScalars = octaveRepeatingScalars.concat(scalars.map((scalar: Scalar): Scalar =>
                apply.Scalar(scalar, to.Scalar(from.Base(apply.Power(OCTAVE, to.Power(from.Ordinal(index))))))))
        }

        return octaveRepeatingScalars
    }

export {
    adjustScalars,
    generateOctaveRepeatingScalars,
}
