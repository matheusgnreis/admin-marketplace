<template>
  <a-form-item :label="schema.title">
    <a-input
      :name="name"
      :placeholder="schema.description"
      :maxlength="schema.maxLength"
      @change="localValue = $event.target.value"
    />
  </a-form-item>
</template>

<script src="./js/InputText.js"></script>
