<template>
  <router-link :to="pname" id="routerlink">
    <div id="card" :class="'border-' + ptype">
      <div id="logo-card">
        <img :src="pimg" :alt="sname" />
      </div>
      <div id="info-head">
        <span id="pid">#{{ pid }}</span>
        <span id="pname">{{ sname }}</span>
      </div>
      <div id="info-bottom">
        <span class="ptype" :class="'type-' + ptype">
          {{ ptype }}
        </span>
        <span
          class="ptype"
          :class="'type-' + ptype2"
          v-show="ptype2 != undefined"
        >
          {{ ptype2 }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Pokedex } from "pokeapi-js-wrapper";
import Single from "../single.js";
const P = new Pokedex();

export default {
  name: "PokemonCard",
  data() {
    return {
      pimg: null,
      pid: null,
      ptype: null,
      ptype2: null,
      sname: null,
    };
  },
  props: {
    pname: String,
    pindex: Number,
  },
  methods: {
    async getPokemonInfo() {
      if (
        Single.instance === undefined ||
        Single.instance.pokemonCards.find(
          (value) => value.name == this.pname
        ) === undefined
      ) {
        const pok = await P.getPokemonByName(this.pname);
        let sec_type = null;
        try {
          sec_type = pok.types[1].type.name;
        } catch {
          sec_type = undefined;
        }
        this.sname = Single.filterPokemonName(this.pname);
        this.pimg = pok.sprites.front_default;
        this.pid = pok.id;
        this.ptype = pok.types[0].type.name;
        this.ptype2 = sec_type;
        Single.loadInstance();
        Single.instance.pokemonCards.push({
          name: this.sname,
          img: this.pimg,
          id: this.pid,
          type1: this.ptype,
          type2: this.ptype2,
        });
      } else {
        const json = Single.instance.pokemonCards.find(
          (value) => value.name == this.pname
        );
        this.sname = json.name;
        this.pimg = json.img;
        this.pid = json.id;
        this.ptype = json.type1;
        this.ptype2 = json.type2;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      Single.instance.pokemonCards.sort((a, b) => {
        return a.id - b.id;
      });
      this.getPokemonInfo();
    }, 10 * this.pindex);
  },
};
</script>

<style scoped>
#routerlink {
  text-decoration: none;
}
#card {
  display: flex;
  width: min-content;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.5s;
}
img {
  width: 120px;
}
#logo-card {
  background-color: rgb(245, 245, 245);
  border-radius: 50%;
  margin: 20px;
}
#info-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c2c2c;
}
#info-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
  margin-top: 6px;
}
#pname {
  font-weight: bold;
}
#pid {
  font-size: 12px;
  background-color: #eee;
  padding: 2px 6px;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
