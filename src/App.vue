<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #2d2c2c;
}

::-webkit-scrollbar-thumb {
  background-color: #e8414c;
  height: 30px;
}

:root {
  --flying-color: #a890f0;
  --bug-color: #a8b820;
  --dragon-color: #7038f8;
  --dark-color: #705848;
  --electric-color: #f8d030;
  --fairy-color: #ee99ac;
  --fighting-color: #c03028;
  --fire-color: #f08030;
  --ghost-color: #705898;
  --grass-color: #78c850;
  --ground-color: #e0c068;
  --ice-color: #98d8d8;
  --normal-color: #a8a878;
  --poison-color: #a040a0;
  --psychic-color: #f85888;
  --rock-color: #b8a038;
  --steel-color: #b8b8d0;
  --water-color: #6890f0;
}

.ptype {
  font-size: small;
  padding: 2px 8px;
  border-radius: 20px;
}

.type-flying {
  border: 1px solid var(--flying-color);
  background-color: var(--flying-color);
  color: white;
}

.type-bug {
  border: 1px solid var(--bug-color);
  background-color: var(--bug-color);
  color: white;
}

.type-dragon {
  border: 1px solid var(--dragon-color);
  background-color: var(--dragon-color);
  color: white;
}

.type-dark {
  border: 1px solid var(--dark-color);
  background-color: var(--dark-color);
  color: white;
}

.type-electric {
  border: 1px solid var(--electric-color);
  background-color: var(--electric-color);
  color: white;
}

.type-fairy {
  border: 1px solid var(--fairy-color);
  background-color: var(--fairy-color);
  color: white;
}

.type-fighting {
  border: 1px solid var(--fighting-color);
  background-color: var(--fighting-color);
  color: white;
}

.type-fire {
  border: 1px solid var(--fire-color);
  background-color: var(--fire-color);
  color: white;
}

.type-ghost {
  border: 1px solid var(--ghost-color);
  background-color: var(--ghost-color);
  color: white;
}

.type-grass {
  border: 1px solid var(--grass-color);
  background-color: var(--grass-color);
  color: white;
}

.type-ground {
  border: 1px solid var(--ground-color);
  background-color: var(--ground-color);
  color: white;
}

.type-ice {
  border: 1px solid var(--ice-color);
  background-color: var(--ice-color);
  color: white;
}

.type-normal {
  border: 1px solid var(--normal-color);
  background-color: var(--normal-color);
  color: white;
}

.type-poison {
  border: 1px solid var(--poison-color);
  background-color: var(--poison-color);
  color: white;
}

.type-psychic {
  border: 1px solid var(--psychic-color);
  background-color: var(--psychic-color);
  color: white;
}

.type-rock {
  border: 1px solid var(--rock-color);
  background-color: var(--rock-color);
  color: white;
}

.type-steel {
  border: 1px solid var(--steel-color);
  background-color: var(--steel-color);
  color: white;
}

.type-water {
  border: 1px solid var(--water-color);
  background-color: var(--water-color);
  color: white;
}

.border-flying {
  border: 3px solid var(--flying-color);
}

.border-bug {
  border: 3px solid var(--bug-color);
}

.border-dragon {
  border: 3px solid var(--dragon-color);
}

.border-dark {
  border: 3px solid var(--dark-color);
}

.border-electric {
  border: 3px solid var(--electric-color);
}

.border-fairy {
  border: 3px solid var(--fairy-color);
}

.border-fighting {
  border: 3px solid var(--fighting-color);
}

.border-fire {
  border: 3px solid var(--fire-color);
}

.border-ghost {
  border: 3px solid var(--ghost-color);
}

.border-grass {
  border: 3px solid var(--grass-color);
}

.border-ground {
  border: 3px solid var(--ground-color);
}

.border-ice {
  border: 3px solid var(--ice-color);
}

.border-normal {
  border: 3px solid var(--normal-color);
}

.border-psychic {
  border: 3px solid var(--psychic-color);
}

.border-poison {
  border: 3px solid var(--poison-color);
}

.border-rock {
  border: 3px solid var(--rock-color);
}

.border-steel {
  border: 3px solid var(--steel-color);
}

.border-water {
  border: 3px solid var(--water-color);
}
</style>
