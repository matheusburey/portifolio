<template>
  <button
    :class="[
      'font-bold rounded uppercase transition duration-300 cursor-pointer',
      {
        'bg-blue-900 text-gray-100 px-8 py-3 font-bold text-2xl hover:bg-blue-700':
          variant === 'primary',
        'bg-gray-200 text-gray-900 px-8 py-3 font-bold text-2xl hover:bg-gray-300':
          variant === 'secondary',
        'bg-transparent p-3 text-base hover:text-blue-500':
          variant === 'outline',
      },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "outline";
defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: "primary",
  },
});
</script>
