import EcDynamicField from '../EcDynamicField.vue'

export default {
  name: 'EcDynamicForm',
  components: {
    EcDynamicField
  },
  props: {
    schema: {
      type: Object,
      default: {}
    }
  }
}
