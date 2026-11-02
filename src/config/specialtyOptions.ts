import { specialtyIds } from "./specialties";
import { specialtyLabels } from "../i18n/specialties";
import type { LocaleCode } from "../i18n/types";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[_-]/g, " ");
}

export function specialtyOptions(locale: LocaleCode, query = "") {
  const q = normalize(query.trim());
  return specialtyIds.map((id) => ({ id, label: specialtyLabels[locale][id] }))
    .filter(({ id, label }) => !q || [label, specialtyLabels.en[id], specialtyLabels.fr[id], id].some((text) => normalize(text).includes(q)));
}