export function removeNullValuesInProduct(obj: {}) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value !== null && value !== 'null'),
  );
}
