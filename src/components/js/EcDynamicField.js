import { discover } from '../../utils/Discoverer.js'

export default {
  name: 'EcDynamicField',
  props: ['field', 'schema'],
  computed: {
    dynamicField () {
      return discover(this.field, this.schema)
    }
  }
}
