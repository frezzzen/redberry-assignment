<script setup lang="ts">
import CompensationCalculator from './components/compensation-calculator/compensation-calculator.vue';
import InformationContent from './components/main-page/information-content.vue';
</script>

<template>
  <main>
    <information-content />
    <compensation-calculator />
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
main {
  padding: 10rem 10rem 0;
  display: flex;
  gap: 10rem;
  justify-content: center;

  @include responsive(1024px) {
    padding: 3rem;
    align-items: center;
    flex-direction: column-reverse;
  }

  @include responsive(600px) {
    padding: 1rem;
    gap: 3rem;
  }
}
</style>
