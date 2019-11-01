<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 py-4">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fff">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Selecione uma categoria
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link
                    class="dropdown-item"
                    :to="`/apps/`">
                      Todas
                  </router-link>
                  <router-link
                    class="dropdown-item"
                    :to="`/apps/${category}`"
                    :key="category"
                    v-for="category of categories">
                      {{category}}
                  </router-link>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Search" v-model="searchField">
              <button class="btn btn-outline-success my-2 my-sm-0 btn-primary" @click="loadApplications()">Buscar</button>
            </form>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-6 col-lg-6 py-4"
        :key="application.id"
        v-for="application of applications">
          <ec-application-card :application="application"/>
      </div>
    </div>
  </div>
</template>

<script>
import EcApplicationCard from '../components/EcApplicationCard'

export default {
  name: "Applications",
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
  created() {
    this.loadApplications()
  },
  watch: {
    '$route': 'loadApplications'
  },
  methods: {
    loadApplications() {
      let query = this.$route.params.category ? `category=${this.$route.params.category}` : ''
      query += this.$route.params.category ? `&title=${this.searchField}` : `title=${this.searchField}`
      fetch(`https://market.e-com.plus/v1/applications/?${query}`)
        .then(response => {
          response.json().then(result => {
            this.applications = result.result
            if (!this.categories.length) {
              this.loadCategories();
            }
          })
        })
    },
    loadCategories(applications) {
      this.categories = [...new Set(this.applications.map(application => application.category))];
    },
  }
}
</script>
