import { Scalar, Translation } from '@musical-patterns/utilities'

interface SpecPitchAdjustments {
    patternPitchScalar?: Scalar,
    patternPitchTranslation?: Translation,
}

interface MaterializeStandardScalesOptions {
    durationScalars?: Scalar[],
    pitchScalars?: Scalar[],
}

export {
    SpecPitchAdjustments,
    MaterializeStandardScalesOptions,
}
