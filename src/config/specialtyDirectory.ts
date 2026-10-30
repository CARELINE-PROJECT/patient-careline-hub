import { specialtyIds, type SpecialtyId } from "./specialties";
import type { PhotoId } from "@/config/photoDims";

/** Specialty group → photo. Specialties without a dedicated photo fall back to a general consultation. */
const groups: [PhotoId, SpecialtyId[]][] = [
  ["chirurgie-laser-yeux-ophtalmologiste", ["ophthalmology", "optometry"]],
  ["specialite-dentaire-consultation", ["dentistry", "endodontics", "orthodontics", "periodontics", "oral_surgery", "maxillofacial_surgery"]],
  ["specialite-reeducation-kinesitherapie", ["physiotherapy", "physical_rehabilitation", "sports_medicine", "occupational_therapy", "orthopedics", "traumatology", "rheumatology", "podiatry"]],
  ["specialite-cardiologie-consultation", ["cardiology", "cardiothoracic_surgery", "vascular_surgery", "thoracic_surgery"]],
  ["specialite-dermatologie-examen-peau", ["dermatology", "plastic_surgery", "allergology"]],
  ["specialite-pediatrie-consultation-enfant", ["pediatrics", "neonatology", "pediatric_surgery", "clinical_genetics"]],
  ["specialite-sante-mentale-entretien", ["psychology", "psychotherapy", "psychiatry", "neuropsychology", "addiction_medicine", "sleep_medicine"]],
  ["specialite-sante-femme-consultation", ["midwifery", "reproductive_medicine"]],
  ["specialite-neurologie-imagerie", ["neurology", "neurosurgery", "pain_medicine"]],
  ["specialite-orl-audiologie-examen", ["otolaryngology", "audiology", "speech_therapy"]],
  ["specialite-radiologie-imagerie-medicale", ["radiology", "nuclear_medicine", "oncology", "laboratory_medicine", "pathology", "hematology"]],
  ["specialite-soins-infirmiers-geriatrie", ["nursing", "geriatrics", "palliative_care", "intensive_care", "emergency_medicine"]],
  ["specialite-nutrition-dietetique-conseil", ["nutrition_dietetics", "endocrinology", "gastroenterology"]],
];

export function specialtyImage(id: SpecialtyId): PhotoId {
  return groups.find(([, ids]) => ids.includes(id))?.[0] ?? "ophtalmologiste-accueil-patient-consultation";
}

export const directorySpecialties = ["ophthalmology", ...specialtyIds.filter((id) => id !== "ophthalmology")] as const;

export function filterSpecialties(labels: Record<SpecialtyId, string>, query: string) {
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  return directorySpecialties.filter((id) => normalize(labels[id]).includes(normalize(query)));
}
