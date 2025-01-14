import { Cancel } from "iconoir-react";
import { NextSeo } from "next-seo";
import { Anchor } from "ui/core/anchor";

const NotFoundPage = () => {
  return (
    <section className="space-y-8 py-[5rem] md:py-[10rem]">
      <NextSeo title="Not Found" />
      <Cancel className="m-auto h-24 w-24" />
      <article className=" prose prose-invert text-center ">
        <h1>404 Not Found</h1>
        <p>
          The current page you are accessing is not available. <Anchor href="/">Head back to home page.</Anchor>
        </p>
      </article>
    </section>
  );
};

export default NotFoundPage;
