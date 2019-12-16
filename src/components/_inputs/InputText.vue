<template>
  <a-form-item :label="schema.title">
    <a-input
      :name="name"
      :placeholder="schema.description"
      :maxlength="schema.maxLength"
      v-model="localValue"
    />
  </a-form-item>
</template>

<script src="./js/InputText.js"></script>
