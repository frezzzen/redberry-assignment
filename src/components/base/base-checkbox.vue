<script setup lang="ts">
import { computed } from 'vue';
import IconChecboxBorder from '../icons/checkbox/icon-checbox-border.vue';
import IconCheckboxMark from '../icons/checkbox/icon-checkbox-mark.vue';

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
      <icon-checbox-border />
      <icon-checkbox-mark v-if="modelValue" class="mark" />
    </label>
    <p class="form-label">
      <slot />
    </p>
  </div>
</template>

<style scoped lang="scss">
.base-checkbox {
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    width: 2.8rem;
    height: 2.8rem;
    position: relative;

    input {
      appearance: none;
      background-color: #fff;
      margin: 0;
    }

    svg {
      cursor: pointer;
    }

    .mark {
      position: absolute;
      left: 0.8rem;
      top: 45%;
      transform: translateY(-50%);
    }
  }

  .form-label {
    padding-bottom: 0.5rem;
  }
}
</style>
