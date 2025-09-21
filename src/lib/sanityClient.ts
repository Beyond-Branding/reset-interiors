import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ctni7nro", // your Sanity projectId
  dataset: "production",
  apiVersion: "2025-09-21", // use current date
  useCdn: false, // false for SSR to always fetch fresh data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
