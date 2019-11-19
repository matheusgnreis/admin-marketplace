import EcApplication from './../../components/EcApplication.vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'Application',
  components: {
    EcApplication
  },
  data () {
    return {
      marketApplication: {},
      loading: true
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    }
  },
  methods: {
    fetchApp () {
      this.ecomApps.findApp(this.appId).then(app => {
        this.marketApplication = app
        this.loading = false
      })
    }
  },
  computed: {
    appId () {
      return this.$route.params.id
    }
  },
  created () {
    this.fetchApp()
  }
}
