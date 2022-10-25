import type { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";

// https://stackoverflow.com/a/45576880/4273667
export const useSeo = <T,>(props: T & NextSeoProps) => {
  const Seo = (extraProps: NextSeoProps) => {
    return <NextSeo {...props} {...extraProps} />;
  };
  return { Seo, ...props };
};
