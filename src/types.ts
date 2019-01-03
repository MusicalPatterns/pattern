import { NoteSpec } from '@musical-patterns/compiler'
import { AnyOtherProperties, Block, ContourPiece, Offset, Scalar } from '@musical-patterns/utilities'

type Segment = NoteSpec[][]

type Rendering<T> = (block: Block) => ContourPiece<T>

type RenderingByBlockElement<T> = (blockElement: number) => ContourPiece<T>

interface PatternSpecPitchAdjustments extends AnyOtherProperties {
    patternPitchOffset?: Offset,
    patternPitchScalar?: Scalar,
}

// tslint:disable-next-line:no-magic-numbers
type StandardContour = 2

export {
    Segment,
    Rendering,
    RenderingByBlockElement,
    PatternSpecPitchAdjustments,
    StandardContour,
}
