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
import { Spec, StandardProperty } from '../spec'
import { BuildScalesOptions } from './types'

const buildNonScale: () => Scale =
    (): Scale => ({})

const buildHarmonicSeriesScale: () => Scale =
    (): Scale => ({
        scalars: positiveIntegers.map((integer: Integer): Scalar => to.Scalar(integer)),
    })

const buildSubharmonicSeriesScale: () => Scale =
    (): Scale => ({
        scalars: positiveIntegers.map((integer: Integer): Scalar => to.Scalar(reciprocal(integer))),
    })

const buildFlatDurationsScale: () => Scale =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    (): Scale =>
        buildHarmonicSeriesScale()

const buildOctaveSeriesScale: () => Scale =
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

const buildStandardScales: (spec: Spec, options?: BuildScalesOptions) => Scale[] =
    (spec: Spec, { durationScalars, pitchScalars }: BuildScalesOptions = {}): Scale[] => {
        const gainScale: Scale = buildNonScale()
        const durationScalar: Scalar =
            from.Ms(spec[ StandardProperty.BASE_DURATION ] || to.Scalar(to.Ms(1)))
        const durationTranslation: Translation =
            from.Ms(spec[ StandardProperty.DURATION_TRANSLATION ] || to.Ms(NO_TRANSLATION))
        const durationsScale: Scale = {
            scalar: durationScalar,
            scalars: durationScalars,
            translation: durationTranslation,
        }
        const pitchesScalar: Scalar =
            from.Hz(spec[ StandardProperty.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const pitchesTranslation: Translation =
            from.Hz(spec[ StandardProperty.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))
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
    buildStandardScales,
    buildNonScale,
    buildFlatDurationsScale,
    buildHarmonicSeriesScale,
    buildOctaveSeriesScale,
    buildSubharmonicSeriesScale,
}
