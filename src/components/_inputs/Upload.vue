<template>
    <a-upload
    :name="name"
    :multiple="multiple"
    :action="action"
    :headers="headers"
  >
    <a-button> <a-icon type="upload" /> {{ buttonText }}</a-button>
  </a-upload>
</template>

<script src="./js/Upload.js"></script>
