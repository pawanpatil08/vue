<template>
  <div>
    <regform />

    <emptable />
  </div>
</template>

<script>
import Emptable from "./emptable.vue";
import regform from "./regform.vue";
export default {
  components: { regform, Emptable },
  name: "formRoot",
};
</script>

<style lang="scss" scoped>
</style>