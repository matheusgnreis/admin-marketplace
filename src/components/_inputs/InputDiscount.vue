<template>
  <a-input-group>
    <a-form-item
      :label="type.title"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
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
      <template v-if="schema.description" #extra>
        <span v-html="type.description"></span>
      </template>
    </a-form-item>
    <a-form-item
      :label="discountValue.title"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-input-number
        v-if="localValue.type === 'percentage'"
        v-model="localValue.value"
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
        style="width: 100%"
      />
      <input-money
        name="value"
        :schema="value"
        v-model="localValue.value"
        style="width: 100%"
        v-else
      />
      <template v-if="discountValue.description" #extra>
        <span v-html="discountValue.description"></span>
      </template>
    </a-form-item>
    <a-form-item
       :label="applyAt.title"
       :label-col="{ span: 9 }"
       :wrapper-col="{ span: 15 }"
    >
      <input-enum
        name="apply_at"
        :schema="applyAt"
        v-model="localValue.apply_at"
        style="width: 100%"
        :i18n-values="applyAtOptions"
      />
      <template v-if="applyAt.description" #extra>
        <span v-html="applyAt.description"></span>
      </template>
    </a-form-item>
  </a-input-group>
</template>
<script src="./js/InputDiscount.js"></script>