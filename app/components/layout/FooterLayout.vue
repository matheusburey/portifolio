<template>
  <footer class="bg-black text-white py-16 w-full px-6">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
      <div class="w-full md:max-w-md">
        <h1 class="font-bold text-xl mb-6">{{ name?.toUpperCase() }}</h1>
        <p class="text-sm">{{ bio }}</p>
      </div>
      <div class="mt-10 md:mt-0">
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
import { Github, Linkedin, Twitter } from "lucide-vue-next";

const props = defineProps({
	name: String,
	bio: String,
	html_url: String,
	twitter_username: String,
});
</script>
