<template>
  <div class="kinesis-container__title">
  <h3 :class="getClassObject()">
      <span class="title--pink">
        [
      </span>
    {{ title }}
    <span class="title--pink"> ]</span>
  </h3>
  </div>
</template>

<script setup>

import {defineProps, ref, onMounted, onBeforeUnmount, computed} from 'vue';

const props = defineProps(['class', 'title']);

let isAnimActive = ref(false)
function getClassObject() {
  const classes = {
    title: true,
    'init': isAnimActive.value,
  };

  if (props.class) {
    classes[props.class] = true;
  }

  return classes;
}

const handleScroll = () => {
  isAnimActive.value = true;

  setTimeout(() => {
    isAnimActive.value = false;
  }, 1000);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Видаляємо слухач подій при знищенні компонента
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style lang="scss" scoped src="./style.scss"></style>