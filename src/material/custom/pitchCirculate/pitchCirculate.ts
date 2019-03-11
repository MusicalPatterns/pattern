import { Note } from '@musical-patterns/compiler'
import { from, INITIAL, Ordinal, slice, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { PITCH_CIRCULAR_TIER_COUNT } from './constants'
import {
    computeTierWithTechniqueIndexTranslationByPitchClassCount,
    computeTierWithTechniqueScalarScalingByWindowSize,
} from './tier'
import { PitchCircularTechnique, PitchCirculateOptions } from './types'

const pitchCirculate: (notes: Note[], options: PitchCirculateOptions) => Note[][] =
    (notes: Note[], options: PitchCirculateOptions): Note[][] => {
        const { technique, pitchClassCount = to.Cardinal(0), windowSize = to.Scalar(to.Frequency(1)) } = options

        return slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Cardinal(PITCH_CIRCULAR_TIER_COUNT)))
            .map(to.Ordinal)
            .map((tierIndex: Ordinal): Note[] =>
                technique === PitchCircularTechnique.INDEX_TRANSLATION_BY_PITCH_CLASS_COUNT ?
                    computeTierWithTechniqueIndexTranslationByPitchClassCount(notes, tierIndex, pitchClassCount) :
                    computeTierWithTechniqueScalarScalingByWindowSize(notes, tierIndex, windowSize),
            )
    }

export {
    pitchCirculate,
}
