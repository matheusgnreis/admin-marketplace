import EcApplicationCard from '../../components/EcApplicationCard'

export default {
  name: 'Applications',
  components: {
    EcApplicationCard
  },
  data: () => {
    return {
      applications: [],
      categories: [],
      searchField: ''
    }
  },
  created () {
    this.loadApplications()
  },
  watch: {
    $route: 'loadApplications'
  },
  methods: {
    loadApplications () {
      let query = this.$route.params.category
        ? `category=${this.$route.params.category}`
        : ''
      query += this.$route.params.category
        ? `&title=${this.searchField}`
        : `title=${this.searchField}`
      fetch(`https://market.e-com.plus/v1/applications/?${query}`).then(
        response => {
          response.json().then(result => {
            this.applications = result.result
            if (!this.categories.length) {
              this.loadCategories()
            }
          })
        }
      )
    },
    loadCategories () {
      this.categories = [
        ...new Set(this.applications.map(application => application.category))
      ]
    }
  }
}
