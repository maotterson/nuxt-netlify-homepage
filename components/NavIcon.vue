<template>
  <div class="nav-icon w-6 h-5 visible cursor-pointer" 
    ref="burger" 
    id="burger"
    @click="toggleDrawer">
    <span 
      class="absolute inset-0 w-6 h-1 rounded burger-top transition-all bg-black dark:bg-white"
      ref="burgerTop"></span>
    <span 
      class="absolute inset-y-2 w-6 h-1 rounded burger-middle transition-all bg-black dark:bg-white" 
      ref="burgerMiddle" ></span>
    <span 
      class="absolute inset-y-4 w-6 h-1 rounded burger-bottom transition-all bg-black dark:bg-white" 
      ref="burgerBottom"></span>
  </div>
</template>

<script>
export default {

  computed: {
    drawerShowing () {
      return this.$store.state.drawerShowing
    }
  },
  watch:{
    drawerShowing (){
      this.changeIconAppearance();
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
    changeIconAppearance() {
      // x icon if drawerShowing, else burger icon (via transformation)
      const burgerTop = this.$refs.burgerTop;
      const burgerMiddle = this.$refs.burgerMiddle;
      const burgerBottom = this.$refs.burgerBottom;
      if(this.drawerShowing){
          burgerTop.classList.add('transform', '-rotate-45')
          burgerTop.classList.replace('inset-0', 'inset-y-2')
          burgerTop.classList.replace('bg-black', 'bg-white')

          burgerMiddle.classList.add('hidden')
          burgerMiddle.classList.replace('bg-black', 'bg-white')

          burgerBottom.classList.add('transform','rotate-45')
          burgerBottom.classList.replace('inset-y-4', 'inset-y-2')
          burgerBottom.classList.replace('bg-black', 'bg-white')
      }
      else{
          burgerTop.classList.remove('transform','-rotate-45')
          burgerTop.classList.replace('inset-y-2', 'inset-0')
          burgerTop.classList.replace('bg-white', 'bg-black')

          burgerMiddle.classList.remove('hidden')
          burgerMiddle.classList.replace('bg-white', 'bg-black')

          burgerBottom.classList.remove('transform','rotate-45')
          burgerBottom.classList.replace('inset-y-2', 'inset-y-4')
          burgerBottom.classList.replace('bg-white', 'bg-black')
      }
    },
  }
}
</script>

<style>
.nav-icon:hover span{
  transition: 0.5s;

}
</style>