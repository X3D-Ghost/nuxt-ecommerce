export function objectsDeepEqual(object1: object, object2: object): boolean {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects: boolean = isObject(val1) && isObject(val2);
    if (
      (areObjects && !objectsDeepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

export function isObject(object: object): boolean {
  return object != null && typeof object === "object";
}

export function getValue(obj: object, path: string): object | string {
  if (!path) return obj;
  const properties: string[] = path.split(".");
  return getValue(obj[properties.shift()], properties.join("."));
}
