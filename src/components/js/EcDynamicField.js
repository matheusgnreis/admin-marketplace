import { discover } from '../../utils/Discoverer.js'

export default {
  name: 'EcDynamicField',
  props: {
    field: {
      type: String
    },
    schema: {
      type: Object
    },
    value: {
      type: [String, Number, Boolean, Object]
    }
  },
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    dynamicFields () {
      return discover(this.field, this.schema)
    }
  }
}
