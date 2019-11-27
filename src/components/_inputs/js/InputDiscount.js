import InputMoney from '../InputMoney.vue'
import EcDynamicField from '../../EcDynamicField.vue'

export default {
  name: 'InputDiscount',
  components: {
    InputMoney,
    EcDynamicField
  },
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    }
  },
  data: () => {
    return {
      data: {
        type: '',
        value: null
      }
    }
  },
  computed: {
    type () {
      return this.schema.properties.type
    },
    value () {
      return this.schema.properties.value
    },
    others () {
      const others = {}
      for (const prop of Object.keys(this.schema.properties)) {
        if (!['value', 'type'].includes(prop)) {
          others[prop] = this.schema.properties[prop]
        }
      }
      return others
    }
  },
  created () {
    this.data.type = this.type.default
  }
}
