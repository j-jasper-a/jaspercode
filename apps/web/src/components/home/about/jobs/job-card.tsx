import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/format-date";
import { Job } from "@/types";
import { Check as CheckIcon } from "lucide-react";
import Link from "next/link";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  const jobStartDate = formatDate({ date: job.startDate });
  const jobEndDate = job.endDate
    ? formatDate({ date: job.endDate })
    : "Present";

  return (
    <Link href={job.company.url} target="_blank" passHref>
      <Card>
        <p className="text-size-tertiary text-color-foreground-secondary uppercase">
          {jobStartDate} — {jobEndDate}
        </p>
        <p>{`${job.position} · ${job.company.name}`}</p>
        <ul className="flex flex-col gap-2">
          {job.accomplishments.map((bullet) => (
            <li key={bullet}>
              <div className="inline-flex items-start gap-2 text-size-secondary text-color-foreground-secondary">
                <CheckIcon size={14} className="mt-1 shrink-0" />
                <span className="flex-1">{bullet}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </Link>
  );
}
