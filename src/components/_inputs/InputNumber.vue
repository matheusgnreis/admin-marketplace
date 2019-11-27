<template>
  <a-form-item :label="schema.title">
    <a-input-number :name="name" :min="schema.minimum" :max="schema.maximum" v-model="value" />
  </a-form-item>
</template>

<script src="./js/InputNumber.js"></script>