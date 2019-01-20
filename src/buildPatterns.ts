import { Patterns } from './types'

const buildPatterns: (candidate: Partial<Patterns>) => Patterns =
    (candidate: Partial<Patterns>): Patterns =>
        candidate as Patterns

export {
    buildPatterns,
}
