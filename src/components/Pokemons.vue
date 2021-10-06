<template>
  <div id="flex-container">
    <div id="flex-list">
      <div v-show="palert" id="not-found">
        <img src="/img/pikachu2.png" alt="Sleeping Pikachu" />
        <span
          >Pokemon "{{ stext }}" não <br />
          encontrado</span
        >
      </div>
      <PokemonCard
        v-for="(pokename, index) in pokemons"
        :pname="pokename"
        :key="pokename"
        :pindex="index"
      />
    </div>
  </div>
</template>

<script>
import { Pokedex } from "pokeapi-js-wrapper";
import PokemonCard from "@/components/PokemonCard.vue";

const P = new Pokedex({
  timeout: 20 * 1000,
  cache: true,
  cacheImages: true,
//  limit: 151,
});
export default {
  name: "Pokemons",
  components: {
    PokemonCard,
  },
  props: {
    stext: String,
  },
  data() {
    return {
      pokemons: [],
      palert: false,
    };
  },
  methods: {
    async getPokemonNames() {
      if (this.stext == null || this.stext == undefined || this.stext == "") {
        const response = await P.getPokemonsList();
        this.pokemons = Array.from(response.results, (e) => e.name);
        this.palert = false;
      } else {
        try {
          const response = await P.getPokemonByName(this.stext);
          this.pokemons.push(response.name);
          this.palert = false;
        } catch {
          this.palert = true;
        }
      }
    },
  },
  mounted() {
    this.getPokemonNames();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

#flex-container {
  display: flex;
  justify-content: center;
}

#not-found {
  display: flex;
  align-items: center;
  justify-content: center;
}

#not-found > span {
  font-size: 35px;
  font-weight: bold;
  font-family: "Righteous", cursive;
}

img {
  width: 250px;
}

#flex-list {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 15px;
  align-content: flex-start;
  flex-flow: row wrap;
  transition: 0.5s;
}

@media screen and (max-width: 780px) {
  #flex-list {
    width: 100%;
  }
}

@media screen and (max-width: 550px) {
  #not-found > span {
    display: none;
  }
}
</style>
