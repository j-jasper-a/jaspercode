import { jobs } from "@/content/jobs";
import { JobCard } from "./job-card";

export function Jobs() {
  const finalJobs = jobs.reverse();

  return (
    <div className="flex flex-col gap-4">
      {finalJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
