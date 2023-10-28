import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: runtimeConfig?.public.websiteUrl || "https://proswriters.com",
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "daily",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
