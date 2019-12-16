import InputDiscount from '../components/_inputs/InputDiscount.vue'
import InputMoney from '../components/_inputs/InputMoney.vue'
import InputZipCode from '../components/_inputs/InputZipCode.vue'
import Upload from '../components/_inputs/Upload.vue'
import InputEnum from '../components/_inputs/InputEnum.vue'
import InputText from '../components/_inputs/InputText.vue'
import InputNumber from '../components/_inputs/InputNumber.vue'
import InputBoolean from '../components/_inputs/InputBoolean.vue'

const isDiscount = (field, schema) => {
  if (field.includes('discount') && schema.type === 'object') {
    if (schema.properties.value && schema.properties.type) {
      return isNumber('value', schema.properties.value) && isEnum('type', schema.properties.type)
    }
  }
  return false
}

const isMoney = (field, schema) => {
  return (field.includes('amount') || field.includes('price')) && schema.type === 'number'
}

const isZipCode = (field, schema) => {
  return field.includes('zip') && schema.pattern === '^[0-9]{5}-?[0-9]{3}$'
}

const isUpload = (field, schema) => {
  return field.includes('icon') && schema.format === 'uri'
}

const isEnum = (field, schema) => {
  return schema.type === 'string' && schema.enum
}

const isNumber = (field, schema) => {
  return ['integer', 'number'].includes(schema.type)
}

const isText = (field, schema) => {
  return schema.type === 'string'
}

const isBoolean = (field, schema) => {
  return schema.type === 'boolean'
}

const inputRules = [
  { match: isDiscount, component: InputDiscount },
  { match: isMoney, component: InputMoney },
  { match: isZipCode, component: InputZipCode },
  { match: isUpload, component: Upload },
  { match: isEnum, component: InputEnum },
  { match: isText, component: InputText },
  { match: isNumber, component: InputNumber },
  { match: isBoolean, component: InputBoolean }
]

export default (field, schema) => {
  for (const { match, component } of inputRules) {
    if (match(field, schema)) {
      return component
    }
  }
}
