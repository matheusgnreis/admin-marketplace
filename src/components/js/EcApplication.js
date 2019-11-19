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
      hiddenData: null,
      storeApplication: null,
      isInstalled: false
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    },
    marketApplication: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    installApp () {
      this.$message.loading('Instalando aplicativo ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.$message.success(this.title + ' instalado', 2)
          this.installed = true
          this.fetchApplication(installed._id)
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.localApplication._id).then(() => {
        this.installed = false
      })
    },
    fetchApplication (applicationId) {
      return this.ecomApps.findStoreApplication(applicationId).then(({ data }) => {
        const { application } = data
        this.localStoreApplication = application
        console.log(this.localStoreApplication)
      })
    },
    toggleSettings () {
      this.showSettings = (!this.showSettings)
    }
  },
  computed: {
    appId () {
      return this.marketApplication.app_id
    },
    icon () {
      return this.marketApplication.icon
    },
    title () {
      return this.marketApplication.title
    },
    category () {
      return this.marketApplication.category
    },
    author () {
      return this.marketApplication.partner.name
    },
    shortDescription () {
      return this.marketApplication.short_description
    },
    description () {
      return this.marketApplication.description
    },
    installed: {
      get () {
        return this.isInstalled
      },
      set (is) {
        this.isInstalled = is
      }
    },
    localStoreApplication: {
      get () {
        return this.storeApplication
      },
      set (value) {
        this.storeApplication = value
      }
    }
  },
  created () {
    const applicationId = this.$route.params.applicationId
    if (applicationId !== null && applicationId !== undefined) {
      this.fetchApplication(applicationId)
    }
  }
}
