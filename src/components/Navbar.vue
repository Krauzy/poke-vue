<template>
  <div id="nav">
    <div id="logo">
      <img src="/img/logo.png" alt="Poke-VUE logo" />
    </div>
    <div id="nav-content">
      <router-link id="a-link" to="/">
        <i class="fas fa-home"></i> HOME
      </router-link>
      <a href="https://github.com/Krauzy" target="blank_" id="a-link">
        <i class="fab fa-github"></i> KRAUZY
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#nav {
  width: 100%;
  background-color: #2d2c2c;
  color: white;
  display: flex;
  border-bottom: 10px solid #e8414c;
  justify-content: space-between;
  align-items: center;
}

#logo img {
  width: 52px;
}

#nav-content {
  margin-right: 50px;
  display: flex;
  gap: 25px;
}

#logo {
  display: flex;
  margin: 10px;
  margin-left: 25px;
}

#nav-content #a-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.5s;
}

#nav-content #a-link:hover {
  color: #e8414c;
}
</style>
