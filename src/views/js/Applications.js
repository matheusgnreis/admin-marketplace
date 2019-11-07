import EcAppCard from '../../components/EcAppCard.vue'
import EcInstalledAppCard from '../../components/EcInstalledAppCard.vue'
import EcomApps from '@ecomplus/apps-manager'

export default {
  name: 'Applications',
  components: {
    EcAppCard,
    EcInstalledAppCard
  },
  data: () => {
    return {
      applications: [],
      installedApplications: [],
      categories: [],
      searchField: ''
    }
  },
  props: {
    ecomApps: {
      type: Object,
      default: () => new EcomApps()
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
      const meta = {}
      const { category } = this.$route.params
      meta.params = {}

      if (category) {
        meta.params.category = category
      }

      if (this.searchField) {
        meta.params.title = this.searchField
      }
      // https://developers.e-com.plus/apps-manager/EcomApps.html#.fetchApps
      this.ecomApps.fetchApps(meta).then(apps => {
        this.applications = apps.result
        if (!this.categories.length) {
          this.loadCategories()
        }
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
      for (let category of this.applications.map(application => application.category)) {
        if (this.categories.indexOf(category) === -1) {
          this.categories.push(category)
        }
      }
    }
  }
}
