<template>
  <div id="main-container">
    <div id="poke-title">
      POKE<span id="dex">DEX </span><span id="dex-vue">VUE</span>
    </div>
    <small>A pokedex made with VUE</small>
    <div id="search-box">
      <input
        type="text"
        v-model="stext"
        placeholder="Digite o nome de um pokemon..."
      />
    </div>
  </div>
  <Pokemons :stext="stext" :key="stext" />
</template>

<script>
import Pokemons from "./Pokemons.vue";

export default {
  name: "Search",
  components: {
    Pokemons,
  },
  data() {
    return {
      stext: null,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

#main-container {
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
}

#main-container > #poke-title {
  font-size: 80px;
  font-family: "Righteous", cursive;
}

#poke-title > #dex-vue {
  font-size: 80px;
  color: #42b983;
  font-family: "Righteous", cursive;
}

#poke-title > #dex {
  color: #e8414c;
  font-family: "Righteous", cursive;
}

small {
  color: #aaa;
  margin-top: 0;
}

#search-box {
  margin-top: 42px;
}

#search-box > input {
  width: 600px;
  font-size: 15px;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #ddd;
  color: #2d2c2c;
  transition: 0.5s;
}

#search-box > input:focus {
  border: 2px solid #e8414c;
  outline: none !important;
}

@media screen and (max-width: 650px) {
  #search-box > input {
    width: 400px;
  }
}

@media screen and (max-width: 550px) {
  #poke-title {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 450px) {
  #search-box > input {
    width: 300px;
  }

  #main-container > #poke-title {
    font-size: 60px;
  }

  #poke-title > #dex-vue {
    font-size: 60px;
  }
}
</style>
