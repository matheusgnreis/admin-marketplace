import EcDynamicField from '../../EcDynamicField.vue'

export default {
  name: 'InputObject',
  components: {
    EcDynamicField
  },
  props: {
    name: {
      type: String,
      required: true
    },
    schema: {
      type: Object
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    others () {
      const others = {}
      for (const prop of Object.keys(this.schema.properties)) {
        others[prop] = this.schema.properties[prop]
      }
      return others
    },
    localValue () {
      return this.value ? this.value : {}
    }
  },
  methods: {
    update (key, value) {
      this.$emit('input', { ...this.localValue, [key]: value })
    }
  }
}
