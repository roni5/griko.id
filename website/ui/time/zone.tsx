import { useCurrentTime } from "store/time";

export interface ZoneProps {
  tz: string;
}

export const Zone = ({ tz }: ZoneProps) => {
  return (
    <div className="space-y-2 py-8 md:space-y-4">
      <div className="text-lg text-neutral-500 md:text-2xl">Time in {tz}</div>
      <p className="text-2xl font-bold md:text-4xl" suppressHydrationWarning>
        {useCurrentTime("PPPP", tz)}
      </p>
      <p className="font-mono text-2xl font-bold md:text-4xl" suppressHydrationWarning>
        {useCurrentTime("HH:mm:ss zzz", tz)}
      </p>
    </div>
  );
};
