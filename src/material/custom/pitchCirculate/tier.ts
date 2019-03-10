import { Note } from '@musical-patterns/compiler'
import { Amplitude, Cardinal, Frequency, from, Ordinal, Scalar, to } from '@musical-patterns/utilities'
import {
    applyPitchCircularGainCurveWithTechniqueIndexTranslationByPitchClassCount,
    applyPitchCircularGainCurveWithTechniqueScalarScalingByWindowSize,
} from './gainCurve'
import { scalePitchScalarForTier, transposePitchIndexForTier } from './pitchCurve'

const buildTierWithTechniqueIndexTranslationByPitchClassCount:
    (notes: Note[], tierIndex: Ordinal, pitchClassCount: Cardinal) => Note[] =
    (notes: Note[], tierIndex: Ordinal, pitchClassCount: Cardinal): Note[] =>
        notes.map((note: Note): Note => {
            const originalPitchIndex: Ordinal = note.pitch && note.pitch.index || to.Ordinal(0)
            const originalGainScalar: Scalar<Amplitude> =
                to.Amplitude(note.gain && note.gain.scalar || to.Scalar(1))

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
                ...note,
                gain: {
                    ...note.gain,
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(pitchCircledGainScalar),
                },
                pitch: {
                    ...note.pitch,
                    index: circledPitchIndex,
                },
            }
        })

const buildTierWithTechniqueScalarScalingByWindowSize:
    (notes: Note[], tierIndex: Ordinal, windowSize: Scalar<Frequency>) => Note[] =
    (notes: Note[], tierIndex: Ordinal, windowSize: Scalar<Frequency>): Note[] =>
        notes.map((note: Note): Note => {
            const originalPitchScalar: Scalar<Frequency> =
                to.Frequency(note.pitch && note.pitch.scalar || to.Scalar(1))
            const originalGainScalar: Scalar<Amplitude> =
                to.Amplitude(note.gain && note.gain.scalar || to.Scalar(1))

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
                ...note,
                gain: {
                    ...note.gain,
                    scalar: from.Amplitude<Scalar, Scalar<Amplitude>>(pitchCircledGainScalar),
                },
                pitch: {
                    ...note.pitch,
                    scalar: from.Frequency<Scalar, Scalar<Frequency>>(circledPitchScalar),
                },
            }
        })

export {
    buildTierWithTechniqueIndexTranslationByPitchClassCount,
    buildTierWithTechniqueScalarScalingByWindowSize,
}
