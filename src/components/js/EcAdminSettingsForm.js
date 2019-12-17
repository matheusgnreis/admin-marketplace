import { i18n } from '@ecomplus/utils'
import getSchemaInput from './../../lib/get-schema-input'

import {
  i19add,
  i19edit,
  // i19empty,
  // i19editing,
  // i19general,
  i19save
} from '@ecomplus/i18n'

export default {
  name: 'EcAdminSettingsForm',

  props: {
    application: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      data: {},
      hiddenData: {},
      dataListsIndexes: {}
    }
  },

  computed: {
    i19add: () => i18n(i19add),
    i19edit: () => i18n(i19edit),
    i19editing: () => 'Editando',
    i19empty: () => 'Vazio',
    i19general: () => 'Geral',
    i19save: () => i18n(i19save),

    adminSettings () {
      return this.application.admin_settings
    },

    settingsFieldGroups () {
      const baseFieldGroup = {
        header: this.i19general,
        fields: []
      }
      const fieldGroups = [baseFieldGroup]
      for (const field in this.adminSettings) {
        if (this.adminSettings[field]) {
          const { schema, hide } = this.adminSettings[field]
          const fieldObj = { schema, hide, field }
          if (this.checkComplexSchema(schema)) {
            fieldGroups.push({
              header: schema.title,
              description: schema.description,
              fields: [fieldObj]
            })
          } else {
            baseFieldGroup.fields.push(fieldObj)
          }
        }
      }
      return fieldGroups
    }
  },

  methods: {
    checkComplexSchema (schema) {
      return schema.type === 'object' || schema.type === 'array'
    },

    checkNestedObjectsArray (schema) {
      return schema.type === 'array' && schema.items && schema.items.type === 'object'
    },

    getDescriptionHtml (description) {
      return description.replace(
        /(http(s)?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener">$1</a>'
      )
    },

    getObjectValues (obj) {
      let str = ''
      for (const prop in obj) {
        if (obj[prop]) {
          switch (typeof obj[prop]) {
            case 'number':
            case 'string':
              str += `${obj[prop].toString()} / `
          }
        }
      }
      return str.length > 3 ? str : `${this.i19empty} ...`
    },

    parseAdminSettingsField ({ field, schema, hide, data, parentFields = '' }) {
      if (!data) {
        data = hide ? this.hiddenData : this.data
      }
      let fieldObjects = []
      let refSchema
      if (this.checkNestedObjectsArray(schema)) {
        if (!data[field] || !data[field].length) {
          if (parentFields === '') {
            this.$set(data, field, [{}])
            this.$set(this.dataListsIndexes, field, 0)
          } else {
            data[field] = [{}]
          }
        }
        data = data[field]
        refSchema = schema.items
        field = this.dataListsIndexes[field] || 0
      } else {
        refSchema = schema
      }
      const { localSchema, component } = getSchemaInput(field, refSchema)
      parentFields = `${parentFields}.${field}`
      if (component) {
        fieldObjects.push({
          field,
          schema,
          data,
          name: parentFields,
          component
        })
      }
      if (localSchema.type === 'object') {
        if (!data[field]) {
          data[field] = {}
        }
        const { properties } = localSchema
        for (const nestedField in properties) {
          const childSchema = properties[nestedField]
          if (childSchema) {
            fieldObjects = fieldObjects.concat(
              this.parseAdminSettingsField({
                field: nestedField,
                schema: childSchema,
                data: data[field],
                parentFields: `${parentFields}.${nestedField}`
              })
            )
          }
        }
      }
      return fieldObjects
    },

    handleSubmit () {
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
