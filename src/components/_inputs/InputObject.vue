<template>
    <fieldset>
      <legend>{{ schema.title }}</legend>
        <ec-dynamic-field
          v-for="field in Object.keys(others)"
          v-model="localValue[field]"
          :key="field"
          :field="field"
          :schema="others[field]"
          :value="value.hasOwnProperty(field) ? value[field] : null"
          @input="update(field, localValue[field])"
        />
      </a-input-group>
    </fieldset>
  </template>
  <script src="./js/InputObject.js"></script>
