<template>
  <div class="input-field-wrapper">
    <label :for="inputId">{{ label }}</label>
    <input
      v-if="!isTextarea"
      :id="inputId"
      :type="type"
      :value="value"
      @input="updateValue($event.target.value)"
    />
    <textarea
      v-else
      :id="inputId"
      :value="value"
      @input="updateValue($event.target.value)"
    ></textarea>
    <ul v-if="errorMessages.length !== 0">
      <li v-for="(message, index) in errorMessages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    isTextarea: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    validations: {
      type: Object,
    },
  },
  data() {
    return {
      errorMessages: [],
    };
  },
  watch: {
    value() {
      if (this.validations !== undefined) {
        this.validateInput();
      }
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    validateInput() {
      this.errorMessages = [];

      // Input is Required validation - check if the field is empty
      if (this.validations.required && this.value === "") {
        this.errorMessages.push(`${this.label} is required.`);
      }

      // Check if the input is string
      if (this.validations.type === "string" && this.type !== "text") {
        this.errorMessages.push(`Only text input is allowed.`);
      }

      // Minimum length validation
      if (
        this.value !== "" &&
        this.validations.minLength &&
        this.value.length + 1 <= this.validations.minLength
      ) {
        this.errorMessages.push(
          `${this.label} should be at least ${this.validations.minLength} characters long`
        );
      }

      // Maximum length validation
      if (
        this.validations.maxLength &&
        this.value.length - 1 >= this.validations.maxLength
      ) {
        this.errorMessages.push(
          `${this.label} should not be longer than ${this.validations.maxLength} characters.`
        );
      }

      // Mail format validation
      if (this.type === "email" && !this.validateEmail(this.value)) {
        this.errorMessages.push("Please enter valid email.");
      }
    },
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const mailFormat = /\S+@\S+\.\S+/;

      if (!mailFormat.test(email)) return false;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
