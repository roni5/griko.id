import { FaviconsMetaTags } from "__generated__/favicons-meta-tags";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <FaviconsMetaTags />
          {process.env.NEXT_PUBLIC_TINYBIRD_TOKEN && (
            <script
              data-host="https://api.us-east.tinybird.co"
              data-token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
              defer
              src="https://unpkg.com/@tinybirdco/flock.js"
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
