export function isFunction(obj) {
  return typeof obj === "function";
}

export function isObject(obj) {
  const type = typeof obj;

  return type === "function" || (type === "object" && !!obj);
}

export function hasWindowObject() {
  return typeof window !== "undefined" && window.document;
}
