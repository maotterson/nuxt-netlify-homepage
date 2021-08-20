<template>
  <div>
    <SkillModal
      :expandedSkill="expandedSkill"
      v-if="expandedSkill" 
      @closemodal="closeModal"
    />
    <ul class="flex flex-col">
      <li v-for="category of categories" :key="category.slug">
        {{ category.title }}
        <ul class="flex flex-row flex-wrap justify-items-stretch">
          <li v-for="skill of category.skills" 
            :key="skill.slug" 
            @click="expandSkill(skill)" 
            :class="[(skill===expandedSkill)?'bg-green-800 border-green-900 text-white':'bg-gray-100',(skill.starred)?'border-yellow-500 bg-gray-300':'']" 
            class="border-2 rounded hover:bg-green-100 hover:border-green-400 p-2 mr-2 mb-2">
            <span class="mr-2" :class="skill.icon"></span><span :class="(skill.starred)?'font-medium':''">{{skill.title}}</span>
          </li>
        </ul>
      </li>
    </ul>
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