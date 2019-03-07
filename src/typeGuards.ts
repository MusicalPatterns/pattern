import { Id } from './registry'

const isId: (id: string) => id is Id =
    (id: string): id is Id =>
        id in Id

export {
    isId,
}
