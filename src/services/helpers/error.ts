import type { FormData} from "../../types/type";

export const validateEvent = (data: FormData, date: string): string | null => {
  if (data.startDate < date) {
    return "Start Date cannot be earlier than today";
  }

  if (data.finishDate < data.startDate) {
    return "Finish Date cannot be earlier than Start Date";
  }

  return null;
};