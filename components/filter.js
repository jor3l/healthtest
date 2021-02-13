const Filter = ({ name, filter, onFilter }) => (
  <div class="bg-white p-4 mb-4 border border-solid border-gray-100">
    <b class="block uppercase text-sm mb-5">{name.split("_").join(" ")}</b>
    {filter.map((filterOption, i) => (
      <a
        key={`filter-option-${i}`}
        class="my-2 text-sm block cursor-pointer"
        onClick={() => {
          onFilter(name, filterOption.key);
        }}
      >
        {filterOption.key}
        <span class="ml-2 text-sm text-gray-300">{filterOption.doc_count}</span>
      </a>
    ))}
  </div>
);

export default Filter;
