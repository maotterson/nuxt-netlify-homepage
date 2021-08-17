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

    return {
      skills
    }
  },
}
</script>
