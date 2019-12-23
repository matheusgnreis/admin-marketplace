import cloneDeep from 'lodash.clonedeep'

const isEmptyObject = value => {
  if (typeof value === 'object') {
    return !Array.isArray(value) ? Object.keys(value).length < 1 : value.length < 1
  }
}

const hasNextObject = value => {
  return typeof value === 'object' && !Array.isArray(value)
}

const sanitizeArray = items => {
  for (const item of items) {
    if (hasNextObject(item)) {
      for (const key of Object.keys(item)) {
        sanitize(item, key)
      }
    }
  }
}

const sanitize = (obj, initialKey) => {
  if (hasNextObject(obj[initialKey])) {
    for (const key of Object.keys(obj[initialKey])) {
      sanitize(obj[initialKey], key)
    }
  }
  if (Array.isArray(obj[initialKey])) {
    sanitizeArray(obj[initialKey])
    obj[initialKey] = obj[initialKey].filter(item => isEmptyObject() === false)
  }
  if (isEmptyObject(obj[initialKey])) {
    delete obj[initialKey]
  }
}

export default (formData) => {
  const newFormData = cloneDeep(formData)
  for (const key of Object.keys(newFormData)) {
    sanitize(newFormData, key)
  }
  return newFormData
}
