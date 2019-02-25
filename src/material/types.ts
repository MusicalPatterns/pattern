import { Scalar, Translation } from '@musical-patterns/utilities'

interface SpecPitchAdjustments {
    patternPitchScalar?: Scalar,
    patternPitchTranslation?: Translation,
}

interface BuildScalesOptions {
    durationScalars?: Scalar[],
    pitchScalars?: Scalar[],
}

export {
    SpecPitchAdjustments,
    BuildScalesOptions,
}
