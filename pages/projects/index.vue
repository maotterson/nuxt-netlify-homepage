<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0 mb-8">
      <h1 class="">Projects</h1>
      <h3>A selection of projects I have worked on.</h3>
      <div class="flex flex-col">
        <div v-for="project of projects" :key="project.slug" class="flex flex-row items-center  p-2">
          <div class="flex-none sm:mr-8 mr-4">
            <NuxtLink :to="project.slug">
              <img class="h-16 sm:h-24" :src="'/thumb/'+project.thumb"/>
            </NuxtLink>
          </div>
          <div>
            <h3><NuxtLink :to="project.slug">{{ project.title }}</NuxtLink></h3>
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

    return {
      projects,
    }
  },
}
</script>
