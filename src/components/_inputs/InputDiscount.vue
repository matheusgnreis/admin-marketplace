<template>
  <a-input-group>
    <a-form-item
      :label="type.title"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :extra="type.description"
    >
      <a-select
        v-model="localValue.type"
        style="width: 100%">
          <a-select-option
            v-for="item in type.enum"
            :key="item"
            :value="item">
            {{ typeOptions[item] }}
          </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      :label="discountValue.title"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      :extra="discountValue.description"
    >
      <a-input-number
        v-if="localValue.type === 'percentage'"
        v-model="localValue.value"
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
      />
      <input-money
        name="value"
        :schema="value"
        v-model="localValue.value"
        v-else
      />
    </a-form-item>
    <a-form-item
      :label="applyAt.title"
      :label-col="{ span: 9 }"
      :wrapper-col="{ span: 15 }"
      :extra="applyAt.description"
    >
      <input-enum
        name="apply_at"
        :schema="applyAt"
        v-model="localValue.apply_at"
        style="width: 100%"
        :i18n-values="applyAtOptions"
      />
    </a-form-item>
  </a-input-group>
</template>
<script src="./js/InputDiscount.js"></script>