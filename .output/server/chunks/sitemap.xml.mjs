import { s as serverQueryContent$1, d as defineEventHandler, u as useRuntimeConfig } from './nitro/node-server.mjs';
import { SitemapStream, streamToPromise } from 'sitemap';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';

const serverQueryContent = serverQueryContent$1;

const runtimeConfig = useRuntimeConfig();
const sitemap_xml = defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: (runtimeConfig == null ? void 0 : runtimeConfig.public.websiteUrl) || "https://nursingessayonline.com"
  });
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "daily"
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
