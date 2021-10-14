<template>
  <div id="app">
    <form class="form" @submit.prevent="submitForm">
      <input-field
        v-model="form.name"
        label="Name"
        inputId="name"
        type="text"
        :validations="validations.form.name"
      />
      <input-field
        v-model="form.email"
        label="Email"
        inputId="email"
        type="email"
      />
      <input-field
        v-model="form.subject"
        label="Subject"
        inputId="subject"
        type="text"
      />
      <input-field
        v-model="form.message"
        label="Message"
        inputId="message"
        type="text"
        isTextarea
      />
      <!--
        <label for="name">Name<span style="color: red"> *</span></label>
        <input v-model="form.name" id="name" type="text" />
        <ul v-if="validations.form.name.length !== 0">
          <li v-for="(validation, index) in validations.form.name" :key="index">
            {{ validation }}
          </li>
        </ul>
        -->
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import InputField from "./components/InputField";

export default {
  name: "App",
  components: { InputField },
  data() {
    return {
      validations: {
        form: {
          name: {
            required: true,
            minLength: 5,
            maxLength: 50,
            type: "string",
          },
        },
      },
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("form", this.form);
    },
  },
};
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
