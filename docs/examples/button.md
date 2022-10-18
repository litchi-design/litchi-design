# Button 按钮

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。
  <el-button type="primary" @click="alert">按钮 1</el-button>
  <button >按钮 3</button>
  <ld-button type="primary" @click="alert">按钮 2</ld-button>
  <ld-icon>gi</ld-icon>
    <script lang="ts">
    </script>
  <style lang="less">
    ld-button {
       color:red;
      margin: 0 20px;
      background:pink;
    }
  </style>

## API

### Button Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 按钮颜色 |
| size  | number \| string | undefined | 图片大小 |
