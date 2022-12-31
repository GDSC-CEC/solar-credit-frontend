export function setItem(value, obj) {
  const objString = JSON.stringify(obj)
  localStorage.setItem(value, objString)
};

export function getItem(value) {
  const objString = localStorage.getItem(value)
  if (objString) return JSON.parse(objString)
  return null
}

export function removeItem(value) {
  localStorage.removeItem(value)
};