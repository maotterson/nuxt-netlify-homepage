<template>
  <div>
    <h1 class="lg:text-4xl text-2xl font-bold mb-2">Projects</h1>
    <ul class="flex flex-col">
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="project.slug" class="text-xl text-blue-600">{{ project.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const projects = await $content("projects").fetch()

    return {
      projects,
    }
  },
}
</script>