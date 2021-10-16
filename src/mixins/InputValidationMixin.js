export default {
  methods: {
    // Validates input with given validation prop
    validate() {
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
    // Checks if the email is valid format
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const mailFormat = /\S+@\S+\.\S+/;

      if (!mailFormat.test(email)) return false;
      return true;
    },
  },
};
