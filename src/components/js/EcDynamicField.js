export default {
  name: 'EcDynamicField',
  props: ['data', 'type'],
  computed: {
    dynamicField () {
      switch (this.type) {
        case 'string':
          return () => import(`../_inputs/InputText.vue`)
        case 'number':
          return () => import(`../_inputs/InputNumber.vue`)
        default:
          break
      }
    }
  }
}
