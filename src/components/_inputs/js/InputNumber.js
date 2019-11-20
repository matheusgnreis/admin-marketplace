export default {
  name: 'InputNumber',
  props: {
    name: {
      type: String,
      required: true
    },
    minimum: {
      type: Number,
      default: -99999999
    },
    maximum: {
      type: Number,
      default: 99999999
    },
    default: {
      type: Number
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
