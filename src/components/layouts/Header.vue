<template>
  <div class="header">
    <img id="header-image" src="../../assets/logo.png" />
  </div>
</template>

<script>
import { ref } from "vue";
const url = ref("../../assets/logo.png");

export default {
  setup() {
    const imageUrl = url.value;
    return {
      imageUrl,
    };
  },
};
</script>
<style scoped>
#header-image {
  width: 10rem;
}
</style>