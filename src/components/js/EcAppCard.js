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
