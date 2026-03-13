import { svetiJosipNovena } from "./sveti-josip.js";

export const novenas = [svetiJosipNovena];

export function getNovenaBySlug(slug) {
  return novenas.find((novena) => novena.slug === slug);
}
