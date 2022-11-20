<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: any;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: any) {
    emit('update:modelValue', value);
  }
});
</script>

<template>
  <div class="base-checkbox">
    <!-- TODO: Create checkbox as markup one-->
    <label>
      <input v-model="modelValue" type="checkbox" />
    </label>
  </div>
</template>
