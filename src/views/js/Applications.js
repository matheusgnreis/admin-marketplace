import EcApplicationCard from '../../components/EcApplicationCard.vue'
import EcInstalledApplicationCard from '../../components/EcInstalledApplicationCard.vue'

export default {
  name: 'Applications',
  components: {
    EcApplicationCard,
    EcInstalledApplicationCard
  },
  data: () => {
    return {
      applications: [],
      installedApplications: [],
      categories: [],
      searchField: ''
    }
  },
  created () {
    this.loadApplications()
    this.loadInstalledApplications()
  },
  watch: {
    $route: 'loadApplications'
  },
  methods: {
    loadApplications () {
      let query = this.$route.params.category ? `category=${this.$route.params.category}` : ''
      query += this.$route.params.category ? `&title=${this.searchField}` : `title=${this.searchField}`
      fetch(`https://market.e-com.plus/v1/applications/?${query}`).then(response => {
        response.json().then(result => {
          this.applications = result.result
          if (!this.categories.length) {
            this.loadCategories()
          }
        })
      })
    },
    loadInstalledApplications () {
      fetch(`https://api.e-com.plus/v1/applications.json`, {
        headers: new Headers({
          'X-Store-ID': localStorage.getItem('X-Store-ID'),
          'X-My-ID': localStorage.getItem('X-My-ID'),
          'X-Access-Token': localStorage.getItem('X-Access-Token')
        })
      }).then(response => {
        response.json().then(result => {
          this.installedApplications = result.result
        })
      })
    },
    loadCategories () {
      this.categories = [...new Set(this.applications.map(application => application.category))]
    }
  }
}
