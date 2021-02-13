const Search = ({ onChange }) => (
  <>
    <div class="relative bg-gray-50 pt-5 col-span-6">
      <div class="container mx-auto">
        <div class=" bg-white rounded flex items-center w-full p-3 px-6 shadow-sm border border-gray-200">
          <button class="outline-none focus:outline-none">
            <svg
              class=" w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for any job, title, keywords or company"
            class="w-full pl-4 py-2 text-sm outline-none focus:outline-none bg-transparent"
            onChange={(e) =>
              (e.target.value.length > 3 || e.target.value.length === 0) &&
              onChange(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  </>
);

export default Search;
