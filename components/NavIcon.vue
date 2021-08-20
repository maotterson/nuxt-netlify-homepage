<template>
  <div class="nav-icon relative w-6 h-5 visible cursor-pointer" 
    ref="burger" 
    id="burger"
    @click="toggleDrawer">
    <span 
      class="absolute inset-0 w-6 h-1 rounded burger-top transition-all	bg-black"
      ref="burgerTop"></span>
    <span 
      class="absolute inset-y-2 w-6 h-1 rounded burger-middle transition-all bg-black" 
      ref="burgerMiddle" ></span>
    <span 
      class="absolute inset-y-4 w-6 h-1 rounded burger-bottom transition-all bg-black" 
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
      console.log("toggle on icon")
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

          burgerMiddle.classList.add('hidden')

          burgerBottom.classList.add('transform','rotate-45')
          burgerBottom.classList.replace('inset-y-4', 'inset-y-2')
      }
      else{
          burgerTop.classList.remove('transform','-rotate-45')
          burgerTop.classList.replace('inset-y-2', 'inset-0')

          burgerMiddle.classList.remove('hidden')

          burgerBottom.classList.remove('transform','rotate-45')
          burgerBottom.classList.replace('inset-y-2', 'inset-y-4')
      }
    },
  }
}
</script>

<style>
.nav-icon:hover span{
  background-color:#DC2626;
  transition: 0.5s;

}
</style>