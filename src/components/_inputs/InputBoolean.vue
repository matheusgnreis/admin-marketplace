<template>
    <a-form-item :label="schema.title">
      <a-switch
        :name="name"
        v-model="localValue"
      />
    </a-form-item>
  </template>

  <script src="./js/InputBoolean.js"></script>
