<template>
  <ul class="flex flex-col">
    <li 
      v-for="link in links"
      :key="link.title"
      class="mb-4 text-3xl hover:text-blue-400">
      <NuxtLink :to="link.href" @click.native="closeDrawer">{{link.title}}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          "title":"Home",
          "href":"/"
        },
        {
          "title":"Skills",
          "href":"/Skills/"
        },
        {
          "title":"Projects",
          "href":"/Projects/"
        },
        {
          "title":"Mini-Projects",
          "href":"/Mini-Projects/"
        },
        {
          "title":"Resume",
          "href":"/Resume/"
        }
      ]
    }
  },
  methods: {
    closeDrawer() {
      this.$store.commit('closeDrawer')
    },
  }
}
</script>

<style>

</style>