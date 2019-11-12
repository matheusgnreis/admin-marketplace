<template>
  <div class="container py-4">
    <a-row>
      <a-col :sm="5">
        <h4 class="py-4">{{i18n(YourInstalledApps)}}</h4>
        <ec-app-list :apps="installedApplications"></ec-app-list>
      </a-col>
      <a-col>
        <a-row type="flex">
          <a-col :span="24">
            <h4 class="py-4 ml-30">{{i18n(AvailableApps)}}</h4>
          </a-col>
          <a-col :span="24">
            <a-row type="flex" justify="space-between" class="mb-4">
              <a-col :span="15" :offset="1">
                <a-dropdown>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <router-link to="/apps/">{{i18n(AllCategories)}}</router-link>
                    </a-menu-item>
                    <a-menu-item :key="category" v-for="category of categories">
                      <router-link :to="`/apps/${category}`">{{category}}</router-link>
                    </a-menu-item>
                  </a-menu>
                  <a-button>
                    {{i18n(Category)}}
                    <a-icon type="down" />
                  </a-button>
                </a-dropdown>
              </a-col>
              <a-col :span="8">
                <a-input-search :placeholder="i18n(Search)" v-model="searchField" @search="loadApplications()" />
              </a-col>
            </a-row>
            <a-row type="flex">
              <a-col :offset="1" class="py-3" :key="application.id" v-for="application of applications">
                <ec-app-card :app="application" :is-installed="isInstalled(application)" />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script src="./js/Applications.js"></script>