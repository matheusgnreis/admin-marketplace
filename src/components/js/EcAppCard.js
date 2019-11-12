import { i18n } from '@ecomplus/utils'
import { Install, Edit } from '@ecomplus/i18n'

const MAX_LENGHT_DESCRIPTION = 100

export default {
  name: 'EcAppCard',
  data: () => {
    return {
      Install,
      Edit
    }
  },
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
