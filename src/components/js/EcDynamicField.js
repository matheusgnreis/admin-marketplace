const INPUTS = {
  string: () => import(`../_inputs/InputText.vue`),
  number: () => import(`../_inputs/InputNumber.vue`)
}

export default {
  name: 'EcDynamicField',
  props: ['data', 'type'],
  computed: {
    dynamicField () {
      return INPUTS[this.type]
    }
  }
}
