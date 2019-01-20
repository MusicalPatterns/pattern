import { Material, NoteSpec } from '@musical-patterns/compiler'
import { Id } from '@musical-patterns/registry'
import { AnyOtherProperties, Block, ContourPiece, Offset, Scalar } from '@musical-patterns/utilities'
import { Spec, SpecDataFor, StandardSpec } from './spec'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (blockElement: number) => ContourPiece<T>

interface SpecPitchAdjustments extends AnyOtherProperties {
    patternPitchOffset?: Offset,
    patternPitchScalar?: Scalar,
}

// tslint:disable-next-line:no-magic-numbers
type StandardContour = 2

interface Metadata {
    description: string,
    formattedName: string,
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

type Patterns = { [key in Partial<Id>]: Pattern }

type PatternsFilter = (patterns: Patterns) => Patterns

export {
    Segment,
    Rendering,
    RenderingByBlockElement,
    SpecPitchAdjustments,
    StandardContour,
    Metadata,
    Patterns,
    PatternFor,
    PatternsFilter,
    StandardPattern,
    Pattern,
}
