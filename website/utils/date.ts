import format from "date-fns/format";
import parse from "date-fns/parse";

export const parseIsoToMdy = (input: unknown) => {
  return format(new Date(String(input)), "MMMM dd, yyyy");
};

export const parseYmd = (input: unknown) => {
  return parse(String(input), "yyyy-MM-dd", new Date());
};

export const parseYmdToMy = (input: unknown) => {
  return format(parseYmd(input), "MMMM yyyy");
};
