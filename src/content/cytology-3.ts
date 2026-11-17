import type { Lecture } from "./types";

/**
 * Cytology 3: Nucleus, cytoskeleton, cytoplasmic inclusions. Dr. Sahar Fayez. 55 slides.
 * [[term]] = colored/bold on the slide (high-yield).
 */
const lecture: Lecture = {
  id: "cytology-3",
  number: 3,
  title: "Cytology 3",
  subtitle: "Nucleus · Cytoskeleton · Inclusions",
  lecturer: "Dr. Sahar Fayez",
  slideCount: 55,
  group: "Cytology",

  sections: [
    // ───────────────────────────────────────── slides 2–3
    {
      id: "nucleus-def",
      title: "Nucleus: definition & composition",
      slides: "2–3",
      keyPoints: [
        "The nucleus is the [[archive]] of the cell: it carries the genetic information in eukaryotic cells.",
        "That information is necessary to regulate the different cell functions.",
        "Composition: mainly DNA (20% of its mass), DNA-binding proteins, and some RNA.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Nucleus",
          text: "The [[archive]] of the cell that carries the *genetic information* in eukaryotic cells, necessary to regulate the different cell functions.",
        },
        { kind: "number", value: "20", unit: "%", label: "DNA = 20% of the nucleus's mass", note: "Plus DNA-binding proteins and some RNA." },
      ],
      explain: "النواة هي «أرشيف» الخلية: فيها المعلومات الوراثية اللي بتتحكم في كل وظايف الخلية. مكوّنة أساسًا من DNA (20% من كتلتها) وبروتينات بتمسك في الـ DNA وشوية RNA.",
      questions: [
        {
          id: "c3-nd-1",
          type: "complete",
          prompt: "The nucleus is the ____ of the cell that carries the genetic information.",
          answers: ["archive"],
          explain: "Archive (red on slide 2).",
        },
        {
          id: "c3-nd-2",
          type: "mcq",
          prompt: "DNA forms what percentage of the nucleus's mass?",
          options: ["20%", "60%", "30%", "10%"],
          answer: 0,
          explain: "DNA = 20% of its mass.",
        },
        {
          id: "c3-nd-3",
          type: "tf",
          statement: "The nucleus consists primarily of DNA, DNA-binding proteins and some RNA.",
          answer: true,
          explain: "Slide 3.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 3–6
    {
      id: "nucleus-lm",
      title: "Nucleus with LM: position, shape, number",
      slides: "3–6",
      keyPoints: [
        "Nuclei appear as a [[basophilic]] structure.",
        "Position: [[centrally]], [[eccentric]] or [[peripheral]].",
        "Shape: most commonly [[spherical]] or [[ovoid]]; may be [[spindle-shaped]] (smooth muscle), bean or [[kidney-shaped]] (monocytes), or [[multilobulated]] (neutrophils).",
        "Number: most often [[mononucleated]]; some [[binucleated]] or even [[multinucleated]].",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Shape → example",
          items: [
            { label: "Spherical / ovoid", note: "most common" },
            { label: "Spindle-shaped", note: "smooth muscle" },
            { label: "Bean / kidney-shaped", note: "monocytes" },
            { label: "Multilobulated", note: "neutrophils" },
          ],
        },
        {
          kind: "chips",
          title: "Position",
          items: [{ label: "Central" }, { label: "Eccentric" }, { label: "Peripheral" }],
        },
        {
          kind: "chips",
          title: "Number per cell",
          items: [{ label: "Mononucleated", note: "most often" }, { label: "Binucleated" }, { label: "Multinucleated" }],
        },
      ],
      explain:
        "بالضوئي النواة زرقا (basophilic). مكانها يا في النص، يا على جنب (eccentric)، يا على الطرف. شكلها غالبًا كروي أو بيضاوي، بس في العضلات الملساء مغزلي، وفي الـ monocytes شكل الكلوة، وفي الـ neutrophils مفصّصة. وغالبًا نواة واحدة، وأحيانًا اتنين أو كتير.",
      questions: [
        {
          id: "c3-nlm-1",
          type: "mcq",
          prompt: "Spindle-shaped nuclei are characteristic of:",
          options: ["Smooth muscle", "Monocytes", "Neutrophils", "Hepatocytes"],
          answer: 0,
          explain: "Spindle = smooth muscle; kidney = monocytes; multilobulated = neutrophils.",
        },
        {
          id: "c3-nlm-2",
          type: "mcq",
          prompt: "Multilobulated nuclei are seen in:",
          options: ["Neutrophils", "Monocytes", "Smooth muscle", "Plasma cells"],
          answer: 0,
          explain: "Neutrophils.",
        },
        {
          id: "c3-nlm-3",
          type: "complete",
          prompt: "Monocytes have bean or ____-shaped nuclei.",
          answers: ["kidney"],
          explain: "Bean or kidney-shaped.",
        },
        {
          id: "c3-nlm-4",
          type: "tf",
          statement: "Most cells are binucleated.",
          answer: false,
          correction: "Most often cells are mononucleated; some may be binucleated or even multinucleated.",
          explain: "\"Mononucleated\" is red on slide 4.",
        },
        {
          id: "c3-nlm-6",
          type: "complete",
          prompt: "Most commonly, nuclei are spherical or ____.",
          answers: ["ovoid", "oval"],
          explain: "Spherical or ovoid.",
        },
        {
          id: "c3-nlm-5",
          type: "mcq",
          prompt: "With LM, the nucleus may be located:",
          options: ["Centrally, eccentric or in a peripheral position", "Only centrally", "Only peripherally", "Outside the cell membrane"],
          answer: 0,
          explain: "Central, eccentric or peripheral.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 7–8
    {
      id: "nucleus-structure",
      title: "Structure of the nucleus & envelope with LM",
      slides: "7–8",
      keyPoints: [
        "The interphase nucleus (not dividing) = nuclear envelope + chromatin + nucleolus + nuclear sap (*karyolymph*).",
        "LM: the envelope appears as a [[single basophilic line]].",
        "Because of condensed chromatin adherent to its inner surface (peripheral chromatin) and ribosomes on its outer surface.",
      ],
      blocks: [
        { kind: "diagram", diagram: "nucleus", title: "The interphase nucleus", caption: "Simplified from slides 22–25." },
        {
          kind: "chips",
          title: "Four components of the interphase nucleus",
          items: [{ label: "Nuclear envelope" }, { label: "Chromatin" }, { label: "Nucleolus" }, { label: "Nuclear sap", note: "karyolymph" }],
        },
      ],
      explain:
        "النواة وهي مش بتنقسم (interphase) فيها 4 حاجات: الغلاف، والكروماتين، والنوية، والعصارة (karyolymph). الغلاف بالضوئي بيبان خط أزرق واحد، عشان لازق فيه كروماتين من جوّه وريبوسومات من برّه.",
      questions: [
        {
          id: "c3-ns-1",
          type: "reason",
          prompt: "Give reason: with LM, the nuclear envelope appears as a single basophilic line.",
          answer:
            "Due to the presence of condensed chromatin adherent to its inner surface (peripheral chromatin) as well as ribosomes on its outer surface.",
          explain: "Slide 8.",
        },
        {
          id: "c3-ns-2",
          type: "mcq",
          prompt: "The nuclear sap is also called:",
          options: ["Karyolymph", "Nucleolonema", "Nuclear lamina", "Pars amorpha"],
          answer: 0,
          explain: "Nuclear sap (karyolymph).",
        },
        {
          id: "c3-ns-3",
          type: "mcq",
          prompt: "The interphase nucleus consists of all of the following EXCEPT:",
          options: ["Centrioles", "Nuclear envelope", "Chromatin", "Nucleolus"],
          answer: 0,
          explain: "Envelope, chromatin, nucleolus and nuclear sap.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 9, 24–25
    {
      id: "envelope-em",
      title: "Nuclear envelope with EM",
      slides: "9, 24–25",
      keyPoints: [
        "[[Two unit]] membranes separated by a [[perinuclear space]] 25 nm wide.",
        "The outer membrane is continuous with rER and sER membranes and may be studded with ribosomes.",
        "On the inner surface of the inner membrane: a layer of condensed chromatin, the [[nuclear lamina]].",
      ],
      blocks: [
        { kind: "number", value: "25", unit: "nm", label: "Width of the perinuclear space" },
        {
          kind: "table",
          title: "The two membranes",
          columns: ["", "Outer membrane", "Inner membrane"],
          rows: [
            ["Continuous with", "rER and sER membranes", "—"],
            ["Covered by", "May be studded with ribosomes", "[[Nuclear lamina]] (condensed chromatin) on its inner surface"],
          ],
        },
      ],
      explain:
        "بالإلكتروني الغلاف غشاءين بينهم مسافة 25 نانومتر (perinuclear space). الغشاء الخارجي متصل بالـ ER وممكن عليه ريبوسومات، والداخلي لازق فيه من جوّه طبقة كروماتين اسمها nuclear lamina.",
      questions: [
        {
          id: "c3-ne-1",
          type: "complete",
          prompt: "The two membranes of the nuclear envelope are separated by a perinuclear space ____ nm wide.",
          answers: ["25"],
          explain: "25 nm (microtubules are also 25 nm in diameter, don't mix them).",
        },
        {
          id: "c3-ne-2",
          type: "mcq",
          prompt: "The layer of condensed chromatin on the inner surface of the inner nuclear membrane is called:",
          options: ["Nuclear lamina", "Nucleolonema", "Pars fibrosa", "Chromatin islets"],
          answer: 0,
          explain: "Nuclear lamina.",
        },
        {
          id: "c3-ne-3",
          type: "tf",
          statement: "The outer nuclear membrane is continuous with the membranes of rER and sER and may be studded with ribosomes.",
          answer: true,
          explain: "Slide 9.",
        },
        {
          id: "c3-ne-4",
          type: "tf",
          statement: "The nuclear envelope consists of a single unit membrane.",
          answer: false,
          correction: "It consists of two unit membranes separated by the perinuclear space.",
          explain: "\"Two unit\" is red on slide 9.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 10–12
    {
      id: "nuclear-pore",
      title: "Nuclear pores",
      slides: "10–12",
      keyPoints: [
        "[[Numerous pores]] interrupt the envelope; through them the nucleus communicates with the cytoplasm.",
        "Each pore is guarded by two annuli (outer and inner), each with *eight* globular subunits.",
        "Eight radially arranged spokes project inwards from them.",
        "In the center: a central granule or plug. The whole structure = [[nuclear pore complex]].",
      ],
      blocks: [
        { kind: "diagram", diagram: "nuclear-pore", title: "Nuclear pore complex, face view", caption: "Built from the slide 10–11 description." },
        {
          kind: "mnemonic",
          phrase: "2 rings × 8 beads, 8 spokes, 1 plug",
          key: [
            { letter: "2", word: "annuli: outer and inner" },
            { letter: "8", word: "globular subunits in each annulus" },
            { letter: "8", word: "radially arranged spokes" },
            { letter: "1", word: "central granule (plug)" },
          ],
        },
      ],
      explain:
        "الغلاف فيه ثقوب كتير النواة بتتواصل منها مع السيتوبلازم. كل ثقب عليه حلقتين (برّه وجوّه)، كل حلقة فيها 8 حبات، وطالع منهم 8 أسلاك للنص، وفي النص سدادة (central granule). المجموعة دي اسمها nuclear pore complex.",
      questions: [
        {
          id: "c3-np-1",
          type: "complete",
          prompt: "Each annulus of the nuclear pore has ____ globular subunits.",
          answers: ["eight", "8"],
          explain: "Eight globular subunits; eight spokes.",
        },
        {
          id: "c3-np-2",
          type: "mcq",
          prompt: "The structure in the center of the nuclear pore is:",
          options: ["A central granule or plug", "A centriole", "The nucleolus", "A ribosome"],
          answer: 0,
          explain: "Central granule (plug) → nuclear pore complex.",
        },
        {
          id: "c3-np-3",
          type: "tf",
          statement: "The nuclear pore is guarded by two annuli, an outer and an inner annulus.",
          answer: true,
          explain: "Slide 10.",
        },
        {
          id: "c3-np-4",
          type: "complete",
          prompt: "The pore with its annuli, spokes and central plug is called the nuclear pore ____.",
          answers: ["complex"],
          explain: "Nuclear pore complex (red on slide 11).",
        },
        {
          id: "c3-np-5",
          type: "mcq",
          prompt: "Numerous pores interrupt the nuclear envelope. Their role:",
          options: ["The nucleus communicates with the cytoplasm through them", "They store Ca++", "They synthesize rRNA", "They form the mitotic spindle"],
          answer: 0,
          explain: "Communication between nucleus and cytoplasm.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 13–14
    {
      id: "chromatin",
      title: "Chromatin",
      slides: "13–14",
      keyPoints: [
        "Nuclear material: a [[complex of DNA and proteins]], responsible for the characteristic basophilia of the nucleus.",
        "Organized as euchromatin or heterochromatin.",
        "DNA is associated with roughly an equal mass of nuclear proteins (e.g., histones) necessary for DNA to function.",
        "Further folding, as in mitosis, produces [[chromosomes]]. Each human cell has 46.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Chromatin",
          text: "Nuclear material, a [[complex of DNA and proteins]], responsible for the characteristic *basophilia of the nucleus*.",
        },
        { kind: "number", value: "46", label: "Chromosomes in each human cell" },
      ],
      explain:
        "الكروماتين هو DNA ملفوف مع بروتينات (زي الـ histones) بنفس الوزن تقريبًا، وهو سبب إن النواة زرقا. لما يتطبّق أكتر وقت الانقسام بيبقى chromosomes، والخلية البشرية فيها 46.",
      questions: [
        {
          id: "c3-ch-1",
          type: "complete",
          prompt: "Each human cell contains ____ chromosomes.",
          answers: ["46"],
          explain: "46 chromosomes.",
        },
        {
          id: "c3-ch-2",
          type: "mcq",
          prompt: "The characteristic basophilia of the nucleus is due to:",
          options: ["Chromatin (complex of DNA and proteins)", "Nuclear sap", "Glycogen", "Perinuclear space"],
          answer: 0,
          explain: "Chromatin.",
        },
        {
          id: "c3-ch-3",
          type: "tf",
          statement: "Further folding of chromatin, such as during mitosis, produces chromosomes.",
          answer: true,
          explain: "Slide 14.",
        },
        {
          id: "c3-ch-4",
          type: "mcq",
          prompt: "DNA in chromatin is associated with roughly an equal mass of proteins such as:",
          options: ["Histones", "Tubulin", "Actin", "Catalase"],
          answer: 0,
          explain: "Histones.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 15–17, 23
    {
      id: "hetero-eu",
      title: "Heterochromatin & euchromatin",
      slides: "15–17, 23",
      keyPoints: [
        "Heterochromatin: [[tightly coiled portions of chromosomes]]; genes [[repressed]], no transcription; predominates in [[inactive cells]].",
        "Heterochromatin LM: fine and coarse [[basophilic]] granules. EM: coarse electron-dense material.",
        "Its clumps sit at the periphery (peripheral chromatin), around the nucleolus (nucleolus-associated chromatin) and as chromatin islets.",
        "Euchromatin: [[extended, uncoiled portions of chromosomes]]; transcription active; predominates in [[active cells]].",
        "Euchromatin LM: [[invisible]] (very thin and extended). EM: fine electron-dense material active in RNA synthesis.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Heterochromatin vs euchromatin",
          columns: ["", "Heterochromatin", "Euchromatin"],
          rows: [
            ["Coiling", "[[Tightly coiled portions of chromosomes]]", "[[Extended, uncoiled portions of chromosomes]]"],
            ["Genes", "[[Repressed]]; no transcription", "Transcription of DNA active"],
            ["Predominates in", "[[Inactive cells]]", "[[Active cells]]"],
            ["LM", "Fine and coarse [[basophilic]] granules", "[[Invisible]] (thin and extended)"],
            ["EM", "Coarse electron-dense clumps", "Fine electron-dense material (active in RNA synthesis)"],
          ],
        },
        {
          kind: "chips",
          title: "Where heterochromatin clumps",
          items: [
            { label: "Periphery of the nucleus", note: "peripheral chromatin" },
            { label: "Around the nucleolus", note: "nucleolus-associated chromatin" },
            { label: "Irregular clumps", note: "chromatin islets" },
          ],
        },
      ],
      explain:
        "الـ heterochromatin ملفوف جامد ومقفول، الجينات فيه مش شغالة، فبيكتر في الخلايا الخاملة وبيبان حبيبات زرقا. الـ euchromatin مفرود وشغال (بيعمل RNA)، فبيكتر في الخلايا النشيطة، ومش بيبان بالضوئي لأنه رفيع جدًا.",
      questions: [
        {
          id: "c3-he-1",
          type: "mcq",
          prompt: "Heterochromatin predominates in:",
          options: ["Inactive cells", "Active cells", "All cells equally", "Only dividing cells"],
          answer: 0,
          explain: "Hetero → inactive. Eu → active.",
        },
        {
          id: "c3-he-2",
          type: "reason",
          prompt: "Give reason: euchromatin is invisible with LM.",
          answer: "Because it is very thin and extended.",
          explain: "Slide 17.",
        },
        {
          id: "c3-he-3",
          type: "tf",
          statement: "In heterochromatin, the genes are repressed and transcription does not occur.",
          answer: true,
          explain: "Slide 15.",
        },
        {
          id: "c3-he-4",
          type: "complete",
          prompt: "Heterochromatin clumped around the nucleolus is called ____-associated chromatin.",
          answers: ["nucleolus", "nucleolar"],
          explain: "Nucleolus-associated chromatin.",
        },
        {
          id: "c3-he-5",
          type: "compare",
          prompt: "Compare heterochromatin and euchromatin.",
          columns: ["", "Heterochromatin", "Euchromatin"],
          rows: [
            ["Coiling", "Tightly coiled portions of chromosomes", "Extended, uncoiled portions of chromosomes"],
            ["Transcription", "Repressed", "Active"],
            ["Predominates in", "Inactive cells", "Active cells"],
            ["LM", "Fine & coarse basophilic granules", "Invisible"],
            ["EM", "Coarse electron-dense", "Fine electron-dense"],
          ],
          explain: "Slides 15–17.",
        },
        {
          id: "c3-he-6",
          type: "mcq",
          prompt: "Irregular clumps of heterochromatin throughout the nucleus are called:",
          options: ["Chromatin islets", "Nuclear lamina", "Nucleolonema", "Pars amorpha"],
          answer: 0,
          explain: "Chromatin islets.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 18–20, 22
    {
      id: "nucleolus",
      title: "Nucleolus",
      slides: "18–20, 22",
      keyPoints: [
        "A spherical, [[basophilic]] (H&E) structure rich in rRNA and protein.",
        "LM: usually one; sometimes several. Basophilic mainly due to [[nucleolus-associated chromatin]].",
        "EM: a sponge of dark granular ([[pars granulosa]]) and fibrillar ([[pars fibrosa]]) parts, together forming the [[nucleolonema]].",
        "The nucleolonema is ribonucleoprotein permeated by dispersed DNA filaments (*pars amorpha*).",
        "Primary function: synthesis of ribosomal RNA (rRNA).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Parts of the nucleolus (EM)",
          columns: ["Part", "What it is"],
          rows: [
            ["[[Pars granulosa]]", "Granular dark material"],
            ["[[Pars fibrosa]]", "Fibrillar dark material (formed from newly transcribed rRNA, slide 20)"],
            ["[[Nucleolonema]]", "Granulosa + fibrosa: a ribonucleoprotein sponge"],
            ["Pars amorpha", "Dispersed filaments of DNA permeating the nucleolonema"],
          ],
        },
        {
          kind: "definition",
          term: "Nuclear organizing (NO) regions",
          text: "Pale circular areas surrounded by a rim of electron-dense filaments, collectively the *pars fibrosa* (slide 20 caption).",
        },
      ],
      explain:
        "النوية كورة زرقا غنية بالـ rRNA والبروتين، وغالبًا واحدة. بالإلكتروني شكلها إسفنجة: جزء حُبيبي (granulosa) وجزء ليفي (fibrosa) عاملين الـ nucleolonema، ومتخلّلها خيوط DNA (amorpha). شغلها الأساسي إنها تعمل الـ rRNA.",
      questions: [
        {
          id: "c3-nu-1",
          type: "mcq",
          prompt: "The primary function of the nucleolus is:",
          options: ["Synthesis of ribosomal RNA (rRNA)", "Synthesis of steroid hormones", "Storage of Ca++", "Formation of the mitotic spindle"],
          answer: 0,
          explain: "rRNA synthesis.",
        },
        {
          id: "c3-nu-2",
          type: "complete",
          prompt: "The granular and fibrillar parts of the nucleolus together form the ____.",
          answers: ["nucleolonema"],
          explain: "Pars granulosa + pars fibrosa = nucleolonema.",
        },
        {
          id: "c3-nu-3",
          type: "reason",
          prompt: "Give reason: the nucleolus is usually basophilic with LM.",
          answer: "Mainly due to the nucleolus-associated chromatin (it is also rich in rRNA).",
          explain: "Slide 18.",
        },
        {
          id: "c3-nu-4",
          type: "mcq",
          prompt: "Dispersed filaments of DNA permeating the nucleolonema are called:",
          options: ["Pars amorpha", "Pars granulosa", "Pars fibrosa", "Nuclear lamina"],
          answer: 0,
          explain: "Pars amorpha.",
        },
        {
          id: "c3-nu-5",
          type: "tf",
          statement: "With LM, a cell always has only one nucleolus.",
          answer: false,
          correction: "One nucleolus is usually seen, but sometimes several may be present.",
          explain: "Slide 18.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 21, 26
    {
      id: "sap-functions",
      title: "Nuclear sap & functions of the nucleus",
      slides: "21, 26",
      keyPoints: [
        "Nuclear sap: a colloidal solution in which chromatin is suspended. It fills the spaces between chromatin, envelope and nucleolus.",
        "Made mainly of proteins (some enzymatic), metabolites and ions. Helps move RNA (rRNA, tRNA, mRNA) toward the pores.",
        "[[Cellular activities regulation]]: [[houses genetic material]], which directs all cellular activities and regulates cellular structure.",
        "[[Production]]: makes ribosomal subunits in the nucleolus and exports them to the cytoplasm for assembly into ribosomes.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Nuclear sap",
          aside: "karyolymph",
          text: "A *colloidal solution* in which chromatin is suspended, filling the spaces between the chromatin, nuclear envelope and nucleolus.",
        },
        {
          kind: "list",
          title: "Functions of the nucleus",
          items: [
            "[[Cellular activities regulation]]: [[houses genetic material]], which directs all cellular activities and regulates cellular structure.",
            "[[Production]]: produces ribosomal subunits in the nucleolus and exports them into the cytoplasm for assembly into ribosomes.",
          ],
        },
      ],
      explain:
        "العصارة النووية سائل غروي الكروماتين عايم فيه، وبيساعد الـ RNA يتحرك ناحية الثقوب. والنواة ليها وظيفتين: تتحكم في كل نشاط الخلية لأنها شايلة المادة الوراثية، وتعمل وحدات الريبوسوم في النوية وتبعتها للسيتوبلازم.",
      questions: [
        {
          id: "c3-sf-1",
          type: "mcq",
          prompt: "The nuclear sap helps in:",
          options: ["Movement of RNA (rRNA, tRNA, mRNA) toward the pores", "Synthesis of glycogen", "Formation of the nuclear lamina", "Steroid synthesis"],
          answer: 0,
          explain: "Slide 21.",
        },
        {
          id: "c3-sf-2",
          type: "tf",
          statement: "The nucleus produces ribosomal subunits in the nucleolus and exports them into the cytoplasm for assembly into ribosomes.",
          answer: true,
          explain: "Function 2: Production.",
        },
        {
          id: "c3-sf-3",
          type: "complete",
          prompt: "The nucleus regulates cellular activities because it houses ____ material.",
          answers: ["genetic"],
          explain: "Houses genetic material.",
        },
        {
          id: "c3-sf-5",
          type: "mcq",
          prompt: "The two functions of the nucleus listed on slide 26 are:",
          options: [
            "Cellular activities regulation and Production of ribosomal subunits",
            "Steroid synthesis and drug detoxification",
            "Energy production and Ca++ regulation",
            "Phagocytosis and pinocytosis",
          ],
          answer: 0,
          explain: "1- Cellular activities regulation, 2- Production.",
        },
        {
          id: "c3-sf-4",
          type: "mcq",
          prompt: "Nuclear sap is best described as:",
          options: ["A colloidal solution", "A crystalline core", "A double membrane", "A dense granule"],
          answer: 0,
          explain: "Colloidal solution.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 27–29
    {
      id: "cytofilaments",
      title: "Cytoskeleton & cytofilaments",
      slides: "27–29",
      keyPoints: [
        "Cytoskeleton: a complex network of minute filaments and tubules in every cell. Maintains shape and stability; responsible for some functions.",
        "It includes [[cytofilaments and microtubules]].",
        "Cytofilaments: minute [[thread-like]] structures of three types.",
        "[[Actin (thin)]] ≈ 5 nm: muscle cell, core of each microvillus, motile cells (macrophages), developing nerve cells. Motility and contraction.",
        "[[Myosin (thick)]] ≈ 15 nm: mainly in muscle cells, with actin.",
        "[[Intermediate filaments]] ≈ 10 nm: neurofilaments (neurons), glial filaments (astrocytes), tonofilaments (epithelial cells).",
      ],
      blocks: [
        {
          kind: "table",
          title: "The three cytofilaments",
          columns: ["Type", "Diameter", "Found in"],
          rows: [
            ["[[Actin (thin)]]", "≈ 5 nm", "Muscle cell, core of each microvillus, macrophages, developing nerve cells"],
            ["[[Intermediate filaments]]", "≈ 10 nm", "Neurofilaments (neurons), glial filaments (astrocytes), tonofilaments (epithelial cells)"],
            ["[[Myosin (thick)]]", "≈ 15 nm", "Mainly muscle cells, with actin"],
          ],
        },
        {
          kind: "mnemonic",
          phrase: "5 – 10 – 15 – 25: thin, middle, thick, tube",
          key: [
            { letter: "5", word: "Actin (thin) filaments" },
            { letter: "10", word: "Intermediate filaments" },
            { letter: "15", word: "Myosin (thick) filaments" },
            { letter: "25", word: "Microtubules (next section)" },
          ],
        },
      ],
      explain:
        "الهيكل الخلوي شبكة خيوط وأنابيب بتحافظ على شكل الخلية. الخيوط 3 أنواع: actin رفيع (5 نانو) في العضلات والـ microvilli والخلايا اللي بتتحرك، myosin تخين (15) في العضلات، وintermediate في النص (10) وليه أسماء حسب الخلية: neurofilaments وglial filaments وtonofilaments.",
      questions: [
        {
          id: "c3-cf-1",
          type: "mcq",
          prompt: "The diameter of actin (thin) filaments is about:",
          options: ["5 nm", "10 nm", "15 nm", "25 nm"],
          answer: 0,
          explain: "Actin 5, intermediate 10, myosin 15, microtubules 25.",
        },
        {
          id: "c3-cf-2",
          type: "mcq",
          prompt: "Tonofilaments are intermediate filaments found in:",
          options: ["Epithelial cells", "Neurons", "Astrocytes", "Muscle cells"],
          answer: 0,
          explain: "Neurofilaments → neurons, glial filaments → astrocytes, tonofilaments → epithelial cells.",
        },
        {
          id: "c3-cf-3",
          type: "complete",
          prompt: "Myosin (thick) filaments have a diameter of ____ nm.",
          answers: ["15"],
          explain: "15 nm.",
        },
        {
          id: "c3-cf-4",
          type: "tf",
          statement: "Actin filaments are found in the core of each microvillus.",
          answer: true,
          explain: "Slide 28.",
        },
        {
          id: "c3-cf-5",
          type: "mcq",
          prompt: "Glial filaments are found in:",
          options: ["Astrocytes", "Neurons", "Epithelial cells", "Macrophages"],
          answer: 0,
          explain: "Astrocytes.",
        },
        {
          id: "c3-cf-6",
          type: "complete",
          prompt: "Cytofilaments are minute ____-like structures of three types.",
          answers: ["thread", "thread-like"],
          explain: "Thread-like (red on slide 28).",
        },
      ],
    },

    // ───────────────────────────────────────── slides 30–31
    {
      id: "microtubules",
      title: "Microtubules",
      slides: "30–31",
      keyPoints: [
        "Non-branching, rigid, hollow tubular structures of variable length, with a [[constant diameter of 25 nm]].",
        "Stable permanent structures in cilia, flagella, centrioles and basal bodies.",
        "Made of tubulin (α, β), organized into [[protofilaments]] running parallel to the tubule.",
        "[[13 protofilaments]] make up the wall.",
        "They originate from the MTOC near the nucleus and grow toward the cell periphery.",
      ],
      blocks: [
        { kind: "number", value: "25", unit: "nm", label: "Constant diameter of a microtubule", note: "Length is variable." },
        { kind: "number", value: "13", label: "Protofilaments in the wall", note: "Made of tubulin α and β." },
        {
          kind: "chips",
          title: "Stable permanent microtubules in",
          items: [{ label: "Cilia" }, { label: "Flagella" }, { label: "Centrioles" }, { label: "Basal bodies" }],
        },
      ],
      explain:
        "الـ microtubules أنابيب مجوّفة جامدة مش متفرّعة، قطرها ثابت 25 نانو. حيطتها 13 protofilament من بروتين tubulin (ألفا وبيتا). بتطلع من المركز (MTOC) جنب النواة وتمشي لأطراف الخلية، ودايمة في الـ cilia والـ flagella والسنتريولات.",
      questions: [
        {
          id: "c3-mt-1",
          type: "complete",
          prompt: "A total of ____ protofilaments comprise the wall of a microtubule.",
          answers: ["13", "thirteen"],
          explain: "13 protofilaments.",
        },
        {
          id: "c3-mt-2",
          type: "mcq",
          prompt: "Microtubules have a constant diameter of:",
          options: ["25 nm", "5 nm", "10 nm", "15 nm"],
          answer: 0,
          explain: "25 nm.",
        },
        {
          id: "c3-mt-3",
          type: "tf",
          statement: "Microtubules are branching, flexible solid rods.",
          answer: false,
          correction: "They are non-branching, rigid, hollow tubular structures.",
          explain: "Slide 30.",
        },
        {
          id: "c3-mt-4",
          type: "mcq",
          prompt: "Microtubules are made of the protein:",
          options: ["Tubulin (α, β)", "Actin", "Myosin", "Keratin"],
          answer: 0,
          explain: "Tubulin α and β → protofilaments.",
        },
        {
          id: "c3-mt-5",
          type: "tf",
          statement: "Microtubules grow from the MTOC near the nucleus and extend toward the cell periphery.",
          answer: true,
          explain: "Slide 31.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 31–35
    {
      id: "cytoskeleton-functions",
      title: "Functions of the cytoskeleton",
      slides: "31–35",
      keyPoints: [
        "Structural support for the plasmalemma, organelles and some cytosol enzyme systems.",
        "Movement of organelles in the cytoplasm (vesicular transport of secretory vesicles, endosomes, lysosomes).",
        "Cell motility, and the framework of cilia and flagella.",
        "Contractility of muscle cells.",
        "Epithelial cell adhesion and cell division.",
      ],
      blocks: [
        {
          kind: "list",
          title: "Functions of the cytoskeleton",
          items: [
            "Structural support for the plasmalemma, cellular organelles and some cytosol enzyme systems.",
            "Movement of intracellular organelles: vesicular transport of secretory vesicles, endosomes and lysosomes.",
            "Cell motility; framework of motile structures such as cilia and flagella.",
            "Contractility of the muscle cells.",
            "Epithelial cell adhesion, as well as cell division.",
          ],
        },
        {
          kind: "mnemonic",
          phrase: "Some Movers Make Cells Adhere",
          key: [
            { letter: "S", word: "Support" },
            { letter: "M", word: "Movement of organelles" },
            { letter: "M", word: "Motility (cilia, flagella)" },
            { letter: "C", word: "Contractility of muscle" },
            { letter: "A", word: "Adhesion of epithelium + cell division" },
          ],
        },
      ],
      explain:
        "الهيكل الخلوي بيسند الغشاء والعضيات، وبيحرّك الحويصلات جوّه الخلية، وبيعمل حركة الخلية والـ cilia، وبيخلي العضلات تنقبض، وبيساعد في لزق الخلايا الطلائية وفي انقسام الخلية.",
      questions: [
        {
          id: "c3-cs-1",
          type: "mcq",
          prompt: "All are functions of the cytoskeleton EXCEPT:",
          options: ["Synthesis of rRNA", "Contractility of muscle cells", "Intracellular vesicular transport", "Epithelial cell adhesion"],
          answer: 0,
          explain: "rRNA synthesis is the nucleolus.",
        },
        {
          id: "c3-cs-2",
          type: "tf",
          statement: "The cytoskeleton provides the framework of motile structures such as cilia and flagella.",
          answer: true,
          explain: "Function 3.",
        },
        {
          id: "c3-cs-3",
          type: "complete",
          prompt: "The cytoskeleton provides structural support for the plasmalemma, cellular organelles and some cytosol ____ systems.",
          answers: ["enzyme", "enzymes"],
          explain: "Function 1.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 36–40
    {
      id: "inclusions-glycogen",
      title: "Inclusions & glycogen",
      slides: "36–40",
      keyPoints: [
        "Inclusions: temporary lifeless accumulations of metabolites or cell products: [[stored food, pigments and crystals]].",
        "Glycogen: stored chiefly in hepatocytes and muscle cells; a highly branched polymer storing glucose.",
        "[[Not stained]] in routine H&E; seen with special methods (toluidine blue or PAS).",
        "In H&E sections: clear rough-edged spaces.",
        "EM: α-particles in chondrocytes and hepatocytes as [[rosettes]]; β-particles in muscle as [[single particles]] slightly larger than ribosomes.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Cytoplasmic inclusions",
          text: "*Temporary lifeless* accumulations of metabolites or cell products, such as [[stored food, pigments and crystals]].",
        },
        {
          kind: "tree",
          title: "The inclusions in this lecture",
          root: {
            label: "Inclusions",
            children: [
              { label: "Stored food", children: [{ label: "Glycogen" }, { label: "Lipids" }] },
              {
                label: "Pigments",
                children: [
                  { label: "Exogenous", note: "carotenes, dusts, minerals, tattoo marks" },
                  { label: "Endogenous", note: "hemoglobin, hemosiderin, bilirubin, melanin, lipofuscin" },
                ],
              },
              { label: "Crystals", note: "Reinke (Leydig cells), Sertoli cells, lens" },
            ],
          },
        },
        {
          kind: "table",
          title: "Glycogen with EM",
          columns: ["", "α-particles", "β-particles"],
          rows: [
            ["Found in", "Chondrocytes and hepatocytes", "Muscle cells"],
            ["Look like", "[[Rosettes]] of moderately electron-dense particles", "[[Single particles]] slightly larger than ribosomes"],
          ],
        },
      ],
      explain:
        "الـ inclusions حاجات مؤقتة ومش حيّة متخزّنة في الخلية: أكل متخزّن، أصباغ، بلّورات. الجليكوجين متخزّن في الكبد والعضلات، ومش بيصطبغ بالـ H&E (بيبان فراغات حوافها خشنة)، لكن بيبان بالـ PAS أو toluidine blue. بالإلكتروني: في الكبد شكله وردة (α rosettes)، وفي العضلات حبات منفردة (β).",
      questions: [
        {
          id: "c3-gl-1",
          type: "mcq",
          prompt: "Glycogen is not stained in routine H&E. It can be demonstrated with LM by:",
          options: ["PAS or toluidine blue", "Routine H&E", "Sudan III", "Iron hematoxylin"],
          answer: 0,
          explain: "Not stained in H&E; special methods such as toluidine blue or PAS.",
        },
        {
          id: "c3-gl-2",
          type: "complete",
          prompt: "With EM, α-particles of glycogen in hepatocytes appear as ____ of moderately electron-dense particles.",
          answers: ["rosettes", "rosette"],
          explain: "Rosettes (red on slide 38).",
        },
        {
          id: "c3-gl-3",
          type: "tf",
          statement: "Inclusions are permanent living structures.",
          answer: false,
          correction: "They are temporary lifeless accumulations of metabolites or cell products.",
          explain: "Organelles are permanent; inclusions are temporary.",
        },
        {
          id: "c3-gl-4",
          type: "mcq",
          prompt: "β-particles of glycogen are found in:",
          options: ["Muscle cells, as single particles", "Hepatocytes, as rosettes", "Chondrocytes, as rosettes", "Neurons, as crystals"],
          answer: 0,
          explain: "β = muscle, single particles slightly larger than ribosomes.",
        },
        {
          id: "c3-gl-5",
          type: "mcq",
          prompt: "In H&E sections, glycogen is seen as:",
          options: ["Clear rough-edged spaces", "Unstained regular-shaped vacuoles", "Black droplets", "Orange droplets"],
          answer: 0,
          explain: "Rough-edged = glycogen; regular-shaped vacuoles = lipids.",
        },
        {
          id: "c3-gl-6",
          type: "complete",
          prompt: "Cytoplasmic inclusions include stored food, pigments and ____.",
          answers: ["crystals", "crystal"],
          explain: "Stored food, pigments and crystals.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 41–45
    {
      id: "lipids",
      title: "Lipids",
      slides: "41–45",
      keyPoints: [
        "Stored by fat cells of adipose tissue and fat-storing cells of the liver. Nutritive inclusions giving energy.",
        "Routine processing extracts lipids, so in H&E they appear as [[unstained regular-shaped vacuoles]].",
        "Best shown in [[frozen]] sections: osmium (black) or Sudan III (orange).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Staining lipids",
          columns: ["Method", "Result"],
          rows: [
            ["Routine H&E", "[[Unstained regular-shaped vacuoles]] (lipid extracted)"],
            ["Osmium (frozen section)", "Black"],
            ["Sudan III (frozen section)", "Orange"],
          ],
        },
        {
          kind: "table",
          title: "Glycogen vs lipid in H&E",
          columns: ["", "Glycogen", "Lipid"],
          rows: [
            ["Appearance", "Clear rough-edged spaces", "Unstained regular-shaped vacuoles"],
            ["Special stain", "PAS / toluidine blue", "Osmium (black) / Sudan III (orange) on frozen sections"],
          ],
        },
      ],
      explain:
        "الدهون متخزّنة في خلايا الدهن وخلايا الكبد، وبتدّي طاقة. التحضير العادي بيدوّبها، فبتبان في الـ H&E فراغات منتظمة فاضية. عشان نشوفها لازم frozen section ونصبغ بالأوزميوم (أسود) أو Sudan III (برتقاني).",
      questions: [
        {
          id: "c3-li-1",
          type: "reason",
          prompt: "Give reason: lipid droplets appear as unstained vacuoles in H&E sections.",
          answer: "Because routine processing generally extracts lipids from the tissue.",
          explain: "Slide 41.",
        },
        {
          id: "c3-li-2",
          type: "mcq",
          prompt: "Sudan III stains lipids:",
          options: ["Orange", "Black", "Blue", "Red"],
          answer: 0,
          explain: "Osmium → black, Sudan III → orange.",
        },
        {
          id: "c3-li-3",
          type: "complete",
          prompt: "Lipids are best demonstrated in ____ sections stained by specific lipid methods.",
          answers: ["frozen"],
          explain: "Frozen sections.",
        },
        {
          id: "c3-li-4",
          type: "compare",
          prompt: "Compare glycogen and lipids in H&E sections.",
          columns: ["", "Glycogen", "Lipids"],
          rows: [
            ["H&E", "Clear rough-edged spaces", "Unstained regular-shaped vacuoles"],
            ["Special stain", "PAS / toluidine blue", "Osmium (black), Sudan III (orange)"],
          ],
          explain: "Slides 37–41.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 46–48
    {
      id: "carotenes",
      title: "Pigments: exogenous & carotenes",
      slides: "46–48",
      keyPoints: [
        "Pigments: substances with their own color in their natural status.",
        "[[Exogenous pigments]]: produced outside the body: [[carotenes, dusts, minerals and tattoo marks]].",
        "Carotenes: fat-soluble compounds in carrots, tomatoes, vegetable juice. They color animal body fat [[fat yellow]].",
        "Carotenes are provitamins, convertible into vitamin A.",
        "Large intake → yellow or reddish skin = [[carotenemia]] (↑ carotene in blood), easily confused with jaundice (↑ bilirubin).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Carotenemia vs jaundice",
          columns: ["", "Carotenemia", "Jaundice"],
          rows: [
            ["Cause", "Increased carotene level in the blood", "Increased bilirubin level in the blood"],
            ["Seriousness", "From eating large amounts of carotenes", "More serious pathological condition"],
          ],
        },
        {
          kind: "chips",
          title: "Exogenous pigments",
          items: [{ label: "Carotenes" }, { label: "Dusts" }, { label: "Minerals" }, { label: "Tattoo marks" }],
        },
      ],
      explain:
        "الأصباغ الخارجية جاية من برّه الجسم: كاروتين وتراب ومعادن ووشم. الكاروتين في الجزر والطماطم، بيدوب في الدهون وبيتحوّل لفيتامين A. لو اتاكل كتير الجلد يصفرّ (carotenemia)، وده ممكن يتلخبط مع الصفرا (jaundice) اللي هي أخطر.",
      questions: [
        {
          id: "c3-ca-1",
          type: "mcq",
          prompt: "Carotenemia may be confused with:",
          options: ["Jaundice", "Gout", "Anemia", "Silver pigmentation"],
          answer: 0,
          explain: "Carotenemia (↑ carotene) vs jaundice (↑ bilirubin).",
        },
        {
          id: "c3-ca-2",
          type: "tf",
          statement: "Carotenes are provitamins and may be converted into vitamin A.",
          answer: true,
          explain: "Slide 47.",
        },
        {
          id: "c3-ca-3",
          type: "complete",
          prompt: "When animals feed on carotene-containing vegetables, their body fat becomes ____.",
          answers: ["yellow"],
          explain: "Fat yellow.",
        },
        {
          id: "c3-ca-4",
          type: "mcq",
          prompt: "Exogenous pigments include all EXCEPT:",
          options: ["Melanin", "Carotenes", "Dusts", "Tattoo marks"],
          answer: 0,
          explain: "Melanin is endogenous.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 49–50
    {
      id: "dusts-minerals",
      title: "Dusts, minerals & tattoo marks",
      slides: "49–50",
      keyPoints: [
        "Heavy smokers' lungs blacken due to [[carbon particles]] in alveolar macrophages in the alveolar wall.",
        "[[Silver]] causes gray pigmentation of the body.",
        "[[Lead]] can impart a blue line to the gum.",
        "[[Tattoo marks]]: inorganic pigments inserted deeply in the skin with needles; ingested by subcutaneous macrophages and stay permanently.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Exogenous pigment → result",
          columns: ["Pigment", "Result"],
          rows: [
            ["Dust: [[carbon particles]]", "Blackened lungs of heavy smokers (in alveolar macrophages)"],
            ["[[Silver]]", "Gray pigmentation of the body"],
            ["[[Lead]]", "Blue line on the gum"],
            ["[[Tattoo marks]]", "Remain permanently in subcutaneous macrophages"],
          ],
        },
      ],
      explain:
        "رئة المدخّن بتسوَدّ من الكربون اللي بتبلعه الـ macrophages. الفضة بتخلي الجسم رمادي، والرصاص بيعمل خط أزرق في اللثة. والوشم صبغة بتتحط بالإبر وتبلعها الـ macrophages تحت الجلد وتفضل جوّاها على طول.",
      questions: [
        {
          id: "c3-dm-1",
          type: "mcq",
          prompt: "Lead can impart:",
          options: ["A blue line to the gum", "Gray pigmentation of the body", "Yellow skin", "Black lungs"],
          answer: 0,
          explain: "Lead → blue gum line. Silver → gray body.",
        },
        {
          id: "c3-dm-2",
          type: "reason",
          prompt: "Give reason: tattoo marks are permanent.",
          answer: "Because the inorganic pigments are ingested by the subcutaneous macrophages and remain permanently within their cytoplasm.",
          explain: "Slide 50.",
        },
        {
          id: "c3-dm-3",
          type: "complete",
          prompt: "The lungs of heavy smokers are blackened by accumulation of ____ particles in alveolar macrophages.",
          answers: ["carbon"],
          explain: "Carbon particles.",
        },
        {
          id: "c3-dm-4",
          type: "tf",
          statement: "Silver causes a gray pigmentation of the body.",
          answer: true,
          explain: "Slide 50.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 51–53
    {
      id: "endogenous",
      title: "Endogenous pigments",
      slides: "51–53",
      keyPoints: [
        "Endogenous pigments: hemoglobin, hemosiderin, bilirubin, melanin and lipofuscin.",
        "Hemoglobin: [[red iron-containing]] pigment of erythrocytes; transports O2 and CO2.",
        "Old RBCs are degraded by spleen macrophages; hemoglobin → hemosiderin + bilirubin.",
        "Hemosiderin: [[golden brown]], iron-containing, in splenic macrophages. Bilirubin: [[yellowish brown]], removed by the liver, excreted in bile.",
        "Melanin: [[brown-black]], in skin, hair and eyes.",
        "Lipofuscin: [[golden-brown]], normal product of organelle degradation. Builds up with age in neurons and cardiac muscle = [[age pigments or wear and tear pigments]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Endogenous pigments",
          columns: ["Pigment", "Color", "Where / note"],
          rows: [
            ["Hemoglobin", "[[Red]], iron-containing", "Erythrocytes; O2 and CO2 transport"],
            ["Hemosiderin", "[[Golden brown]], iron-containing", "Splenic macrophages (from old RBCs)"],
            ["Bilirubin", "[[Yellowish brown]]", "Removed from blood by the liver, excreted in bile"],
            ["Melanin", "[[Brown-black]]", "Skin, hair, eyes"],
            ["Lipofuscin", "[[Golden-brown]]", "Neurons, cardiac muscle; [[age pigments or wear and tear pigments]]"],
          ],
        },
        {
          kind: "steps",
          title: "Breakdown of an old red cell",
          items: ["Old erythrocytes are degraded by spleen macrophages.", "Hemoglobin → hemosiderin + bilirubin.", "Hemosiderin stays in splenic macrophages; bilirubin goes to the liver and out in bile."],
        },
      ],
      explain:
        "الأصباغ الداخلية بيعملها الجسم: الهيموجلوبين أحمر فيه حديد وبينقل الأكسجين. لما كرة الدم الحمرا تعجّز الطحال يكسّرها لـ hemosiderin (بني دهبي فيه حديد) وbilirubin (بني مصفر، بيتشال في الكبد ويطلع في الصفرا). الميلانين بني غامق في الجلد والشعر والعين، والـ lipofuscin بني دهبي بيتراكم مع السن في الأعصاب والقلب (صبغة الشيخوخة).",
      questions: [
        {
          id: "c3-en-1",
          type: "mcq",
          prompt: "The golden-brown pigment that accumulates with age in neurons and cardiac muscle cells is:",
          options: ["Lipofuscin", "Melanin", "Hemosiderin", "Bilirubin"],
          answer: 0,
          explain: "Lipofuscin = age / wear and tear pigment.",
        },
        {
          id: "c3-en-2",
          type: "mcq",
          prompt: "Hemosiderin is:",
          options: [
            "A golden brown iron-containing pigment in splenic macrophages",
            "A yellowish brown pigment excreted in bile",
            "A brown-black pigment in skin",
            "A red pigment of erythrocytes",
          ],
          answer: 0,
          explain: "Hemosiderin: golden brown, iron, spleen.",
        },
        {
          id: "c3-en-3",
          type: "reason",
          prompt: "Give reason: lipofuscin is called the age pigment or wear and tear pigment.",
          answer:
            "Because it is a normal product of organelles' degradation that accumulates with increasing age, particularly in long-lived cells such as neurons and cardiac muscle cells.",
          explain: "Slide 53.",
        },
        {
          id: "c3-en-4",
          type: "complete",
          prompt: "Melanin is a ____ pigment present in skin, hair and eyes.",
          answers: ["brown-black", "brown black", "brownblack"],
          explain: "Brown-black.",
        },
        {
          id: "c3-en-5",
          type: "tf",
          statement: "Bilirubin is a yellowish brown pigment removed from the blood stream by the liver and excreted in bile.",
          answer: true,
          explain: "Slide 52.",
        },
        {
          id: "c3-en-6",
          type: "mcq",
          prompt: "Hemoglobin is described as:",
          options: ["A red iron-containing pigment of erythrocytes", "A golden-brown age pigment", "An exogenous pigment", "A fat-soluble provitamin"],
          answer: 0,
          explain: "Red, iron-containing; O2 and CO2 transport.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 54
    {
      id: "crystals",
      title: "Crystals",
      slides: "54",
      keyPoints: [
        "Leydig cells of human testes contain elongated cytoplasmic [[crystals of Reinke]].",
        "Found only in adults; their function is unknown.",
        "Protein crystals are also present in Sertoli cells of the testes and in the lens of the eye.",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Where crystals are found",
          items: [
            { label: "Leydig cells (testis)", note: "crystals of Reinke; adults only" },
            { label: "Sertoli cells (testis)", note: "protein crystals" },
            { label: "Lens of the eye", note: "protein crystals" },
          ],
        },
      ],
      explain: "في خلايا Leydig في الخصية فيه بلورات طويلة اسمها crystals of Reinke، بتظهر في الكبار بس ووظيفتها مش معروفة. وفيه بلورات بروتين كمان في خلايا Sertoli وفي عدسة العين.",
      questions: [
        {
          id: "c3-cr-1",
          type: "mcq",
          prompt: "Crystals of Reinke are found in:",
          options: ["Leydig cells of the testis", "Sertoli cells", "Hepatocytes", "Neurons"],
          answer: 0,
          explain: "Leydig cells; Sertoli cells and lens have other protein crystals.",
        },
        {
          id: "c3-cr-2",
          type: "tf",
          statement: "Crystals of Reinke are found in children and have a well-known function.",
          answer: false,
          correction: "They are found only in adults and their function is unknown.",
          explain: "Slide 54.",
        },
        {
          id: "c3-cr-3",
          type: "complete",
          prompt: "Protein crystals are present in the Sertoli cells of the testes and in the ____ of the eye.",
          answers: ["lens"],
          explain: "Lens of the eye.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Nucleus", back: "Archive of the cell; DNA = 20% of its mass + DNA-binding proteins + some RNA." },
    { id: "f2", front: "Nuclear shapes", back: "Spherical/ovoid; spindle (smooth muscle); kidney (monocytes); multilobulated (neutrophils)." },
    { id: "f3", front: "Interphase nucleus", back: "Nuclear envelope · chromatin · nucleolus · nuclear sap (karyolymph)." },
    { id: "f4", front: "Envelope with LM", back: "Single basophilic line: peripheral chromatin inside + ribosomes outside." },
    { id: "f5", front: "Envelope with EM", back: "Two unit membranes; perinuclear space 25 nm; outer continuous with ER; nuclear lamina inside." },
    { id: "f6", front: "Nuclear pore complex", back: "Two annuli × 8 globular subunits; 8 radial spokes; central granule (plug)." },
    { id: "f7", front: "Chromatin", back: "Complex of DNA and proteins (histones); basophilia of nucleus; folds into chromosomes (46)." },
    { id: "f8", front: "Heterochromatin", back: "Tightly coiled, repressed; inactive cells; LM basophilic granules; peripheral, nucleolus-associated, islets." },
    { id: "f9", front: "Euchromatin", back: "Extended, uncoiled, active transcription; active cells; LM invisible; EM fine electron-dense." },
    { id: "f10", front: "Nucleolus", back: "Basophilic, rRNA + protein; pars granulosa + fibrosa = nucleolonema; pars amorpha = DNA; makes rRNA." },
    { id: "f11", front: "Nuclear sap", back: "Colloidal solution; proteins, metabolites, ions; moves RNA toward the pores." },
    { id: "f12", front: "Functions of the nucleus", back: "Regulates activities (houses genetic material) · produces ribosomal subunits." },
    { id: "f13", front: "Cytofilament sizes", back: "Actin 5 nm · intermediate 10 nm · myosin 15 nm (microtubule 25 nm)." },
    { id: "f14", front: "Intermediate filaments", back: "Neurofilaments (neurons), glial filaments (astrocytes), tonofilaments (epithelium)." },
    { id: "f15", front: "Actin filaments are in…", back: "Muscle cells, core of microvilli, macrophages, developing nerve cells." },
    { id: "f16", front: "Microtubules", back: "Non-branching, rigid, hollow; 25 nm; 13 protofilaments of tubulin α, β; from MTOC." },
    { id: "f17", front: "Cytoskeleton functions", back: "Support · organelle movement · motility (cilia) · muscle contraction · adhesion & division." },
    { id: "f18", front: "Inclusions", back: "Temporary lifeless accumulations: stored food, pigments, crystals." },
    { id: "f19", front: "Glycogen staining", back: "Not stained by H&E (clear rough-edged spaces); PAS or toluidine blue." },
    { id: "f20", front: "Glycogen with EM", back: "α rosettes (hepatocytes, chondrocytes); β single particles (muscle)." },
    { id: "f21", front: "Lipids staining", back: "H&E: unstained regular-shaped vacuoles. Frozen: osmium black, Sudan III orange." },
    { id: "f22", front: "Exogenous pigments", back: "Carotenes, dusts, minerals, tattoo marks." },
    { id: "f23", front: "Carotenemia", back: "Yellow/reddish skin from excess carotene; confused with jaundice (↑ bilirubin)." },
    { id: "f24", front: "Silver vs lead", back: "Silver: gray body. Lead: blue line on the gum." },
    { id: "f25", front: "Hemosiderin vs bilirubin", back: "Hemosiderin: golden brown, iron, splenic macrophages. Bilirubin: yellowish brown, liver → bile." },
    { id: "f26", front: "Lipofuscin", back: "Golden-brown; organelle breakdown; neurons, cardiac muscle; age / wear and tear pigment." },
    { id: "f27", front: "Crystals of Reinke", back: "Leydig cells of adult testes; function unknown." },
  ],

  highYield: [
    "archive",
    "centrally",
    "peripheral",
    "spherical",
    "ovoid",
    "multinucleated",
    "Cellular activities regulation",
    "golden-brown",
    "basophilic",
    "eccentric",
    "spindle-shaped",
    "kidney",
    "multilobulated",
    "mononucleated",
    "binucleated",
    "single basophilic line",
    "two unit",
    "perinuclear space",
    "nuclear lamina",
    "pores",
    "nuclear pore",
    "complex of DNA and proteins",
    "chromosomes",
    "Tightly coiled portions of chromosomes",
    "repressed",
    "inactive cells",
    "extended, uncoiled portions of chromosomes",
    "active cells",
    "invisible",
    "nucleolus-associated chromatin",
    "pars granulosa",
    "pars fibrosa",
    "nucleolonema",
    "genetic",
    "Production",
    "microtubules",
    "thread-like",
    "actin",
    "myosin",
    "intermediate",
    "25 nm",
    "protofilaments",
    "13",
    "crystals",
    "not stained",
    "rosettes",
    "single particles",
    "unstained regular-shaped vacuoles",
    "frozen",
    "exogenous",
    "carotenes",
    "yellow",
    "carotenemia",
    "carbon",
    "Silver",
    "Lead",
    "tattoo",
    "red iron-containing",
    "golden brown",
    "yellowish brown",
    "brown-black",
    "lipofuscin",
    "wear and tear",
    "Reinke",
  ],

  sheet: [
    {
      heading: "Nucleus",
      points: [
        "[[Archive]] of the cell; DNA = 20% of mass",
        "LM [[basophilic]]: [[centrally]] / [[eccentric]] / [[peripheral]]",
        "[[Spindle-shaped]] smooth muscle · [[kidney-shaped]] monocytes · [[multilobulated]] neutrophils",
        "[[Mononucleated]] mostly · [[binucleated]] · [[multinucleated]]",
        "Envelope · chromatin · nucleolus · sap (karyolymph)",
      ],
    },
    {
      heading: "Nuclear envelope",
      points: [
        "LM: [[single basophilic line]] (chromatin in, ribosomes out)",
        "EM: [[two unit]] membranes, [[perinuclear space]] 25 nm",
        "Outer → continuous with rER/sER, ribosomes",
        "Inner → [[nuclear lamina]]",
        "[[Numerous pores]]: 2 annuli × 8 subunits, 8 spokes, plug = [[nuclear pore complex]]",
      ],
    },
    {
      heading: "Chromatin",
      points: [
        "[[Complex of DNA and proteins]] (histones) → basophilia",
        "Folds into [[chromosomes]]: 46",
        "Hetero: [[tightly coiled portions of chromosomes]], [[repressed]], [[inactive cells]], basophilic granules",
        "Peripheral · nucleolus-associated · islets",
        "Eu: [[extended, uncoiled portions of chromosomes]], [[active cells]], LM [[invisible]]",
      ],
    },
    {
      heading: "Nucleolus & functions",
      points: [
        "Basophilic due to [[nucleolus-associated chromatin]]",
        "[[Pars granulosa]] + [[pars fibrosa]] = [[nucleolonema]]; amorpha = DNA",
        "Makes rRNA",
        "Sap: colloid, moves RNA to pores",
        "[[Cellular activities regulation]] ([[houses genetic material]]) · [[Production]] of ribosomal subunits",
      ],
    },
    {
      heading: "Cytoskeleton",
      points: [
        "[[Cytofilaments and microtubules]]",
        "Cytofilaments [[thread-like]]: [[Actin (thin)]] 5 · [[Intermediate filaments]] 10 · [[Myosin (thick)]] 15 nm",
        "Neuro- (neurons) · glial (astrocytes) · tono- (epithelium)",
        "Microtubules: [[constant diameter of 25 nm]], [[13 protofilaments]] (tubulin α β), from MTOC",
        "Support · transport · motility · contraction · adhesion & division",
      ],
    },
    {
      heading: "Stored food",
      points: [
        "Inclusions: [[stored food, pigments and crystals]] (temporary, lifeless)",
        "Glycogen: [[not stained]] by H&E → rough-edged spaces; PAS / toluidine blue",
        "α [[rosettes]] (liver, cartilage) · β [[single particles]] (muscle)",
        "Lipids: [[unstained regular-shaped vacuoles]]; [[frozen]]: osmium black, Sudan III orange",
      ],
    },
    {
      heading: "Pigments & crystals",
      points: [
        "[[Exogenous pigments]]: [[carotenes, dusts, minerals and tattoo marks]]",
        "Carotene → [[fat yellow]], vitamin A, [[carotenemia]] ≠ jaundice",
        "[[Carbon particles]] smokers · [[Silver]] gray · [[Lead]] blue gum",
        "Hb [[red iron-containing]] · hemosiderin [[golden brown]] · bilirubin [[yellowish brown]]",
        "Melanin [[brown-black]] · lipofuscin [[golden-brown]] = [[age pigments or wear and tear pigments]]",
        "[[Crystals of Reinke]]: Leydig cells, adults",
      ],
    },
  ],
};

export default lecture;
