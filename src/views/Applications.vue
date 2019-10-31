<template>
  <div class="container">
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
      applications: []
    }
  },
  created() {
    fetch('https://market.e-com.plus/v1/applications/')
      .then(response => {
        response.json().then(result => {
          this.applications = result.result
        })
      })
  }
}
</script>
