<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <h1>{{ post.title }}</h1>
      <h3>{{ post.description }}</h3>
      <div class="flex flex-row prose-buttons">
        <a v-if="post.github" :href="post.github"><div class="rounded border-2 px-2 text-blue-600"><span class="icon-github mr-2"></span>View on GitHub</div></a>
        <a v-if="post.href" :href="post.href"><div class="rounded border-2 px-2 text-blue-600"><span class="icon-external-link mr-2"></span>Visit Website</div></a>
      </div>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
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
