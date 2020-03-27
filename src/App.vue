<template>
  <div id="app">
    <TestPage />
  </div>
</template>

<script>
import TestPage from "./pages/TestPage";

export default {
  name: "app",
  components: { TestPage }
};
</script>

<style lang="scss">
@import "./styles/carbon";
</style>
