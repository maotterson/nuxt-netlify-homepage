<template>
  <div>
    <ul class="flex flex-col">
      <li v-for="category of categories" :key="category.slug">
        {{ category.title }}
        <ul class="flex flex-row">
          <li v-for="skill of category.skills" :key="skill.slug">
            {{skill.title}}
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
  ]
  
}
</script>

<style>

</style>