import EcDynamicField from './../EcDynamicField.vue'

export default {
  name: 'EcDynamicForm',

  components: {
    EcDynamicField
  },

  props: {
    application: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => {
    return {
      data: {},
      hiddenData: {}
    }
  },

  computed: {
    adminSettings () {
      return this.application.admin_settings
    }
  },

  methods: {
    submit () {
      const formData = {
        data: this.data,
        hidden_data: this.hiddenData
      }
      this.$emit('submit', formData)
      this.$emit('update:application', {
        ...this.application,
        ...formData
      })
    }
  },

  watch: {
    application: {
      handler () {
        const { data, hiddenData, application } = this
        this.data = Object.assign({}, data, application.data)
        this.hiddenData = Object.assign({}, hiddenData, application.hidden_data)
      },
      immediate: true
    }
  }
}
