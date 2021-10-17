<template>
  <div class="input-field-wrapper">
    <label :for="inputId" class="input-field-wrapper--label">{{ label }}</label>
    <input
      v-if="!isTextarea"
      :id="inputId"
      :type="type"
      :value="value"
      @input="updateValue($event.target.value)"
      class="input-field-wrapper--input"
    />
    <textarea
      v-else
      :id="inputId"
      :value="value"
      rows="4"
      @input="updateValue($event.target.value)"
      class="input-field-wrapper--input"
    ></textarea>
    <ul
      v-if="errorMessages.length !== 0"
      class="input-field-wrapper--error-messages"
    >
      <li v-for="(message, index) in errorMessages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
import InputValidationMixin from "../mixins/InputValidationMixin";

export default {
  mixins: [InputValidationMixin],
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
  computed: {
    getErrorMessages() {
      return this.$store.getters.getErrorMessages;
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    async validateInput() {
      // Clear error messages on validation start
      this.errorMessages = [];
      await this.$store.commit("removeErrorMessageKey", {
        key: this.inputId,
      });

      this.validate();

      // Add error message key if it does not exists
      if (
        this.errorMessages.length > 0 &&
        !this.doesErrorMessageKeyExists(this.inputId)
      ) {
        await this.$store.commit("addErrorMessageKey", {
          key: this.inputId,
        });
      }
    },
    doesErrorMessageKeyExists(key) {
      return this.getErrorMessages.includes(key);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &--label {
    margin-bottom: 5px;
  }
  &--input {
    border: 1px solid lighten(#000000, 15%) !important;
    margin-bottom: 15px;
    min-height: 20px;
    min-width: 200px;
    padding: 5px 10px;
    resize: vertical;
    // calc = 100% width - (horizontal padding + border)
    width: calc(100% - 22px);
  }
  &--error-messages {
    margin: 0;
    padding: 0;
    color: #f12323;
    margin-bottom: 15px;
    padding-left: 20px;
  }
}
</style>
