import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { Pokemon } from "../models/Pokemon.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokedex() {
  let template = ''

  AppState.pokedex.forEach(p => {
    template += Pokemon.listTemplate(p)
  })

  setHTML('pokedex', template)
}

function _drawActivePokemon() {
  setHTML('activePokemon', AppState.activePokemon)
}

export class PokemonController {
  constructor() {
    AppState.on('activePokemon', _drawActivePokemon)
    AppState.on('pokedex', _drawPokedex)
    this.getPokemonFromApi()
  }

  async setActivePokemon(name) {
    try {
      console.log(name)
      await pokemonService.setActivePokemon(name)
    } catch (error) {
      Pop.error(error)
    }
  }

  async getPokemonFromApi() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }
}
