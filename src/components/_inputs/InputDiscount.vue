<template>
  <fieldset>
    <legend>{{ schema.title }}</legend>
    <a-input-group size="large">
      <a-form-item :label="type.title">
        <a-select v-model="localValue.type">
          <a-select-option v-for="item in type.enum" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="discountValue.title"
        v-if="localValue.type === 'percentage'">
          <a-input-number
            v-model="localValue.value"
            :min="0"
            :max="100"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"
          />
      </a-form-item>
      <input-money
        name="value"
        :schema="value"
        v-model="localValue.value"
        v-else
      />
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
<script src="./js/InputDiscount.js"></script>
