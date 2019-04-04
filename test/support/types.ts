enum ExampleEnum {
    OPTION_ONE = 'OPTION_ONE',
    OPTION_TWO = 'OPTION_TWO',
    OPTION_THREE = 'OPTION_THREE',
}

interface MinimumTestableSpec {
    arrayedSpec: number[],
    justChangedSpec: number,
    otherSpec: number,
}

export {
    MinimumTestableSpec,
    ExampleEnum,
}
