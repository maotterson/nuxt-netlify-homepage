<template>
  <div>
    <h1>Skills</h1>
    <SkillList :skills="skills" :categories="categories" />
  </div>
</template>

<script>
//import '../styles/icons.css';

export default {
  head(){
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  async asyncData({$content}){
    const skills = await $content("skill").fetch()
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
