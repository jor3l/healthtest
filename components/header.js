const Header = () => (
  <>
    <div class="relative bg-white">
      <div class="container mx-auto">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">HEALTH EXPLORE</a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <a
              href="#"
              class="text-base uppercase font-medium text-gray-500 hover:text-gray-900"
            >
              Profile
            </a>

            <a
              href="#"
              class="text-base uppercase font-medium text-gray-500 hover:text-gray-900"
            >
              Jobs
            </a>
            <a
              href="#"
              class="text-base uppercase font-medium text-gray-500 hover:text-gray-900"
            >
              Professional Network
            </a>

            <a
              href="#"
              class="text-base uppercase font-medium text-gray-500 hover:text-gray-900"
            >
              Lounge
            </a>

            <a
              href="#"
              class="text-base uppercase font-medium text-gray-500 hover:text-gray-900"
            >
              Salary
            </a>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="mr-8 uppercase whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-indigo rounded-md shadow-sm text-base font-medium text-blue hover:bg-indigo-700"
            >
              Create Job
            </a>
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-4"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <a
              href="#"
              class="whitespace-nowrap uppercase text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
