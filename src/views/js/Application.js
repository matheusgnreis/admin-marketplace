import EcApplication from './../../components/EcApplication.vue'

export default {
  name: 'Application',

  components: {
    EcApplication
  },

  computed: {
    application () {
      return {
        app_id: this.$route.params.appId,
        _id: this.$route.params.objectId
      }
    }
  }
}
