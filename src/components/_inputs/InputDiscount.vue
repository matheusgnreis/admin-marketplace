<template>
  <a-input-group size="large">
    <a-row :gutter="8">
      <a-col :span="5">
        <a-radio-group v-model="type">
          <a-radio :style="radioStyle" :value="1">Option A</a-radio>
          <a-radio :style="radioStyle" :value="2">Option B</a-radio>
          <a-radio :style="radioStyle" :value="3">Option C</a-radio>
          <a-radio :style="radioStyle" :value="4">
            More...
            <a-input v-if="type === 4" :style="{ width: 100, marginLeft: 10 }" />
          </a-radio>
        </a-radio-group>      </a-col>
      <a-col :span="8">
        <a-input defaultValue="26888888" />
      </a-col>
    </a-row>
  </a-input-group></template>


<script src="./js/InputDiscount.js"></script>