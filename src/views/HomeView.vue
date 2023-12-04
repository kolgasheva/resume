<template>
  <div class="home">
    <ProfileSection></ProfileSection>
    <div class="main-section">
      <div class="grid-container">
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <LanguagesSection></LanguagesSection>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSection from '@/components/ProfileSection/ProfileSection.vue'
import AboutSection from "@/components/AboutSection/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection/SkillsSection.vue";
import LanguagesSection from "@/components/LanguagesSection/LanguagesSection.vue";

export default {
  name: 'HomeView',
  components: {
    LanguagesSection,
    SkillsSection,
    AboutSection,
    ProfileSection
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
