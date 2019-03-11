import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    from,
    Integer,
    NO_TRANSLATION,
    OCTAVE,
    positiveIntegers,
    Power,
    reciprocal,
    Scalar,
    to,
    Translation,
    zeroAndPositiveIntegers,
} from '@musical-patterns/utilities'
import { Specs, StandardSpec } from '../spec'
import { MaterializeStandardScalesOptions } from './types'

const computeNonScale: () => Scale =
    (): Scale => ({})

const computeHarmonicSeriesScale: () => Scale =
    (): Scale => ({
        scalars: positiveIntegers.map((integer: Integer): Scalar => to.Scalar(integer)),
    })

const computeSubharmonicSeriesScale: () => Scale =
    (): Scale => ({
        scalars: positiveIntegers.map((integer: Integer): Scalar => to.Scalar(reciprocal(integer))),
    })

const computeFlatDurationsScale: () => Scale =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    (): Scale =>
        computeHarmonicSeriesScale()

const computeOctaveSeriesScale: () => Scale =
    (): Scale => ({
        scalars: zeroAndPositiveIntegers
            .map(to.Power)
            .map((power: Power): Scalar =>
                to.Scalar(from.Base(apply.Power(
                    OCTAVE,
                    power,
                ))),
            ),
    })

const materializeStandardScales: (specs: Specs, options?: MaterializeStandardScalesOptions) => Scale[] =
    (specs: Specs, { durationScalars, pitchScalars }: MaterializeStandardScalesOptions = {}): Scale[] => {
        const gainScale: Scale = computeNonScale()
        const durationScalar: Scalar =
            from.Ms(specs[ StandardSpec.BASE_DURATION ] || to.Scalar(to.Ms(1)))
        const durationTranslation: Translation =
            from.Ms(specs[ StandardSpec.DURATION_TRANSLATION ] || to.Ms(NO_TRANSLATION))
        const durationsScale: Scale = {
            scalar: durationScalar,
            scalars: durationScalars,
            translation: durationTranslation,
        }
        const pitchesScalar: Scalar =
            from.Hz(specs[ StandardSpec.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const pitchesTranslation: Translation =
            from.Hz(specs[ StandardSpec.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))
        const pitchesScale: Scale = {
            scalar: pitchesScalar,
            scalars: pitchScalars,
            translation: pitchesTranslation,
        }

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    materializeStandardScales,
    computeNonScale,
    computeFlatDurationsScale,
    computeHarmonicSeriesScale,
    computeOctaveSeriesScale,
    computeSubharmonicSeriesScale,
}
