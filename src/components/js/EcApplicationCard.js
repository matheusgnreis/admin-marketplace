export default {
  name: 'EcApplicationCard',
  props: {
    application: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getUrlIcon () {
      if (!this.application.icon.startsWith('https://')) {
        return `https://market.e-com.plus${this.application.icon}`
      }
      return this.application.icon
    }
  }
}
