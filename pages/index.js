import { server } from "../config";
import { useState, useEffect } from "react";

import Header from "../components/header";
import Search from "../components/search";
import Filter from "../components/filter";
import JobsFilters from "../components/jobs-filters";
import HospitalJobs from "../components/hospital-jobs";
import Filters from "../components/filters";
import Loading from "../components/loading";

let waitTimeout = null;
const getJobs = async (filters, search) => {
  return await (
    await fetch(
      server +
        `/api/jobs?search=${encodeURIComponent(search)}&${toQueryString(
          filters
        )}`
    )
  ).json();
};

function toQueryString(paramsObject) {
  return Object.keys(paramsObject)
    .map(
      (key) =>
        `filter.${encodeURIComponent(key)}=${encodeURIComponent(
          paramsObject[key]
        )}`
    )
    .join("&");
}

function Index({ _jobs, filters }) {
  const [searchFilters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([..._jobs]);

  useEffect(() => {
    clearTimeout(waitTimeout);
    waitTimeout = setTimeout(() => {
      getJobs(searchFilters, search).then((jobs) => setJobs(jobs));
    }, 300);
  }, [searchFilters, search]);

  return (
    <>
      <Header />
      <div class="bg-gray-50 h-screen">
        <main class="container mx-auto grid grid-cols-6 gap-4 h-full auto-rows-max">
          <Search onChange={(value) => setSearch(value)} />
          <div class="side-column">
            {filters &&
              Object.keys(filters).map((filter) => (
                <Filter
                  key={`filter-${filter}`}
                  name={filter}
                  filter={filters[filter]}
                  onFilter={(key, val) =>
                    setFilters({ ...searchFilters, [key]: val })
                  }
                />
              ))}
          </div>
          <div class="col-span-5 bg-white rounded p-6 border border-solid border-gray-100">
            {!jobs && <Loading />}
            <>
              <JobsFilters jobs={jobs} />
              <Filters
                filters={searchFilters}
                onDelete={(key) => {
                  delete searchFilters[key];
                  setFilters({ ...searchFilters });
                }}
              />

              {jobs &&
                jobs.map((job, i) => (
                  <HospitalJobs key={`hospital-${jobs.length}-${i}`} {...job} />
                ))}
            </>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const filters = await (await fetch(server + "/api/filters")).json();
  const jobs = await (await fetch(server + "/api/jobs")).json();
  return {
    props: {
      _jobs: jobs,
      filters,
    },
  };
}

export default Index;