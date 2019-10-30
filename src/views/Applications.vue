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
      applications: [
        {
          id: '1',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
        {
          id: '2',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
        {
          id: '3',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
        {
          id: '4',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
        {
          id: '5',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
        {
          id: '6',
          title: 'Melhor Envio',
          description: 'Cote diversas modalidades de fretes com um clique, compre etiquetas e envie seus...',
          category: 'Soluções de envio'
        },
      ]
    }
  }
}
</script>