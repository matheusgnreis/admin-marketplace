import EcApplication from './../../components/EcApplication.vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'Application',
  components: {
    EcApplication
  },
  data () {
    return {
      application: {},
      loading: false,
      localApplication: {}
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
        this.application = app
        this.loading = false
      })
    },
    fetchApplication (applicationId) {
      this.ecomApps.findStoreApplication(applicationId).then(application => {
        this.$emit('update:localApplication', application)
      })
    }
  },
  watch: {
    $route: function () {
      const applicationId = this.$route.params.applicationId
      if (applicationId !== null && applicationId !== undefined) {
        this.fetchApplication(applicationId)
      }
    }
  },
  computed: {
    appId () {
      return this.$route.params.id
    },
    applicationObjId () {
      return this.$route.params.applicationId
    }
  },
  created () {
    this.fetchApp()
  }
}
