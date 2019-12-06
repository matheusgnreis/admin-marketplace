import EcDynamicField from './../EcDynamicField.vue'
import { i18n } from '@ecomplus/utils'
import { i19save } from '@ecomplus/i18n'

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
    },
    i19save () {
      return i18n(i19save)
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
