export default {
  name: 'InputText',
  props: {
    name: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    default: {
      type: String
    }
  },
  data: () => {
    return {
      value: null
    }
  },
  created () {
    this.value = this.default
  }
}
