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

interface PatternMetadata {
    description: string,
    formattedName: string,
    mostRecentPublish: string,
    musicalIdeaIllustrated: string,
    originalPublish: string,
}

interface PatternSpec extends AnyOtherProperties {
    patternDurationOffset?: Offset,
    patternDurationScalar?: Scalar,
    patternPitchOffset?: Offset,
    patternPitchScalar?: Scalar,
}

export {
    Segment,
    Rendering,
    RenderingByBlockElement,
    PatternSpecPitchAdjustments,
    StandardContour,
    PatternMetadata,
    PatternSpec,
}
