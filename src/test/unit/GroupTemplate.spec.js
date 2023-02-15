import { mount } from "@vitejs/plugin-vue";
import GroupRender from "../../components/GroupRender";
import TButton from "../../components/TButton";
import { describe, it, expect } from "vitest";

describe("GroupRender", () => { 
	it("should be defined", () => {
		expect(GroupRender).toBeDefined();
	 });
	it("receive props", () => { 
		const wrapper = mount(GroupRender, {
			props: {
				values: ["one", "two", "three"],
			}
		});
		expect(wrapper.props().values).toStrictEqual(["one", "two", "three"]);
	});
});