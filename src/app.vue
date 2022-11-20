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
main {
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  gap: 10rem;
}
</style>
