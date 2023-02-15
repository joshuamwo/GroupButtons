<script setup>
import TButton from "./components/TButton.vue";
import GroupTemplate from "./components/GroupTemplate.vue";
import GroupRender from "./components/GroupRender.js";

function say(msg) {
  alert(msg);
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen space-y-8">
    <GroupRender :labels="['one']" @clickAction="(label) => say(label)" />
    <GroupRender
      :labels="['two', 'three', 'four']"
      @clickAction="(label) => say(label)"
    />
  </div>
</template>
