<template>
  <div class="education-section__container">
    <Title title="Education" class="education-title"></Title>
    <div class="education-section--item">
      <div class="column">
        <p class="education-section__text education-section__text--pink">2023</p>
      </div>
      <div class="column">
        <p class="education-section__text">DAN.IT EDUCATION</p>
        <p class="education-section__text">React Front-end</p>
        <a class="education-section__text education-section__link" href="https://dan-it.com.ua/certificates/frontend/alyona-kolgasheva/">Certificate</a>
      </div>
    </div>
  </div>

</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: 'EducationSection',
  components: {
    Title
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
