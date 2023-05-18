export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name,
      this.nickName = data.nickName,
      this.img = data.img,
      this.weight = data.weight,
      this.types = data.types,
      this.creatorId = data.creatorId,
      this.creator = data.creator
  }

  static listTemplate(pokemon) {
    return /*html*/`
      <div class="d-flex align-items-center justify-content-between" onclick="app.PokemonController.setActivePokemon('${pokemon.name}')">
        <h1>${pokemon.name}</h1>
      </div>
    `
  }

  get ActivePokemonTemplate() {
    return /*html*/`
            <div class="elevation-5 text-center">
          <img src="${this.img}" alt="">
          <h1>${this.name}</h1>
          <div>
            <div class="d-flex justify-content-around">
              <p>${this.weight}</p>
            </div>
            <div>
              <p>${this.types}</p>
            </div>
          </div>
        </div>
    `
  }

}