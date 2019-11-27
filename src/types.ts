import { Id } from '@musical-patterns/id'
import { Material } from '@musical-patterns/material'
import { Metadata } from '@musical-patterns/metadata'
import { Spec, Specs } from '@musical-patterns/spec'

interface Pattern<SpecsType extends Specs = Specs> {
    id: Id,
    material: Material,
    metadata: Metadata,
    spec: Spec<SpecsType>,
}

type Patterns = { [Index in Id]: Pattern }

type PatternsFilter = (patterns: Patterns) => Patterns

export {
    Patterns,
    Pattern,
    PatternsFilter,
}
