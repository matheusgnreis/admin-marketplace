export default {
  name: 'InputText',
  props: {
    schema: {
      type: Object
    },
    name: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      value: null
    }
  },
  created () {
    this.value = this.schema.default
  }
}
