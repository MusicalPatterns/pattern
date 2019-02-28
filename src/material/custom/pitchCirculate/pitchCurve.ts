import { apply, Frequency, from, Ordinal, Scalar, to, Translation, windowReduce } from '@musical-patterns/utilities'
import { CalculateCircledPitchIndexParameters, CalculateCircledPitchScalarParameters } from './types'

const transposePitchIndexForTier:
    (originalPitchIndex: Ordinal, parameters: CalculateCircledPitchIndexParameters) => Ordinal =
    (originalPitchIndex: Ordinal, { pitchClassCount, tierIndex }: CalculateCircledPitchIndexParameters): Ordinal => {
        const pitchIndexWrappedWithinPitchClassCountToRemoveOriginalWindowLocationInformation: Ordinal = apply.Modulus(
            originalPitchIndex,
            to.Modulus(from.Cardinal(pitchClassCount)),
        )

        const baseTierTransposition: Translation = to.Translation(from.Ordinal(apply.Scalar(
            tierIndex,
            to.Scalar(from.Cardinal(pitchClassCount)),
        )))

        return apply.Translation(
            pitchIndexWrappedWithinPitchClassCountToRemoveOriginalWindowLocationInformation,
            baseTierTransposition,
        )
    }

const scalePitchScalarForTier:
    (originalPitchScalar: Scalar<Frequency>, parameters: CalculateCircledPitchScalarParameters) => Scalar<Frequency> =
    (originalPitchScalar: Scalar<Frequency>, parameters: CalculateCircledPitchScalarParameters): Scalar<Frequency> => {
        const { windowSize, tierIndex } = parameters
        const pitchScalarReducedWithinWindowSizeToRemoveWindowLocationInformation: Scalar<Frequency> = windowReduce(
            originalPitchScalar,
            windowSize,
        )

        const baseTierScaling: Scalar<Frequency> = apply.Power(windowSize, to.Power(from.Ordinal(tierIndex)))

        return apply.Scalar(
            pitchScalarReducedWithinWindowSizeToRemoveWindowLocationInformation,
            baseTierScaling,
        )
    }

export {
    scalePitchScalarForTier,
    transposePitchIndexForTier,
}
