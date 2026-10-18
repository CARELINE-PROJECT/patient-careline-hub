import { specialtyIds, type SpecialtyId } from "./specialties";
import eye from "@/assets/specialties-eye.jpg";
import dental from "@/assets/specialties-dental.jpg";
import rehabilitation from "@/assets/specialties-rehabilitation.jpg";
import consultation from "@/assets/doctor-greeting.jpg";

export function specialtyImage(id: SpecialtyId) {
  if (["ophthalmology", "optometry"].includes(id)) return eye;
  if (["dentistry", "endodontics", "orthodontics", "periodontics", "oral_surgery"].includes(id)) return dental;
  if (["physiotherapy", "physical_rehabilitation", "sports_medicine", "occupational_therapy"].includes(id)) return rehabilitation;
  return consultation;
}

export const directorySpecialties = ["ophthalmology", ...specialtyIds.filter((id) => id !== "ophthalmology")] as const;

export function filterSpecialties(labels: Record<SpecialtyId, string>, query: string) {
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  return directorySpecialties.filter((id) => normalize(labels[id]).includes(normalize(query)));
}