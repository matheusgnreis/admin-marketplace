import EcApplication from './../../components/EcApplication.vue'

export default {
  name: 'Application',
  components: {
    EcApplication
  },
  data () {
    return {
      application: {
        app_id: this.$route.params.appId,
        _id: this.$route.params.appObjectId
      }
    }
  }
}
