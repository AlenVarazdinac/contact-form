<template>
  <div id="app">
    <form class="form" @submit.prevent="submitForm">
      <div class="input-wrapper">
        <label for="name">Name<span style="color: red"> *</span></label>
        <input v-model="form.name" id="name" type="text" />
      </div>
      <div class="input-wrapper">
        <label for="email">Email<span style="color: red"> *</span></label>
        <input v-model="form.email" id="email" type="email" />
      </div>
      <div class="input-wrapper">
        <label for="subject"
          >Subject<span style="color: grey"> (optional)</span></label
        >
        <input v-model="form.subject" id="subject" type="text" />
      </div>
      <div class="input-wrapper">
        <label for="message">Message<span style="color: red"> *</span></label>
        <textarea v-model="form.message" id="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    }
  },
  methods: {
    submitForm() {
      console.log("form", this.form)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & button {
    display: flex;
    align-self: flex-end;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
