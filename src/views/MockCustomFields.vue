<template>
  <div class="container">
    <h3>Input Text</h3>
    <input-text v-bind="optionsInputText" />
    <hr />
    <h3>Input Number</h3>
    <input-number v-bind="optionsNumber"></input-number>
    <hr />
    <h3>Input Enum</h3>
    <input-enum v-bind="optionsEnum"></input-enum>
    <hr />
    <h3>Input ZipCode</h3>
    <input-zip-code></input-zip-code>
    <hr />
    <h3>Input Phone</h3>
    <input-phone></input-phone>
    <hr />
    <h3>Input Password</h3>
    <input-password></input-password>
    <hr />
    <h3>Upload</h3>
    <upload v-bind="optionsUpload" />
  </div>
</template>

<script>
  import InputText from '../components/_inputs/InputText.vue'
  import InputNumber from '../components/_inputs/InputNumber.vue'
  import InputEnum from '../components/_inputs/InputEnum.vue'
  import InputZipCode from '../components/_inputs/InputZipCode.vue'
  import InputPhone from '../components/_inputs/InputPhone.vue'
  import InputPassword from '../components/_inputs/InputPassword.vue'

  import Upload from '../components/_inputs/Upload.vue'
  export default {
    name: 'MockCustomFields',
    components: {
      InputText,
      InputNumber,
      InputEnum,
      InputZipCode,
      InputPhone,
      InputPassword,
      Upload
    },
    data: () => {
      return {
        optionsInputText: {
          name: 'label',
          title: 'Rótulo',
          description: 'Nome da forma de pagamento exibido para os clientes',
          maxLength: 50,
          default: 'Cartão de crédito'
        },
        optionsNumber: {
          name: 'value',
          minimum: 1,
          maximum: 999999999,
          default: 10
        },
        optionsEnum: {
          name: 'type',
          defaultValue: 'percentage',
          items: [
            'percentage',
            'fixed'
          ]
        },
        optionsUpload: {
          name: 'icon',
          multiple: false,
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        }
      }
    }
  }
</script>
