import { h } from "vue";
import TButton from "./TButton.vue";

export default {
  setup(props, context) {
    let labels = context.attrs.labels;
    console.log(context.attrs);
    return () =>
      h(
        "div",
        { class: "border rounded-lg divide-x" },
        labels.map((label) => {
          return h(TButton, {
            label,

            onClick: () => context.emit("clickAction", label),
          });
        })
      );
  },
};
