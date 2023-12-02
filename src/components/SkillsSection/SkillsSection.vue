<template>
  <div class="skills-section">
    <Title class="skills-title" title="skills"></Title>
    <h4 class="skills-type">Hard skills</h4>
    <ul>
      <li v-for="skillItem in hardSkillsArray"
          :key="skillItem.id"><img :src="require(`../../assets/skillsIcons/${skillItem.img}`)"/>{{skillItem.label}}</li>
    </ul>
  </div>
</template>
<script>

import Title from "@/components/Title/Title.vue";

export default {
  name: 'SkillsSection',
  components: {
    Title
  },
  data() {
    return {
      hardSkillsArray: [
        {
          label: "React",
          id: "react",
          img: "react.png",
        },
        {
          label: "Redux",
          id: "redux",
          img: "redux.png",
        },
        {
          label: "Vue.js",
          id: "vue",
          img: "vue.png",
        },
        {
          label: "JavaScript",
          id: "javaScript",
          img: "js.png",
        },
        {
          label: "CSS",
          id: "css",
          img: "css.svg",
        },
        {
          label: "SASS/SCSS",
          id: "sass",
          img: "sass.png",
        },
        {
          label: "Formik",
          id: "formik",
          img: "formik.png",
        },
        {
          label: "React Testing Library",
          id: "reactTestingLibrary",
          img: "reactTestingLibrary.png",
        },
        {
          label: "Jest",
          id: "jest",
          img: "jest.png",
        },
        {
          label: "Gulp",
          id: "gulp",
          img: "gulp.png",
        },
      ],
    };
  },
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
