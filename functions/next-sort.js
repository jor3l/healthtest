export default function nextSort(current) {
  switch (current) {
    case "asc":
      return "desc";
    case "desc":
      return "";
    default:
      return "asc";
  }
}
