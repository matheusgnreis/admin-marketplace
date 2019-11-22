const isMoney = (field, schema) => {
  return ((field.includes('amount') || field.includes('price')) && schema.type === 'number')
}

const isZipCode = (field, schema) => {
  return field.includes('zip') && schema.pattern === '^[0-9]{5}-?[0-9]{3}$'
}

const isUpload = (field, schema) => {
  return field.includes('icon') && schema.format === 'uri'
}

const isNumber = (field, schema) => {
  return schema.type === 'number'
}

const isText = (field, schema) => {
  return schema.type === 'string'
}

const INPUTS = [
  { match: isMoney, component: () => import(`../components/_inputs/InputMoney.vue`) },
  { match: isZipCode, component: () => import(`../components/_inputs/InputZipCode.vue`) },
  { match: isUpload, component: () => import(`../components/_inputs/Upload.vue`) },
  { match: isText, component: () => import(`../components/_inputs/InputText.vue`) },
  { match: isNumber, component: () => import(`../components/_inputs/InputNumber.vue`) }
]

export const discover = (field, schema) => {
  for (let input of INPUTS) {
    if (input['match'](field, schema)) {
      return input.component
    }
  }
}
