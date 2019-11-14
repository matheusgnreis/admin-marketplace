import { i18n } from '@ecomplus/utils'
import { i19install, i19edit } from '@ecomplus/i18n'

const MAX_LENGHT_DESCRIPTION = 100

export default {
  name: 'EcAppCard',
  props: {
    app: {
      type: Object,
      default: {}
    },
    isInstalled: {
      type: Boolean
    }
  },
  methods: {
    i18n
  },
  computed: {
    i19edit () {
      return i18n(i19edit)
    },
    i19install () {
      return i18n(i19install)
    },
    appUrlIcon () {
      if (!this.app.icon.startsWith('https://')) {
        return `https://market.e-com.plus${this.app.icon}`
      }
      return this.app.icon
    },
    formattedDescription () {
      if (this.app.short_description.length > MAX_LENGHT_DESCRIPTION) {
        return `${this.app.short_description.slice(0, MAX_LENGHT_DESCRIPTION)}...`
      }
      return this.app.short_description
    }
  }
}
