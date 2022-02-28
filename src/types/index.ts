export type themesType = {
    name?: String,
}

export type wordType = {
    name?: String,
    themes?: themesType
}

// ----------------------

export type playerType = {
    id: number,
    name: string,
    score: number
}