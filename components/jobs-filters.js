const JobsFilters = ({ jobs }) => (
  <div class="py-4 flex mb-6">
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
    <ul class="sort flex">
      <li class="mr-4 text-gray-400">Sort by</li>
      <li class="mr-4">Location</li>
      <li class="mr-4">Role</li>
      <li class="mr-4">Department</li>
      <li class="mr-4">Education</li>
      <li class="mr-4">Experience</li>
    </ul>
  </div>
);
export default JobsFilters;
