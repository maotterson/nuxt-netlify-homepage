<template>
  <div class="bg-black">
    <div class="flex flex-col" :class="(this.$store.state.drawerShowing)?'min-h-screen':''">
      <Topbar class="text-white bg-blue-900 lg:hidden" />
      <Drawer class="text-white bg-blue-900 flex-grow	" v-if="this.$store.state.drawerShowing"/>
    </div>
    <div class="w-full max-w-7xl mx-auto" v-if="!this.$store.state.drawerShowing">
      <div class="lg:flex">
        <Sidebar 
          class="text-white bg-blue-900 hidden lg:block"/>
        <nuxt class="bg-white min-h-screen shadow-xl p-4 lg:p-12"></nuxt>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>