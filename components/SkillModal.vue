<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center justify-items-start pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="closeModal()" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex flex-row">
            <div>
              <h1 class="text-4xl	mb-4"><span :class="expandedSkill.icon"></span> {{expandedSkill.title}}</h1> 
            </div>
            <div class="flex-grow"></div>
            <span v-if="expandedSkill.starred" class="text-2xl icon-star text-yellow-400"></span>
          </div>

          <ul class="flex flex-row flex-wrap justify-items-stretch mb-4">
            <li v-for="subcategory in expandedSkill.subcategories" :key="subcategory" class="rounded bg-gray-100 border-2 px-2 mr-2">
              {{subcategory}}
            </li>
          </ul>

          <nuxt-content :document="expandedSkill" class="mb-4"/>
          
          <div v-if="expandedSkill.projects.length!=0">
            <h2 class="text-2xl mb-2" >Projects</h2>
            <div class="flex flex-row">
              <NuxtLink :to="project.path" v-for="project in expandedSkill.projects" class="rounded border-2 border-gray-500 bg-gray-200 w-auto px-2" :key="project.slug"><span class="font-bold text-gray-600">{{project.title}}</span></NuxtLink>
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
    'expandedSkill'
  ],
  methods:{
    closeModal(){
      this.$emit('closemodal')
    }
  }
}
</script>

<style>

</style>