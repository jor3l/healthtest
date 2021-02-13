const Header = () => (
  <>
    <div className="relative bg-white">
      <div className="container mx-auto">
        <div className="flex px-2 lg:px-7 items-center justify-between h-16 w-full bg-white">
          <div className="flex items-center">
            <button
              className="lg:hidden ml-3 mr-5 w-4 h-4 text-blue-500 focus:outline-none"
              aria-label="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                <path d="M0 277.33h384V320H0zM0 170.67h384v42.67H0zM0 64h384v42.67H0z"></path>
              </svg>
            </button>
            <span className="text-blue-500 font-medium uppercase">
              Health Explore
            </span>
          </div>
          <ul className="hidden lg:flex text-sm font-medium">
            <li className="mx-3 uppercase">
              <a href="#">Profile</a>
            </li>
            <li className="mx-3 uppercase">
              <a href="#">Jobs</a>
            </li>
            <li className="mx-3 uppercase">
              <a href="#">Professional Network</a>
            </li>
            <li className="mx-3 uppercase">
              <a href="#">Lounge</a>
            </li>
            <li className="mx-3 uppercase">
              <a href="#">Salary</a>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              className="uppercase focus:outline-none hidden lg:flex border-blue-400 bg-transparent text-blue-500 border text-sm px-3 py-2 rounded-md font-medium transition duration-200 ease-in-out hover:bg-blue-400 hover:text-white"
              aria-label="button"
            >
              Create Job
            </button>
            <div className="relative">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full lg:mx-5 uppercase text-white font-medium">
                JO
              </div>
              <div className="absolute -top-2 lg:-right-1 flex items-center justify-center w-5 h-5 bg-red-500 rounded-full mx-5 uppercase text-white text-xs font-medium border-2 border-white">
                2
              </div>
            </div>
            <button className="uppercase hidden lg:flex font-medium text-sm focus:outline-none">
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
