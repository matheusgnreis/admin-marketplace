import InputZipCode from './../../components/_inputs/InputZipCode.vue'

export default (field, localSchema) => {
  return field.includes('zip') && InputZipCode
}
