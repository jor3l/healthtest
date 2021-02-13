import { useState, useEffect } from "react";

import nextSort from "../functions/next-sort";
import toQueryString from "../functions/to-query-string";
import sortArray from "../functions/sort-array";

import Header from "../components/header";
import Search from "../components/search";
import Filter from "../components/filter";
import JobsFilters from "../components/jobs-filters";
import HospitalJobs from "../components/hospital-jobs";
import Filters from "../components/filters";
import Loading from "../components/loading";
import Footer from "../components/footer";

import env from "../config/constants";
const { origin } = env[process.env.NODE_ENV];

let waitTimeout = null;
const getJobs = async (filters, search) => {
  return await (
    await fetch(
      origin +
        `/api/jobs?search=${encodeURIComponent(search)}&${toQueryString(
          filters
        )}`
    )
  ).json();
};

function Index({ _jobs, filters }) {
  const [filtersShow, setFiltersShow] = useState(false);
  const [searchFilters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({
    city: "",
    department: "",
    required_credentials: "",
    experience: "",
    job_title: "",
  });
  const [jobs, setJobs] = useState([..._jobs]);

  useEffect(() => {
    clearTimeout(waitTimeout);
    waitTimeout = setTimeout(() => {
      getJobs(searchFilters, search).then((jobs) => setJobs(jobs));
    }, 300);
  }, [searchFilters, search]);

  let sorted = [...jobs];

  sorted &&
    Object.keys(sort).forEach((key) =>
      sort[key] !== "" ? (sorted = sortArray(sorted, key, sort[key])) : null
    );

  return (
    <>
      <Header />
      <div class="bg-gray-50 min-h-screen pb-10 px-4 md:px-0">
        <main class="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 h-full auto-rows-max">
          <Search onChange={(value) => setSearch(value)} />
          <div class="side-column col-span-full md:col-span-1">
            {filters && (
              <div
                class={`md:hidden filters-toggle block py-2 text-xs border border-gray-200 rounded md:mb-0 text-center ${
                  filtersShow && "mb-4"
                }`}
                onClick={() => setFiltersShow(!filtersShow)}
              >
                {!filtersShow ? "Show" : "Hide"} filters
              </div>
            )}
            {filters &&
              Object.keys(filters).map((filter) => (
                <Filter
                  show={filtersShow}
                  key={`filter-${filter}`}
                  name={filter}
                  filter={filters[filter]}
                  onFilter={(key, val) =>
                    setFilters({ ...searchFilters, [key]: val })
                  }
                />
              ))}
          </div>
          <div class="col-span-1 md:col-span-5 bg-white rounded p-6 border border-solid border-gray-100 relative">
            {!jobs && <Loading />}
            <>
              <JobsFilters
                jobs={jobs}
                sort={sort}
                toggleSort={(key) =>
                  setSort({ ...sort, [key]: nextSort(sort[key]) })
                }
              />
              <Filters
                filters={searchFilters}
                onDelete={(key) => {
                  delete searchFilters[key];
                  setFilters({ ...searchFilters });
                }}
              />

              {sorted &&
                sorted.map((job, i) => (
                  <HospitalJobs
                    key={`hospital-${sorted.length}-${i}`}
                    {...job}
                  />
                ))}
            </>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const filters = await (await fetch(origin + "/api/filters")).json();
  const jobs = await (await fetch(origin + "/api/jobs")).json();
  return {
    props: {
      _jobs: jobs,
      filters,
    },
  };
}

export default Index;
