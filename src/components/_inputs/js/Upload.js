export default {
  name: 'Upload',
  props: {
    name: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object
    },
    buttonText: {
      type: String,
      default: 'Click to Upload' // Todo: Change to i18n
    }
  }
}
