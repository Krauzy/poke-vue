<template>
  <div id="footer">
    <span>Made by <a href="https://github.com/Krauzy">Krauzy</a> with ❤️</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  background-color: #2d2c2c;
  border-top: 10px solid #e8414c;
  margin-top: 50px;
  padding: 10px 0;
  text-align: center;
  color: white;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: 0.5s;
}

a:hover {
  color: #e8414c;
}
</style>
