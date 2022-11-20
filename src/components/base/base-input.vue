<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  placeholder: string;
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
  <div class="base-input">
    <label class="form-label">{{ placeholder }}</label>
    <input v-model="modelValue" class="form-value" v-bind="$attrs" />
    <div class="form-type">
      <slot name="type" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 0.5rem;
    height: 2rem;
    color: var(--metal-dark);
  }

  input {
    padding: 1rem;
    width: 28rem;
    height: 5rem;
    max-width: 100%;
    font-family: inherit;
    background: var(--white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    border: double 2px transparent;
    background-image: linear-gradient(white, white), var(--gradient-metal-light);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    &:focus {
      outline: 0;
    }
  }

  .form-type {
    top: calc(100% - 4rem);
    position: absolute;
    right: 1rem;
  }
}
</style>
