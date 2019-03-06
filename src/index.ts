// tslint:disable max-file-line-count

export { Id } from './registry'
export {
    calculateTotalPitchDurationContourDuration,
    pitchDurationRest,
} from './contours'
export {
    adjustScalars,
    buildStandardScales,
    buildNonScale,
    buildFlatDurationsScale,
    buildHarmonicSeriesScale,
    buildOctaveSeriesScale,
    buildSubharmonicSeriesScale,
    generateOctaveRepeatingScalars,
    PitchCircularTechnique,
    pitchCirculate,
} from './material'
export { filter } from './filter'
export {
    standardSpecAttributes,
    standardInitialSpec,
    SpecPropertyAttributes,
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    StringedSpecPropertyAttributes,
    ToggledSpecPropertyAttributes,
    RangedConstraint,
    OptionedConstraint,
    StringedConstraint,
    Constraint,
    SpecPropertyType,
    StandardSpec,
    StandardSpecProperties,
    defaultSpecPropertyAttributes,
    StandardSpecAttributes,
    StandardSpecData,
    Spec,
    SpecAttributes,
    SpecData,
    SpecValidationFunction,
    SpecValidationResults,
    standardSpecData,
    OptionedConstraintOption,
    RangedInputType,
    Preset,
    SingularPropertyInvalidSpecMessage,
    ArrayedPropertyInvalidSpecMessage,
    InvalidSpecMessage,
    SpecValue,
    SingularSpecValue,
    ArrayedSpecValue,
    DomSpec,
    SingularDomSpecValue,
    ArrayedDomSpecValue,
    DomSpecValue,
} from './spec'
export {
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
    FULL_GAIN,
    SILENT,
    STANDARD_PITCH_INDEX_INDICATING_REST,
} from './constants'
export {
    Segment,
    RenderingByBlockElement,
    Rendering,
    Metadata,
    Patterns,
    StandardPattern,
    Pattern,
    Presentable,
    PitchOnly,
    DurationOnly,
    GainOnly,
    SustainOnly,
    XOnly,
    XYOnly,
    XYZOnly,
    ScaleOnly,
    PitchDuration,
    PitchGain,
    PitchSustain,
    PitchX,
    PitchXY,
    PitchXYZ,
    PitchScale,
    DurationGain,
    DurationSustain,
    DurationX,
    DurationXY,
    DurationXYZ,
    DurationScale,
    GainSustain,
    GainX,
    GainXY,
    GainXYZ,
    GainScale,
    SustainX,
    SustainXY,
    SustainXYZ,
    SustainScale,
    XScale,
    XYScale,
    XYZScale,
    PitchDurationGain,
    PitchDurationSustain,
    PitchDurationX,
    PitchDurationXY,
    PitchDurationXYZ,
    PitchDurationScale,
    PitchGainSustain,
    PitchGainX,
    PitchGainXY,
    PitchGainXYZ,
    PitchGainScale,
    PitchSustainX,
    PitchSustainXY,
    PitchSustainXYZ,
    PitchSustainScale,
    PitchXScale,
    PitchXYScale,
    PitchXYZScale,
    DurationGainSustain,
    DurationGainX,
    DurationGainXY,
    DurationGainXYZ,
    DurationGainScale,
    DurationXScale,
    DurationXYScale,
    DurationXYZScale,
    GainSustainX,
    GainSustainXY,
    GainSustainXYZ,
    GainSustainScale,
    GainXScale,
    GainXYScale,
    GainXYZScale,
    SustainXScale,
    SustainXYScale,
    SustainXYZScale,
    PitchDurationGainSustain,
    PitchDurationGainX,
    PitchDurationGainXY,
    PitchDurationGainXYZ,
    PitchDurationGainScale,
    PitchDurationSustainX,
    PitchDurationSustainXY,
    PitchDurationSustainXYZ,
    PitchDurationXScale,
    PitchDurationXYScale,
    PitchDurationXYZScale,
    PitchGainSustainX,
    PitchGainSustainXY,
    PitchGainSustainXYZ,
    PitchGainSustainScale,
    PitchGainXScale,
    PitchGainXYScale,
    PitchGainXYZScale,
    PitchSustainXScale,
    PitchSustainXYScale,
    PitchSustainXYZScale,
    DurationGainSustainX,
    DurationGainSustainXY,
    DurationGainSustainXYZ,
    DurationGainSustainScale,
    DurationGainXScale,
    DurationGainXYScale,
    DurationGainXYZScale,
    DurationSustainXScale,
    DurationSustainXYScale,
    DurationSustainXYZScale,
    GainSustainXScale,
    GainSustainXYScale,
    GainSustainXYZScale,
    PitchDurationGainSustainX,
    PitchDurationGainSustainXY,
    PitchDurationGainSustainXYZ,
    PitchDurationGainSustainScale,
    PitchDurationGainXScale,
    PitchDurationGainXYScale,
    PitchDurationGainXYZScale,
    PitchDurationSustainXScale,
    PitchDurationSustainXYScale,
    PitchDurationSustainXYZScale,
    PitchGainSustainXScale,
    PitchGainSustainXYScale,
    PitchGainSustainXYZScale,
    DurationGainSustainXScale,
    DurationGainSustainXYScale,
    DurationGainSustainXYZScale,
    PitchDurationGainSustainXScale,
    PitchDurationGainSustainXYScale,
    PitchDurationGainSustainXYZScale,
} from './types'
