import jobs from "../../data/jobs";

export default async (req, res) => {
  let query = req.query;
  let result = [...jobs];

  let filters = Object.keys(query)
    .filter((q) => q.indexOf("filter.") === 0)
    .reduce((v, k) => [...v, [k.split(".")[1], query[k]]], []);

  if (filters) {
    filters.forEach(([value, match]) => {
      result = result.map((r) => {
        return {
          ...r,
          items: r.items.filter((item) =>
            typeof item[value] === "string"
              ? item[value] === match
              : item[value].indexOf(match) >= 0
          ),
        };
      });
    });
  }

  if ("search" in query && query.search) {
    const search = query.search.toLowerCase();
    result = result.map((r) => ({
      ...r,
      items: r.items.filter(
        (i) =>
          i.job_title.toLowerCase().indexOf(search) >= 0 ||
          i.description.toLowerCase().indexOf(search) >= 0 ||
          i.name.toLowerCase().indexOf(search) >= 0 ||
          i.required_skills.join(",").toLowerCase().indexOf(search) >= 0 ||
          i.department.join(",").toLowerCase().indexOf(search) >= 0
      ),
    }));
  }

  result = result
    .map((r) => ({
      ...r,
      total_jobs_in_hospital: r.items.length,
    }))
    .filter((r) => r.total_jobs_in_hospital > 0);

  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json(result);
};
