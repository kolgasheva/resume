<template>
  <kinesis-container
      class="languages-section"
      event="scroll"
  >
    <Title class="languages-title" title="LANGUAGES"></Title>
    <p class="languages-item">English: B1</p>
  </kinesis-container>

</template>


<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: 'LanguagesSection',
  components: {
    Title
  }
}
</script>


<style lang="scss" scoped src="./style.scss"></style>
