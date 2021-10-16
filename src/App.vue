<template>
  <div id="app">
    <div class="contact-form-wrapper">
      <contact-form />
    </div>
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm";

export default {
  name: "App",
  components: { ContactForm },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
.contact-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
