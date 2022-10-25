import "@fontsource/plus-jakarta-sans/latin.css";
import "@grikomsn/private-fonts/berkeley-mono/index.css";
import "styles/index.css";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { queryClient } from "lib/react-query";
import type { AppProps } from "next/app";
import { CentralProvider } from "store/central/provider";
import { MarkdownProvider } from "store/markdown/provider";
import { Layout } from "ui/layout";

export { reportWebVitals } from "next-axiom";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <CentralProvider />
      <TooltipProvider>
        <MarkdownProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MarkdownProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default CustomApp;
