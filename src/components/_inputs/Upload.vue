<template>
  <a-form-item :label="schema.title">
    <a-upload :name="name" :multiple="multiple" :action="action" :headers="headers">
      <a-button>
        <a-icon type="upload" /> {{ buttonText }}</a-button>
    </a-upload>
  </a-form-item>
</template>

<script src="./js/Upload.js"></script>
