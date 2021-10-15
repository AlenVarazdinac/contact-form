<template>
  <div id="app">
    <form class="form" @submit.prevent="submitForm">
      <input-field
        v-model="form.name"
        ref="name"
        label="Name"
        inputId="name"
        type="text"
        :validations="validations.form.name"
      />
      <input-field
        v-model="form.email"
        ref="email"
        label="Email"
        inputId="email"
        type="email"
        :validations="validations.form.email"
      />
      <input-field
        v-model="form.subject"
        ref="subject"
        label="Subject"
        inputId="subject"
        type="text"
        :validations="validations.form.subject"
      />
      <input-field
        v-model="form.message"
        ref="message"
        label="Message"
        inputId="message"
        type="text"
        :validations="validations.form.message"
        isTextarea
      />
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
          email: {
            required: true,
          },
          subject: {
            required: false,
            maxLength: 100,
            type: "string",
          },
          message: {
            required: true,
            maxLength: 500,
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
      isFormSubmitting: false,
    };
  },
  computed: {
    getErrorMessages() {
      return this.$store.getters.getErrorMessages;
    },
  },
  methods: {
    touchInputs() {
      const formKeys = Object.keys(this.form);
      formKeys.forEach((key) => this.$refs[key].validateInput());
    },
    submitForm() {
      this.touchInputs();
      if (this.getErrorMessages.length !== 0) return;
      this.isFormSubmitting = true;
      console.log("submitting....");
      try {
        // const payload = {
        //   name: this.form.name,
        //   email: this.form.email,
        //   subject: this.form.subject,
        //   message: this.form.message,
        // };
        // this.axios.post(
        //   "https://5d9f7fe94d823c0014dd323d.mockapi.io/api/message",
        //   payload
        // );
      } catch (e) {
        console.log(e);
      }
      this.isFormSubmitting = false;
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
