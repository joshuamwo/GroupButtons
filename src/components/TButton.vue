<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <button class="px-4 py-2 hover:bg-gray-100">
    {{ label }}
  </button>
</template>
