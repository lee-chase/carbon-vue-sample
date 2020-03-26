<template>
  <div id="app">
    <cv-button @click="showIt">Hello from @carbon/vue</cv-button>
    <cv-modal :visible="visible" @modal-hidden="hidingIt">
      <template slot="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </template>
    </cv-modal>

    <br />I am a lonely checkbox with no label
    <cv-checkbox value="one" aria-label="wibble" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showIt() {
      this.visible = true;
    },
    hidingIt() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
@import "./styles/carbon";
</style>
