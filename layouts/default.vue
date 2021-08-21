<template>
  <div class="bg-white">
    <div class="flex flex-col" :class="(this.$store.state.drawerShowing)?'min-h-screen':''">
      <Topbar class="text-white bg-gray-800 lg:hidden" />
      <Drawer class="text-white bg-gray-800 flex-grow	" v-if="this.$store.state.drawerShowing"/>
    </div>
    <div class="w-full max-w-8xl mx-auto h-full" v-if="!this.$store.state.drawerShowing">
      <div class="lg:flex">
        <Sidebar 
          class="p-20 h-full flex-none text-black bg-white hidden lg:block"/>
        <nuxt class="lg:max-h-full lg:overflow-visible flex-auto lg:static w-full bg-white min-h-screen shadow-xl p-4 lg:p-12"></nuxt>
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
.max-w-8xl{
  width:92rem;
}
</style>