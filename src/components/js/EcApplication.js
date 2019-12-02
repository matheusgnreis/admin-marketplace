import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
import EcAppCard from './../EcAppCard.vue'

export default {
  name: 'EcApplication',

  components: {
    VueMarkdown,
    EcAppCard
  },

  data () {
    return {
      loading: false,
      applicationBody: this.application,
      appsRelated: [],
      tabListNoTitle: [
        {
          key: 'description',
          tab: 'Descrição'
        },
        {
          key: 'settings',
          tab: 'Configuração'
        },
        {
          key: 'related',
          tab: 'Aplicativos relacionados'
        }
      ],
      activeTabKey: 'description'
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
      return this.applicationBody.author_name
    },

    shortDescription () {
      return this.applicationBody.short_description
    },

    description () {
      return this.applicationBody.description
    },

    version () {
      return this.applicationBody.version
    },

    website () {
      return this.applicationBody.website
    },

    price () {
      return 'Grátis'
    },

    i19author () {
      return 'Autor'
    },

    i19version () {
      return 'Versão'
    },

    i19install () {
      return 'Instalar'
    },

    i19uninstall () {
      return 'Desinstalar'
    },

    isInstalled () {
      return (this.applicationBody._id)
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
      })
    },

    findRelateds () {
      this.ecomApps.fetchMarketApps({ params: { category: this.category } })
        .then(resp => (this.appsRelated = resp.result))
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

    uninstallApp () {
      this.ecomApps.removeApplication(this.localApplication._id)
    },

    handleTabChange (key, type) {
      this[type] = key
    },

    updateTabContent () {
      const { applicationBody } = this
      if (applicationBody.app_id && !applicationBody.author_id) {
        this.fetchMarketApplication()
      }
      if (applicationBody._id && !applicationBody.admin_settings) {
        this.fetchStoreApplication(applicationBody._id)
      }
    }
  },

  watch: {
    activeTabKey: {
      handler () {
        if (this.activeTabKey === 'related') {
          this.findRelateds()
        } else {
          this.updateTabContent()
        }
      },
      immediate: true
    },
    localApplication () {
      this.loading = true
    }
  }
}
