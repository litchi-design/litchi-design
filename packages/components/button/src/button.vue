<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
    <button>hoihg8y8</button>
  </i>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import { createNamespace } from '../../../utils/create';
import { buttonProps } from './button';
const bem = createNamespace('button');

defineOptions({
  name: 'LButton',
});

const props = defineProps(buttonProps);

const style = computed<CSSProperties>(() => {
  if (!props.color && !props.size) {
    return {};
  }
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
