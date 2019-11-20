import EcApplication from './../../components/EcApplication.vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'Application',
  components: {
    EcApplication
  },
  data () {
    return {
      application: {
        app_id: '',
        _id: ''
      }
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
    }
  },
  created () {
    const { appId, appObjectId } = this.$route.params
    this.application.app_id = appId
    this.application._id = appObjectId
  }
}
