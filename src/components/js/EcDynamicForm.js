import EcDynamicField from '../EcDynamicField.vue'

export default {
  name: 'EcDynamicForm',
  components: {
    EcDynamicField
  },
  props: {
    application: {
      type: Object,
      default: {}
    }
  }
}
