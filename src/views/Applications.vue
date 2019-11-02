<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center bg-white mb-3">
      <b-dropdown text="Selecione uma categoria" class="m-md-2" variant="light">
        <b-dropdown-item to="/apps/">Todas</b-dropdown-item>
        <b-dropdown-item
          :to="`/apps/${category}`"
          :key="category"
          v-for="category of categories"
        >{{category}}</b-dropdown-item>
      </b-dropdown>
      <div class="mr-20">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pesquisar..."
            aria-label="Search"
            v-model="searchField"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0 btn-primary"
            @click="loadApplications()"
          >Buscar</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-6 py-4"
        :key="application.id"
        v-for="application of applications">
          <ec-application-card :application="application"/>
      </div>
    </div>
  </div>
</template>
<script src="./js/Applications.js"></script>