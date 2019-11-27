export default {
  name: 'Upload',
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object,
      default: false
    },
    action: {
      type: String
    },
    headers: {
      type: Object
    },
    multiple: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Click to Upload' // Todo: Change to i18n
    }
  }
}
