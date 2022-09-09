import splitbee from "@splitbee/web";
import { useEffect } from "react";

export function useSplitbee() {
  useEffect(() => {
    if (__PROD__ && process.env.NEXT_PUBLIC_SPLITBEE_TOKEN) {
      splitbee.init({
        apiUrl: "/_hive",
        scriptUrl: "/bee.js",
        token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
      });
    }
  }, []);

  return null;
}
