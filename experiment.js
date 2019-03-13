const base = {
    a: 2,
    b: 3,
}

const mergeMe = {
    a: undefined,
}

const result = {
    ...base,
    ...mergeMe
}

console.log(result)
