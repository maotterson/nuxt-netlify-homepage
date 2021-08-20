<template>
  <div>
    <Topbar class="text-white bg-blue-700 md:hidden" />
    <div class="grid grid-cols-4">
      <Sidebar 
        class="text-white bg-blue-700 hidden md:col-span-1 md:block"/>
      <nuxt class="bg-blue-200 col-span-4	md:col-span-3"></nuxt>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarShowing:true
    }
  },
}
</script>

<style>

</style>