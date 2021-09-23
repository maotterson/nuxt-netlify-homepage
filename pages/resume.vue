<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mt-8 md:mt-0">
      <h1>Resume</h1>
      <h3>A browser-friendly version of my resume.</h3>
      <div class="flex flex-row prose-buttons">
        <a href="/resume.pdf"><div class="hover:bg-blue-800 bg-blue-600 rounded-xl border-2 px-4 p-2 "><span class="icon-file-pdf mr-2"></span>PDF Version</div></a>
      </div>
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
