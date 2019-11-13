<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-3 d-flex flex-column align-items-center">
        <h4 class="py-4">Seus apps instalados</h4>
        <ec-installed-app-card
          :key="app._id"
          v-for="app of installedApplications"
          :app="app">
        </ec-installed-app-card>
      </div>
      <div class="col-md-9">
        <h4 class="py-4">Veja outros aplicativos disponíveis</h4>
        <div class="d-flex justify-content-between align-items-center bg-white">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/apps/">Todas</router-link>
              </a-menu-item>
              <a-menu-item :key="category" v-for="category of categories">
                <router-link :to="`/apps/${category}`">{{category}}</router-link>
              </a-menu-item>
            </a-menu>
            <a-button>
              Categorias <a-icon type="down" />
            </a-button>
          </a-dropdown>
          <div class="mr-20">
            <a-input-search
              placeholder="Pesquisar..."
              v-model="searchField"
              @search="loadApplications()" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6 py-4"
            :key="application.id"
            v-for="application of applications">
            <ec-app-card :application="application" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/Applications.js"></script>