<template>
  <a-form-item :label="schema.title">
    <a-select :defaultValue="schema.default">
      <a-select-option v-for="item in schema.enum" :value="item">
        {{item}}
      </a-select-option>
    </a-select>
  </a-form-item>

</template>

<script src="./js/InputEnum.js"></script>