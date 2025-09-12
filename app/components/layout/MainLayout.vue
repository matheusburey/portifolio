<template>
  <main>
    <div
      id="header"
      class="bg-gray-100 h-screen flex flex-col justify-center items-center"
    >
      <h1 class="text-6xl font-bold">OLA, SOU {{ name.toUpperCase() }}</h1>
      <p class="text-2xl text-gray-700 py-20 max-w-3xl text-center">
        {{ bio }}
      </p>
      <ButtonUi @click="scrollToSection('#projects')"> PROJETOS </ButtonUi>
    </div>

    <AboutSession :name="name" :bio="bio" />
    <ProjectsSession />
    <ContactSession />
  </main>
</template>
<script setup lang="ts">
import { scrollToSection } from "@/helper";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});
</script>
