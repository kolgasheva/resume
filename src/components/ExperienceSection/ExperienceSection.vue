<template>
  <kinesis-container
      class="experience-section__container"
      event="scroll"
  >
    <Title title="Experience" class="experience-title"></Title>
    <div class="experience-item">
      <h5 class="experience-item__title">Freelance</h5>
      <p class="experience-item__time-interval">October 2023 - Present</p>
      <ul class="project-list">
        <li class="project-item">
          1. Creating an adaptive portfolio website using Vue.js;
        </li>
        <li class="project-item">
          2. Implementing interactivity using JavaScript and developing an adaptive website layout.
        </li>
      </ul>
      <ul class="tasks-list">
        <li class="project-item task-item">&#8226; Creating an adaptive portfolio website using Vue.js;</li>
        <li class="project-item task-item">&#8226; Using JavaScript to create an additional interactivity on the site;</li>
        <li class="project-item task-item">&#8226; Development of an adaptive website layout that seamlessly adjusts to screens of various sizes is underway;</li>
        <li class="project-item task-item">&#8226; Experience with HTML5 and SCSS;</li>
        <li class="project-item task-item">&#8226; Setting up project with the Gulp builder and npm package manager.</li>
      </ul>

    </div>
  </kinesis-container>

</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: 'ExperienceSection',
  components: {
    Title
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>