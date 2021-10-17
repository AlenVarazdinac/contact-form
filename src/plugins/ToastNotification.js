import ToastNotification from "../components/ToastNotification";

const ToastNotificationStore = {
  isToastNotificationVisible: false,
  headerText: "",
  bodyText: "",
  type: "default",
  show({
    headerText = "",
    bodyText = "",
    type = "default",
    displayFor = 3000,
  } = {}) {
    this.isToastNotificationVisible = true;
    this.headerText = headerText;
    this.bodyText = bodyText;
    this.type = type;

    setTimeout(() => {
      this.isToastNotificationVisible = false;
    }, displayFor);
  },
};

const ToastNotificationPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          toastNotificationStore: ToastNotificationStore,
        };
      },
    });

    Object.defineProperty(Vue.prototype, "$toastNotification", {
      get() {
        return this.$root.toastNotificationStore;
      },
    });

    Vue.component("toast-notification", ToastNotification);
  },
};

export default ToastNotificationPlugin;
