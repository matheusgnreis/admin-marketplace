<template>
  <div class="container">
    <h3>Input Text</h3>
    <input-text v-bind="optionsInputText"/>
    <hr/>
    <h3>Upload</h3>
    <upload v-bind="optionsUpload"/>
  </div>
</template>

<script>
  import InputText from '../components/_inputs/InputText.vue'
  import Upload from '../components/_inputs/Upload.vue'
  export default {
    name: 'MockCustomFields',
    components: {
      InputText,
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
        optionsUpload: {
          name: 'icon',
          multiple: false,
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        }
      }
    }
  }
</script>
