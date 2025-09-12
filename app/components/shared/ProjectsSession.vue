<template>
  <div id="projects" class="py-28 max-w-7xl mx-auto px-6">
    <div class="text-center">
      <h2 class="text-4xl font-bold">PROJETOS</h2>
      <hr class="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Aqui você encontrará alguns dos projetos pessoais e de clientes que
        criei com cada projeto contendo seu próprio estudo de caso
      </p>
      <div class="pt-32 px-12">
        <div
          v-for="project in projectInHighlights"
          :key="project.name"
          class="flex justify-evenly mt-12"
        >
          <NuxtImg
            :src="project.img"
            alt="banner projet"
            width="300"
            height="300"
          />
          <div class="text-left w-[400px]">
            <h2 class="text-2xl font-bold">{{ project.name }}</h2>
            <p class="text-md my-7 text-gray-600">{{ project.description }}</p>
            <a
              :href="project.link"
              class="bg-blue-900 text-gray-100 px-8 py-3 rounded font-bold text-2xl hover:bg-blue-700 transition duration-300"
            >
              VER PROJETO
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const projectInHighlights = [
  {
    name: "Feedback Widget",
    description:
      "Um Component Widget para feedback que pode ser utilizado em qualquer site.",
    img: "https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true",
    link: "https://github.com/matheusburey/feedback_widget",
  },
  {
    name: "Feedback Widget 2",
    description:
      "Um Component Widget para feedback que pode ser utilizado em qualquer site.",
    img: "https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true",
    link: "do-it-beige.vercel.app",
  },
  {
    name: "Do It",
    description: "Um app organize seu trabalho e sua vida.",
    img: "https://github.com/matheusburey/feedback_widget/blob/main/.github/img_project.png?raw=true",
    link: "https://github.com/matheusburey/feedback_widget",
  },
];
</script>
