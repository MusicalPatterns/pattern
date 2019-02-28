import { Amplitude, apply, E, from, negative, ONE_HALF, Power, Scalar, to } from '@musical-patterns/utilities'
import {
    calculatePowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount,
    calculatePowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize,
} from './normalDistributionPower'
import {
    ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters,
    ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters,
} from './types'

const applyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCount:
    (
        originalGainScalar: Scalar<Amplitude>,
        parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters,
    ) => Scalar<Amplitude> =
    (
        originalGainScalar: Scalar<Amplitude>,
        parameters: ApplyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCountParameters,
    ): Scalar<Amplitude> => {
        const normalDistributionPower: Power =
            calculatePowerOfNormalDistributionWithTechniqueIndexTranslationByPitchClassCount(parameters)

        const pitchCircularScaling: Scalar = to.Scalar(from.Base(apply.Power(
            E,
            negative(apply.Scalar(normalDistributionPower, ONE_HALF)),
        )))

        return apply.Scalar(originalGainScalar, pitchCircularScaling)
    }

const applyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSize:
    (
        originalGainScalar: Scalar<Amplitude>,
        parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters,
    ) => Scalar<Amplitude> =
    (
        originalGainScalar: Scalar<Amplitude>,
        parameters: ApplyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSizeParameters,
    ): Scalar<Amplitude> => {
        const normalDistributionPower: Power =
            calculatePowerOfNormalDistributionWithTechniqueScalarScalingByWindowSize(parameters)

        const pitchCircularScaling: Scalar = to.Scalar(from.Base(apply.Power(
            E,
            negative(apply.Scalar(normalDistributionPower, ONE_HALF)),
        )))

        return apply.Scalar(originalGainScalar, pitchCircularScaling)
    }

export {
    applyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCount,
    applyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSize,
}
