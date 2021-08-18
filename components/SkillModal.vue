<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center justify-items-start pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="closeModal()" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 class="text-4xl	mb-4"><span :class="expandedSkill.icon"></span> {{expandedSkill.title}}</h1>

          <ul class="flex flex-row flex-wrap justify-items-stretch mb-4">
            <li v-for="subcategory in expandedSkill.subcategories" :key="subcategory" class="rounded bg-gray-100 border-2 px-2 mr-2">
              {{subcategory}}
            </li>
          </ul>

          <p class="mb-4">{{expandedSkill.body}}</p>
          
          <div v-if="expandedSkill.projects.length!=0">
            <h2 class="text-2xl" >Projects</h2>
            <div v-for="project in expandedSkill.projects" :key="project.slug"><NuxtLink :to="project.path">{{project.title}}</NuxtLink></div>
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