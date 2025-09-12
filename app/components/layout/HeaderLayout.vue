<template>
  <header class="fixed w-full p-6 bg-white">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="flex items-center gap-5">
        <figure>
          <NuxtImg
            :src="avatar_url"
            alt="avatar"
            width="50"
            height="50"
            class="rounded-full"
          />
          <figcaption class="hidden">{{ name }}</figcaption>
        </figure>
        <h1 class="font-bold text-xl">{{ name.toUpperCase() }}</h1>
      </div>
      <div class="flex align-center gap-2">
        <ButtonUi variant="outline" @click="scrollToSection('#header')"
          >Home</ButtonUi
        >
        <ButtonUi variant="outline" @click="scrollToSection('#about')"
          >Sobre Mim</ButtonUi
        >
        <ButtonUi variant="outline" @click="scrollToSection('#projects')"
          >Projetos</ButtonUi
        >
        <ButtonUi variant="outline" @click="scrollToSection('#contact')"
          >Contato</ButtonUi
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { scrollToSection } from "@/helper";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
});
</script>
