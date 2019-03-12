import { Material } from '@musical-patterns/compiler'
import { Metadata } from './metadata'
import { Id } from './registry'
import { Spec, Specs, StandardSpecs } from './spec'

interface Pattern<SpecsType = Specs> {
    id: Id,
    material: Material,
    metadata: Metadata,
    spec: Spec<SpecsType>,
}

type StandardPattern = Pattern<StandardSpecs>

type Patterns = { [Index in Id]: Pattern }

type PatternsFilter = (patterns: Patterns) => Patterns

export {
    Patterns,
    PatternsFilter,
    StandardPattern,
    Pattern,
}
