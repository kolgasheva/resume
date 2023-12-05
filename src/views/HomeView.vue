<template>
  <div class="home">
    <ProfileSection></ProfileSection>
    <main class="main-section">
      <div class="grid-container">
        <AboutSection></AboutSection>
        <SkillsSection></SkillsSection>
        <LanguagesSection></LanguagesSection>
        <EducationSection></EducationSection>
        <ProjectsSection></ProjectsSection>
      </div>
    </main>
  </div>
</template>

<script>
import ProfileSection from '@/components/ProfileSection/ProfileSection.vue'
import AboutSection from "@/components/AboutSection/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection/SkillsSection.vue";
import LanguagesSection from "@/components/LanguagesSection/LanguagesSection.vue";
import EducationSection from "@/components/EducationSection/EducationSection.vue";
import ProjectsSection from "@/components/ProjectsSection/ProjectSection.vue";

export default {
  name: 'HomeView',
  components: {
    ProjectsSection,
    EducationSection,
    LanguagesSection,
    SkillsSection,
    AboutSection,
    ProfileSection
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
