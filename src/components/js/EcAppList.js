import { i18n } from '@ecomplus/utils'
import { i19active, i19inactive } from '@ecomplus/i18n'

export default {
  name: 'EcAppList',
  props: {
    apps: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    i19active () {
      return i18n(i19active)
    },
    i19inactive () {
      return i18n(i19inactive)
    }
  }
}
