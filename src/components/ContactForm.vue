<template>
  <div>
    <form class="form-card" @submit.prevent="submitForm">
      <h1>Contact us</h1>
      <div class="form-card--control-wrapper">
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
        <button type="submit">
          <span v-show="isFormSubmitting" class="loader"></span>
          <p>Send</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import InputField from "./InputField";

export default {
  name: "ContactForm",
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
    async submitForm() {
      await this.touchInputs();
      if (this.getErrorMessages.length !== 0) return;
      this.isFormSubmitting = true;
      console.log("submitting....");
      try {
        const payload = {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        };
        await this.axios.post(
          "https://5d9f7fe94d823c0014dd323d.mockapi.io/api/message",
          payload
        );
      } catch (e) {
        console.log(e);
      }
      this.isFormSubmitting = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: flex-start;
  width: 450px;
  padding: 50px 100px;
  justify-content: center;
  align-items: center;
  box-shadow: 0.1px 0.6px 1.4px rgba(0, 0, 0, 0.014),
    0.3px 1.3px 3.3px rgba(0, 0, 0, 0.02),
    0.6px 2.5px 6.3px rgba(0, 0, 0, 0.025),
    1.1px 4.5px 11.2px rgba(0, 0, 0, 0.03),
    2.1px 8.4px 20.9px rgba(0, 0, 0, 0.036), 5px 20px 50px rgba(0, 0, 0, 0.05);
  & h1 {
    margin-bottom: 25px;
  }
  &--control-wrapper {
    display: flex;
    flex-direction: column;
    & button {
      display: flex;
      align-self: flex-end;
      background-color: #1962e9;
      color: #ffffff;
      border: none;
      padding: 10px 30px;
      & p {
        padding: 0;
        margin: 0;
      }
    }
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

.loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  width: 15px;
  height: 15px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
