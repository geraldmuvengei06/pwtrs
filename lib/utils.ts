import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { camelize, getCurrentInstance, toHandlerKey } from "vue";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


function isFullURL(route: string) {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  return urlPattern.test(route)
}

export function generateFullUrl(path: string, params: any, query: any) {
  const runtimeConfig = useRuntimeConfig();
  
  let url = ''
  if (isFullURL(path)) {
    url = path
  } else {
    url = runtimeConfig?.public?.websiteUrl + path;
  }

  // Add parameters to the path
  if (params) {
    const paramKeys = Object.keys(params);
    if (paramKeys.length > 0) {
      const paramString = paramKeys
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");
      url += `?${paramString}`;
    }
  }

  // Add query parameters to the URL
  if (query) {
    const queryKeys = Object.keys(query);
    if (queryKeys.length > 0) {
      const queryString = queryKeys
        .map((key) => `${key}=${encodeURIComponent(query[key])}`)
        .join("&");
      url += url.includes("?") ? `&${queryString}` : `?${queryString}`;
    }
  }

  return url;
}
