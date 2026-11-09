import { publicAssetUrl } from "@/lib/assets";
import dfmLogo from "@/assets/organizations/dfm.svg.asset.json";
import mdmLogo from "@/assets/organizations/mdm.png.asset.json";
import sante_sudLogo from "@/assets/organizations/sante-sud.png.asset.json";
import croix_rouge_malagasyLogo from "@/assets/organizations/croix-rouge-malagasy.png.asset.json";
import akbaralyLogo from "@/assets/organizations/akbaraly.png.asset.json";
import operation_smileLogo from "@/assets/organizations/operation-smile.svg.asset.json";
import adraLogo from "@/assets/organizations/adra.png.asset.json";
import hoveraidLogo from "@/assets/organizations/hoveraid.png.asset.json";
import axianLogo from "@/assets/organizations/axian.png.asset.json";
import imcLogo from "@/assets/organizations/imc.svg.asset.json";
import direct_reliefLogo from "@/assets/organizations/direct-relief.png.asset.json";
import mercy_shipsLogo from "@/assets/organizations/mercy-ships.png.asset.json";
import project_hopeLogo from "@/assets/organizations/project-hope.svg.asset.json";
import smile_trainLogo from "@/assets/organizations/smile-train.svg.asset.json";
import whoLogo from "@/assets/organizations/who.svg.asset.json";
import unicefLogo from "@/assets/organizations/unicef.png.asset.json";
import gaviLogo from "@/assets/organizations/gavi.png.asset.json";
import ifrcLogo from "@/assets/organizations/ifrc.png.asset.json";
import americaresLogo from "@/assets/organizations/americares.png.asset.json";
import acfLogo from "@/assets/organizations/acf.png";
import chaineLogo from "@/assets/organizations/chaine.png";
import dsfLogo from "@/assets/organizations/dsf.png";
import hkiLogo from "@/assets/organizations/hki.svg";
import ircLogo from "@/assets/organizations/irc.png";
import msfLogo from "@/assets/organizations/msf.svg";
import rotaryLogo from "@/assets/organizations/rotary.png";

/** Official logos are informational references, not partner endorsements. */
export const organizations = [
{"id": "dfm", "name": "Doctors for Madagascar", "website": "https://www.doctorsformadagascar.com/", "logoSource": "https://www.doctorsformadagascar.com/wp-content/uploads/2025/02/logo-black-german.svg", "sourcePage": "https://www.doctorsformadagascar.com/", "logo": publicAssetUrl(dfmLogo), "relationship": "directory" as const },
{"id": "mdm", "name": "Médecins du Monde", "website": "https://www.medecinsdumonde.org/", "logoSource": "https://www.medecinsdumonde.org/app/themes/mdm/library/medias/logo.png", "sourcePage": "https://www.medecinsdumonde.org/", "logo": publicAssetUrl(mdmLogo), "relationship": "directory" as const },
{"id": "sante-sud", "name": "Santé Sud", "website": "https://www.santesud.org/", "logoSource": "https://www.santesud.org/wp-content/uploads/2024/10/logo_sante_sud_s_512-300x300.png", "sourcePage": "https://www.santesud.org/", "logo": publicAssetUrl(sante_sudLogo), "relationship": "directory" as const },
{"id": "croix-rouge-malagasy", "name": "Croix-Rouge Malagasy", "website": "https://croixrougemalagasy.mg/", "logoSource": "https://croixrougemalagasy.mg/visiteur/assets/img/logo/logo.png", "sourcePage": "https://croixrougemalagasy.mg/", "logo": publicAssetUrl(croix_rouge_malagasyLogo), "relationship": "directory" as const },
{"id": "akbaraly", "name": "Fondation Akbaraly", "website": "https://fondationakbaraly.org/", "logoSource": "https://fondationakbaraly.org/wp-content/uploads/2020/06/akbaraly-foundation-logo-positive.png", "sourcePage": "https://fondationakbaraly.org/", "logo": publicAssetUrl(akbaralyLogo), "relationship": "directory" as const },
{"id": "operation-smile", "name": "Operation Smile", "website": "https://www.operationsmile.org/", "logoSource": "https://www.operationsmile.org/#official-inline-logo", "sourcePage": "https://www.operationsmile.org/", "logo": publicAssetUrl(operation_smileLogo), "relationship": "directory" as const },
{"id": "amc-mad", "name": "AMC-MAD", "website": null, "logoSource": null, "sourcePage": null, "logo": null, "relationship": "directory" as const },
{"id": "acf", "name": "Action contre la Faim", "website": "https://www.actioncontrelafaim.org/", "logoSource": "https://commons.wikimedia.org/wiki/File:Logo_Action_Against_Hunger.svg", "sourcePage": "https://www.actioncontrelafaim.org/", "logo": acfLogo, "relationship": "directory" as const },
{"id": "dsf", "name": "Douleurs Sans Frontières", "website": "https://www.douleurs.org/", "logoSource": "https://www.douleurs.org/wp-content/uploads/2021/06/Bleu-fond-blanc.png", "sourcePage": "https://www.douleurs.org/", "logo": dsfLogo, "relationship": "directory" as const },
{"id": "adra", "name": "ADRA Madagascar", "website": "https://adra.mg/", "logoSource": "https://adra.mg/wp-content/uploads/2019/11/adra-vertical-logo.png", "sourcePage": "https://adra.mg/", "logo": publicAssetUrl(adraLogo), "relationship": "directory" as const },
{"id": "salfa", "name": "SALFA", "website": "https://salfa.org/", "logoSource": null, "sourcePage": "https://salfa.org/", "logo": null, "relationship": "directory" as const },
{"id": "asos", "name": "ASOS Madagascar", "website": "https://asosmada.mg/", "logoSource": null, "sourcePage": "https://asosmada.mg/", "logo": null, "relationship": "directory" as const },
{"id": "hoveraid", "name": "HoverAid", "website": "https://hoveraid.org/", "logoSource": "https://hoveraid.org/wp-content/uploads/2024/11/HoverAid_Logo.png", "sourcePage": "https://hoveraid.org/", "logo": publicAssetUrl(hoveraidLogo), "relationship": "directory" as const },
{"id": "chaine", "name": "La Chaîne de l’Espoir", "website": "https://www.chainedelespoir.org/", "logoSource": "https://commons.wikimedia.org/wiki/File:Logo_La_Cha%C3%AEne_de_l%27Espoir.jpg", "sourcePage": "https://www.chainedelespoir.org/", "logo": chaineLogo, "relationship": "directory" as const },
{"id": "axian", "name": "Fondation AXIAN", "website": "https://www.fondation-axian.org/", "logoSource": "https://www.fondation-axian.org/wp-content/themes/fondation_axian/assets/images/design/logo.png", "sourcePage": "https://www.fondation-axian.org/", "logo": publicAssetUrl(axianLogo), "relationship": "directory" as const },
{"id": "hki", "name": "Helen Keller Intl", "website": "https://helenkellerintl.org/", "logoSource": "https://commons.wikimedia.org/wiki/File:Helen_Keller_International_logo.svg", "sourcePage": "https://helenkellerintl.org/", "logo": hkiLogo, "relationship": "directory" as const },
{"id": "msf", "name": "Médecins Sans Frontières", "website": "https://www.msf.org/", "logoSource": "https://www.msf.org/themes/custom/msf_theme/src/kss/components/icons/assets/logo-en.svg", "sourcePage": "https://www.msf.org/", "logo": msfLogo, "relationship": "directory" as const },
{"id": "imc", "name": "International Medical Corps", "website": "https://internationalmedicalcorps.org/", "logoSource": "https://internationalmedicalcorps.org/#official-inline-logo", "sourcePage": "https://internationalmedicalcorps.org/", "logo": publicAssetUrl(imcLogo), "relationship": "directory" as const },
{"id": "direct-relief", "name": "Direct Relief", "website": "https://www.directrelief.org/", "logoSource": "https://www.directrelief.org/wp-content/uploads/2023/12/cropped-DirectRelief_Logomark_RGB.png", "sourcePage": "https://www.directrelief.org/", "logo": publicAssetUrl(direct_reliefLogo), "relationship": "directory" as const },
{"id": "mercy-ships", "name": "Mercy Ships", "website": "https://www.mercyships.org/", "logoSource": "https://mercyships.se/wp-content/uploads/2020/10/logo-2.png", "sourcePage": "https://www.mercyships.org/", "logo": publicAssetUrl(mercy_shipsLogo), "relationship": "directory" as const },
{"id": "pih", "name": "Partners In Health", "website": "https://www.pih.org/", "logoSource": null, "sourcePage": "https://www.pih.org/", "logo": null, "relationship": "directory" as const },
{"id": "project-hope", "name": "Project HOPE", "website": "https://www.projecthope.org/", "logoSource": "https://www.projecthope.org/wp-content/themes/projecthope/assets/images/logo.svg", "sourcePage": "https://www.projecthope.org/", "logo": publicAssetUrl(project_hopeLogo), "relationship": "directory" as const },
{"id": "smile-train", "name": "Smile Train", "website": "https://www.smiletrain.org/", "logoSource": "https://www.smiletrain.org/images/logo.svg", "sourcePage": "https://www.smiletrain.org/", "logo": publicAssetUrl(smile_trainLogo), "relationship": "directory" as const },
{"id": "who", "name": "Organisation mondiale de la Santé", "website": "https://www.who.int/", "logoSource": "https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg", "sourcePage": "https://www.who.int/", "logo": publicAssetUrl(whoLogo), "relationship": "directory" as const },
{"id": "unicef", "name": "UNICEF", "website": "https://www.unicef.org/", "logoSource": "https://www.unicef.org/sites/default/files/styles/logo/public/English_9.png.webp?itok=8H0Aa4or", "sourcePage": "https://www.unicef.org/", "logo": publicAssetUrl(unicefLogo), "relationship": "directory" as const },
{"id": "gavi", "name": "Gavi", "website": "https://www.gavi.org/", "logoSource": "https://www.gavi.org/sites/default/files/Gavi-logo_1b.png", "sourcePage": "https://www.gavi.org/", "logo": publicAssetUrl(gaviLogo), "relationship": "directory" as const },
{"id": "ifrc", "name": "Fédération internationale de la Croix-Rouge", "website": "https://www.ifrc.org/", "logoSource": "https://www.ifrc.org/sites/default/files/2023-05/ifrc_logo.png", "sourcePage": "https://www.ifrc.org/", "logo": publicAssetUrl(ifrcLogo), "relationship": "directory" as const },
{"id": "rotary", "name": "Rotary International", "website": "https://www.rotary.org/", "logoSource": "https://commons.wikimedia.org/wiki/File:Rotary_International_Logo.svg", "sourcePage": "https://www.rotary.org/", "logo": rotaryLogo, "relationship": "directory" as const },
{"id": "irc", "name": "International Rescue Committee", "website": "https://www.rescue.org/", "logoSource": "https://commons.wikimedia.org/wiki/File:International_Rescue_Committee_Logo.svg", "sourcePage": "https://www.rescue.org/", "logo": ircLogo, "relationship": "directory" as const },
{"id": "americares", "name": "Americares", "website": "https://www.americares.org/", "logoSource": "https://www.americares.org/wp-content/uploads/logo-color-2.png", "sourcePage": "https://www.americares.org/", "logo": publicAssetUrl(americaresLogo), "relationship": "directory" as const },
{"id": "ordre-medecins", "name": "Ordre National des Médecins Madagascar", "website": null, "logoSource": null, "sourcePage": null, "logo": null, "relationship": "directory" as const }
];
