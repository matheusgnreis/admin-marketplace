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
    dynamicFields () {
      return discover(this.field, this.schema)
    }
  }
}
