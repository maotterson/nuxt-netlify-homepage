<template>
  <div>
    <div class="prose md:prose-xl mb-8">
      <h1 class="">Projects</h1>
      <h3>A selection of projects I have worked on</h3>
      <div class="flex flex-col">
        <div v-for="project of projects" :key="project.slug">
          <NuxtLink :to="project.slug"><h3>{{ project.title }}</h3></NuxtLink>
          <h5 >{{project.description}}</h5>
        </div>
      </div>
    </div>
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