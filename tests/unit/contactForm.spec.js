import { mount } from "@vue/test-utils";
import ContactForm from "@/components/ContactForm.vue";

describe("ContactForm.vue", () => {
  it("fills the inputs and submits the form", async () => {
    const wrapper = mount(ContactForm);

    // Fill the input name
    const nameInput = wrapper.find("input[data-qa='input-name']");
    await nameInput.setValue("Test name");

    expect(wrapper.find("input[data-qa='input-name']").element.value).toBe(
      "Test name"
    );

    // Fill the input email
    const emailInput = wrapper.find("input[data-qa='input-email']");
    await emailInput.setValue("testname@mail.com");

    expect(wrapper.find("input[data-qa='input-email']").element.value).toBe(
      "testname@mail.com"
    );

    // Fill the input subject
    const subjectInput = wrapper.find("input[data-qa='input-subject']");
    await subjectInput.setValue("Test subject");

    expect(wrapper.find("input[data-qa='input-subject']").element.value).toBe(
      "Test subject"
    );

    // Fill the input message
    const messageInput = wrapper.find("textarea[data-qa='input-message']");
    await messageInput.setValue("A bit longer test message");

    expect(
      wrapper.find("textarea[data-qa='input-message']").element.value
    ).toBe("A bit longer test message");

    // Submit form
    wrapper.find(".form-card").trigger("submit.prevent");
    expect(wrapper.emitted("submit"));
  });
});
