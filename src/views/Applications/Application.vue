<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <a-card>
          <div class="d-flex">
            <img :src="applicationIcon" class="card__icon">
            <div class="card__title d-flex flex-column">
              <span><strong>{{applicationTitle}}</strong></span>
              <span><small>Categoria</small> {{applicationCategory}}</span>
              <span><small>Por</small> {{applicationAuthor}}</span>
              <span>
                <a-button type="primary" size="small" @click="installApp">Instalar Agora</a-button>
              </span>
            </div>
          </div>
        </a-card>
      </div>
    </div>
    <div class="row py-4">
      <div class="col">
        <a-card :loading="loading">
          <vue-markdown>{{applicationDescription}}</vue-markdown>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import EcomApps from '@ecomplus/apps-manager'
export default {
  name: 'Application',
  components: {
    VueMarkdown
  },
  data () {
    return {
      application: {},
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
    fetchApplication() {
      this.ecomApps.findApp(this.appId).then(app => {
        this.application = app
        this.loading = false
      })
    },
    installApp () {
      this.ecomApps.installApp(this.appId, true).then(install => {
        console.log(install)
      })
    }
  },
  computed: {
    appId () {
      return this.$route.params.id
    },
    applicationIcon () {
      return this.application.icon
    },
    applicationTitle () {
      return this.application.title
    },
    applicationCategory () {
      return this.application.category
    },
    applicationAuthor () {
      return this.application.partner.name
    },
    applicationShortDesc () {
      return this.application.short_description
    },
    applicationDescription () {
      return this.application.description
    }
  },
  created () {
    this.fetchApplication()
  }
}
</script>
<style lang="scss">
.card__icon {
  max-width: 90px;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-right: 1.5rem;
}

.card__title {
  font-size: 13px;
  line-height: 20px;
}

.card__title span:first-child {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
}
</style>
