/**
 * French sub-guides of the eye-laser pillar (/fr/chirurgie-laser-yeux/<slug>).
 * General information only: no prices, no figures promised, no practitioner names.
 */
export type LaserGuide = {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  keyPoints: string[];
};

const s = (title: string, ...paragraphs: string[]) => ({ title, paragraphs });

export const laserGuides: LaserGuide[] = [
  {
    slug: "lasik-femto-lasik", label: "LASIK et Femto-LASIK",
    title: "LASIK et Femto-LASIK : fonctionnement, indications et récupération",
    description: "Comprendre le LASIK et le Femto-LASIK : création du volet cornéen, remodelage au laser excimer, indications générales, récupération et précautions.",
    intro: "Le LASIK est la technique de chirurgie réfractive la plus pratiquée. Dans sa version Femto-LASIK, un laser femtoseconde découpe un fin volet de cornée avant le remodelage par laser excimer.",
    sections: [
      s("Comment se déroule l’intervention ?", "Après anesthésie par gouttes, le chirurgien crée un volet cornéen très fin, le soulève, remodèle la cornée sous-jacente au laser excimer, puis repose le volet qui adhère naturellement.", "L’intervention dure quelques minutes par œil. Elle se fait en ambulatoire et le patient rentre chez lui accompagné."),
      s("Pour qui ?", "Le LASIK s’adresse généralement aux myopies, hypermétropies et astigmatismes stables, avec une cornée d’épaisseur et de forme suffisantes. Seul le bilan pré-opératoire permet de le confirmer."),
      s("Récupération", "La vision s’améliore souvent rapidement, dès les premiers jours. Des gouttes sont prescrites et il faut éviter de se frotter les yeux. La sécheresse oculaire transitoire est fréquente."),
    ],
    keyPoints: ["Récupération généralement rapide", "Nécessite une cornée suffisamment épaisse", "Volet cornéen à protéger des chocs"],
  },
  {
    slug: "pkr-transpkr", label: "PKR / TransPKR",
    title: "PKR et TransPKR : la chirurgie laser de surface",
    description: "PKR et TransPKR : traitement laser de surface sans volet cornéen, indications pour cornées fines, déroulement, douleurs et récupération plus lente.",
    intro: "La PKR (photokératectomie réfractive) traite la surface de la cornée, sans découpe de volet. La TransPKR retire l’épithélium directement au laser, sans contact.",
    sections: [
      s("Principe", "L’épithélium, couche superficielle de la cornée, est retiré puis le laser excimer remodèle la cornée. L’épithélium se régénère ensuite en quelques jours, sous une lentille pansement."),
      s("Indications fréquentes", "Elle est souvent proposée en cas de cornée fine, de profession ou sport exposé aux chocs, ou lorsque le LASIK n’est pas conseillé. Le choix revient à l’ophtalmologiste."),
      s("Récupération", "Les premiers jours peuvent être inconfortables (sensibilité à la lumière, larmoiement). La vision se stabilise plus progressivement qu’avec le LASIK, sur plusieurs semaines."),
    ],
    keyPoints: ["Aucun volet cornéen", "Récupération plus lente et plus inconfortable", "Adaptée à certaines cornées fines"],
  },
  {
    slug: "smile", label: "SMILE",
    title: "SMILE : la chirurgie laser par mini-incision",
    description: "SMILE : extraction d’un lenticule cornéen par une petite incision au laser femtoseconde, indications, avantages discutés et limites de la technique.",
    intro: "Le SMILE (Small Incision Lenticule Extraction) utilise uniquement un laser femtoseconde pour sculpter un fin disque de tissu dans la cornée, retiré par une petite incision.",
    sections: [
      s("Principe", "Le laser découpe un lenticule à l’intérieur de la cornée. Le chirurgien l’extrait par une incision de quelques millimètres, ce qui modifie la courbure de la cornée sans créer de volet."),
      s("Indications", "Le SMILE est surtout utilisé pour la myopie, avec ou sans astigmatisme. Son intérêt et ses limites par rapport au LASIK sont à discuter selon vos mesures."),
      s("Après l’intervention", "La reprise des activités est souvent rapide. Comme pour toute chirurgie réfractive, un suivi et des gouttes sont nécessaires."),
    ],
    keyPoints: ["Pas de volet cornéen", "Principalement pour la myopie", "Disponibilité variable selon les centres"],
  },
  {
    slug: "comparatif-lasik-pkr-smile", label: "Comparatif LASIK, PKR et SMILE",
    title: "LASIK, PKR ou SMILE : comparatif des techniques laser",
    description: "Comparatif des techniques laser des yeux : principe, confort, récupération et indications du LASIK, de la PKR et du SMILE, pour préparer votre bilan.",
    intro: "Les trois familles de techniques corrigent la vue en remodelant la cornée. Elles diffèrent par la voie d’accès, le confort post-opératoire et les indications.",
    sections: [
      s("Ce qui les distingue", "Le LASIK crée un volet ; la PKR traite la surface ; le SMILE passe par une mini-incision. Ces différences influencent la récupération et la résistance aux chocs."),
      s("Aucune technique n’est meilleure pour tous", "Épaisseur et forme de la cornée, importance de la correction, sécheresse oculaire, activités : ce sont vos mesures qui orientent le choix, pas une préférence de principe."),
    ],
    keyPoints: ["Choix fondé sur le bilan", "Récupération : LASIK et SMILE plus rapides que la PKR", "Demandez pourquoi une technique vous est proposée"],
  },
  {
    slug: "implants-icl", label: "Implants ICL",
    title: "Implants ICL : une alternative au laser",
    description: "Implants ICL (lentilles intraoculaires phaques) : principe, indications pour fortes myopies ou cornées fines, déroulement et suivi ophtalmologique.",
    intro: "Lorsque le laser n’est pas adapté, l’ophtalmologiste peut proposer un implant intraoculaire placé devant le cristallin naturel, sans retirer de tissu cornéen.",
    sections: [
      s("Principe", "Une lentille souple est insérée dans l’œil par une petite incision. Elle corrige le défaut visuel tout en conservant le cristallin."),
      s("Pour qui ?", "Les implants sont souvent envisagés pour les fortes myopies, certaines hypermétropies ou des cornées trop fines pour le laser."),
      s("Suivi", "Il s’agit d’une chirurgie intraoculaire : un suivi régulier est nécessaire et les risques spécifiques doivent être expliqués par le chirurgien."),
    ],
    keyPoints: ["Ne retire pas de tissu cornéen", "Option pour fortes corrections", "Suivi régulier indispensable"],
  },
  {
    slug: "operation-myopie", label: "Opération de la myopie",
    title: "Opération de la myopie : quelles solutions ?",
    description: "Opérer sa myopie : LASIK, PKR, SMILE ou implants selon le degré de myopie et la cornée, conditions de stabilité et attentes réalistes.",
    intro: "La myopie, vision floue de loin, est le défaut le plus souvent corrigé par chirurgie réfractive.",
    sections: [
      s("Les options", "Selon le degré de myopie et l’état de la cornée, les techniques laser (LASIK, PKR, SMILE) ou un implant peuvent être proposés."),
      s("Conditions", "La myopie doit être stable, généralement depuis au moins un an. Un bilan vérifie l’absence de contre-indication, comme un kératocône."),
    ],
    keyPoints: ["Myopie stable requise", "Plusieurs techniques possibles", "Pas de garantie de vision parfaite"],
  },
  {
    slug: "operation-astigmatisme", label: "Opération de l’astigmatisme",
    title: "Opération de l’astigmatisme au laser",
    description: "Corriger l’astigmatisme par chirurgie laser : principe, association avec myopie ou hypermétropie, limites et importance du bilan topographique.",
    intro: "L’astigmatisme provient d’une cornée de courbure irrégulière. Il est souvent associé à une myopie ou une hypermétropie et peut être traité en même temps.",
    sections: [
      s("Principe", "Le laser remodèle la cornée de façon asymétrique pour régulariser sa courbure. La topographie cornéenne est essentielle pour planifier le traitement."),
      s("Limites", "Certains astigmatismes irréguliers, notamment liés à un kératocône, ne relèvent pas du laser réfractif classique."),
    ],
    keyPoints: ["Traité souvent avec la myopie ou l’hypermétropie", "Topographie indispensable", "Kératocône : prise en charge différente"],
  },
  {
    slug: "operation-hypermetropie", label: "Opération de l’hypermétropie",
    title: "Opération de l’hypermétropie : laser ou implant",
    description: "Opérer l’hypermétropie : techniques laser et alternatives, indications selon l’âge et le degré, récupération et points à discuter avec l’ophtalmologiste.",
    intro: "L’hypermétropie rend la vision de près plus difficile et fatigue les yeux. Sa correction chirurgicale dépend fortement de l’âge et du degré.",
    sections: [
      s("Options", "Le laser peut corriger les hypermétropies faibles à modérées. Au-delà, ou après un certain âge, un implant ou une chirurgie du cristallin peuvent être discutés."),
      s("À savoir", "La stabilisation peut être plus longue que pour la myopie ; le chirurgien vous expliquera l’évolution attendue."),
    ],
    keyPoints: ["Solutions selon l’âge et le degré", "Stabilisation parfois plus longue", "Bilan complet indispensable"],
  },
  {
    slug: "presbytie-solutions-chirurgicales", label: "Presbytie : solutions chirurgicales",
    title: "Presbytie : quelles solutions chirurgicales ?",
    description: "Presbytie et chirurgie : monovision laser, presbyLASIK, implants multifocaux ; principes, compromis visuels et questions à poser avant de décider.",
    intro: "La presbytie, perte progressive de la vision de près après 40 ans, est liée au vieillissement du cristallin. Plusieurs approches chirurgicales existent, chacune avec des compromis.",
    sections: [
      s("Approches possibles", "Monovision (un œil réglé pour le loin, l’autre pour le près), traitements laser multifocaux ou remplacement du cristallin par un implant multifocal selon l’âge et l’état de l’œil."),
      s("Compromis", "Ces solutions réduisent la dépendance aux lunettes de lecture mais peuvent entraîner halos ou adaptation. Un essai en lentilles est parfois proposé avant la monovision."),
    ],
    keyPoints: ["Liée au vieillissement du cristallin", "Solutions avec compromis visuels", "Essai préalable parfois proposé"],
  },
  {
    slug: "suis-je-eligible", label: "Suis-je éligible ?",
    title: "Suis-je éligible à la chirurgie laser des yeux ?",
    description: "Critères généraux d’éligibilité à la chirurgie laser des yeux : âge, stabilité de la vue, cornée, santé oculaire ; seul un ophtalmologiste peut trancher.",
    intro: "Beaucoup de personnes se demandent si leurs yeux peuvent être opérés. Voici les critères généraux examinés ; la décision appartient toujours à l’ophtalmologiste.",
    sections: [
      s("Critères généralement examinés", "Âge adulte, vue stable depuis au moins un an, cornée d’épaisseur et de forme normales, absence de maladie oculaire évolutive, de sécheresse sévère non traitée ou de grossesse en cours."),
      s("Ce que Careline fait", "Careline ne pose aucune question médicale. Nous organisons un rendez-vous de bilan avec un ophtalmologiste partenaire, qui seul peut juger de votre éligibilité."),
    ],
    keyPoints: ["Vue stable", "Cornée saine et suffisamment épaisse", "Décision médicale après bilan"],
  },
  {
    slug: "bilan-pre-operatoire", label: "Bilan pré-opératoire",
    title: "Bilan pré-opératoire de chirurgie réfractive : à quoi s’attendre",
    description: "Déroulement du bilan pré-opératoire avant chirurgie laser des yeux : examens, topographie, pachymétrie, arrêt des lentilles et questions à préparer.",
    intro: "Le bilan pré-opératoire est l’étape clé : il vérifie l’éligibilité et sert à choisir la technique.",
    sections: [
      s("Examens courants", "Mesure de la vue, topographie et épaisseur de la cornée (pachymétrie), examen du fond d’œil, évaluation de la sécheresse oculaire et de la taille des pupilles."),
      s("Se préparer", "Le port de lentilles doit souvent être interrompu plusieurs jours avant, selon le type de lentilles. Venez avec vos lunettes, vos anciennes ordonnances et vos questions. Les pupilles peuvent être dilatées : prévoyez de ne pas conduire."),
    ],
    keyPoints: ["Arrêt des lentilles avant l’examen", "Ne pas conduire si dilatation", "Préparez vos questions"],
  },
  {
    slug: "prix-remboursement", label: "Prix et remboursement",
    title: "Chirurgie laser des yeux : prix et remboursement, ce qui les fait varier",
    description: "Ce qui influence le coût d’une chirurgie laser des yeux, ce que comprend un devis et le rôle des mutuelles ; Careline n’affiche aucun tarif.",
    intro: "Careline n’affiche pas de prix : les tarifs sont fixés par chaque praticien et varient selon le pays et la technique. Voici les éléments à comprendre.",
    sections: [
      s("Ce qui fait varier le coût", "Technique choisie, équipement, pays, ce qu’incluent le bilan et le suivi post-opératoire. Demandez un devis détaillé et écrit."),
      s("Remboursement", "Dans de nombreux pays, la chirurgie réfractive n’est pas prise en charge par l’assurance maladie obligatoire. Certaines complémentaires proposent un forfait : renseignez-vous auprès de la vôtre."),
    ],
    keyPoints: ["Devis écrit et détaillé", "Vérifiez ce qu’inclut le suivi", "Interrogez votre complémentaire"],
  },
  {
    slug: "recuperation-apres-operation", label: "Récupération après l’opération",
    title: "Récupération après une chirurgie laser des yeux",
    description: "Les premiers jours et semaines après une chirurgie laser des yeux : gouttes, protection, écrans, sport, maquillage et rendez-vous de contrôle.",
    intro: "Une bonne récupération repose sur le respect des consignes du chirurgien et des rendez-vous de contrôle.",
    sections: [
      s("Premiers jours", "Repos, gouttes prescrites, protection des yeux, pas de frottement. Une vision fluctuante, une sensibilité à la lumière ou une sécheresse sont fréquentes."),
      s("Reprise des activités", "Écrans, conduite, sport, piscine et maquillage reprennent selon un calendrier fixé par le chirurgien, qui dépend de la technique."),
      s("Quand consulter sans attendre ?", "Douleur intense, baisse brutale de la vision ou rougeur importante : contactez immédiatement le centre qui vous a opéré."),
    ],
    keyPoints: ["Respecter les gouttes et contrôles", "Ne pas se frotter les yeux", "Urgence : contacter le centre"],
  },
  {
    slug: "risques-effets-secondaires", label: "Risques et effets secondaires",
    title: "Risques et effets secondaires de la chirurgie laser des yeux",
    description: "Effets secondaires fréquents et complications rares de la chirurgie laser des yeux : sécheresse, halos, retouche, infection ; en parler avant de décider.",
    intro: "Comme toute chirurgie, la chirurgie réfractive comporte des risques. Les connaître permet une décision éclairée.",
    sections: [
      s("Effets fréquents et souvent transitoires", "Sécheresse oculaire, halos ou éblouissements nocturnes, vision fluctuante les premières semaines."),
      s("Complications plus rares", "Sous- ou sur-correction nécessitant parfois une retouche, complications du volet, infection, inflammation. Le chirurgien doit vous les expliquer et vous remettre une information écrite."),
    ],
    keyPoints: ["Information écrite à demander", "Retouche parfois nécessaire", "Aucune garantie de résultat"],
  },
  {
    slug: "age-chirurgie-laser", label: "Âge et chirurgie laser",
    title: "À quel âge peut-on se faire opérer des yeux au laser ?",
    description: "Âge et chirurgie laser des yeux : stabilité de la vue chez le jeune adulte, presbytie après 40 ans et alternatives selon l’âge du patient.",
    intro: "Il n’existe pas d’âge idéal unique : ce qui compte est la stabilité de la vue et l’état de l’œil.",
    sections: [
      s("Jeunes adultes", "La chirurgie est généralement envisagée à l’âge adulte, une fois la vue stabilisée."),
      s("Après 40-45 ans", "La presbytie apparaît ; un laser classique ne la corrige pas. D’autres solutions, comme la monovision ou un implant, peuvent être discutées."),
    ],
    keyPoints: ["Vue stabilisée", "Presbytie à anticiper après 40 ans", "Alternatives selon l’âge"],
  },
  {
    slug: "sport-conduite-metiers", label: "Sport, conduite et métiers",
    title: "Chirurgie laser des yeux, sport, conduite et métiers",
    description: "Chirurgie laser des yeux et vie active : sports de contact, conduite, métiers exposés ou réglementés ; points à vérifier avant l’intervention.",
    intro: "Votre activité peut orienter le choix de la technique et le calendrier de reprise.",
    sections: [
      s("Sports et chocs", "Pour les sports de contact ou de combat, une technique sans volet (PKR, SMILE) est parfois privilégiée. Le chirurgien en discutera avec vous."),
      s("Conduite et métiers réglementés", "La reprise de la conduite se fait après accord du chirurgien. Certains métiers (pilotes, forces armées…) ont des règles spécifiques : renseignez-vous auprès de votre employeur ou autorité."),
    ],
    keyPoints: ["Mentionnez vos activités au bilan", "Conduite après accord médical", "Règles métier à vérifier"],
  },
  {
    slug: "laser-lentilles-lunettes", label: "Laser, lentilles ou lunettes",
    title: "Laser, lentilles ou lunettes : comment choisir ?",
    description: "Comparer chirurgie laser, lentilles de contact et lunettes : confort, contraintes, réversibilité et questions pour choisir la solution adaptée.",
    intro: "Lunettes et lentilles restent des solutions sûres et efficaces. La chirurgie est une option, pas une obligation.",
    sections: [
      s("Lunettes et lentilles", "Réversibles et sans chirurgie. Les lentilles demandent une hygiène rigoureuse et peuvent être mal tolérées en cas de sécheresse."),
      s("Chirurgie laser", "Réduit la dépendance aux corrections optiques, mais elle est définitive, comporte des risques et ne convient pas à tous."),
    ],
    keyPoints: ["Toutes les options sont légitimes", "La chirurgie est irréversible", "Décision personnelle et éclairée"],
  },
];

export const laserGuideBySlug = (slug: string) => laserGuides.find((g) => g.slug === slug);
