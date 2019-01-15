import { NoteSpec } from '@musical-patterns/compiler'
import { AnyOtherProperties, Block, ContourPiece, DictionaryOf, Offset, Scalar } from '@musical-patterns/utilities'

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

enum PatternSpecPropertyType {
    CONTINUOUS = 'CONTINUOUS',
    DISCRETE = 'DISCRETE',
}

interface ContinuousPatternSpecPropertyRange {
    excludeMax?: boolean,
    excludeMin?: boolean,
    max?: number,
    min?: number,
}

type DiscretePatternSpecPropertyRange = string[]

type PatternSpecPropertyRange = ContinuousPatternSpecPropertyRange | DiscretePatternSpecPropertyRange

interface ContinuousPatternSpecProperty {
    initial: number,
    patternSpecPropertyRange?: ContinuousPatternSpecPropertyRange,
    patternSpecPropertyType: PatternSpecPropertyType.CONTINUOUS,
}

interface DiscretePatternSpecProperty {
    initial: string,
    patternSpecPropertyRange: DiscretePatternSpecPropertyRange,
    patternSpecPropertyType: PatternSpecPropertyType.DISCRETE,
}

type PatternSpecProperty = ContinuousPatternSpecProperty | DiscretePatternSpecProperty

interface StandardSettledPatternSpec {
    patternDurationOffset?: Offset,
    patternDurationScalar?: Scalar,
    patternPitchOffset?: Offset,
    patternPitchScalar?: Scalar,
}

interface SettledPatternSpec extends StandardSettledPatternSpec, AnyOtherProperties {}

interface StandardPatternSpec {
    patternDurationOffset: ContinuousPatternSpecProperty,
    patternDurationScalar: ContinuousPatternSpecProperty,
    patternPitchOffset: ContinuousPatternSpecProperty,
    patternPitchScalar: ContinuousPatternSpecProperty,

    [ index: string ]: PatternSpecProperty,
}

type PatternSpec = DictionaryOf<PatternSpecProperty>

export {
    Segment,
    Rendering,
    RenderingByBlockElement,
    PatternSpecPitchAdjustments,
    StandardContour,
    PatternMetadata,
    PatternSpec,
    StandardPatternSpec,
    PatternSpecProperty,
    DiscretePatternSpecProperty,
    ContinuousPatternSpecProperty,
    ContinuousPatternSpecPropertyRange,
    DiscretePatternSpecPropertyRange,
    PatternSpecPropertyRange,
    PatternSpecPropertyType,
    StandardSettledPatternSpec,
    SettledPatternSpec,
}
