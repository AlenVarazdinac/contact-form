<template>
  <div
    v-if="$toastNotification.isToastNotificationVisible"
    class="toast"
    :class="toastType($toastNotification.type)"
  >
    <div class="toast--title">
      {{ $toastNotification.headerText }}
    </div>
    <div class="toast--body">
      {{ $toastNotification.bodyText }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toastType(type) {
      const types = {
        success: "toast--success",
        error: "toast--error",
        default: "toast--default",
      };
      return types[type] || types["default"];
    },
  },
};
</script>

<style lang="scss" scoped>
.toast--default {
  & .toast--title {
    background-color: #8d8d8d;
    border: 1px solid #8d8d8d;
  }
  & .toast--body {
    border: 1px solid #c7c7c7;
    background-color: #c7c7c7;
  }
}
.toast--success {
  & .toast--title {
    background-color: #0bda2e;
    border: 1px solid #0bda2e;
  }
  & .toast--body {
    border: 1px solid #63e97a;
    background-color: #63e97a;
  }
}
.toast--error {
  & .toast--title {
    background-color: #da0b0b;
    border: 1px solid #da0b0b;
  }
  & .toast--body {
    border: 1px solid #df5a5a;
    background-color: #df5a5a;
  }
}
.toast {
  position: absolute;
  top: 20px;
  right: 30px;
  min-width: 250px;
  box-shadow: 0.1px 0.6px 1.4px rgba(0, 0, 0, 0.014),
    0.3px 1.3px 3.3px rgba(0, 0, 0, 0.02),
    0.6px 2.5px 6.3px rgba(0, 0, 0, 0.025),
    1.1px 4.5px 11.2px rgba(0, 0, 0, 0.03),
    2.1px 8.4px 20.9px rgba(0, 0, 0, 0.036), 5px 20px 50px rgba(0, 0, 0, 0.05);
  &--title {
    border-style: solid solid none solid;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
  }
  &--body {
    border-style: solid solid none solid;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px 10px;
    font-size: 14px;
  }
}
</style>
