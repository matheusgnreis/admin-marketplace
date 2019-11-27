<template>
  <a-form-item :label="schema.title">
    <a-input
      v-model="value"
      v-bind:value="schema.description"
      :name="name"
      :placeholder="schema.description"
      :maxlength="schema.maxLength" />
    <hr />
    {{value}}
  </a-form-item>
</template>

<script src="./js/InputText.js"></script>