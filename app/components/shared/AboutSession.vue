<template>
  <div id="about" class="py-28 max-w-7xl mx-auto px-6">
    <div class="text-center">
      <h2 class="text-4xl font-bold">SOBRE MIM</h2>
      <hr class="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">{{ bio }}</p>
    </div>
    <div class="display flex">
      <div class="w-1/2 p-8 text-gray-700">
        <h3 class="text-2xl font-bold py-8 text-black">Me conhecer!</h3>
        <p class="text-xl">
          Sou um Desenvolvedor Web Fullstack que cria sites e aplicativos da Web
          que levam ao sucesso geral do produto. Confira alguns dos meus
          trabalhos na seção de projetos.
        </p>
        <p class="pb-10 pt-4 text-xl">
          Estou aberto a oportunidades de trabalho onde possa contribuir,
          aprender e crescer. Se você tiver uma boa oportunidade que corresponda
          às minhas habilidades e experiência, não hesite em entrar em contato
          comigo.
        </p>
        <ButtonUi @click="scrollToSection('#projects')"> PROJETOS </ButtonUi>
      </div>
      <div class="w-1/2 p-8">
        <h3 class="font-bold text-2xl py-8">Minhas habilidades</h3>
        <div class="flex flex-wrap">
          <p
            v-for="skill in skills"
            :key="skill"
            class="text-xl text-gray-600 p-3 m-2 bg-gray-200 rounded"
          >
            {{ skill }}
          </p>
        </div>
      </div>
    </div>
  </div>
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

const skills = [
  "HTML",
  "CSS",
  "JavaScrip",
  "Typescript",
  "Vue",
  "Nuxt",
  "React",
  "React Native",
  "Next",
  "Tailwind",
];
</script>
