<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>
<script>
import Login from "../views/Login.vue";

export default {
  name: "Body",
  component: {
    Login,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}
#login-button {
  cursor: pointer;
  max-width: 100%;
  background-color: gray;
  text-align: center;
  color: black;
  border-radius: 5px 5px 5px 5px;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.button-next {
}
</style>