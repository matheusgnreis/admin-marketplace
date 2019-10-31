export default {
  name: 'EcApplicationCard',
  props: {
    application: {
      type: Object,
      default: {}
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
