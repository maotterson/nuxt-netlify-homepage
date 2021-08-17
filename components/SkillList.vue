<template>
  <div>
    <ul class="flex flex-row">
      <li v-for="skill of skills" :key="skill.slug">
        {{ skill.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:[
    'skills'
  ]
  
}
</script>

<style>

</style>