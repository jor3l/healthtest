const Filters = ({ onDelete, filters }) =>
  Object.keys(filters).length > 0 && (
    <div class="flex mb-10">
      {Object.keys(filters).map((key) => (
        <div
          key={`filters-${key}`}
          class="rounded-lg uppercase bg-gray-100 p-3 text-xs mr-4 cursor-pointer"
          onClick={() => onDelete(key)}
        >
          <span class="pr-2">&times;</span> {key.split("_").join(" ")}:{" "}
          {filters[key]}
        </div>
      ))}
    </div>
  );

export default Filters;
