import { useState } from "react";
import timeAgo from "../functions/time-ago";

const Job = ({
  job_title,
  work_schedule,
  salary_range,
  city,
  department,
  description,
  created,
}) => {
  const [show, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!show);
  }

  return (
    <div
      class="job border-t border-gray-100 py-4 px-2 cursor-pointer hover:bg-gray-50"
      onClick={toggle}
    >
      <div class="flex">
        <div class="flex-grow">
          <div class="title font-bold">{job_title}</div>
          <div class="info flex text-sm">
            <div class="border-r border-black pr-3">{work_schedule}</div>
            <div class="border-r border-black px-3">
              ${salary_range[0]} - ${salary_range[1]} an hour
            </div>
            <div class="px-3">{city}</div>
          </div>
        </div>
        <div class="text-xs text-gray-500">{timeAgo(created)}</div>
      </div>
      {show && (
        <div class="details flex mt-6 text-sm">
          <div class="job_details">
            <div class="grid grid-cols-2 auto-rows-max gap-y-4">
              <div class="font-bold w-60">Department:</div>
              <div class="text-gray-600">{department.join(", ")}</div>
              <div class="font-bold w-60">Hours / Shifts:</div>
              <div class="text-gray-600">{work_schedule}</div>
              <div class="font-bold w-60">Summary:</div>
              <div class="text-gray-600">{description}</div>
            </div>
          </div>
          <div class="actions px-10 center flex flex-col items-end  justify-center">
            <a
              href="#"
              class="whitespace-nowrap text-sm px-3 py-2 border bg-blue-400 text-white border-indigo rounded-lg shadow-sm hover:bg-indigo-700"
            >
              Job Details
            </a>
            <a
              href="#"
              class="mt-2 whitespace-nowrap text-sm px-3 py-2 border border-indigo rounded-lg shadow-sm hover:bg-indigo-700"
            >
              Save Job
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
