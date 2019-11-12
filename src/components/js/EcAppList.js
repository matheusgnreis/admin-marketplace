import { i18n } from '@ecomplus/utils'
import { Active, Inactive } from '@ecomplus/i18n'

export default {
  name: 'EcAppList',
  data: () => {
    return {
      Active,
      Inactive
    }
  },
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    i18n
  }
}
