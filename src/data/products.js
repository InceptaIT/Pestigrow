import { IMAGES } from "../assets/Images";

const products = [
  // --- INSECTICIDES ---
  {
    id: "insecticide-acetamiprid-20",
    name: "ACETO-20",
    category: "insecticide",
    description:
      "ACETAMIPRID 20% SP. Effective against Aphids, Jassids, and Whiteflies.",
    longDescription:
      "ACETO-20 is a powerful ACETAMIPRID 20% SP formulation for rapid control of sucking pests like Aphids, Jassids, and Whiteflies in crops like Cotton, Cabbage, Okra, Chilli, and Paddy. Dosage ranges from 20-40 GM/acre. Available in 20GM and 100GM packs.",
    imageUrl: IMAGES.i1,
  },
  {
    id: "insecticide-tejas-505",
    name: "TEJAS-505",
    category: "insecticide",
    description:
      "A potent combination of CHLORPYRIPHOS 50% + CYPERMETHRIN 5% EC.",
    longDescription:
      "TEJAS-505 is a dual-action insecticide (CHLORPYRIPHOS 50% + CYPERMETHRIN 5% EC) effective against chewing and sucking pests. Targets Stem Borer, Leaf Folder in Paddy, and a wide spectrum of pests including Bollworms in Cotton. Dosage is 300-500 ML/acre. Available in 1 LTR, 500 ML, 250 ML, and 100 ML.",
    imageUrl: IMAGES.i2,
  },
  {
    id: "insecticide-bramhos",
    name: "BRAMHOS",
    category: "insecticide",
    description:
      "THIAMETHOXAM 12.6% + LAMBDA CYHALOTHRIN 9.5% ZC for broad-spectrum control.",
    longDescription:
      "BRAMHOS offers systemic and contact action, protecting crops like Cotton, Tea, Tomato, and Maize from pests like Aphids, Thrips, and Bollworms. Highly concentrated ZC formulation. Dosage is typically 50-80 ML/acre. Available in various packs including 1 LTR and 20 ML.",
    imageUrl: IMAGES.i12,
  },
  {
    id: "insecticide-fighter",
    name: "FIGHTER",
    category: "insecticide",
    description:
      "LAMBDA CYHALOTHRIN 4.9% CS. Quick knockdown and residual action.",
    longDescription:
      "FIGHTER (LAMBDA CYHALOTHRIN 4.9% CS) is an effective insecticide for Paddy (Stem Borer, Leaf Folder), Okra, Brinjal, Tomato (Fruit & Shoot Borer), and Cotton/Chilli (Boll Worms, Thrips). Dosage is 100-200 ML/acre. Available in 1 LTR, 500ML, 250ML, and 100ML.",
    imageUrl: IMAGES.i4,
  },
  {
    id: "insecticide-kill-70",
    name: "KILL-70",
    category: "insecticide",
    description:
      "IMIDACLOPRID 70% WG. Highly systemic and effective against sucking pests.",
    longDescription:
      "KILL-70 is an IMIDACLOPRID 70% WG that protects Cotton, Okra, Paddy, and Cucumber from Aphids, Jassids, and Thrips. Minimal dosage requirement (12-30 GM/acre). Available in packs ranging from 2GM to 150GM.",
    imageUrl: IMAGES.i3,
  },
  {
    id: "insecticide-control-emamectin",
    name: "CONTROL (Emamectin)",
    category: "insecticide",
    description:
      "EMAMECTIN BENZOATE 5% SG. Primary control for borers and fruit borers.",
    longDescription:
      "CONTROL is an EMAMECTIN BENZOATE 5% SG product targeting key lepidopteran pests like Boll Worms (Cotton), Shoot & Fruit Borer (Okra, Brinjal/Chilli), and Pod Borer (Redgram/Chickpea). Dosage is around 80-100 GM/acre.",
    imageUrl: IMAGES.i5,
  },
  {
    id: "insecticide-profos-404",
    name: "PROFOS-404",
    category: "insecticide",
    description: "PROFENOFOS 40%+CYPERMETHRIN 4% E.C. Dual-action formulation.",
    longDescription:
      "PROFOS-404 is specifically used in Cotton for controlling the Bollworm Complex, combining contact and stomach action. Dosage is 400-600 ML/acre. Available in 1LTR, 500ML, 250ML, and 100ML.",
    imageUrl: IMAGES.i7,
  },
  {
    id: "insecticide-ghatak-chlorpyriphos",
    name: "GHATAK (Chlorpyriphos)",
    category: "insecticide",
    description:
      "CHLORPYRIPHOS 20% EC. General control for Lepidopterans and Termites.",
    longDescription:
      "GHATAK (CHLORPYRIPHOS 20% EC) is a broad-use insecticide recommended for Sugarcane, Paddy, Beans, Cotton, and various fruits/vegetables against Lepidopterans and Termites. Dosage varies widely (250-1500 ML/acre).",
    imageUrl: IMAGES.i6,
  },
  {
    id: "insecticide-thayostar-25",
    name: "THAYOSTAR (25% WG)",
    category: "insecticide",
    description:
      "THIAMETHOXAM 25% WG. Systemic protection against sucking pests.",
    longDescription:
      "THAYOSTAR (THIAMETHOXAM 25% WG) provides systemic protection for Paddy, Cotton, Okra, Mango, and Potato. Highly effective against BPH, White Fly, Thrips, and Aphids. Dosage ranges from 40-80 GM/acre.",
    imageUrl: IMAGES.i8,
  },
  {
    id: "insecticide-aatank",
    name: "AATANK",
    category: "insecticide",
    technical_name: "CHLORANTRANILIPROLE 18.5% W/W SC",
    description:
      "Powerful CHLORANTRANILIPROLE 18.5% SC for Stem and Shoot Borers.",
    longDescription:
      "AATANK is highly potent against key pests in Paddy (Stem Borer) and Sugarcane (Early Shoot Borer, Top Borer). Dosage is 60-150 ML/acre. Available in small packs from 10ML to 150ML.",
    imageUrl: IMAGES.i12,
  },
  {
    id: "insecticide-alfokill",
    name: "ALFOKILL",
    category: "insecticide",
    technical_name: "Emamectin Benzoate 1.5% + Fipronil 3.5% SC",
    description:
      "Dual combination insecticide for comprehensive control of complex pest populations.",
    longDescription:
      "ALFOKILL combines Emamectin Benzoate and Fipronil for maximum efficacy against complex pest complexes, including Aphids, Jassids, Whitefly, and Bollworm in Cotton, and various borers/hoppers in Sugarcane and Paddy. Dosage up to 800 ML/acre.",
    imageUrl: IMAGES.i9,
  },
  {
    id: "insecticide-treaty",
    name: "TREATY",
    category: "insecticide",
    technical_name: "Chlorantraniliprole 9.3% + Lambdacyhalothrin 4.6% ZC",
    description:
      "Advanced ZC formulation for dual-action control of sucking and chewing pests.",
    longDescription:
      "TREATY is a new-generation insecticide mixing Chlorantraniliprole and Lambdacyhalothrin, offering broad-spectrum control in Cotton, Tea, Tomato, Maize, and Soybean against Thrips, Aphids, Shootfly, and Bollworms. Dosage is typically 50-80 ML/acre.",
    imageUrl: IMAGES.i10,
  },

  // --- FUNGICIDES ---
  {
    id: "fungicide-sulpostar",
    name: "SULPOSTAR",
    category: "fungicide",
    technical_name: "SULPHUR 80% WDG",
    description: "SULPHUR 80% WDG for effective powdery mildew control.",
    longDescription:
      "SULPOSTAR is widely used as a contact fungicide and miticide (SULPHUR 80% WDG). Recommended for Grapes, Apple, Mango, and various vegetable/pulse crops to control Powdery Mildew. Dosage is 750-1000 GM/acre.",
    imageUrl: IMAGES.f2,
  },
  {
    id: "fungicide-security",
    name: "SECURITY",
    category: "fungicide",
    technical_name: "TEBUCONAZOLE 10%+SULPHUR 65% WG",
    description:
      "Combination systemic and contact fungicide for robust disease management.",
    longDescription:
      "SECURITY (TEBUCONAZOLE 10% + SULPHUR 65% WG) offers superior protection for Chilli and Mango against Powdery Mildew, Fruit Rot, Leaf Spot, and Anthracnose. Dosage is 1.25 GM per gram of water.",
    imageUrl: IMAGES.f3,
  },
  {
    id: "fungicide-perfect",
    name: "PERFECT",
    category: "fungicide",
    technical_name: "CARBENDAZIM 12% + MANCOZEB 63% WP",
    description:
      "Systemic and contact fungicide mix for diseases like Blast and Blight.",
    longDescription:
      "PERFECT combines CARBENDAZIM 12% + MANCOZEB 63% WP to tackle various diseases in Groundnut (Leaf Spot), Paddy (Blast), Potato (Scurf, Blight), and Tea. Dosage is 250-700 GM/acre.",
    imageUrl: IMAGES.f1,
  },
  {
    id: "fungicide-dhanush",
    name: "DHANUSH",
    category: "fungicide",
    description:
      "THIOPHANATE METHYL 70% WP. A highly effective systemic fungicide providing broad-spectrum disease control.",
    longDescription:
      "DHANUSH is a systemic fungicide formulated as a Wettable Powder (WP) containing Thiophanate Methyl 70% w/w. It offers excellent preventative and curative action against a wide range of fungal diseases in various vegetable, fruit, and field crops (e.g., wheat, paddy, vegetables, cauliflower, brinjal, tomato, potato, garlic).",
    technicalName: "THIOPHANATE METHYL 70% WP",
    netContent: "500g",
    chemicalComposition: [
      {
        component: "Thiophanate Methyl Toch. (dosed on 58% w/w)",
        percentage: "74.685 w/w",
      },
      { component: "Precipitated allico h", percentage: "7.540 w/w" },
      { component: "Sticking agent (Glue)", percentage: "2.005 w/w" },
      { component: "Suspending Agent (CMC)", percentage: "2.005 w/w" },
      {
        component: "Wetting Agent (Alkyl Aryl Sulphonate (alet-10))",
        percentage: "2.005 w/w",
      },
      {
        component: "Dispersing Agent (Alkyl Noptheyl Sulphonate Tamol D-N)",
        percentage: "2.005 w/w",
      },
      { component: "Total", percentage: "100.00% w/w" },
    ],
    imageUrl: IMAGES.f4,
  },

  // --- HERBICIDES ---
  {
    id: "herbicide-paraquick",
    name: "PARAQUICK",
    category: "herbicide",
    technical_name: "PARAQUAT DICHLORIDE 24% SL",
    description:
      "Non-selective contact herbicide for knockdown control of all weeds.",
    longDescription:
      "PARAQUICK is a non-selective contact herbicide (PARAQUAT DICHLORIDE 24% SL) used in Potato, Cotton, Rubber, and Tea to control all weeds. Dosage is typically 500-1000 ML/acre.",
    imageUrl: IMAGES.h5,
  },
  {
    id: "herbicide-protect-20",
    name: "PROTECT-20",
    category: "herbicide",
    technical_name: "Metsulfuron Methyl 20% WP",
    description:
      "Selective post-emergent control for broadleaf weeds and sedges.",
    longDescription:
      "PROTECT-20 (Metsulfuron Methyl 20% WP) selectively removes broadleaf weeds in Wheat, Paddy, and Sugarcane. Low dosage required: 8-12 GM/acre.",
    imageUrl: IMAGES.h4,
  },
  {
    id: "herbicide-hero-44",
    name: "HERO-44",
    category: "herbicide",
    technical_name: "2,4-D ETHYL ESTER 38% EC",
    description:
      "Selective herbicide for post-emergent broadleaf weed control.",
    longDescription:
      "HERO-44 (2,4-D ETHYL ESTER 38% EC) is widely used in Sorghum, Maize, Wheat, and Paddy to control broadleaf weeds. Dosage is low, ranging from 0.45-1 ML/acre.",
    imageUrl: IMAGES.h1,
  },
  {
    id: "herbicide-clean-plus",
    name: "CLEAN-PLUS",
    category: "herbicide",
    technical_name: "PIROXOFOP-PROPINYL 15% WP (CLODINAFOP-PROPARGYL 15% WP)",
    description:
      "Post-emergence herbicide targeting Gulli Danda (Phalaris Minor) in Wheat.",
    longDescription:
      "CLEAN-PLUS is a specialized post-emergence product specifically for controlling Gulli Danda (Phalaris Minor) in Wheat, ensuring focused weed management. Dosage is 160G/acre.",
    imageUrl: IMAGES.h3,
  },
  {
    id: "herbicide-kisan-58",
    name: "KISAN-58",
    category: "herbicide",
    description:
      "2,4-D AMINE SALT 58% SL. A selective herbicide for the control of broadleaf weeds and sedges.",
    longDescription:
      "KISAN-58 contains 2,4-D AMINE SALT 58% SL, a widely used selective herbicide effective against Broad Leaf Weeds and Sedges. Recommended dosages: 400 ML/acre for Wheat, and 1200 ML/acre for Sugarcane and Maize. Available in 1 LTR, 400ML, and 250ML packing.",
    technicalName: "2,4-D AMINE SALT 58% SL",
    packing: "1LTR, 400ML, 250ML",
    cropDosage: [
      { crop: "WHEAT", weed: "BROAD LEAF WEEDS", dosage: "400 ML" },
      {
        crop: "SUGARCANE",
        weed: "BROAD LEAF WEEDS & SEDGES",
        dosage: "1200 ML",
      },
      { crop: "MAIZE", weed: "BROAD LEAF WEEDS & SEDGES", dosage: "1200 ML" },
    ],
    imageUrl: IMAGES.h6, // Placeholder for the actual image path
  },

  // --- PGR (Plant Growth Regulators) ---
  {
    id: "pgr-gibly-plus",
    name: "GIBLY PLUS",
    category: "plant-growth",
    technical_name: "GIBBERELLIC ACID 0.001% L",
    description:
      "GIBBERELLIC ACID 0.001% L, enhancing growth and cell division in all crops.",
    longDescription:
      "GIBLY PLUS stimulates overall growth and cell division in growing parts of the plant, applicable to all crops for enhanced vigor and yield. Dosage is 1-2.5 ML per liter of water.",
    imageUrl: IMAGES.pgr1,
  },
  {
    id: "pgr-growculan",
    name: "GROWCULAN",
    category: "plant-growth",
    technical_name: "TRIANCONTANOL 0.05% GR",
    description:
      "Granular plant growth regulator (TRIANCONTANOL 0.05% GR) for soil application.",
    longDescription:
      "GROWCULAN is a TRIANCONTANOL 0.05% GR formulation applied directly to the soil for sustained plant growth regulation in Wheat, Paddy, Vegetables, Cotton, and Groundnut. Standard dosage is 10 KG/acre.",
    imageUrl: IMAGES.pgr2,
  },
  {
    id: "pgr-sili-ultra",
    name: "SILI ULTRA",
    category: "plant-growth",
    technical_name: "SILICON BASED SPREADER",
    description:
      "Silicon-based spreader/adjuvant for improved spray solution efficacy.",
    longDescription:
      "SILI ULTRA acts as a SILICON BASED SPREADER, ensuring better coverage and absorption of spray solutions across all crops. Dosage is 5 ML per 15 liters of water.",
    imageUrl: IMAGES.pgr3,
  },
];

export default products;
