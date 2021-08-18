<template>
  <div>
    <h1>Skills</h1>
    <SkillList :skills="skills" />
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
    let categories = []
    skills.forEach(skill=>{
      if(!categories.some(category=>category.name===skill.category)){
        categories.push({
          name: skill.category,
          skills: [skill]
        })
      }
      //todo add skill to existing category group
    })

    console.log(categories)

    return {
      skills
    }
  },
}
</script>
