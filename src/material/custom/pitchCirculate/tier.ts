import { NoteSpec } from '@musical-patterns/compiler'
import { Amplitude, Cardinal, Frequency, from, Ordinal, Scalar, to } from '@musical-patterns/utilities'
import {
    applyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCount,
    applyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSize,
} from './gainCurve'
import { scalePitchScalarForTier, transposePitchIndexForTier } from './pitchCurve'

const buildTierWithTechniqueIndexTranslationByPitchClassCount:
    (part: NoteSpec[], tierIndex: Ordinal, pitchClassCount: Cardinal) => NoteSpec[] =
    (part: NoteSpec[], tierIndex: Ordinal, pitchClassCount: Cardinal): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => {
            const originalPitchIndex: Ordinal = noteSpec.pitchSpec && noteSpec.pitchSpec.index || to.Ordinal(0)
            const originalGainScalar: Scalar<Amplitude> =
                to.Amplitude(noteSpec.gainSpec && noteSpec.gainSpec.scalar || to.Scalar(1))

            const circledPitchIndex: Ordinal = transposePitchIndexForTier(
                originalPitchIndex,
                { pitchClassCount, tierIndex },
            )

            const pitchCircledGainScalar: Scalar<Amplitude> =
                applyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCount(
                    originalGainScalar,
                    { circledPitchIndex, pitchClassCount },
                )

            return {
                ...noteSpec,
                gainSpec: {
                    ...noteSpec.gainSpec,
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(pitchCircledGainScalar),
                },
                pitchSpec: {
                    ...noteSpec.pitchSpec,
                    index: circledPitchIndex,
                },
            }
        })

const buildTierWithTechniqueScalarScalingByWindowSize:
    (part: NoteSpec[], tierIndex: Ordinal, windowSize: Scalar<Frequency>) => NoteSpec[] =
    (part: NoteSpec[], tierIndex: Ordinal, windowSize: Scalar<Frequency>): NoteSpec[] =>
        part.map((noteSpec: NoteSpec): NoteSpec => {
            const originalPitchScalar: Scalar<Frequency> =
                to.Frequency(noteSpec.pitchSpec && noteSpec.pitchSpec.scalar || to.Scalar(1))
            const originalGainScalar: Scalar<Amplitude> =
                to.Amplitude(noteSpec.gainSpec && noteSpec.gainSpec.scalar || to.Scalar(1))

            const circledPitchScalar: Scalar<Frequency> = scalePitchScalarForTier(
                originalPitchScalar,
                { windowSize, tierIndex },
            )

            const pitchCircledGainScalar: Scalar<Amplitude> =
                applyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSize(
                    originalGainScalar,
                    { circledPitchScalar, windowSize },
                )

            return {
                ...noteSpec,
                gainSpec: {
                    ...noteSpec.gainSpec,
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(pitchCircledGainScalar),
                },
                pitchSpec: {
                    ...noteSpec.pitchSpec,
                    scalar: from.Frequency<Scalar, Scalar<Frequency>>(circledPitchScalar),
                },
            }
        })

export {
    buildTierWithTechniqueIndexTranslationByPitchClassCount,
    buildTierWithTechniqueScalarScalingByWindowSize,
}
