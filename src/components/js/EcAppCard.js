export default {
  name: 'EcAppCard',
  props: {
    application: {
      type: Object,
      default: {}
    },
    isInstalled: {
      type: Boolean
    }
  },
  computed: {
    appUrlIcon () {
      if (!this.application.icon.startsWith('https://')) {
        return `https://market.e-com.plus${this.application.icon}`
      }
      return this.application.icon
    }
  }
}
