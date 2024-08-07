<!-- <script setup></script>

<template>
  <div>
    <slot name="header">
      <h1>Default Header</h1>
    </slot>
    <slot name="main">
      <p>This is default Main</p>
    </slot>
    <slot name="footer">
      <p>footer</p>
    </slot>
  </div>
</template>
<style scoped></style> -->

<script setup></script>

<template>
  <div>
    <slot>
      <h1>Default Header</h1>
    </slot>
    <slot name="main">
      <p>This is default Main</p>
    </slot>
    <slot name="footer">
      <p>footer</p>
    </slot>
  </div>
</template>
<style scoped></style>
