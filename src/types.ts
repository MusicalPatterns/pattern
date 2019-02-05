// tslint:disable no-magic-numbers

import { Material, NoteSpec } from '@musical-patterns/compiler'
import { Block, ContourPiece } from '@musical-patterns/utilities'
import { Id } from './registry'
import { Spec, SpecDataFor, StandardSpec } from './spec'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (blockElement: number) => ContourPiece<T>

enum _PitchOnlyBrand {}
type PitchOnly = 1 & _PitchOnlyBrand
enum _DurationOnlyBrand {}
type DurationOnly = 1 & _DurationOnlyBrand
enum _GainOnlyBrand {}
type GainOnly = 1 & _GainOnlyBrand
enum _SustainOnlyBrand {}
type SustainOnly = 1 & _SustainOnlyBrand
enum _PitchDurationBrand {}
type PitchDuration = 2 & _PitchDurationBrand
enum _PitchGainBrand {}
type PitchGain = 2 & _PitchGainBrand
enum _PitchSustainBrand {}
type PitchSustain = 2 & _PitchSustainBrand
enum _DurationGainBrand {}
type DurationGain = 2 & _DurationGainBrand
enum _DurationSustainBrand {}
type DurationSustain = 2 & _DurationSustainBrand
enum _GainSustainBrand {}
type GainSustain = 2 & _GainSustainBrand
enum _PitchDurationGainBrand {}
type PitchDurationGain = 3 & _PitchDurationGainBrand
enum _PitchDurationSustainBrand {}
type PitchDurationSustain = 3 & _PitchDurationSustainBrand
enum _DurationGainSustainBrand {}
type DurationGainSustain = 3 & _DurationGainSustainBrand
enum _PitchDurationGainSustainBrand {}
type PitchDurationGainSustain = 4 & _PitchDurationGainSustainBrand

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
