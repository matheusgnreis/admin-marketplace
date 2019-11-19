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
      showSettings: false,
      loading: false,
      data: null,
      hiddenData: null
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
    localApplication: {
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
        .then(installed => {
          this.$message.success(this.title + ' instalado', 2)
          this.$emit('update:isInstalled', true)
          this.fetchApplication(installed._id)
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.localApplication._id).then(() => {
        this.$emit('update:isInstalled', false)
      })
    },
    fetchApplication (applicationId) {
      this.ecomApps.findStoreApplication(applicationId).then(application => {
        this.$emit('update:localApplication', application)
      })
    },
    toggleSettings () {
      this.showSettings = (!this.showSettings)
    }
  },
  computed: {
    appId () {
      return this.application.app_id
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
