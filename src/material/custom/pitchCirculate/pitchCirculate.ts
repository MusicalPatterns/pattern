import { NoteSpec } from '@musical-patterns/compiler'
import { from, INITIAL, Ordinal, slice, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { PITCH_CIRCULAR_TIER_COUNT } from './constants'
import {
    buildTierWithTechniqueIndexTranslationByPitchClassCount,
    buildTierWithTechniqueScalarScalingByWindowSize,
} from './tier'
import { PitchCircularTechnique, PitchCirculateOptions } from './types'

const pitchCirculate: (part: NoteSpec[], options: PitchCirculateOptions) => NoteSpec[][] =
    (part: NoteSpec[], options: PitchCirculateOptions): NoteSpec[][] => {
        const { technique, pitchClassCount = to.Cardinal(0), windowSize = to.Scalar(to.Frequency(1)) } = options

        return slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Cardinal(PITCH_CIRCULAR_TIER_COUNT)))
            .map(to.Ordinal)
            .map((tierIndex: Ordinal): NoteSpec[] =>
                technique === PitchCircularTechnique.INDEX_TRANSLATION_BY_PITCH_CLASS_COUNT ?
                    buildTierWithTechniqueIndexTranslationByPitchClassCount(part, tierIndex, pitchClassCount) :
                    buildTierWithTechniqueScalarScalingByWindowSize(part, tierIndex, windowSize),
            )
    }

export {
    pitchCirculate,
}
