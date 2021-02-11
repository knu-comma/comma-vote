<template>
  <div id="app">
    <Header />
    <Nav />
    <Body />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/layouts/Header.vue";
import Nav from "./components/layouts/Nav.vue";
import Footer from "./components/layouts/Footer";
import Body from "./components/layouts/Body";

export default {
  name: "App",
  components: {
    Header,
    Nav,
    Footer,
    Body,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0px 100px 0px;
}
.input {
  margin: 1rem;
}
.button-next {
  width: 100%;
  margin-top: 1rem;
}
</style>
