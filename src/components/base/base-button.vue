<template>
  <button class="base-button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 6rem;
  background: var(--gradient-red);
  border-radius: 30px;
  transition: box-shadow 0.3s ease-in-out;
  border: 0;
  cursor: pointer;

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2rem;
  color: var(--white);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), inset 0px -4px 0px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25), inset 0 4px 0 rgba(0, 0, 0, 0.25);
  }
}
</style>
