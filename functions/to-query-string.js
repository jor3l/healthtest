export default function toQueryString(paramsObject) {
  return Object.keys(paramsObject)
    .map(
      (key) =>
        `filter.${encodeURIComponent(key)}=${encodeURIComponent(
          paramsObject[key]
        )}`
    )
    .join("&");
}
