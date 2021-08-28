<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center justify-items-start pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="closeModal()" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-black absolute h-2/5 w-full z-0"></div>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex flex-row">
            <div class="flex-grow"></div>
            <span class="z-50 text-2xl text-white icon-cross hover:text-red-600" @click="closeModal()"></span>
          </div>
          <div class="flex flex-row justify-center mb-2">
            <div class="text-7xl border-2 p-8 rounded-full z-50" :class="selectedEvent.color"><span :class="[getIcon()]"></span></div>
          </div>
          <div class="flex flex-row justify-center">
              <h2 class="text-3xl">{{selectedEvent.name}}</h2> 
          </div>
          <div class="flex flex-row justify-center mb-8">
              <h4 class="text-lg text-gray-400">{{selectedEvent.start}}</h4> 
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex flex-col justify-center">
              <h4 class="text-lg text-gray-800">{{this.time}} minutes</h4> 
              <h4 v-if="selectedEvent.activityInfo.info.distance" class="text-lg text-gray-800">{{this.distance}} miles</h4> 
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'selectedEvent'
  ],
  computed: {
    time: function () {
      const time = this.selectedEvent.activityInfo.info.time
      const sec = time/60
      return sec.toFixed(0)
    },
    distance: function () {
      const distance = this.selectedEvent.activityInfo.info.distance
      const miles = distance/1609.34
      return miles.toFixed(2)
    }
  },
  methods:{
    closeModal(){
      this.$emit('closemodal')
    },
    getIcon(){
      const activityType = this.selectedEvent.activityInfo.type
      if(activityType === "WeightTraining"){
        return "icon-weights"
      }
      else if(activityType == "Walk"){
        return "icon-directions_walk"
      }
      else if(activityType == "Workout"){
        return "icon-directions_run"
      }
      return ""
    },
    getActivityColor(){
      const activityType = this.selectedEvent.activityInfo.type
      if(activityType === "WeightTraining"){
        return "text-red-400"
      }
      else if(activityType == "Walk"){
        return "text-blue-400"
      }
      else if(activityType == "Workout"){
        return "text-yellow-400"
      }
    }
  },
  
}
</script>

<style>

</style>