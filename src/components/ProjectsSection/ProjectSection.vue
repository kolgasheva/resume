<template>
  <kinesis-container
      class="project-section__container"
      event="scroll"
  >
    <Title title="Projects" class="projects-title"></Title>

    <div class="projects-item">
      <h5 class="project-title">
        Chartae
      </h5>
      <p class="projects-item__text">
        It's a board game adaptation with pretty simple rules:
        Duel game, where Players take a role of cartographs, one Play for Water,
        another for Earth side. Game will end when be placed last Tile (there is 9 tiles). In Player turn, he
        can do following things:
      </p>
      <ul class="projects-item__list">
        <li class="projects-item__text projects-description__item">
          1. Place new Tile adjusted to another
        </li>
        <li class="projects-item__text projects-description__item">
          2. Rotate existing (there is a global limit of rotation equal to 3, when it's
          exceeded, Player must place a Tile)
        </li>
      </ul>
      <p class="projects-item__text">
        On Game End start points calculation from main Tile (wind rose). Its most
        difficult part, because we need to use graph to make connections between
        Tiles and some Tiles have 'bridge' that split Tile and block ability to connect
        top part with bottom. Looks like this:
      </p>
      <kinesis-container class="project-item__img-container">
        <img class="project-item__img" src="../../assets/projectSectionImg/ellipse20.png"/>
        <kinesis-element
            class="project-item__img-container--green-circle"
            :strength="10"
            originX="20"
        >
        <img class="project-item__img--green-circle" src="../../assets/projectSectionImg/ellipse19.png"/>
        </kinesis-element>
        <kinesis-element
            class="project-item__img-container--stars"
            :strength="10"
            type="depth"
        >
        <img class="project-item__img--stars" src="../../assets/stars.png"/>
        </kinesis-element>
      </kinesis-container>
      <p class="projects-item__text">
        Connection logic was in abstract split Tile on 8 parts, 2 on each side. We
        determine what type on each part. Than we build graphs between them and
        check connection with inner graph.
      </p>
      <p class="projects-item__text">
        You can look details, code realization on my github and ask me on interview.
      </p>
      <div class="project-item__link-container">
        <div class="print-link">
          <a class="print-link--base-link project-item__link" href="http://chartae.morelleth.com/" target="_blank">link to game</a>
        </div>
        <div class="print-link">
          <a class="print-link--base-link project-item__link" href="https://github.com/kolgasheva/chartae" target="_blank">link to github</a>
        </div>
      </div>
    </div>
    <div class="projects-item">
      <h5 class="project-title">
        Shop from course
      </h5>
      <p class="projects-item__text">It was my last project on course. Where we had work in team of 7 people,
        including me. Where I was chosen as team lead. Our team developed user-friendly website on React.
      </p>
      <p class="projects-item__text">It was a great challenge for me to manage team. But I had learn a lot of new
        in dynamic, solved team issues and extended my manage skills, helped
        team members solve problems.
      </p>
      <p class="projects-item__text">Backend was given on Node.JS. The most difficult part was to understand
        how the backend works and make changes that were necessary for the
        implementation of our project.
      </p>
      <div class="project-item__link-container">
        <a class="project-item__link" href="https://shop-avion.onrender.com/" target="_blank">link to game</a>
        <a class="project-item__link" href="https://github.com/DoroshenkoDan/Store-Avion" target="_blank">link to github</a>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import Title from "@/components/Title/Title.vue";

export default {
  name: 'ProjectsSection',
  components: {
    Title
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
