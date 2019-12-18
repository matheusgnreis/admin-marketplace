import InputMoney from '../InputMoney.vue'
import InputEnum from '../InputEnum.vue'
export default {
  name: 'InputDiscount',
  components: {
    InputMoney,
    InputEnum
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
    type () {
      return this.schema.properties.type
    },
    discountValue () {
      return this.schema.properties.value
    },
    applyAt () {
      return this.schema.properties.apply_at
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
