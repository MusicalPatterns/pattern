import { apply, DOUBLE, Frequency, from, Ordinal, Power, Scalar, SQUARED, to } from '@musical-patterns/utilities'
import { KINDA_GUESSING_AT_A_GOOD_SIGMA, NEGATIVE_POINT_FIVE_TRANSLATION, PITCH_CIRCULAR_TIER_COUNT } from './constants'
import {
    ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters,
    ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters,
} from './types'

const calculateNumeratorOfPowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount:
    (parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters) => number =
    (parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters): number => {
        const { pitchClassCount, circledPitchIndex } = parameters
        const maximumPitchAcrossAllTiers: Ordinal = to.Ordinal(from.Cardinal(apply.Scalar(
            pitchClassCount,
            to.Scalar(from.Cardinal(PITCH_CIRCULAR_TIER_COUNT)),
        )))
        const circledPitchIndexProportionOfTotalPitchCount: number = circledPitchIndex / maximumPitchAcrossAllTiers
        const pitchProportionOfTotalTranslatedToBePositiveIfGreaterThanMedianAndNegativeIfLesser: number =
            apply.Translation(circledPitchIndexProportionOfTotalPitchCount, NEGATIVE_POINT_FIVE_TRANSLATION)
        const pitchProportionOfTotalScaledToBeBetweenNegativeAndPositiveOne: number = apply.Scalar(
            pitchProportionOfTotalTranslatedToBePositiveIfGreaterThanMedianAndNegativeIfLesser,
            DOUBLE,
        )

        return apply.Power(
            pitchProportionOfTotalScaledToBeBetweenNegativeAndPositiveOne,
            SQUARED,
        )
    }

const calculateNumeratorOfPowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize:
    (parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters) => number =
    (parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters): number => {
        const { windowSize, circledPitchScalar } = parameters
        const maximumPitchAcrossAllTiers: Scalar<Frequency> = apply.Power(
            windowSize,
            to.Power(from.Cardinal(PITCH_CIRCULAR_TIER_COUNT)),
        )
        const circledPitchScalarProportionOfTotalPitchCount: number = from.Scalar(apply.Base(
            circledPitchScalar,
            // @ts-ignore
            to.Base(from.Scalar(from.Frequency(maximumPitchAcrossAllTiers))),
        ))
        const pitchProportionOfTotalTranslatedToBePositiveIfGreaterThanMedianAndNegativeIfLesser: number =
            apply.Translation(circledPitchScalarProportionOfTotalPitchCount, NEGATIVE_POINT_FIVE_TRANSLATION)
        const pitchProportionOfTotalScaledToBeBetweenNegativeAndPositiveOne: number = apply.Scalar(
            pitchProportionOfTotalTranslatedToBePositiveIfGreaterThanMedianAndNegativeIfLesser,
            DOUBLE,
        )

        return apply.Power(
            pitchProportionOfTotalScaledToBeBetweenNegativeAndPositiveOne,
            SQUARED,
        )
    }

const calculatePowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount:
    (parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters) => Power =
    (parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters): Power =>
        to.Power(
            calculateNumeratorOfPowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount(parameters) /
            from.Base(apply.Scalar(apply.Power(KINDA_GUESSING_AT_A_GOOD_SIGMA, SQUARED), DOUBLE)),
        )

const calculatePowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize:
    (parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters) => Power =
    (parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters): Power =>
        to.Power(
            calculateNumeratorOfPowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize(parameters) /
            from.Base(apply.Scalar(apply.Power(KINDA_GUESSING_AT_A_GOOD_SIGMA, SQUARED), DOUBLE)),
        )

export {
    calculatePowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount,
    calculatePowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize,
}
