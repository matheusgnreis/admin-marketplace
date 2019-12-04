import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
import EcAppCard from './../EcAppCard.vue'
import { i18n } from '@ecomplus/utils'

import {
  i19install,
  i19version,
  i19description,
  i19relatedApps,
  i19configuration,
  i19free,
  i19author,
  i19uninstall,
  i19yes,
  i19no,
  i19areYouWantToDeleteAppMsg,
  i19back,
  i19unavailable,
  i19paid,
  i19installed,
  i19unableToInstallAppMsg,
  i19installingApp
} from '@ecomplus/i18n'

export default {
  name: 'EcApplication',

  components: {
    VueMarkdown,
    EcAppCard
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

  data () {
    return {
      isLoaded: false,
      applicationBody: this.application,
      appsRelated: [],
      tabListNoTitle: [
        {
          key: 'description',
          tab: ''
        },
        {
          key: 'settings',
          tab: ''
        },
        {
          key: 'related',
          tab: ''
        }
      ],
      activeTabKey: 'settings'
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

    i19description () {
      return i18n(i19description)
    },

    i19configuration () {
      return i18n(i19configuration)
    },

    i19relatedApps () {
      return i18n(i19relatedApps)
    },

    i19unableToInstallAppMsg () {
      return i18n(i19unableToInstallAppMsg)
    },

    version () {
      return this.applicationBody.version
    },

    website () {
      return this.applicationBody.website
    },

    price () {
      if (this.applicationBody) {
        if (!this.applicationBody.paid) {
          return i18n(i19free)
        } else {
          return i18n(i19paid)
        }

      } else {
        return i18n(i19unavailable)
      }
    },

    i19author () {
      return i18n(i19author)
    },

    i19version () {
      return i18n(i19version)
    },

    i19install () {
      return i18n(i19install)
    },

    i19uninstall () {
      return i18n(i19uninstall)
    },

    i19yes () {
      return i18n(i19yes)
    },

    i19no () {
      return i18n(i19no)
    },

    i19back () {
      return i18n(i19back)
    },

    i19areYouWantToDeleteAppMsg () {
      return i18n(i19areYouWantToDeleteAppMsg)
    },

    i19installingApp () {
      return i18n(i19installingApp)
    },

    i19installed () {
      return i18n(i19installed)
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
        this.isLoaded = true
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
        .then(resp => {
          const { result } = resp
          const filter = result.filter(app => app.app_id !== this.appId)
          this.appsRelated = filter || []
        })
    },

    installApp () {
      this.$message.loading(this.i19installingApp + ' ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(installed => {
          this.$message.success(this.title + ' ' + this.i19installed , 2)
          this.fetchStoreApplication(installed._id)
        })
        .catch(e => {
          this.$message.error(this.i19unableToInstallAppMsg, 3)
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
    }
  },

  created () {
    for (var i = 0; i < this.tabListNoTitle.length; i++) {
      switch (this.tabListNoTitle[i].key) {
        case 'description':
          this.tabListNoTitle[0].tab = this.i19description
          break;
        case 'settings':
          this.tabListNoTitle[1].tab = this.i19configuration
          break;
        case 'related':
          this.tabListNoTitle[2].tab = this.i19relatedApps
          break;
      }
    }
  }
}
