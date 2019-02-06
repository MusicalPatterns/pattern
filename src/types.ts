// tslint:disable no-magic-numbers

import { Material, NoteSpec } from '@musical-patterns/compiler'
import { Block, ContourPiece } from '@musical-patterns/utilities'
import { Id } from './registry'
import { Spec, SpecDataFor, StandardSpec } from './spec'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (blockElement: number) => ContourPiece<T>

type PitchOnly = 1 & { _PitchOnlyBrand: void }
type DurationOnly = 1 & { _DurationOnlyBrand: void }
type GainOnly = 1 & { _GainOnlyBrand: void }
type SustainOnly = 1 & { _SustainOnlyBrand: void }
type PitchDuration = 2 & { _PitchDurationBrand: void }
type PitchGain = 2 & { _PitchGainBrand: void }
type PitchSustain = 2 & { _PitchSustainBrand: void }
type DurationGain = 2 & { _DurationGainBrand: void }
type DurationSustain = 2 & { _DurationSustainBrand: void }
type GainSustain = 2 & { _GainSustainBrand: void }
type PitchDurationGain = 3 & { _PitchDurationGainBrand: void }
type PitchDurationSustain = 3 & { _PitchDurationSustainBrand: void }
type DurationGainSustain = 3 & { _DurationGainSustainBrand: void }
type PitchDurationGainSustain = 4 & { _PitchDurationGainSustainBrand: void }

interface Presentable {
    description: string,
    formattedName: string,
    order: number,
}

interface Metadata extends Partial<Presentable> {
    mostRecentPublish: string,
    musicalIdeaIllustrated: string,
    originalPublish: string,
}

interface PatternFor<SpecType> {
    id: Id,
    material: Material,
    metadata: Metadata,
    specData: SpecDataFor<SpecType>,
}

type StandardPattern = PatternFor<StandardSpec>

type Pattern = PatternFor<Spec>

type Patterns = Partial<{ [key in Id]: Pattern }>

type PatternsFilter = (patterns: Patterns) => Patterns

export {
    Segment,
    Rendering,
    RenderingByBlockElement,
    Metadata,
    Patterns,
    PatternFor,
    PatternsFilter,
    StandardPattern,
    Pattern,
    Presentable,
    PitchOnly,
    DurationOnly,
    GainOnly,
    SustainOnly,
    PitchDuration,
    PitchGain,
    PitchSustain,
    DurationGain,
    DurationSustain,
    GainSustain,
    PitchDurationGain,
    PitchDurationSustain,
    DurationGainSustain,
    PitchDurationGainSustain,
}
