export default {
  name: 'EcInstalledApplicationCard',
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
