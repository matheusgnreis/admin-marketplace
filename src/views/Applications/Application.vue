<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <a-card hoverable style="width: 100%">
          <template class="ant-card-actions" slot="actions">
            <a-icon type="api" title="Instalar agora" @click="installApp" v-if="!installed"/>
            <a-icon type="setting" title="Configurar aplicativo" v-if="installed"/>
            <a-popconfirm
              title="Tem certeza que deseja excluir o aplicativo?"
              @confirm="deleteApp"
              okText="Sim"
              cancelText="Não"
              v-if="installed"
            >
              <a-icon type="delete" title="Excluir aplicativo"/>
            </a-popconfirm>
          </template>
          <a-card-meta :title="title" :description="shortDescription">
            <a-avatar
              slot="avatar"
              :src="icon"
            />
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <div class="row py-4">
      <div class="col">
        <a-card :loading="loading">
          <vue-markdown>{{description}}</vue-markdown>
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
      applicationObjId: null,
      loading: true,
      installed: false,
      data: null,
      hidden_data: null
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
      this.$message.loading('Instalando aplicativo ' + this.title, 1)
      this.ecomApps.installApp(this.appId, true)
        .then(install => {
          this.$message.success(this.title + ' instalado', 2)
          this.isInstalled()
        })
        .catch(e => {
          this.$message.error('Não foi possível instalar o aplicativo', 3)
        })
    },
    deleteApp () {
      this.ecomApps.removeApplication(this.applicationObjId).then(() => this.isInstalled())
    },
    isInstalled () {
      this.ecomApps.fetchStoreApplications(this.appId).then(app => {
        if (app && Array.isArray(app) && app.length) {
          this.installed = true
          this.applicationObjId = app[0]._id
          Object.assign(this.data, app[0].data)
          Object.assign(this.hidden_data, app[0].hidden_data)
        } else {
          this.installed = false
        }
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
    this.fetchApplication()
    this.isInstalled()
  }
}
</script>
