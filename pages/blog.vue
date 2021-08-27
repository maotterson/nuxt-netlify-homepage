<template>
  <div>
    <div class="prose md:prose-xl">
      <h1>Blog</h1>
      <h2>Not exactly a blog... testing consuming netlify function</h2>
      <h2>Testing strava api</h2>
      <p>{{response}}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const activityEndpoint = "https://v2.maotterson.com/.netlify/functions/strava-test"
    const response = await $axios.$get(activityEndpoint)
    return {
      response
    }
  }
}
</script>

<style>

</style>