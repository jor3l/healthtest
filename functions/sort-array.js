export default function sortArray(arr, key, dir) {
  return arr.sort((a, b) => {
    let x = a.items[0][key];
    if (Array.isArray(x)) x = x[0];

    let y = b.items[0][key];
    if (Array.isArray(y)) y = y[0];

    return dir === "asc"
      ? x.toUpperCase() < y.toUpperCase()
        ? -1
        : 1
      : y.toUpperCase() < x.toUpperCase()
      ? -1
      : 1;
  });
}
