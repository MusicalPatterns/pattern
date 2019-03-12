import { Presentable } from '../../metadata'
import { Specs } from '../types'

interface Preset<SpecsType = Specs> extends Presentable {
    specs: SpecsType,
}

export {
    Preset,
}
