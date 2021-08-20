<template>
  <ul class="flex flex-row">
    <li v-for="link in links" :key="link.icon">
      <a :href="link.href"><span :class="link.icon" class="mr-2 text-3xl"></span></a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          "icon":"icon-linkedin",
          "href":"https://www.linkedin.com/in/mark-otterson-a7506029/"
        },
        {
          "icon":"icon-github",
          "href":"https://github.com/maotterson"
        },
        {
          "icon":"icon-envelope",
          "href":"mailto:otterson.2@gmail.com"
        },
      ]
    }
  },
}
</script>

<style>

</style>