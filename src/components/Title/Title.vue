<template>
  <h3 :class="getClassObject()">
      <span class="title--pink">
        [
      </span>
    {{ title }}
    <span class="title--pink"> ]</span>
  </h3>
</template>

<script>
export default {
  name: "FilterItem",
  props: {
    class: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    getClassObject() {
      const classes = {
        'title': true,
      };

      if (this.class) {
        classes[this.class] = true;
      }

      return classes;
    },
  },
}
</script>

<style lang="scss" scoped src="./style.scss"></style>