<template>
  <div>
    <div :class="(this.$store.state.drawerShowing)?'h-screen':''">
      <Topbar class="text-white bg-blue-700 md:hidden" />
      <Drawer class="text-white bg-blue-700" v-if="this.$store.state.drawerShowing"/>
    </div>
    <div class="grid grid-cols-4" v-if="!this.$store.state.drawerShowing">
      <Sidebar 
        class="text-white bg-blue-700 hidden md:col-span-1 md:block"/>
      <nuxt class="bg-blue-200 col-span-4	md:col-span-3"></nuxt>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>