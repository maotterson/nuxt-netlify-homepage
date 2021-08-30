<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <h1>{{ post.title }}</h1>
      <h3>{{ post.description }}</h3>
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
