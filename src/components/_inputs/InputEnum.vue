<template>
  <a-select :defaultValue="defaultValue">
    <a-select-option
      :value="item"
      v-for="item in items">
        {{item}}
    </a-select-option>
  </a-select>
</template>

<script src="./js/InputEnum.js"></script>
