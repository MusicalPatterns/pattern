// tslint:disable no-magic-numbers max-file-line-count

import { Material, NoteSpec } from '@musical-patterns/compiler'
import { Block, ContourPiece } from '@musical-patterns/utilities'
import { Id } from './registry'
import { Spec, SpecDataFor, StandardSpec } from './spec'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (cell: number) => ContourPiece<T>

type PitchOnly = 1 & { _PitchOnlyBrand: void }
type DurationOnly = 1 & { _DurationOnlyBrand: void }
type GainOnly = 1 & { _GainOnlyBrand: void }
type SustainOnly = 1 & { _SustainOnlyBrand: void }
type PositionOnly = 1 & { _PositionOnlyBrand: void }
type ScaleOnly = 1 & { _ScaleOnlyBrand: void }
type PitchDuration = 2 & { _PitchDurationBrand: void }
type PitchGain = 2 & { _PitchGainBrand: void }
type PitchSustain = 2 & { _PitchSustainBrand: void }
type PitchPosition = 2 & { _PitchPositionBrand: void }
type PitchScale = 2 & { _PitchScaleBrand: void }
type DurationGain = 2 & { _DurationGainBrand: void }
type DurationSustain = 2 & { _DurationSustainBrand: void }
type DurationPosition = 2 & { _DurationPositionBrand: void }
type DurationScale = 2 & { _DurationScaleBrand: void }
type GainSustain = 2 & { _GainSustainBrand: void }
type GainPosition = 2 & { _GainPositionBrand: void }
type GainScale = 2 & { _GainScaleBrand: void }
type SustainPosition = 2 & { _SustainPositionBrand: void }
type SustainScale = 2 & { _SustainScaleBrand: void }
type PositionScale = 2 & { _PositionScaleBrand: void }
type PitchDurationGain = 3 & { _PitchDurationGainBrand: void }
type PitchDurationSustain = 3 & { _PitchDurationSustainBrand: void }
type PitchDurationPosition = 3 & { _PitchDurationPositionBrand: void }
type PitchDurationScale = 3 & { _PitchDurationScaleBrand: void }
type PitchGainSustain = 3 & { _PitchGainSustainBrand: void }
type PitchGainPosition = 3 & { _PitchGainPositionBrand: void }
type PitchGainScale = 3 & { _PitchGainScaleBrand: void }
type PitchSustainPosition = 3 & { _PitchSustainPositionBrand: void }
type PitchSustainScale = 3 & { _PitchSustainScaleBrand: void }
type PitchPositionScale = 3 & { _PitchPositionScaleBrand: void }
type DurationGainSustain = 3 & { _DurationGainSustainBrand: void }
type DurationGainPosition = 3 & { _DurationGainPositionBrand: void }
type DurationGainScale = 3 & { _DurationGainScaleBrand: void }
type DurationPositionScale = 3 & { _DurationPositionScaleBrand: void }
type GainSustainPosition = 3 & { _GainSustainPositionBrand: void }
type GainSustainScale = 3 & { _GainSustainScaleBrand: void }
type GainPositionScale = 3 & { _GainPositionScaleBrand: void }
type SustainPositionScale = 3 & { _SustainPositionScaleBrand: void }
type PitchDurationGainSustain = 4 & { _PitchDurationGainSustainBrand: void }
type PitchDurationGainPosition = 4 & { _PitchDurationGainPositionBrand: void }
type PitchDurationGainScale = 4 & { _PitchDurationGainScaleBrand: void }
type PitchDurationSustainPosition = 4 & { _PitchDurationSustainPositionBrand: void }
type PitchDurationPositionScale = 4 & { _PitchDurationPositionScale: void }
type PitchGainSustainPosition = 4 & { _PitchGainSustainPositionBrand: void }
type PitchGainSustainScale = 4 & { _PitchGainSustainScaleBrand: void }
type PitchGainPositionScale = 4 & { _PitchGainPositionScaleBrand: void }
type PitchSustainPositionScale = 4 & { _PitchSustainPositionScaleBrand: void }
type DurationGainSustainPosition = 4 & { _DurationGainSustainPositionBrand: void }
type DurationGainSustainScale = 4 & { _DurationGainSustainScaleBrand: void }
type DurationGainPositionScale = 4 & { _DurationGainPositionScaleBrand: void }
type DurationSustainPositionScale = 4 & { _DurationGainPositionScaleBrand: void }
type GainSustainPositionScale = 4 & { _DurationGainPositionScaleBrand: void }
type PitchDurationGainSustainPosition = 5 & { _PitchDurationGainSustainPositionBrand: void }
type PitchDurationGainSustainScale = 5 & { _PitchDurationGainSustainScaleBrand: void }
type PitchDurationGainPositionScale = 5 & { _PitchDurationGainPositionScaleBrand: void }
type PitchDurationSustainPositionScale = 5 & { _PitchDurationSustainPositionScaleBrand: void }
type PitchGainSustainPositionScale = 5 & { _PitchGainSustainPositionScaleBrand: void }
type DurationGainSustainPositionScale = 5 & { _DurationGainSustainPositionScaleBrand: void }
type PitchDurationGainSustainPositionScale = 6 & { _PitchDurationGainSustainPositionScaleBrand: void }

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
    PositionOnly,
    ScaleOnly,
    PitchDuration,
    PitchGain,
    PitchSustain,
    PitchPosition,
    PitchScale,
    DurationGain,
    DurationSustain,
    DurationPosition,
    DurationScale,
    GainSustain,
    GainPosition,
    GainScale,
    SustainPosition,
    SustainScale,
    PositionScale,
    PitchDurationGain,
    PitchDurationSustain,
    PitchDurationPosition,
    PitchDurationScale,
    PitchGainSustain,
    PitchGainPosition,
    PitchGainScale,
    PitchSustainPosition,
    PitchSustainScale,
    PitchPositionScale,
    DurationGainSustain,
    DurationGainPosition,
    DurationGainScale,
    DurationPositionScale,
    GainSustainPosition,
    GainSustainScale,
    GainPositionScale,
    SustainPositionScale,
    PitchDurationGainSustain,
    PitchDurationGainPosition,
    PitchDurationGainScale,
    PitchDurationSustainPosition,
    PitchDurationPositionScale,
    PitchGainSustainPosition,
    PitchGainSustainScale,
    PitchGainPositionScale,
    PitchSustainPositionScale,
    DurationGainSustainPosition,
    DurationGainSustainScale,
    DurationGainPositionScale,
    DurationSustainPositionScale,
    GainSustainPositionScale,
    PitchDurationGainSustainPosition,
    PitchDurationGainSustainScale,
    PitchDurationGainPositionScale,
    PitchDurationSustainPositionScale,
    PitchGainSustainPositionScale,
    DurationGainSustainPositionScale,
    PitchDurationGainSustainPositionScale,
}
