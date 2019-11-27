<template>
  <a-form-item :label="schema.title">
    <a-input
      v-model="value"
      :name="name"
      :placeholder="schema.description"
      :maxlength="schema.maxLength" />
  </a-form-item>
</template>

<script src="./js/InputText.js"></script>