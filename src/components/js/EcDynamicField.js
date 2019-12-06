import { discover } from '../../utils/Discoverer.js'

export default {
  name: 'EcDynamicField',

  props: {
    field: String,
    schema: Object,
    value: [String, Number, Boolean, Object]
  },

  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },

    dynamicFields () {
      return discover(this.field, this.schema)
    }
  }
}
