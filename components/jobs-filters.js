const sortIcon = (direction) => {
  switch (direction) {
    case "desc":
      return (
        <svg
          class="w-3 h-3 inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 451.85 451.85"
        >
          <path d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1144.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0144.75 44.74L248.3 345.45a31.55 31.55 0 01-22.37 9.26z" />
        </svg>
      );

    case "asc":
      return (
        <svg
          class="w-3 h-3 inline"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 451.85 451.85"
        >
          <path d="M248.3 106.4l194.27 194.3a31.64 31.64 0 01-44.74 44.74l-171.9-171.91L54.01 345.44a31.65 31.65 0 01-44.75-44.75L203.55 106.4a31.54 31.54 0 0122.37-9.26c8.1 0 16.2 3.1 22.37 9.27z" />
        </svg>
      );

    default:
      return <></>;
  }
};

const JobsFilters = ({ jobs, sort, toggleSort }) => (
  <div class="py-4 flex mb-6 flex-wrap">
    <div class="flex-auto">
      {jobs && (
        <>
          <b>
            {jobs.reduce((prev, job) => prev + job.total_jobs_in_hospital, 0)}
          </b>{" "}
          job postings
        </>
      )}
    </div>
    <ul class="sort flex flex-wrap">
      <li class="mr-4 text-gray-400">Sort by</li>
      <li class="mr-4 cursor-pointer" onClick={() => toggleSort("city")}>
        Location {sortIcon(sort.city)}
      </li>
      <li class="mr-4 cursor-pointer" onClick={() => toggleSort("job_title")}>
        Role {sortIcon(sort.job_title)}
      </li>
      <li class="mr-4 cursor-pointer" onClick={() => toggleSort("department")}>
        Department {sortIcon(sort.department)}
      </li>
      <li
        class="mr-4 cursor-pointer"
        onClick={() => toggleSort("required_credentials")}
      >
        Education {sortIcon(sort.required_credentials)}
      </li>
      <li class="mr-4 cursor-pointer" onClick={() => toggleSort("experience")}>
        Experience {sortIcon(sort.experience)}
      </li>
    </ul>
  </div>
);
export default JobsFilters;
