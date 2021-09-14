<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0 mb-8">
      <h1 class="">Projects</h1>
      <h3>A selection of projects I have worked on.</h3>
      <div class="flex flex-col">
        <div v-for="project of projects" :key="project.priority" class="flex flex-row items-center  p-2 border-b-2	">
          <div>
            <h3><NuxtLink :to="project.slug">{{ project.title }}</NuxtLink></h3>
            <h6 class="font-bold text-red-500">{{project.date}}</h6>
            <p>{{project.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const projects = await $content("projects").fetch()
    projects.sort((a, b) => (a.priority > b.priority) ? 1 : -1)

    return {
      projects,
    }
  },
}
</script>
