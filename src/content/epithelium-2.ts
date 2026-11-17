import type { Lecture } from "./types";

/**
 * Epithelium #2: Glands, myoepithelium, neuroepithelium, basal surface. 22 scanned pages.
 * High-yield = yellow underlined/italic text on the (blue) slides.
 */
const lecture: Lecture = {
  id: "epithelium-2",
  number: 2,
  title: "Epithelium #2",
  subtitle: "Glands · Myoepithelium · Neuroepithelium · Basal surface",
  lecturer: "Histology department",
  slideCount: 22,
  group: "Histology",

  sections: [
    // ───────────────────────────────────────── p. 2
    {
      id: "ducts",
      title: "Glands according to presence of ducts",
      slides: "2",
      keyPoints: [
        "Exocrine glands: [[have]] a duct system, e.g., salivary glands.",
        "Endocrine glands: [[do not have]] a duct system ([[ductless]]), e.g., pituitary and thyroid glands.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Exocrine vs endocrine",
          columns: ["", "Exocrine", "Endocrine"],
          rows: [
            ["Duct system", "[[Have]] duct system", "[[Do not have]] duct system ([[ductless]])"],
            ["Example", "Salivary glands", "Pituitary and thyroid glands"],
          ],
        },
      ],
      explain: "الغدد بتتقسم حسب وجود قناة: exocrine ليها قناة (زي الغدد اللعابية)، وendocrine مالهاش قناة (ductless) وبتصبّ في الدم، زي الغدة النخامية والدرقية.",
      questions: [
        {
          id: "e2-du-1",
          type: "mcq",
          prompt: "Which of the following is an endocrine (ductless) gland?",
          options: ["Thyroid gland", "Salivary gland", "Goblet cell", "Sublingual gland"],
          answer: 0,
          explain: "Endocrine examples: pituitary and thyroid.",
        },
        {
          id: "e2-du-2",
          type: "complete",
          prompt: "Endocrine glands do not have a duct system, so they are described as ____.",
          answers: ["ductless"],
          explain: "Ductless.",
        },
        {
          id: "e2-du-3",
          type: "tf",
          statement: "Endocrine glands have a duct system, while exocrine glands do not have one.",
          answer: false,
          correction: "Exocrine glands have a duct system; endocrine glands do not have a duct system (ductless).",
          explain: "Swap check.",
        },
        {
          id: "e2-du-4",
          type: "tf",
          statement: "Salivary glands are exocrine glands because they have a duct system.",
          answer: true,
          explain: "Exocrine = have duct system.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 3–5
    {
      id: "cell-number-shape",
      title: "Number of cells & shape of the gland",
      slides: "3–5",
      keyPoints: [
        "Unicellular glands: e.g., goblet cells.",
        "Multicellular glands: composed of more than one cell, e.g., salivary glands.",
        "Classified by shape of duct and secretory parts into 9 types: simple (6) and compound (3).",
      ],
      blocks: [
        {
          kind: "table",
          title: "According to number of cells",
          columns: ["", "Unicellular", "Multicellular"],
          rows: [
            ["Cells", "One cell", "More than one cell"],
            ["Example", "Goblet cells", "Salivary glands"],
          ],
        },
        {
          kind: "table",
          title: "According to shape of duct & secretory parts",
          columns: ["Simple", "Compound"],
          rows: [
            ["1. Simple tubular", "7. Compound tubular"],
            ["2. Simple acinar (alveolar)", "8. Compound alveolar"],
            ["3. Simple tubuloalveolar", "9. Compound tubuloalveolar"],
            ["4. Simple branched tubular", "—"],
            ["5. Simple branched alveolar", "—"],
            ["6. Simple branched tubuloalveolar", "—"],
          ],
        },
      ],
      explain:
        "الغدة ممكن تكون خلية واحدة (زي الـ goblet cell) أو خلايا كتير (زي الغدد اللعابية). والمتعددة بتتقسم حسب شكل القناة والجزء اللي بيفرز: simple (6 أنواع) وcompound (3 أنواع)، وكل واحدة يا tubular يا alveolar يا الاتنين.",
      questions: [
        {
          id: "e2-cn-1",
          type: "mcq",
          prompt: "An example of a unicellular gland is:",
          options: ["Goblet cell", "Salivary gland", "Thyroid gland", "Parotid gland"],
          answer: 0,
          explain: "Unicellular → goblet cells.",
        },
        {
          id: "e2-cn-2",
          type: "tf",
          statement: "Multicellular glands are composed of more than one cell, e.g., salivary glands.",
          answer: true,
          explain: "Page 4.",
        },
        {
          id: "e2-cn-3",
          type: "mcq",
          prompt: "Which of the following is NOT one of the listed compound glands?",
          options: ["Compound branched acinar", "Compound tubular", "Compound alveolar", "Compound tubuloalveolar"],
          answer: 0,
          explain: "Compound types listed: tubular, alveolar, tubuloalveolar.",
        },
        {
          id: "e2-cn-4",
          type: "complete",
          prompt: "Simple acinar glands are also called simple ____ glands.",
          answers: ["alveolar"],
          explain: "Simple acinar or alveolar.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 6–9
    {
      id: "secretion-nature",
      title: "According to the nature of secretion",
      slides: "6–9",
      keyPoints: [
        "Mucous glands: thick, viscous secretion ([[mucus]]); cells [[cuboidal]]; nuclei [[flattened]]; lumen [[wide]] (e.g., sublingual gland).",
        "Serous glands: thin [[watery]] secretion; cells [[pyramidal]]; nuclei [[spherical]]; lumen [[narrow]] (e.g., parotid gland).",
        "Seromucous (mixed) glands: mixed secretions; mucous units with [[crescent-shaped]] clusters of serous cells = [[serous demilunes]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Mucous vs serous",
          columns: ["", "Mucous glands", "Serous glands"],
          rows: [
            ["Secretion", "Thick, viscous ([[mucus]])", "Thin, [[watery]]"],
            ["Cells", "[[Cuboidal]]", "[[Pyramidal]]"],
            ["Nuclei", "[[Flattened]]", "[[Spherical]]"],
            ["Lumen", "[[Wide]]", "[[Narrow]]"],
            ["Figure example", "Sublingual gland (H&E)", "Parotid gland (H&E)"],
          ],
        },
        {
          kind: "definition",
          term: "Serous demilunes",
          text: "In seromucous (mixed) glands: [[crescent-shaped]] clusters of serous cells capping the mucous units.",
        },
      ],
      explain:
        "الغدد المخاطية بتطلّع إفراز تخين (mucus)، خلاياها مكعّبة ونواتها مفلطحة والتجويف واسع. الغدد السيرس بتطلّع إفراز مايّة، خلاياها هرمية ونواتها كروية والتجويف ضيق. والمختلطة فيها وحدات مخاطية عليها «هلال» من خلايا سيرس (serous demilunes).",
      questions: [
        {
          id: "e2-sn-1",
          type: "mcq",
          prompt: "In serous glands, the cells are:",
          options: ["Pyramidal with spherical nuclei and a narrow lumen", "Cuboidal with flattened nuclei and a wide lumen", "Squamous with no lumen", "Columnar with flattened nuclei"],
          answer: 0,
          explain: "Serous: pyramidal, spherical nuclei, narrow lumen.",
        },
        {
          id: "e2-sn-2",
          type: "complete",
          prompt: "Crescent-shaped clusters of serous cells on mucous units are called serous ____.",
          answers: ["demilunes", "demilune"],
          explain: "Serous demilunes.",
        },
        {
          id: "e2-sn-3",
          type: "tf",
          statement: "In mucous glands, the nuclei are flattened and the lumen is wide.",
          answer: true,
          explain: "Mucous: cuboidal cells, flattened nuclei, wide lumen.",
        },
        {
          id: "e2-sn-4",
          type: "compare",
          prompt: "Compare mucous and serous glands.",
          columns: ["", "Mucous", "Serous"],
          rows: [
            ["Secretion", "Thick, viscous (mucus)", "Thin, watery"],
            ["Cells", "Cuboidal", "Pyramidal"],
            ["Nuclei", "Flattened", "Spherical"],
            ["Lumen", "Wide", "Narrow"],
          ],
          explain: "Pages 6–7.",
        },
        {
          id: "e2-sn-5",
          type: "mcq",
          prompt: "Seromucous (mixed) glands:",
          options: ["Produce mixed secretions", "Have no lumen", "Are ductless", "Are unicellular"],
          answer: 0,
          explain: "Mixed secretions; mucous units + serous demilunes.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 10–11
    {
      id: "mode-secretion",
      title: "According to the mode of secretion",
      slides: "10–11",
      keyPoints: [
        "[[Merocrine]] glands: secretion [[without loss]].",
        "[[Apocrine]] glands: secretion [[with apical loss]].",
        "[[Holocrine]] glands: secretion [[with whole loss]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Mode of secretion",
          columns: ["Gland", "What the cell loses"],
          rows: [
            ["[[Merocrine]]", "Nothing: secretion [[without loss]]"],
            ["[[Apocrine]]", "Its apical part: [[with apical loss]]"],
            ["[[Holocrine]]", "The whole cell: [[with whole loss]]"],
          ],
        },
        {
          kind: "mnemonic",
          phrase: "Mero = none, Apo = Apex, Holo = whole",
          key: [
            { letter: "M", word: "Merocrine: without loss" },
            { letter: "A", word: "Apocrine: apical loss" },
            { letter: "H", word: "Holocrine: whole loss" },
          ],
        },
      ],
      explain: "حسب طريقة الإفراز: merocrine الخلية بتفرز من غير ما تخسر حاجة، apocrine بتخسر الجزء اللي فوق (القمة)، وholocrine الخلية كلها بتتفرز مع الإفراز.",
      questions: [
        {
          id: "e2-ms-1",
          type: "mcq",
          prompt: "Glands that secrete with whole loss (the whole cell is lost) are:",
          options: ["Holocrine", "Merocrine", "Apocrine", "Endocrine"],
          answer: 0,
          explain: "Holocrine = whole loss.",
        },
        {
          id: "e2-ms-2",
          type: "complete",
          prompt: "Apocrine glands secrete with ____ loss.",
          answers: ["apical"],
          explain: "Apical loss.",
        },
        {
          id: "e2-ms-3",
          type: "tf",
          statement: "Merocrine glands secrete without loss of any part of the cell.",
          answer: true,
          explain: "Merocrine = without loss.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 12–13
    {
      id: "myo-neuro",
      title: "Myoepithelium & neuroepithelium",
      slides: "12–13",
      keyPoints: [
        "Myoepithelium: flattened cells with [[long cytoplasmic processes]].",
        "They form a basket-like network ([[basket cells]]).",
        "Rich in contractile [[actin]] and [[myosin]] filaments.",
        "Neuroepithelium: special epithelium designed to [[receive sensory stimuli]], e.g., [[taste buds]] and [[olfactory epithelium]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Two special epithelia",
          columns: ["", "Myoepithelium", "Neuroepithelium"],
          rows: [
            ["Shape / nature", "Flattened cells with [[long cytoplasmic processes]]; [[basket cells]]", "Special type designed to [[receive sensory stimuli]]"],
            ["Key content / example", "Contractile [[actin]] and [[myosin]] filaments", "[[Taste buds]], [[olfactory epithelium]]"],
          ],
        },
      ],
      explain: "الـ myoepithelium خلايا مفلطحة ليها زوائد طويلة عاملة زي السلة حوالين الغدة (basket cells)، وفيها actin وmyosin فبتنقبض. الـ neuroepithelium طلائية مخصوصة بتستقبل الإحساس، زي براعم التذوق وطلائية الشم.",
      questions: [
        {
          id: "e2-mn-1",
          type: "complete",
          prompt: "Myoepithelial cells form a basket-like network and are called ____ cells.",
          answers: ["basket"],
          explain: "Basket cells.",
        },
        {
          id: "e2-mn-2",
          type: "mcq",
          prompt: "Examples of neuroepithelium are taste buds and:",
          options: ["Olfactory epithelium", "Goblet cells", "Parotid gland", "Basal lamina"],
          answer: 0,
          explain: "Taste buds and olfactory epithelium.",
        },
        {
          id: "e2-mn-3",
          type: "reason",
          prompt: "Give reason: myoepithelial cells are contractile.",
          answer: "Because they are rich in contractile actin and myosin filaments.",
          explain: "Page 12.",
        },
        {
          id: "e2-mn-4",
          type: "tf",
          statement: "Neuroepithelium is a special type of epithelium designed to receive sensory stimuli.",
          answer: true,
          explain: "Page 13.",
        },
        {
          id: "e2-mn-5",
          type: "mcq",
          prompt: "Myoepithelial cells are:",
          options: ["Flattened cells with long cytoplasmic processes", "Pyramidal cells with spherical nuclei", "Cuboidal cells with flattened nuclei", "Ciliated columnar cells"],
          answer: 0,
          explain: "Flattened, long processes.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 14–17
    {
      id: "basement-membrane",
      title: "Basal surface: basement membrane",
      slides: "14–17",
      keyPoints: [
        "Basal, luminal and intercellular (lateral) surfaces of epithelial cells all have specializations.",
        "Basement membrane (BM): a thin membrane separating epithelium from C.T.",
        "Two layers: [[basal lamina]] (synthesized by epithelial cells) and [[reticular lamina]] (derived mainly from the CT).",
        "Functions: support epithelial surfaces · selective filter · selective barrier.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Basement membrane (BM)",
          text: "A *thin membrane* that separates between epithelium and C.T., made of two layers: the [[basal lamina]] and the [[reticular lamina]].",
        },
        {
          kind: "table",
          title: "Two layers of the BM",
          columns: ["Layer", "Origin"],
          rows: [
            ["1. [[Basal lamina]]", "Synthesized by epithelial cells"],
            ["2. [[Reticular lamina]]", "Derived mainly from the CT"],
          ],
        },
        {
          kind: "list",
          title: "Functions of the BM",
          items: ["Support epithelial surfaces.", "Acts as a selective filter.", "Acts as a selective barrier."],
        },
      ],
      explain:
        "الـ basement membrane غشاء رفيع بين الطلائية والنسيج الضام، طبقتين: basal lamina بتعملها الخلايا الطلائية، وreticular lamina جاية من النسيج الضام. بيسند الطلائية وبيشتغل كفلتر وحاجز انتقائي.",
      questions: [
        {
          id: "e2-bm-1",
          type: "mcq",
          prompt: "The basal lamina of the basement membrane is synthesized by:",
          options: ["Epithelial cells", "Connective tissue", "Myoepithelial cells", "Blood vessels"],
          answer: 0,
          explain: "Basal lamina ← epithelial cells; reticular lamina ← CT.",
        },
        {
          id: "e2-bm-2",
          type: "complete",
          prompt: "The basement membrane consists of the basal lamina and the ____ lamina.",
          answers: ["reticular"],
          explain: "Reticular lamina.",
        },
        {
          id: "e2-bm-3",
          type: "tf",
          statement: "The basement membrane acts as a selective filter and a selective barrier.",
          answer: true,
          explain: "Functions 2 and 3.",
        },
        {
          id: "e2-bm-4",
          type: "mcq",
          prompt: "The reticular lamina is derived mainly from:",
          options: ["The CT", "Epithelial cells", "Goblet cells", "The nucleus"],
          answer: 0,
          explain: "Reticular lamina ← CT.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 18–21
    {
      id: "hemi-enfolding",
      title: "Hemidesmosome & basal enfolding",
      slides: "18–21",
      keyPoints: [
        "Hemidesmosome: [[half-desmosomes]] found between epithelial cells and the BM.",
        "Basal surface enfolding: the basal surface is irregular and [[enfolded]].",
        "Associated with [[vertically oriented mitochondria]].",
        "Location: ion-transporting cells.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Specializations of the basal surface",
          columns: ["Specialization", "Description"],
          rows: [
            ["A. Basement membrane", "Basal lamina + reticular lamina"],
            ["B. Hemidesmosome", "[[Half-desmosomes]] between epithelial cells and BM"],
            ["C. Basal surface enfolding", "Irregular, [[enfolded]] surface with [[vertically oriented mitochondria]]; ion-transporting cells"],
          ],
        },
      ],
      explain:
        "الـ hemidesmosome نص desmosome بيربط الخلية الطلائية بالـ basement membrane. وفي الخلايا اللي بتنقل أيونات، السطح القاعدي بيبقى متكسّر (enfolded) وجنبه ميتوكوندريا واقفة بالطول عشان الطاقة.",
      questions: [
        {
          id: "e2-he-1",
          type: "mcq",
          prompt: "Hemidesmosomes (half-desmosomes) are found between:",
          options: ["Epithelial cells and the basement membrane", "Two adjacent epithelial cells", "Microvilli", "Two mitochondria"],
          answer: 0,
          explain: "Half-desmosomes between epithelial cells and BM.",
        },
        {
          id: "e2-he-2",
          type: "complete",
          prompt: "Basal surface enfolding is associated with vertically oriented ____.",
          answers: ["mitochondria", "mitochondrion"],
          explain: "Vertically oriented mitochondria.",
        },
        {
          id: "e2-he-3",
          type: "mcq",
          prompt: "Basal surface enfolding is located in:",
          options: ["Ion-transporting cells", "Goblet cells", "Taste buds", "Myoepithelial cells"],
          answer: 0,
          explain: "Location: ion-transporting cells.",
        },
        {
          id: "e2-he-4",
          type: "tf",
          statement: "In basal enfolding, the basal surface is smooth and regular.",
          answer: false,
          correction: "The basal surface is irregular and enfolded.",
          explain: "Page 20.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Exocrine vs endocrine", back: "Exocrine: have ducts (salivary). Endocrine: ductless (pituitary, thyroid)." },
    { id: "f2", front: "Unicellular gland example", back: "Goblet cells." },
    { id: "f3", front: "Simple gland shapes (6)", back: "Tubular · acinar/alveolar · tubuloalveolar · branched tubular · branched alveolar · branched tubuloalveolar." },
    { id: "f4", front: "Compound gland shapes (3)", back: "Compound tubular · compound alveolar · compound tubuloalveolar." },
    { id: "f5", front: "Mucous glands", back: "Thick mucus; cuboidal cells; flattened nuclei; wide lumen (sublingual)." },
    { id: "f6", front: "Serous glands", back: "Thin watery; pyramidal cells; spherical nuclei; narrow lumen (parotid)." },
    { id: "f7", front: "Serous demilunes", back: "Crescent-shaped serous cell clusters on mucous units in seromucous glands." },
    { id: "f8", front: "Merocrine / apocrine / holocrine", back: "Without loss / apical loss / whole loss." },
    { id: "f9", front: "Myoepithelium", back: "Flattened cells with long processes; basket cells; actin and myosin." },
    { id: "f10", front: "Neuroepithelium", back: "Receives sensory stimuli: taste buds, olfactory epithelium." },
    { id: "f11", front: "Basement membrane", back: "Separates epithelium & CT: basal lamina (epithelium) + reticular lamina (CT)." },
    { id: "f12", front: "BM functions", back: "Support · selective filter · selective barrier." },
    { id: "f13", front: "Hemidesmosome", back: "Half-desmosome between epithelial cells and BM." },
    { id: "f14", front: "Basal enfolding", back: "Irregular enfolded base + vertical mitochondria; ion-transporting cells." },
  ],

  highYield: [
    "duct",
    "ductless",
    "have",
    "do not have",
    "mucus",
    "cuboidal",
    "flattened",
    "wide",
    "watery",
    "pyramidal",
    "spherical",
    "narrow",
    "crescent-shaped",
    "demilunes",
    "Merocrine",
    "without loss",
    "Apocrine",
    "apical",
    "Holocrine",
    "whole loss",
    "long cytoplasmic processes",
    "basket",
    "actin",
    "myosin",
    "receive sensory stimuli",
    "taste buds",
    "olfactory epithelium",
    "basal lamina",
    "reticular",
    "half-desmosomes",
    "enfolded",
    "vertically oriented",
  ],

  sheet: [
    {
      heading: "Gland classification",
      points: [
        "Exocrine [[have]] ducts (salivary) · endocrine [[ductless]] (pituitary, thyroid)",
        "Unicellular: goblet · multicellular: salivary",
        "Simple ×6 · compound ×3 (tubular, alveolar, tubuloalveolar)",
      ],
    },
    {
      heading: "Nature of secretion",
      points: [
        "Mucous: [[mucus]], [[cuboidal]], [[flattened]] nuclei, [[wide]] lumen",
        "Serous: [[watery]], [[pyramidal]], [[spherical]] nuclei, [[narrow]] lumen",
        "Mixed: [[crescent-shaped]] [[serous demilunes]]",
      ],
    },
    {
      heading: "Mode of secretion",
      points: ["[[Merocrine]] [[without loss]]", "[[Apocrine]] [[with apical loss]]", "[[Holocrine]] [[with whole loss]]"],
    },
    {
      heading: "Special epithelia",
      points: [
        "Myo-: [[long cytoplasmic processes]], [[basket cells]], [[actin]] + [[myosin]]",
        "Neuro-: [[receive sensory stimuli]]: [[taste buds]], [[olfactory epithelium]]",
      ],
    },
    {
      heading: "Basal surface",
      points: [
        "BM = [[basal lamina]] (epithelium) + [[reticular lamina]] (CT)",
        "Support · selective filter · selective barrier",
        "Hemidesmosome = [[half-desmosomes]] cell ↔ BM",
        "Enfolding: [[enfolded]] + [[vertically oriented mitochondria]]; ion-transporting cells",
      ],
    },
  ],
};

export default lecture;
