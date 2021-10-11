<template>
  <div>{{ $route.params.pokemon }}</div>
</template>

<style scoped>
div {
  color: red;
}
</style>

<script>
export default {
  name: "Pokemon",
};
</script>
