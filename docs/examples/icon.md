# Icon 图标

litchi-design 推荐使用 xicons 作为图标库。

> pnpm install @vicons/ionicons5

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。
<el-button type="primary" @click="alert">按钮</el-button>
<l-icon>icon</l-icon>
<script setup lang="ts">
// import { AccessibilityOutline , ArrowRedoOutline} from '@vicons/ionicons5'
// const handleClick = () =>{ alert(1)}
</script>

<!-- <LIcon color="#B1B2FF" size="40" @click="handleClick">
</LIcon>

<ZIcon color="#AAC4FF" size="40">
</ZIcon>
<ZIcon color="#D2DAFF" size="40">
</ZIcon>
<div>

<ZIcon color="#EBC7E8" size="60">
</ZIcon>

<ZIcon color="#645CAA" size="60">
</ZIcon>

<ZIcon color="#A084CA" size="60">
</ZIcon> -->

<script lang="ts">
import { CashOutline } from '@vicons/ionicons5';
</script>
<template>
  <ZIcon color="red" size="40">
    <CashOutline />
  </ZIcon>
</template>

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
