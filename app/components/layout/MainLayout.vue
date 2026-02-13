<template>
  <main>
    <div id="header">
      <BgStars />
      <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-center px-5 text-4xl md:text-6xl font-bold text-white">OLA, SOU {{ name?.toUpperCase() }}</h1>
        <p class="text-center px-5 text-xl md:text-2xl text-gray-700 py-20 max-w-3xl text-gray-50">
          {{ bio }}
        </p>
        <ButtonUi class="absolute z-10 bottom-1/4 md:bottom-1/3" @click="scrollToSection('#projects')">PROJETOS</ButtonUi>
      </div>
    </div>

    <AboutSession :name="name" :bio="bio" />
    <ProjectsSession />
    <ContactSession />
  </main>
</template>
<script setup lang="ts">
import { scrollToSection } from "@/helper";

const props = defineProps({
	name: String,
	bio: String,
});
</script>

<style>
#header {
	width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  background-image: radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent),
    radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)
}
</style>
