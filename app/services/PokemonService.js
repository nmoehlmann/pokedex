import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  async setActivePokemon(name) {
    const res = await pokeApi.get(`api/v2/pokemon/${name}/`)

    console.log('what is res', res.data)

    AppState.activePokemon = new Pokemon(res.data)
    console.log(AppState.activePokemon)
  }

  async getPokemon() {
    const res = await pokeApi.get('/api/v2/pokemon/')
    // console.log('what is res', res.data.results)
    AppState.pokedex = res.data.results
    console.log(AppState.pokedex, 'what is in the pokedex')
  }

}

export const pokemonService = new PokemonService()