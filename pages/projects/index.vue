<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0 mb-8">
      <h1 class="">Projects</h1>
      <h3>A selection of personal projects I have worked on.</h3>
      <div class="flex flex-col divide-y divide-grey-800">
        <div v-for="project of projects" :key="project.priority" class="flex flex-row items-center mt-2 pt-0 p-4 bg-gray-100 dark:bg-gray-700 shadow rounded mb-4">
          <div>
            <h2><NuxtLink :to="project.slug">{{ project.title }}</NuxtLink></h>
            <h6 class="mt-2 font-bold text-grey-500">{{project.date}}</h6>
            <p>{{project.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
   async asyncData({ $content }) {
    const projects = await $content("projects").fetch()
    projects.sort((a, b) => (a.priority > b.priority) ? 1 : -1)

    return {
      projects,
    }
  },
}
</script>
