import { Material, NoteSpec } from '@musical-patterns/compiler'
import { AnyOtherProperties, Block, ContourPiece, Offset, Scalar } from '@musical-patterns/utilities'
import { Id } from './registry'
import { Spec, SpecDataFor, StandardSpec } from './spec'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (blockElement: number) => ContourPiece<T>

// tslint:disable-next-line:no-magic-numbers
type StandardContour = 2

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
    StandardContour,
    Metadata,
    Patterns,
    PatternFor,
    PatternsFilter,
    StandardPattern,
    Pattern,
    Presentable,
}
