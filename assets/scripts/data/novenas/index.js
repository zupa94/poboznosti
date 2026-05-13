import { svetiJosipNovena } from "./sveti-josip.js";
import { blagovijestNovena } from "./blagovijest.js";
import { svetaObiteljNovena } from "./sveta-obitelj.js";
import { anteGabricNovena } from "./ante-gabric.js";
import { ljudevitIZelijaNovena } from "./ljudevit-i-zelija.js";
import { dominikSavioNovena } from "./dominik-savio.js";
import { ivanMerzNovena } from "./ivan-merz.js";
import { gospaFatimskaNovena } from "./gospa-fatimska.js";
import { dimfnaNovena } from "./dimfna.js";
import { peregrinNovena } from "./peregrin.js";
import { leopoldMandicNovena } from "./leopold-mandic.js";
import { bozjeMilosrdeNovena } from "./bozje-milosrde.js";
import { antunPadovanskiNovena } from "./antun-padovanski.js";
import { ivanKrstiteljNovena } from "./ivan-krstitelj.js";
import { gospaKarmelskaNovena } from "./gospa-karmelska.js";
import { marijaMagdalenaNovena } from "./marija-magdalena.js";
import { velikaGospaNovena } from "./velika-gospa.js";
import { malaGospaNovena } from "./mala-gospa.js";
import { gospaZalosnaNovena } from "./gospa-zalosna.js";
import { svetiMihovilNovena } from "./sveti-mihovil.js";
import { franjoAsiskiNovena } from "./franjo-asiski.js";
import { sviSvetiNovena } from "./svi-sveti.js";

function feastSortKey(feast) {
  if (feast.easterOffset !== undefined) return feast.easterOffset + 412;
  return feast.month * 100 + feast.day;
}

export const novenas = [
  svetiJosipNovena,
  blagovijestNovena,
  svetaObiteljNovena,
  anteGabricNovena,
  ljudevitIZelijaNovena,
  dominikSavioNovena,
  ivanMerzNovena,
  gospaFatimskaNovena,
  dimfnaNovena,
  peregrinNovena,
  leopoldMandicNovena,
  bozjeMilosrdeNovena,
  antunPadovanskiNovena,
  ivanKrstiteljNovena,
  gospaKarmelskaNovena,
  marijaMagdalenaNovena,
  velikaGospaNovena,
  malaGospaNovena,
  gospaZalosnaNovena,
  svetiMihovilNovena,
  franjoAsiskiNovena,
  sviSvetiNovena
].sort((a, b) => feastSortKey(a.feast) - feastSortKey(b.feast));

export function getNovenaBySlug(slug) {
  return novenas.find((novena) => novena.slug === slug);
}
