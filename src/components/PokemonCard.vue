<template>
  <div id="card" :class="'border-' + ptype">
    <div id="logo-card">
      <img :src="pimg" :alt="pname" />
    </div>
    <div id="info-head">
      <span id="pid">#{{ pid }}</span>
      <span id="pname">{{ pname.toUpperCase() }}</span>
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
</template>

<script>
import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();

export default {
  name: "PokemonCard",
  data() {
    return {
      pimg: null,
      pid: null,
      ptype: null,
      ptype2: null,
    };
  },
  props: {
    pname: String,
    pindex: Number,
  },
  methods: {
    async getPokemonInfo() {
      const pok = await P.getPokemonByName(this.pname);
      let sec_type = null;
      try {
        sec_type = pok.types[1].type.name;
      } catch {
        sec_type = undefined;
      }
      this.pimg = pok.sprites.front_default;
      this.pid = pok.id;
      this.ptype = pok.types[0].type.name;
      this.ptype2 = sec_type;
    },
  },
  mounted() {
    setTimeout(() => {
      this.getPokemonInfo();
    }, 10 * this.pindex);
  },
};
</script>

<style scoped>
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
}
#info-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
  margin-top: 6px;
}
#pid {
  font-size: 12px;
  background-color: #eee;
  padding: 2px 6px;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
