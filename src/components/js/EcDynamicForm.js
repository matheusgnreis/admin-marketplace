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
      this.$emit('update:application', {
        ...this.application,
        data: this.data,
        hidden_data: this.hiddenData
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
