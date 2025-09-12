<template>
  <footer class="bg-black text-white py-16 w-full px-6">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="max-w-md">
        <h1 class="font-bold text-xl mb-6">{{ name.toUpperCase() }}</h1>
        <p class="text-sm">{{ bio }}</p>
      </div>
      <div>
        <h2 class="font-bold text-xl">SOCIAL</h2>
        <nav class="flex gap-5 pt-4">
          <NuxtLink
            :to="html_url"
            target="_blank"
            class="hover:text-blue-500 transition duration-300"
          >
            <Github :size="25" />
          </NuxtLink>
          <NuxtLink
            href="https://www.linkedin.com/in/matheusburey/"
            target="_blank"
            class="hover:text-blue-500 transition duration-300"
          >
            <Linkedin :size="25" />
          </NuxtLink>
          <NuxtLink
            :to="`https://x.com/${twitter_username}`"
            target="_blank"
            class="hover:text-blue-500 transition duration-300"
          >
            <Twitter :size="25" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Twitter, Github, Linkedin } from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
  twitter_username: {
    type: String,
    required: true,
  },
});
</script>
