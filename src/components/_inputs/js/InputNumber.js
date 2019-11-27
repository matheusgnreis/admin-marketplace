export default {
  name: 'InputNumber',
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
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
