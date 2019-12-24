import cloneDeep from 'lodash.clonedeep'

const isEmptyObject = obj => {
  return typeof obj === 'object' && obj &&
    (!Array.isArray(obj) ? Object.keys(obj).length < 1 : obj.length < 1)
}

const hasNextObject = obj => {
  return typeof obj === 'object' && obj && !Array.isArray(obj)
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
  if (typeof obj === 'object' && obj !== null) {
    if (hasNextObject(obj[initialKey])) {
      for (const key of Object.keys(obj[initialKey])) {
        sanitize(obj[initialKey], key)
      }
    }
    if (Array.isArray(obj[initialKey])) {
      sanitizeArray(obj[initialKey])
      obj[initialKey] = obj[initialKey].filter(item => isEmptyObject(item) === false)
    }
    if (isEmptyObject(obj[initialKey])) {
      delete obj[initialKey]
    }
  }
}

export default formData => {
  const newFormData = cloneDeep(formData)
  for (const key of Object.keys(newFormData)) {
    sanitize(newFormData, key)
  }
  return newFormData
}
