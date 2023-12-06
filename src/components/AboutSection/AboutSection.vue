<template>
  <kinesis-container
      class="about-section__container"
      event="scroll"
  >
    <Title class="about-section__title" title="About me"></Title>
    <p class="about-section__text">I am an aspiring developer with good understanding of React who has completed the
      course and created additionally a game pet-project to prove my skills.</p>
    <p class="about-section__text">I am focusing on result and self-improvement. If I would not understand something I
      have a one of the greatest developer skill - googling. I don't hesitate to read a docs or ask for help colleagues
      if did not found answer by myself.</p>
    <p class="about-section__text"> I'm activle seeking oppotuniteis to apply my determination and analytical thinking.
      Except great salary I am looking for interesting project with handy teammates where I can contribute and improve
      own skills as developer.</p>
  </kinesis-container>
</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: 'AboutSection',
  components: {
    Title
  },
}
</script>
<style lang="scss" scoped src="./style.scss"></style>