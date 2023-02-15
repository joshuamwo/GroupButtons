import { mount } from "@vue/test-utils";
import App from "../../App.vue";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("should be defined", () => {
    expect(App).toBeDefined();
  });
  it("should be mounted", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain("div");
    expect(wrapper.text()).toContain("one");
  });
  it("should render a button", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain("button");
  });
  it("should match snapshot", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
