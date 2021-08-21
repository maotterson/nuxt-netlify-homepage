<template>
  <div>
    <h1 class="lg:text-4xl text-2xl font-bold mb-2">Skills & Technologies</h1>
    <p class="mb-4">Below are a list of technologies, languages, and tools that I have worked with beyond an introductory level. Each listed skill has a summary of my familarity with it.</p>
    <SkillList :skills="skills" :categories="categories" />
  </div>
</template>

<script>

export default {
  head(){
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  async asyncData({$content}){
    const skills = await $content("skill").fetch()
    skills.sort(({starred: x},{starred: y})=>{return y-x})
    for(const skill of skills){
      skill["projects"]=[]
    }
    const projects = await $content("project").fetch()
    
    for(const project of projects){
      for(const tag of project.tags)
      {
        const currSkill = skills.find(({title})=>title===tag)
        if(currSkill){
          currSkill["projects"].push(project)
        }
      }
    }
    let categories = []
    skills.forEach(skill=>{
      if(!categories.some(category=>category.title===skill.category)){
        categories.push({
          title: skill.category,
          skills: [skill]
        })
      }
      else{
        const currentCategory = categories.find(({title})=>title===skill.category)
        currentCategory.skills.push(
          skill
        )
      }
    })

    return {
      categories,
      skills
    }
  },
}
</script>