import { i18n } from '@ecomplus/utils'
import { i19active, i19inactive } from '@ecomplus/i18n'

export default {
  name: 'EcAppList',
  data: () => {
    return {
      i19active,
      i19inactive
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
