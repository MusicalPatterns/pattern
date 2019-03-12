import { Material } from '@musical-patterns/compiler'
import { Id } from './id'
import { Metadata } from './metadata'
import { Spec, Specs, StandardSpecs } from './spec'

interface Pattern<SpecsType = Specs> {
    id: Id,
    material: Material,
    metadata: Metadata,
    spec: Spec<SpecsType>,
}

type StandardPattern = Pattern<StandardSpecs>

type Patterns = { [Index in Id]: Pattern }

export {
    Patterns,
    StandardPattern,
    Pattern,
}
