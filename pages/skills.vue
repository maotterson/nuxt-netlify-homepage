<template>
  <div>
    <div class="dark:prose-dark prose md:prose-xl mb-4 mt-8 md:mt-0">
      <h1>Skills</h1>
      <h3>Technologies, languages, and tools that I have worked with beyond an introductory level.</h3>
      <SkillList :skills="skills" :categories="categories" />
    </div>
  </div>
</template>

<script>

export default {
  transition: 'slide-bottom',
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
    const projects = await $content("projects").fetch()
    
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
