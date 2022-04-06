export const typeFilter = (data, type) => {
    const filteredType = data.filter(pokemonType => pokemonType.type.find(item => item === type) === type)
    return filteredType
}

export const rarityFilter = (data, rarity) => {
    const filteredRarity = data.filter(pokemonRarity => pokemonRarity["pokemon-rarity"] == rarity)
    return filteredRarity
}

export const eggsFilter = (data, egg) => {
    const filteredEggs = data.filter(pokemonEggs => pokemonEggs.egg == egg)
    console.log(filteredEggs)
    return filteredEggs
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

export const searchName = (data, name) => {
    const filterName = data.filter(pokemonName => pokemonName.name.includes(name))
    return filterName
}

export const calculos = (total, portion) => {
    const porcentagem = Math.round((portion * 100) / total)
    return porcentagem
};