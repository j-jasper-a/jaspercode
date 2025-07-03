import { Job } from "@/content/jobs";
import dayjs from "dayjs";

type GetJobDurationProps = {
  startDate: Job["startDate"];
  endDate: Job["endDate"];
};

export function getJobDuration({ startDate, endDate }: GetJobDurationProps) {
  const totalMonths =
    endDate === undefined
      ? dayjs().diff(dayjs(startDate), "month")
      : dayjs(endDate).diff(dayjs(startDate), "month");
  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  return `${totalYears} year${
    totalYears > 1 ? "s" : ""
  } ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}
