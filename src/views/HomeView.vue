<template>
  <div class="home">
   <ProfileSection></ProfileSection>
    <div class="main-section">
    <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
    </div>
  </div>
</template>

<script>
import ProfileSection from '@/components/ProfileSection/ProfileSection.vue'
import AboutSection from "@/components/AboutSection/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection/SkillsSection.vue";

export default {
  name: 'HomeView',
  components: {
    SkillsSection,
    AboutSection,
    ProfileSection
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
