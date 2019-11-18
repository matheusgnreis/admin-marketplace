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
      applicationObjId: null,
      loading: false
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    }
  },
  methods: {
    fetchApplication () {
      this.ecomApps.findApp(this.appId).then(app => {
        console.log(app)
        this.application = app
        this.loading = false
      })
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
  },
  created () {
    this.ecomApps.ecomAuth.login('talisson', 'a26031995').then(r => console.log('login', r))
    this.fetchApplication()
  }
}
