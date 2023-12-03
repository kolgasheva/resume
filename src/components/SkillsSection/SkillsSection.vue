<template>
  <div class="skills-section">
    <Title class="skills-title" title="skills"></Title>
    <h4 class="skills-type">Hard skills</h4>
    <ul class="skills-list">
      <li v-for="skillItem in hardSkillsArray"
          :key="skillItem.id" class="skills-item">
        <img class="skills-img" :src="require(`../../assets/skillsIcons/${skillItem.img}`)"/>
       <span class="skills-text"> {{skillItem.label}}</span>
      </li>
    </ul>
    <h4 class="skills-type">Experienced with:</h4>
    <ul class="skills-list">
      <li v-for="skillItem in experienced"
          :key="skillItem.id" class="skills-item">
        <img class="skills-img" :src="require(`../../assets/skillsIcons/${skillItem.img}`)"/>
        <span class="skills-text"> {{skillItem.label}}</span>
      </li>
    </ul>
    <ul class="skills-list">
      <h4 class="skills-type">Soft-skills:</h4>
      <li v-for="(skillItem, index) in softSkills"
          :key="index" class="skills-item">
        <span class="skills-text"> {{skillItem.label}}</span>
      </li>
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
      experienced: [
        {
          label: "TypeScript",
          id: "typeScript",
          img: "typescript.png",
        },
        {
          label: "NodeJS (Express)",
          id: "nodeJS",
          img: "expressjs-icon.svg",
        },
        {
          label: "MongoDB",
          id: "mongoDB",
          img: "mongoDB.jpg",
        },
       {
          label: "Git",
          id: "mongoDB",
          img: "git.png",
        },
      ],
      softSkills: [
        {
          label: "Self-study",
        },
        {
          label: "Analytical thinking",
        },
        {
          label: "Teamwork",
        },
        {
          label: "Soberly assess criticism",
        },
        {
          label: "Responsibility and result orientation",
        },
      ]
    };
  },
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
