<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <a-card hoverable style="width: 100%">
          <template class="ant-card-actions" slot="actions">
            <a-icon type="api" title="Instalar agora" @click="installApp" v-if="!installed"/>
            <a-icon type="setting" title="Configurar aplicativo" @click="toggleSettings" v-if="installed"/>
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
    <div class="row pt-4" v-if="showSettings">
      <div class="col">
        <a-card hoverable style="width: 100%">
          <a-collapse :bordered="false" v-for="(setting, index) in application.json_body" :key="index">
            <a-collapse-panel :header="setting.schema.title" :key="index">
            </a-collapse-panel>
          </a-collapse>
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
<script src="./js/Application.js"></script>
