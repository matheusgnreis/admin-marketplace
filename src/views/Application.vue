<template>
  <div id="application">
    <ec-application :application="application" @click:install="goToApp" @click:back="goToMarket" @click:uninstall="goToMarket"/>
  </div>
</template>

<script src="./js/Application.js"></script>
