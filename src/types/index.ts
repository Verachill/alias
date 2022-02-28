export type themesType = {
  name?: string,
}

export type wordType = {
    name?: string,
    themes?: themesType
}

// ----------------------

export type playerType = {
    id: number,
    name: string,
    score: number
}
