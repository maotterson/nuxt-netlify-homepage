<template>
  <div class="bg-white">
    <div class="flex flex-col" :class="(this.$store.state.drawerShowing)?'min-h-screen':''">
      <NavIcon class="text-gray-500 fixed right-0 mt-2 mr-2	lg:hidden" />
      <Drawer class="text-white bg-gray-800 flex-grow	" v-if="this.$store.state.drawerShowing"/>
    </div>
    <div class="max-w-8xl w-full md:max-w-md lg:max-w-max mx-auto h-full" v-if="!this.$store.state.drawerShowing">
      <div class="lg:flex">
        <Sidebar 
          class="p-20 h-full flex-none text-black bg-white hidden lg:block"/>
        <nuxt class="lg:static bg-white w-full min-h-screen shadow-xl p-4 lg:p-12"></nuxt>
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
  max-width:90rem;
}
</style>