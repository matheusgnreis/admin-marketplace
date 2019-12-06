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
  },
  data: () => {
    return {
      form: {}
    }
  },
  created () {
    Object.assign(this.form, this.application.data)
    Object.assign(this.form, this.application.hidden_data)
  }
}
