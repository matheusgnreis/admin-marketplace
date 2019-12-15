export default {
  name: 'InputEnum',
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    },
    value: {
      type: String
    }
  },
  computed: {
    localValue: {
      get () {
        return typeof this.value === 'string' ? this.value : this.schema.default
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
