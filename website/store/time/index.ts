import formatInTimeZone from "date-fns-tz/formatInTimeZone";
import { useMemo } from "react";
import create from "zustand";

export const useTimeStore = create(() => ({ time: new Date() }));

export const setTime = (time: Date) => {
  useTimeStore.setState({ time });
};

export const useCurrentTime = <T extends string | undefined>(format?: T, tz = "Asia/Jakarta") => {
  const { time } = useTimeStore();

  const memoized = useMemo(() => {
    if (typeof format === "string") {
      return formatInTimeZone(time, tz, format);
    }
    return time;
  }, [time, tz, format]);

  return memoized as T extends string ? string : Date;
};
