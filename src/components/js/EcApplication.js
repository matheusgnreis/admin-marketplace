import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'EcApplication',
  components: {
    VueMarkdown
  },
  data () {
    return {
      adminSettings: {},
      applicationObjId: null,
      showSettings: false,
      loading: false,
      data: null,
      hidden_data: null
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    },
    application: {
      type: Object,
      default: () => { }
    },
    isInstalled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    installApp () {
      this.$message.loading('Instalando aplicativo ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(install => {
          this.$message.success(this.title + ' instalado', 2)
          this.isInstalled = true
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.applicationObjId).then(() => {
        this.isInstalled = false
      })
    },
    toggleSettings () {
      this.showSettings = (!this.showSettings)
    }
  },
  computed: {
    appId () {
      return this.$route.params.id
    },
    icon () {
      return this.application.icon
    },
    title () {
      return this.application.title
    },
    category () {
      return this.application.category
    },
    author () {
      return this.application.partner.name
    },
    shortDescription () {
      return this.application.short_description
    },
    description () {
      return this.application.description
    }
  }
}
