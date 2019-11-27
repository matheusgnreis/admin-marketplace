<template>
  <fieldset>
    <legend>{{schema.title}}</legend>
    <a-input-group size="large">
      <a-form-item :label="type.title">
        <a-select v-model="data.type">
          <a-select-option v-for="item in type.enum" :value="item">
            {{item}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="value.title" v-if="data.type==='percentage'">
        <a-input-number
          v-model="data.value"
          :min="0"
          :max="100"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')">
        </a-input-number>
      </a-form-item>
      <input-money
      :name="value.title"
      v-model="data.value"
      v-else />
      <ec-dynamic-field
        v-for="field in Object.keys(others)"
        :field="field"
        :schema="others[field]" />
    </a-input-group>
  </fieldset>

</template>


<script src="./js/InputDiscount.js"></script>