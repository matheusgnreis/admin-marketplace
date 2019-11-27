import { i18n } from '@ecomplus/utils'
import EcomApps from '@ecomplus/apps-manager'
import EcAppCard from './../EcAppCard.vue'
import EcInstalledAppCard from './../EcInstalledAppCard.vue'
import { FadeTransition } from 'vue2-transitions'

import {
  // i19applications,
  i19availableApps,
  // i19loadDataErrorMsg,
  // i19tryAgain,
  i19yourInstalledApps
} from '@ecomplus/i18n'

export default {
  name: 'EcAppsMarket',

  components: {
    FadeTransition,
    EcAppCard,
    EcInstalledAppCard
  },

  data () {
    return {
      loading: false,
      loadError: false,
      errorMessage: '',
      activeTabKey: 'market',
      apps: []
    }
  },

  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    }
  },

  computed: {
    i19applications () {
      return 'Aplicativos'
    },

    i19availableApps () {
      return i18n(i19availableApps)
    },

    i19loadDataErrorMsg () {
      return 'Não foi possível carregar os dados da API, por favor verifique sua conexão'
    },

    i19tryAgain () {
      return 'Tentar novamente'
    },

    i19yourInstalledApps () {
      return i18n(i19yourInstalledApps)
    }
  },

  methods: {
    updateTabContent () {
      this.loading = true
      const isMarketApps = this.activeTabKey === 'market'
      const promise = isMarketApps
        ? this.ecomApps.fetchMarketApps()
        : this.ecomApps.fetchStoreApplications()
      promise
        .then(data => {
          this.apps = data.result || data
        })
        .catch(err => {
          console.error(err)
          this.loadError = true
          if (err.response) {
            const { data } = err.response
            if (data) {
              if (data.user_message) {
                this.errorMessage = i18n(data.user_message)
                return
              } else if (data.message) {
                this.errorMessage = data.message
                return
              }
            }
          }
          this.errorMessage = this.i19loadDataErrorMsg
        })
        .finally(() => {
          this.loading = false
        })
    }
  },

  watch: {
    activeTabKey: {
      handler () {
        this.updateTabContent()
      },
      immediate: true
    }
  }
}
