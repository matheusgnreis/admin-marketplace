import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'EcApplication',
  components: {
    VueMarkdown
  },
  data () {
    return {
      showSettings: false,
      isInstalled: false,
      applicationBody: this.application
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    },
    application: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    fetchMarketApplication () {
      this.ecomApps.findApp(this.appId).then(app => {
        // remove null
        for (const key in app) {
          if (app[key] === null || app[key] === '') {
            delete app[key]
          }
        }
        this.localApplication = {
          ...this.applicationBody,
          ...app
        }
      })
    },
    fetchStoreApplication (applicationId) {
      this.ecomApps.findStoreApplication(applicationId).then(({ data }) => {
        this.localApplication = {
          ...this.applicationBody,
          ...data
        }
        this.isInstalled = true
      })
    },
    installApp () {
      this.$message.loading('Instalando aplicativo ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.$message.success(this.title + ' instalado', 2)
          this.fetchStoreApplication(installed._id)
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.localApplication._id).then(() => {
        this.isInstalled = false
      })
    },
    toggleSettings () {
      this.showSettings = (!this.showSettings)
    }
  },
  computed: {
    appId () {
      return this.applicationBody.app_id
    },
    icon () {
      return this.applicationBody.icon
    },
    title () {
      return this.applicationBody.title
    },
    category () {
      return this.applicationBody.category
    },
    author () {
      return this.applicationBody.partner.name
    },
    shortDescription () {
      return this.applicationBody.short_description
    },
    description () {
      return this.applicationBody.description
    },
    localApplication: {
      get () {
        return this.applicationBody
      },
      set (data) {
        this.applicationBody = data
        this.$emit('update:application', data)
      }
    }
  },
  created () {
    const { applicationBody } = this
    if (applicationBody.app_id && !applicationBody.partner) {
      this.fetchMarketApplication()
    }
    if (applicationBody._id !== undefined && !applicationBody.admin_settings) {
      this.fetchStoreApplication(applicationBody._id)
    }
  }
}
