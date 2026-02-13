<template>
  <header class="fixed w-full p-6 z-10 backdrop-blur-sm bg-black/60">
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
        <h1 class="font-bold text-xl text-white">{{ name?.toUpperCase() }}</h1>
      </div>
      <div class="hidden md:flex align-center gap-2">
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
	name: String,
	avatar_url: String,
});
</script>
