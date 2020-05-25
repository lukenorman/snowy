import { Resorts } from "../constants/resorts";
import { Days } from "../constants/days";

export const daysSkied = (resort) => {
  let daysUsed = Days.filter((day) => day.resort === resort.name);
  return daysUsed.length;
};

export const daysRemaining = (resort) => {
  const initialDays = resort.days;
  let remainingDays =
    initialDays === -1 ? initialDays : initialDays - daysSkied(resort);
  if (resort.subpass) {
    const subpassResorts = Resorts.filter(
      (r) => r.subpass === resort.subpass && r.name !== resort.name
    );
    for (let subpassResort of subpassResorts) {
      let subpassDaysUsed = Days.filter(
        (day) => day.resort === subpassResort.name
      );
      remainingDays -= subpassDaysUsed.length;
    }
  }
  return remainingDays;
};
