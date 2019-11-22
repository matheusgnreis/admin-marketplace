import { _config } from '@ecomplus/utils'

import CleaveInput from 'vue-cleave-component'
const countryCode = _config.get('country_code')

export default {
  name: 'InputMoney',
  components: {
    CleaveInput
  },
  data: () => {
    return {
      localValue: null
    }
  },
  computed: {
    cleaveOptions () {
      return {
        prefix: countryCode === 'BR' ? 'R$' : '$',
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        numeralDecimalMark: ',',
        numeralDecimalScale: 2,
        delimiter: '.'
      }
    }
  }
}
