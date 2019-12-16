import { i18n } from '@ecomplus/utils'
import { i19save } from '@ecomplus/i18n'
import getSchemaInput from './../../utils/get-schema-input'

export default {
  name: 'EcDynamicForm',

  props: {
    application: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      data: {},
      hiddenData: {}
    }
  },

  computed: {
    i19save: () => i18n(i19save),

    adminSettings () {
      return this.application.admin_settings
    }
  },

  methods: {
    parseAdminSettingsField ({ field, schema, hide, data, parent = '' }) {
      if (!data) {
        data = hide ? this.hiddenData : this.data
      }
      if (schema.type === 'object') {
        if (!data[field]) {
          data[field] = {}
        }
        const { properties } = schema
        let fieldObjects = []
        for (const nestedField in properties) {
          const childSchema = properties[nestedField]
          if (childSchema) {
            fieldObjects = fieldObjects.concat(
              this.parseAdminSettingsField({
                field: nestedField,
                schema: childSchema,
                data: data[field],
                parent: `${parent}.${nestedField}`
              })
            )
          }
        }
        return fieldObjects
      }
      return [{
        field,
        schema,
        data,
        name: `${parent}.${field}`,
        component: getSchemaInput(field, schema)
      }]
    },

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
      immediate: true,
      deep: true
    }
  }
}
