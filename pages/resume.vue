<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <h1>Resume</h1>
      <h3>A browser-friendly version of my resume.</h3>
      <nuxt-content :document="resume" />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'slide-bottom',
  async asyncData({$content}){
      const resume = await $content("resume").fetch()
      return {resume}
  }
}
</script>

<style>

</style>
