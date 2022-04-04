import { describe, it, } from 'eslint/lib/rule-tester/rule-tester';
import { alphabeticalFilter, sizeFilter, calculos, rarityFilter, regionFilter, searchName, typeFilter } from '../src/js/data.js';

const dataPokemon = [{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "003",
  "name": "venusaur",
  "generation": {
    "num": "generation i",
    "name": "johto"
  },
  "size": {
    "height": "2.01 m",
    "weight": "100.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "004",
  "name": "charmander",
  "generation": {
    "num": "generation i",
    "name": "johto"
  },
  "size": {
    "height": "0.61 m",
    "weight": "8.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "fire"
  ]
},
{
  "num": "005",
  "name": "charmeleon",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "size": {
    "height": "1.09 m",
    "weight": "19.0 kg"
  },
  "pokemon-rarity": "special",
  "type": [
    "fire"
  ]
}];

const orderPokemons = [{
  "name": "bulbasaur",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  }
},
{
  "name": "ivysaur",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  }
},
{
  "name": "venusaur",
  "size": {
    "height": "2.01 m",
    "weight": "100.0 kg"
  }
},
{
  "name": "charmander",
  "size": {
    "height": "0.61 m",
    "weight": "8.5 kg"
  }
}
];

// TESTE DE FILTRO PELO TIPO DO POKÉMON
describe('typeFilter', () => {
  it('Filtro de tipo do pokémon', () => {
    expect(typeof typeFilter).toBe('function');
  });
  it('Retorna somente os pokémons que forem do tipo fire', () => {
    const typeFire = typeFilter(dataPokemon, 'fire')
    const expected = [{
      "num": "004",
      "name": "charmander",
      "generation": {
        "num": "generation i",
        "name": "johto"
      },
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "fire"
      ]
    },
    {
      "num": "005",
      "name": "charmeleon",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "1.09 m",
        "weight": "19.0 kg"
      },
      "pokemon-rarity": "special",
      "type": [
        "fire"
      ]
    }]
      expect(typeFire).toEqual(expected);
  });
})

// TESTE DE FILTRO PELA RARIDADE DO POKÉMON
describe('rarityFilter', () => {
  it('Filtro de raridade do pokémon', () => {
    expect(typeof rarityFilter).toBe('function');
  });
  it('Retorna somente os pokémons que forem do tipo especial', () => {
    const typeRarity = rarityFilter(dataPokemon, 'special')
    const expected = [{
      "num": "005",
      "name": "charmeleon",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "1.09 m",
        "weight": "19.0 kg"
      },
      "pokemon-rarity": "special",
      "type": [
        "fire"
      ]
    }]
      expect(typeRarity).toEqual(expected);
  });
})

// TESTE DE FILTRO PELA REGIÃO DO POKÉMON
describe('regionFilter', () => {
  it('Filtro da região do pokémon', () => {
    expect(typeof regionFilter).toBe('function');
  });
  it('Retorna somente os pokémons que pertencerem a região de Kanto', () => {
    const typeRegion = regionFilter(dataPokemon, 'kanto')
    const expected = [{
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "num": "005",
      "name": "charmeleon",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "1.09 m",
        "weight": "19.0 kg"
      },
      "pokemon-rarity": "special",
      "type": [
        "fire"
      ]
    }]
      expect(typeRegion).toEqual(expected);
  });
})

// TESTE DE ORDENAÇÃO ALFABÉTICA DOS POKÉMONS
describe('alphabeticalFilter', () => {
  it('Ordenação alfabética dos pokémons', () => {
    expect(typeof alphabeticalFilter).toBe('function');
  });

  it('Retorna os pokémons em ordem de A à Z', () => {
    const typeOrder = alphabeticalFilter(orderPokemons, 'a-z')
    const expected = [{
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    },
    {
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  });

  it('Retorna os pokémons em ordem de Z à A', () => {
    const typeOrder = alphabeticalFilter(orderPokemons, 'z-a')
    const expected = [{
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    },
    {
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  });
})

// TESTE DE ORDENAÇÃO POR ALTURA DOS POKÉMONS
describe('sizeFilter', () => {
  it('Ordenação por altura dos pokémons', () => {
    expect(typeof sizeFilter).toBe('function');
  });
  it('Retorna os pokémons em ordem do mais baixo para mais alto', () => {
    const typeOrder = sizeFilter(orderPokemons, "height", 'shortHigh')
    const expected = [{
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    },
    {
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  });

  it('Retorna os pokémons em ordem do mais alto para mais baixo', () => {
    const typeOrder = sizeFilter(orderPokemons, "height", 'highShort')
    const expected = [{
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    },
    {
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  })
})

// TESTE DE ORDENAÇÃO POR PESO DOS POKÉMONS
describe('sizeFilter', () => {
  it('Ordenação por peso dos pokémons', () => {
    expect(typeof sizeFilter).toBe('function');
  });
  it('Retorna os pokémons do mais leve para o mais pesado', () => {
    const typeOrder = sizeFilter(orderPokemons, "weight", 'lightHeavy')
    const expected = [{
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    },
    {
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  });

  it('Retorna os pokémons do mais pesado para o mais leve', () => {
    const typeOrder = sizeFilter(orderPokemons, "weight", 'heavyLight')
    const expected = [{
      "name": "venusaur",
      "size": {
        "height": "2.01 m",
        "weight": "100.0 kg"
      }
    },
    {
      "name": "ivysaur",
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      }
    },
    {
      "name": "charmander",
      "size": {
        "height": "0.61 m",
        "weight": "8.5 kg"
      }
    },
    {
      "name": "bulbasaur",
      "size": {
        "height": "0.71 m",
        "weight": "6.9 kg"
      }
    }]
      expect(typeOrder).toEqual(expected);
  });
})

// BUSCA PELO NOME DO POKÉMON
describe('searchName', () => {
  it('Pesquisa pelo nome do pokémon', () => {
    expect(typeof searchName).toBe('function');
  });
  it('Retorna o pokémon que tiver o mesmo nome que ', () => {
    const typeName = searchName(dataPokemon, 'ivysaur')
    const expected = [{
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "size": {
        "height": "0.99 m",
        "weight": "13.0 kg"
      },
      "pokemon-rarity": "normal",
      "type": [
        "grass",
        "poison"
      ]
    }]
      expect(typeName).toEqual(expected);
  });
})

// CÁLCULO AGREGADO
describe('calculos', () => {
  it('Porcentagem dos pokémons', () => {
    expect(typeof calculos).toBe('function');
  });
  it('Retorna a porcentagem dos pokémons em relação ao valor total de pokémons', () => {
    const typeCalc = calculos(dataPokemon.length, 4)
    const expected = 80
      expect(typeCalc).toEqual(expected);
  });
})