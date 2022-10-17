<template>
  <div class="button-group">
    <i :class="bem.b()" :style="style">
      <slot></slot>
      <button>常规</button>
      <button>警告</button>
      <button>删除</button>
      <button>新增</button>
      <button>修改</button>
      <button>查询</button>
    </i>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import { createNamespace } from '../../../utils/create';
import { buttonGroupProps } from './buttonGroup';
const bem = createNamespace('buttonGroup');

defineOptions({
  name: 'LButtonGroup',
});

const props = defineProps(buttonGroupProps);

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
