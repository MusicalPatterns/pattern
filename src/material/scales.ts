import { Scale } from '@musical-patterns/compiler'
import {
    apply,
    DictionaryOf,
    from,
    numbers,
    OCTAVE,
    offsetFromOneIndexedToZeroIndexed,
    Power,
    Scalar,
    to,
} from '@musical-patterns/utilities'

const buildStandardScales: () => DictionaryOf<Scale> =
    (): DictionaryOf<Scale> => {
        const subharmonicSeriesScale: Scale = {
            scalars: numbers.map((n: number): Scalar => to.Scalar(1 / n)),
        }

        const harmonicSeriesScale: Scale = {
            scalars: numbers.map((n: number): Scalar => to.Scalar(n)),
        }

        const flatDurationsScale: Scale = harmonicSeriesScale

        const octaveSeriesScale: Scale = {
            scalars: numbers
                .map(to.Power)
                .map((power: Power): Scalar =>
                    to.Scalar(from.Base(apply.Power(
                        OCTAVE,
                        to.Power(from.Index(offsetFromOneIndexedToZeroIndexed(to.Index(from.Power(power))))),
                    ))),
                ),
        }

        const nonScale: Scale = {}

        return {
            flatDurationsScale,
            harmonicSeriesScale,
            nonScale,
            octaveSeriesScale,
            subharmonicSeriesScale,
        }
    }

export {
    buildStandardScales,
}
