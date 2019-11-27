<template>
  <a-form-item :label="name">
    <cleave-input
    class="ant-input"
    :options="cleaveOptions"
    v-model="localValue" />
  </a-form-item>
</template>

<script src="./js/InputMoney.js"></script>