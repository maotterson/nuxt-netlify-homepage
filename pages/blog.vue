<template>
  <div>
    <div class="prose md:prose-xl">
      <h1>Blog</h1>
      <h2>Not exactly a blog... testing consuming netlify function</h2>
      <p>{{data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const endpoint = "/.netlify/functions/hello-world"
    const data = await $axios.$get(endpoint)
    return {
      data
    }
  }
}
</script>

<style>

</style>