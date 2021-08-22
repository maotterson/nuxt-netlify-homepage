<template>
  <div>
    <SkillModal
      :expandedSkill="expandedSkill"
      v-if="expandedSkill" 
      @closemodal="closeModal"
    />
    <div class="flex flex-col">
      <div v-for="category of categories" :key="category.slug" class="mt-0 pt-0 p-4 bg-gray-100 shadow rounded mb-4">
        <h3 class="font-bold mt-0 pt-0 mb-4">{{ category.title }}</h3>
        <div class="flex flex-row flex-wrap justify-items-stretch">
          <div v-for="skill of category.skills" 
            :key="skill.slug" 
            @click="expandSkill(skill)" 
            :class="[(skill===expandedSkill)?'bg-green-800 border-green-900 text-white':'bg-gray-100',(skill.starred)?'border-yellow-300 bg-yellow-100':'']" 
            class="border-2 rounded hover:bg-green-100 hover:border-green-400 p-2 mr-2 mb-2">
            <span class="mr-2" :class="skill.icon"></span><span :class="(skill.starred)?'font-medium':''">{{skill.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'skills','categories'
  ],
  data() {
    return {
      expandedSkill:null
    }
  },
  methods:{
    expandSkill(skill){
      // toggle the expanded skill to whatever was clicked
      if(!this.expandedSkill || this.expandedSkill!=skill){
        this.expandedSkill = skill
        return
      }

      // toggle the expanded skill off
      this.expandedSkill = null

    },
    closeModal(){
      this.expandedSkill=null
    }
  }
}
</script>

<style>

</style>