import { Job } from "@/types";
import dayjs from "dayjs";

type FormatDateProps = {
  date: Job["startDate"];
};

export function formatDate({ date }: FormatDateProps) {
  return dayjs(date).format("YYYY");
}
