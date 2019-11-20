<template>
  <div class="container">
    <h3>Input Text</h3>
    <input-text :options="optionsInputText"/>
  </div>
</template>

<script>
  import InputText from '../components/_inputs/InputText.vue'
  export default {
    name: 'MockCustomFields',
    components: {
      InputText
    },
    data: () => {
      return {
        optionsInputText: {
          name: 'label',
          title: 'Rótulo',
          description: 'Nome da forma de pagamento exibido para os clientes',
          maxLength: 50,
          default: 'Cartão de crédito'
        }
      }
    }
  }
</script>