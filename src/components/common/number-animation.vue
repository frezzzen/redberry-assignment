<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  from?: number;
  to: number;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 500,
  from: 0,
  to: 1000
});

const numberToDisplay = ref(props.from);
const startTimestamp = ref<number | null>(null);

function animateNumber() {
  const step = (timestamp: number) => {
    if (!startTimestamp.value) startTimestamp.value = timestamp;
    const progress = Math.min((timestamp - startTimestamp.value) / props.duration, 1);
    numberToDisplay.value = Math.floor(progress * (props.to - props.from) + props.from);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

watch(
  props,
  () => {
    animateNumber();
    startTimestamp.value = null;
  },
  { immediate: true }
);
</script>

<template>
  <slot name="number" :number="numberToDisplay" />
</template>
