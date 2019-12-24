import { $ecomConfig } from '@ecomplus/utils'

export default {
  name: 'InputNumber',

  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    value: [Number, String]
  },

  computed: {
    countryCode: () => $ecomConfig.get('country_code'),

    localValue: {
      get () {
        const num = parseFloat(this.value)
        return isNaN(num) ? undefined : num
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
