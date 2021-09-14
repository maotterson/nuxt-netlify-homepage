<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <h1>{{ post.title }}</h1>
      
      <blockquote class="rounded p-4">{{ post.description }}</blockquote>
      
      <video
        class="relative w-full object-cover opacity-6	z-0"
        :src="'/videos/'+post.video" 
        muted 
        loop 
        autoplay>
      </video>

      <div v-for="project in post.projects" :key="project" class="flex flex-col">
        <h3 v-if="project.name">{{project.name}}</h3>
        <div class="flex flex-row prose-buttons">
          <a v-for="link in project.links" :key="link.label" :href="link.href"><div class="hover:bg-blue-800 bg-blue-600 rounded-xl border-2 px-4 p-2"><span :class="link.icon" class="mr-2"></span>{{link.label}}</div></a>
        </div>
      </div>
    
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("projects", params.slug).fetch()
    } 
    catch (e) {
      error({ message: "Project not found" })
    }

    return {
      post,
    }
  },
}
</script>
