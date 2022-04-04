export const typeFilter = (data, type) => {
    const filteredType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
    return filteredType
}

export const rarityFilter = (data, rarity) => {
    const filteredRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
    return filteredRarity
}

export const regionFilter = (data, region) => {
    const filteredRegion = data.filter(pokemonRegion => pokemonRegion.generation["name"] == region)
    return filteredRegion
}

export const alphabeticalFilter = (data, chosenOrder) => {
    const dataCopy = [...data]
    const alphabeticalOrder = dataCopy.sort((a, b) => {
        return (a.name.localeCompare(b.name));
    })
    if(chosenOrder === "a-z") {
        return alphabeticalOrder
    } else {
        return alphabeticalOrder.reverse()
    }
}

export const sizeFilter = (data, key, chosenOrder) => {
    const dataCopy = [...data]
    const orderByHeight = dataCopy.sort((a, b) => {
        const aSize = Number(a.size[key].replaceAll(/[a-z]/g, '').trim())
        const bSize = Number(b.size[key].replaceAll(/[a-z]/g, '').trim())
        return (aSize - bSize)
    })
    if(chosenOrder === "shortHigh" || chosenOrder === "lightHeavy") {
        return orderByHeight
    } else {
        return orderByHeight.reverse()
    }
}

export const searchName = (data, name) => {
    const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
    return filterName
}

export const calculos = (total, portion) => {
    const porcentagem = Math.round((portion * 100) / total)
    return porcentagem
};