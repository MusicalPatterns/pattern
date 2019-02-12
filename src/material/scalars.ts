import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    Base,
    from,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    Maybe,
    NEXT,
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
            let index: Ordinal = INITIAL;
            from.Ordinal(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, NEXT)
        ) {
            const nextOctave: Base = apply.Power(OCTAVE, to.Power(from.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar): Scalar =>
                    apply.Scalar(
                        scalar,
                        // @ts-ignore
                        to.Scalar(from.Base(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    adjustScalars,
    generateOctaveRepeatingScalars,
}
