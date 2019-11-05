export default {
  name: 'EcInstalledAppCard',
  props: {
    app: {
      type: Object,
      default: {}
    }
  },
  computed: {
    stateLabel () {
      return this.app.state === 'active' ? 'Ativado' : 'Desativado'
    }
  }
}
