<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  number: number;
  symbol?: string;
}

const props = defineProps<Props>();

const formattedNumber = computed(() => {
  const intl = Intl.NumberFormat();
  return intl.format(props.number);
});
</script>

<template>{{ formattedNumber }} {{ symbol }}</template>
