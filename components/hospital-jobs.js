import { useState } from "react";
import Job from "./job";

const HospitalJobs = ({ total_jobs_in_hospital, name, job_title, items }) => {
  const [show, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!show);
  }

  return (
    <>
      <div class="hospital">
        <div class="title mb-5 cursor-pointer" onClick={toggle}>
          <span class="rounded-lg bg-gray-400 p-2 text-white font-bold uppercase mr-5 inline-block">
            {name.substring(0, 2)}
          </span>
          {total_jobs_in_hospital} jobs for {name}
        </div>
        {show && (
          <div class="mb-5">
            {items.map((job) => (
              <Job {...job} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default HospitalJobs;
