<template>
  <div class="lg:px-40 bg-black">
    <div class="flex flex-col" :class="(this.$store.state.drawerShowing)?'min-h-screen':''">
      <Topbar class="text-white bg-blue-900 md:hidden" />
      <Drawer class="text-white bg-blue-900 flex-grow	" v-if="this.$store.state.drawerShowing"/>
    </div>
    <div class="grid grid-cols-8" v-if="!this.$store.state.drawerShowing">
      <Sidebar 
        class="text-white bg-blue-900 hidden md:col-span-3 xl:col-span-2 md:block"/>
      <nuxt class="bg-white min-h-screen col-span-8 md:col-span-5 xl:col-span-6 shadow-xl p-4 lg:p-12"></nuxt>
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>