import { useGetRedirectsQuery } from "__generated__/graphql";
import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

let record: Record<string, string>;

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
  if (!req.page.params?.slug) return;
  const slug = req.page.params.slug;
  if (!record) {
    const query = await useGetRedirectsQuery.fetcher()();
    record = query.redirect.entries as typeof record;
  }
  const dest = record[slug];
  if (dest) {
    return NextResponse.redirect(dest);
  }
}
