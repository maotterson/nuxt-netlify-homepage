export const state = () => ({
  drawerShowing : false
})

export const getters = {
  drawerShowing(){
    return this.state.drawerShowing;
  }
}

export const mutations = {
  toggleDrawer(){
    this.state.drawerShowing ? this.state.drawerShowing = false : this.state.drawerShowing = true;
  },
  closeDrawer(){
    this.state.drawerShowing = false;
  }
}
