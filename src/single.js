export default class Single {
  static instance = undefined;
  static loadInstance() {
    if (Single.instance === undefined) Single.instance = new Single();
  }
  static filterPokemonName(name) {
    return name
      .trim()
      .toUpperCase()
      .replace("-RED-STRIPED", "")
      .replace("-STANDARD", "")
      .replace("-INCARNATE", "")
      .replace("-ORDINARY", "")
      .replace("-ARIA", "")
      .replace("-SHIELD", "")
      .replace("-AVERAGE", "")
      .replace("-MIDDAY", "")
      .replace("-SOLO", "")
      .replace("-RED-METEOR", "")
      .replace("-DISGUISED", "")
      .replace("-MALE", "")
      .replace("-ALTERED", "")
      .replace("-NORMAL", "")
      .replace("-PLANT", "")
      .replace("-LAND")
      .replace("-BAILE")
      .replace("TYPE-NULL", "TYPE: NULL")
      .replace("-AMPED", "")
      .replace("-ICE", "")
      .replace("-HERO", "")
      .replace("-SINGLE-STRIKE", "");
  }
  constructor() {
    this.pokemonNames = [];
    this.pokemonCards = [];
  }
}
