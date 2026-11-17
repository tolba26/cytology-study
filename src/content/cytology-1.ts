import type { Lecture } from "./types";

/**
 * Cytology 1 — The Cell. Dr. Sahar Fayez. 50 slides.
 * Every fact below is from the slides; slide numbers are noted per section.
 * [[term]] = colored/bold on the slide (high-yield).
 */
const lecture: Lecture = {
  id: "cytology-1",
  number: 1,
  title: "Cytology 1",
  subtitle: "The Cell · Cell membrane · Mitochondria",
  lecturer: "D. Sahar Fayez",
  slideCount: 50,
  group: "Cytology",

  sections: [
    // ───────────────────────────────────────── slides 2–3
    {
      id: "definitions",
      title: "Histology, tissues & cytology",
      slides: "2–3",
      keyPoints: [
        "[[Histology]] → the science which deals with the *tissues*.",
        "[[Cytology]] → the science which deals with *cells*.",
        "[[Tissues]] → collections of cells that have a similar structure and function.",
        "[[Histology]] is the bridge between structure and function.",
      ],
      blocks: [
        { kind: "definition", term: "Histology", text: "The science which deals with the *tissues*." },
        { kind: "definition", term: "Tissues", text: "Collections of cells that have a similar *structure and function*." },
        { kind: "definition", term: "Cytology", text: "The science which deals with *cells*." },
        {
          kind: "definition",
          term: "Why study histology?",
          text: "[[Histology]] is the bridge between structure and function. It is at the microscopic level that we begin to see how an organ actually performs its functions.",
        },
      ],
      explain:
        "الهستولوجي بيدرس الأنسجة، والسيتولوجي بيدرس الخلية نفسها. النسيج يعني مجموعة خلايا شبه بعض في الشكل والوظيفة. وبنقول إن الهستولوجي «كوبري» بين الشكل والوظيفة، لأننا تحت الميكروسكوب بنبتدي نشوف العضو بيشتغل إزاي.",
      questions: [
        {
          id: "c1-def-1",
          type: "mcq",
          prompt: "Cytology is the science which deals with:",
          options: ["Tissues", "Cells", "Organs", "The bridge between structure and function"],
          answer: 1,
          explain: "Cytology deals with cells; histology deals with the tissues.",
        },
        {
          id: "c1-def-2",
          type: "complete",
          prompt: "Tissues are collections of cells that have a similar structure and ____.",
          answers: ["function"],
          explain: "Tissues = collections of cells that have a similar structure and function.",
        },
        {
          id: "c1-def-3",
          type: "tf",
          statement: "Histology is the science which deals with cells.",
          answer: false,
          correction: "Histology deals with the tissues. Cytology is the one that deals with cells.",
          explain: "Don't swap them: histology → tissues, cytology → cells.",
        },
        {
          id: "c1-def-4",
          type: "reason",
          prompt: "Give reason: Histology is the bridge between structure and function.",
          answer: "Because it is at the microscopic level that we begin to see how an organ actually performs its functions.",
          explain: "Slide 3.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 4
    {
      id: "the-cell",
      title: "The cell",
      slides: "4",
      keyPoints: [
        "[[The cell]] is the [[smallest structural and functional unit of body tissues]].",
        "A mass of protoplasm divided into nucleus and cytoplasm, surrounded with a limiting membrane.",
        "[[The cytoplasm]] = the part of protoplasm located around the nucleus, designed to perform *synthetic and metabolic* activities.",
        "Cytoplasm = matrix ([[cytosol]]) + organelles + inclusions, supported by cytoskeleton.",
      ],
      blocks: [
        {
          kind: "tree",
          title: "What the cell is made of",
          root: {
            label: "The cell",
            note: "smallest structural & functional unit",
            children: [
              { label: "Limiting membrane", note: "surrounds the protoplasm" },
              {
                label: "Protoplasm",
                children: [
                  { label: "Nucleus" },
                  {
                    label: "Cytoplasm",
                    note: "synthetic & metabolic activities",
                    children: [
                      { label: "Matrix (cytosol)", note: "organelles & inclusions are suspended in it" },
                      { label: "Organelles" },
                      { label: "Inclusions" },
                      { label: "Cytoskeleton", note: "supports" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      explain:
        "الخلية أصغر وحدة في الجسم ليها شكل ووظيفة. جوّاها بروتوبلازم متقسم لنواة وسيتوبلازم، والاتنين محاطين بغشاء. السيتوبلازم ده المصنع: فيه سائل (cytosol) عايم فيه العضيات والـ inclusions، وكله متسند على الـ cytoskeleton.",
      questions: [
        {
          id: "c1-cell-1",
          type: "complete",
          prompt: "The cell is the smallest ____ and functional unit of body tissues.",
          answers: ["structural"],
          explain: "The cell = smallest structural and functional unit of body tissues.",
        },
        {
          id: "c1-cell-2",
          type: "mcq",
          prompt: "The cytoplasm is designed to perform:",
          options: [
            "Synthetic and metabolic activities",
            "Acting as a barrier between internal and external environment",
            "Cell respiration and energy production",
            "Transmission of impulses",
          ],
          answer: 0,
          explain: "The cytoplasm surrounds the nucleus and performs synthetic and metabolic activities.",
        },
        {
          id: "c1-cell-3",
          type: "mcq",
          prompt: "The protoplasm of the cell is divided into:",
          options: ["Nucleus and cytoplasm", "Organelles and inclusions", "Cytosol and cytoskeleton", "Membranous and non-membranous parts"],
          answer: 0,
          explain: "A mass of protoplasm divided into nucleus and cytoplasm, surrounded with a limiting membrane.",
        },
        {
          id: "c1-cell-4",
          type: "tf",
          statement: "The cytoplasm consists of a matrix (cytosol) in which organelles and inclusions are suspended, supported by cytoskeleton.",
          answer: true,
          explain: "Exactly as slide 4 says.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 5
    {
      id: "matrix",
      title: "Cytoplasmic matrix",
      slides: "5",
      keyPoints: [
        "The cytoplasmic matrix ([[cytosol]]) is the *liquid non-organelle* part of the cytoplasm.",
        "It occupies the intracellular spaces between organelles and inclusions.",
        "Contains many soluble proteins, lipids, carbohydrates and small ions.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Cytoplasmic matrix",
          aside: "cytosol",
          text: "The *liquid non-organelle* part of the cytoplasm occupying the intracellular spaces between organelles and inclusions.",
        },
        {
          kind: "chips",
          title: "It contains many soluble…",
          items: [{ label: "Proteins" }, { label: "Lipids" }, { label: "Carbohydrates" }, { label: "Small ions" }],
        },
      ],
      explain:
        "الـ cytosol هو الجزء السايل من السيتوبلازم، اللي مالي المسافات بين العضيات. دايب فيه بروتينات ودهون وكربوهيدرات وأيونات صغيرة.",
      questions: [
        {
          id: "c1-mat-1",
          type: "complete",
          prompt: "The cytoplasmic matrix is also called ____.",
          answers: ["cytosol"],
          explain: "Cytoplasmic matrix = cytosol.",
        },
        {
          id: "c1-mat-2",
          type: "mcq",
          prompt: "The cytosol is:",
          options: [
            "The liquid non-organelle part of the cytoplasm",
            "A membranous organelle",
            "The outer limit of the cell",
            "The cell coat",
          ],
          answer: 0,
          explain: "Cytosol = the liquid non-organelle part, filling the spaces between organelles and inclusions.",
        },
        {
          id: "c1-mat-3",
          type: "tf",
          statement: "The cytoplasmic matrix contains insoluble proteins only.",
          answer: false,
          correction: "It contains many soluble proteins, lipids, carbohydrates and small ions.",
          explain: "Four soluble things: proteins, lipids, carbohydrates, small ions.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 6–10
    {
      id: "organelles",
      title: "Cytoplasmic organelles",
      slides: "6–10",
      keyPoints: [
        "Organelles are [[permanent]], indispensable living cytoplasmic structures that perform specific functions to the cell.",
        "Classified according to the presence of [[membranes]] into membranous and non-membranous.",
        "[[Membranous organelles]] possess a bounding membrane of their own.",
        "[[Non-membranous organelles]] possess [[no]] bounding membrane of their own: ribosomes and centrioles.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Cytoplasmic organelles",
          text: "[[Permanent]], indispensable living cytoplasmic structures that perform *specific functions* to the cell.",
        },
        {
          kind: "table",
          title: "Classified according to the presence of membranes",
          columns: ["", "Membranous", "Non-membranous"],
          rows: [
            ["Bounding membrane of their own", "Possess one", "Possess [[no]] membrane"],
            [
              "Include",
              "Cell membrane, mitochondria, endoplasmic reticulum (smooth and rough), Golgi apparatus, lysosomes, peroxisomes and nucleus",
              "Ribosomes and centrioles",
            ],
          ],
        },
        {
          kind: "mnemonic",
          phrase: "Can My Elephant Go Learn Proper Names?",
          key: [
            { letter: "C", word: "Cell membrane" },
            { letter: "M", word: "Mitochondria" },
            { letter: "E", word: "Endoplasmic reticulum (smooth & rough)" },
            { letter: "G", word: "Golgi apparatus" },
            { letter: "L", word: "Lysosomes" },
            { letter: "P", word: "Peroxisomes" },
            { letter: "N", word: "Nucleus" },
          ],
        },
      ],
      explain:
        "العضيات حاجات دايمة ومهمة جدًا للخلية، وكل واحدة ليها شغلانة. بنقسمها حسب وجود غشاء: اللي ليها غشاء خاص بيها (membranous)، واللي مالهاش غشاء خالص، ودول اتنين بس: الريبوسومات والسنتريولات.",
      questions: [
        {
          id: "c1-org-1",
          type: "mcq",
          prompt: "Cytoplasmic organelles are classified according to:",
          options: ["The presence of membranes", "Their size", "Their position in the cell", "Their staining"],
          answer: 0,
          explain: "Classified according to the presence of membranes → membranous and non-membranous.",
        },
        {
          id: "c1-org-2",
          type: "mcq",
          prompt: "Which of the following is a non-membranous organelle?",
          options: ["Mitochondria", "Ribosomes", "Lysosomes", "Golgi apparatus"],
          answer: 1,
          explain: "Non-membranous organelles are only ribosomes and centrioles.",
        },
        {
          id: "c1-org-3",
          type: "tf",
          statement: "The nucleus is a non-membranous organelle.",
          answer: false,
          correction: "The nucleus is listed with the membranous organelles.",
          explain: "Membranous: cell membrane, mitochondria, ER, Golgi, lysosomes, peroxisomes and nucleus.",
        },
        {
          id: "c1-org-4",
          type: "complete",
          prompt: "Non-membranous organelles include ribosomes and ____.",
          answers: ["centrioles", "centriole"],
          explain: "Non-membranous organelles possess no bounding membrane: ribosomes and centrioles.",
        },
        {
          id: "c1-org-5",
          type: "tf",
          statement: "Cytoplasmic organelles are temporary structures.",
          answer: false,
          correction: "They are permanent, indispensable living cytoplasmic structures.",
          explain: "\"Permanent\" is in red on slide 6.",
        },
        {
          id: "c1-org-6",
          type: "compare",
          prompt: "Compare membranous and non-membranous organelles.",
          columns: ["", "Membranous", "Non-membranous"],
          rows: [
            ["Bounding membrane of their own", "Possess one", "Possess no membrane"],
            [
              "Include",
              "Cell membrane, mitochondria, ER (smooth & rough), Golgi, lysosomes, peroxisomes, nucleus",
              "Ribosomes and centrioles",
            ],
          ],
          explain: "Slides 7–8.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 11–13
    {
      id: "membrane-lm",
      title: "Cell membrane: definition & LM",
      slides: "11–13",
      keyPoints: [
        "Cell membrane = plasmalemma = plasma membrane.",
        "The outer limit of the cell; acts as a barrier between its internal and external environment.",
        "With LM it is [[invisible]]: too thin (7–10 nm) to be seen.",
        "The [[cell boundary]] that is often seen is mainly due to three things (below).",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Cell membrane",
          aside: "plasmalemma · plasma membrane",
          text: "The outer limit of the cell that acts as a *barrier* between its internal and external environment.",
        },
        { kind: "number", value: "7–10", unit: "nm", label: "Thickness of the cell membrane", note: "Too thin to be seen with LM → [[invisible]]." },
        {
          kind: "list",
          title: "The cell boundary seen with LM is mainly due to…",
          items: [
            "Condensation of cytoplasm on the inner aspect of the cell membrane.",
            "Condensation of the stain (such as silver or PAS) on the carbohydrate-rich coat.",
            "Obliquity of the sections.",
          ],
        },
      ],
      explain:
        "غشاء الخلية رفيع جدًا (7–10 نانومتر) فمش بيبان بالميكروسكوب الضوئي. الخط اللي بنشوفه حوالين الخلية ده مش الغشاء نفسه، ده يا سيتوبلازم متكثف، يا صبغة متجمعة على الـ coat، يا القطاع جه مايل.",
      questions: [
        {
          id: "c1-lm-1",
          type: "reason",
          prompt: "Give reason: the cell membrane is invisible with the light microscope.",
          answer: "Because it is too thin (7–10 nm) to be seen.",
          explain: "Slide 12.",
        },
        {
          id: "c1-lm-2",
          type: "mcq",
          prompt: "The cell boundary seen with LM is due to all of the following EXCEPT:",
          options: [
            "Condensation of cytoplasm on the inner aspect of the cell membrane",
            "Condensation of the stain (silver or PAS) on the carbohydrate-rich coat",
            "Obliquity of the sections",
            "The trilaminar structure of the membrane",
          ],
          answer: 3,
          explain: "Trilaminar is how the membrane looks with EM, not why a boundary shows with LM.",
        },
        {
          id: "c1-lm-3",
          type: "complete",
          prompt: "The cell membrane is also called plasmalemma or ____ membrane.",
          answers: ["plasma"],
          explain: "Cell membrane = plasmalemma = plasma membrane.",
        },
        {
          id: "c1-lm-4",
          type: "tf",
          statement: "The thickness of the cell membrane is 7–10 nm.",
          answer: true,
          explain: "That's why it is invisible with LM.",
        },
        {
          id: "c1-lm-5",
          type: "mcq",
          prompt: "Which stains condense on the carbohydrate-rich coat to show the cell boundary?",
          options: ["Silver or PAS", "Janus green B", "Iron hematoxylin", "H&E"],
          answer: 0,
          explain: "Condensation of the stain (such as silver or PAS) on the carbohydrate-rich coat.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 14–15
    {
      id: "membrane-em",
      title: "Cell membrane with EM",
      slides: "14–15",
      keyPoints: [
        "With [[electron microscope]] (EM) the membrane appears as a [[trilaminar]] structure.",
        "Outer and inner *electron-dense* layers.",
        "Separated by an intermediate *electron-lucent* layer.",
      ],
      blocks: [
        {
          kind: "diagram",
          diagram: "trilaminar",
          title: "Cell membrane under EM",
          caption: "Redrawn from slide 15 (membrane of two adjoining cells, trilaminar appearance).",
        },
        {
          kind: "chips",
          title: "Three layers, outside → inside",
          items: [
            { label: "Outer layer", note: "electron-dense" },
            { label: "Intermediate layer", note: "electron-lucent" },
            { label: "Inner layer", note: "electron-dense" },
          ],
        },
      ],
      explain:
        "بالميكروسكوب الإلكتروني الغشاء بيبان 3 طبقات (trilaminar): طبقتين غامقين (dense) برّه وجوّه، وفي النص طبقة فاتحة (lucent).",
      questions: [
        {
          id: "c1-em-1",
          type: "mcq",
          prompt: "With the electron microscope, the cell membrane appears as:",
          options: ["A trilaminar structure", "A single dense line", "Granules and rods", "It is invisible"],
          answer: 0,
          explain: "EM → trilaminar. (Invisible is the LM answer.)",
        },
        {
          id: "c1-em-2",
          type: "complete",
          prompt: "The trilaminar membrane has outer and inner electron-dense layers separated by an intermediate electron-____ layer.",
          answers: ["lucent"],
          explain: "dense / lucent / dense.",
        },
        {
          id: "c1-em-3",
          type: "tf",
          statement: "The intermediate layer of the cell membrane is electron-dense.",
          answer: false,
          correction: "The intermediate layer is electron-lucent; the outer and inner layers are electron-dense.",
          explain: "Only the middle layer is lucent.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 16
    {
      id: "fluid-mosaic",
      title: "Molecular structure: fluid mosaic model",
      slides: "16",
      keyPoints: [
        "The most recent and currently acceptable model is the [[fluid mosaic model]].",
        "Described as *protein ice cubes in a lipid sea*.",
        "Three major components: phospholipids, proteins and carbohydrates.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Fluid mosaic model",
          text: "The most recent and currently acceptable model for the cell membrane: *protein ice cubes in a lipid sea*.",
        },
        {
          kind: "proportion",
          title: "Three major components (slides 17, 20, 22)",
          parts: [
            { label: "Proteins", value: 60 },
            { label: "Phospholipids", value: 30 },
            { label: "Carbohydrates", value: 10 },
          ],
        },
      ],
      explain:
        "الموديل المعتمد للغشاء اسمه fluid mosaic: تخيّل بحر دهون وفيه مكعبات تلج من البروتين عايمة. مكوّناته 3: فوسفوليبيدز 30%، بروتين 60%، كربوهيدرات 10%.",
      questions: [
        {
          id: "c1-fm-1",
          type: "complete",
          prompt: "The currently acceptable model for the cell membrane is called the ____ model.",
          answers: ["fluid mosaic", "fluid-mosaic"],
          explain: "Fluid mosaic model (red on slide 16).",
        },
        {
          id: "c1-fm-2",
          type: "complete",
          prompt: "The fluid mosaic model is described as protein ____ in a lipid sea.",
          answers: ["ice cubes", "ice cube", "icecubes"],
          explain: "Protein ice cubes in a lipid sea.",
        },
        {
          id: "c1-fm-3",
          type: "mcq",
          prompt: "According to the fluid mosaic model, the cell membrane is made up of:",
          options: [
            "Phospholipids, proteins and carbohydrates",
            "Phospholipids and cholesterol only",
            "Proteins and DNA",
            "Glycoproteins only",
          ],
          answer: 0,
          explain: "Three major components: phospholipids (30%), proteins (60%), carbohydrates (10%).",
        },
      ],
    },

    // ───────────────────────────────────────── slides 17–19
    {
      id: "phospholipids",
      title: "Phospholipids & cholesterol",
      slides: "17–19",
      keyPoints: [
        "Phospholipids ([[30%]]) form a [[central bimolecular layer]].",
        "Each molecule has two ends: a polar (hydrophilic) head and a non-polar (hydrophobic) tail.",
        "Hydrophilic heads are directed *outward*; hydrophobic tails *inward* toward the center of the membrane.",
        "[[Cholesterol]] is dispersed in varying degrees in the irregular spaces between the hydrophobic tails.",
      ],
      blocks: [
        {
          kind: "table",
          title: "The two ends of a phospholipid molecule",
          columns: ["", "Head", "Tail"],
          rows: [
            ["Polarity", "Polar", "Non-polar"],
            ["Water", "Hydrophilic (has affinity with water)", "Hydrophobic (has no affinity with water)"],
            ["Directed", "Outward", "Inward, toward the center of the membrane"],
          ],
        },
        { kind: "diagram", diagram: "bilayer", title: "Phospholipid bilayer", caption: "Redrawn from slide 18." },
      ],
      explain:
        "الفوسفوليبيدز (30%) عاملين طبقتين في النص. كل جزيء ليه راس بتحب المية (بتبص لبرّه) وديل بيكره المية (بيبص لجوّه). والكوليسترول متوزّع في الفراغات اللي بين الديول.",
      questions: [
        {
          id: "c1-pl-1",
          type: "complete",
          prompt: "Phospholipids (____%) form a central bimolecular layer.",
          answers: ["30"],
          explain: "Phospholipids 30%, proteins 60%, carbohydrates 10%.",
        },
        {
          id: "c1-pl-2",
          type: "mcq",
          prompt: "The hydrophilic end of the phospholipid molecule is:",
          options: [
            "Polar, has affinity with water",
            "Non-polar, has no affinity with water",
            "Polar, has no affinity with water",
            "Non-polar, has affinity with water",
          ],
          answer: 0,
          explain: "Head = polar = hydrophilic. Tail = non-polar = hydrophobic.",
        },
        {
          id: "c1-pl-3",
          type: "tf",
          statement: "The hydrophobic tails of phospholipids are directed outward.",
          answer: false,
          correction: "Hydrophilic heads are directed outward; hydrophobic tails are directed inward toward the center of the membrane.",
          explain: "Heads out, tails in.",
        },
        {
          id: "c1-pl-4",
          type: "mcq",
          prompt: "Cholesterol in the cell membrane is found:",
          options: [
            "In the irregular spaces between the hydrophobic tails",
            "Projecting from the outer surface as cell coat",
            "Forming transmembrane channels",
            "Partially embedded on either aspect of the membrane",
          ],
          answer: 0,
          explain: "Cholesterol is dispersed between the hydrophobic tails of the membrane lipids.",
        },
        {
          id: "c1-pl-5",
          type: "compare",
          prompt: "Compare the two ends of a phospholipid molecule.",
          columns: ["", "Head", "Tail"],
          rows: [
            ["Polarity", "Polar", "Non-polar"],
            ["Water", "Hydrophilic (affinity with water)", "Hydrophobic (no affinity with water)"],
            ["Directed", "Outward", "Inward, toward the center"],
          ],
          explain: "Slide 17.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 20–21
    {
      id: "proteins",
      title: "Membrane proteins",
      slides: "20–21",
      keyPoints: [
        "Proteins ([[60%]]) are a second major constituent of the cell membrane.",
        "Arranged as [[globules]] moving freely within the lipid layer.",
        "Two types: intrinsic (integral) and extrinsic (peripheral).",
        "[[Intrinsic proteins]] are firmly attached; some extend through the whole membrane → [[transmembrane channels]].",
        "[[Extrinsic]] (peripheral) proteins are only partially embedded to either aspect of the membrane.",
      ],
      blocks: [
        { kind: "number", value: "60", unit: "%", label: "Proteins in the cell membrane", note: "Arranged as [[globules]] moving freely within the lipid layer." },
        {
          kind: "table",
          title: "Two types of protein globules",
          columns: ["", "Intrinsic (integral)", "Extrinsic (peripheral)"],
          rows: [
            ["Attachment", "Firmly attached to the lipid bilayer", "Only partially embedded"],
            ["Position", "Some extend throughout the entire thickness of the membrane", "On either aspect of the membrane"],
            ["Role given", "Constitute [[transmembrane channels]] for the passage of water-soluble ions and molecules", "—"],
          ],
        },
      ],
      explain:
        "البروتين 60% من الغشاء، وشكله كُوَر بتتحرك بحرية جوّه الدهون. نوعين: intrinsic مثبّت جامد وبعضه بيعدّي الغشاء كله وبيعمل قنوات للأيونات، وextrinsic مغروس جزئيًا بس على وش من وشوش الغشاء.",
      questions: [
        {
          id: "c1-pr-1",
          type: "complete",
          prompt: "Proteins form ____% of the cell membrane.",
          answers: ["60"],
          explain: "Proteins (60%) are a second major constituent of the cell membrane.",
        },
        {
          id: "c1-pr-2",
          type: "mcq",
          prompt: "The protein molecules of the cell membrane are arranged as:",
          options: ["Globules moving freely within the lipid layer", "A central bimolecular layer", "Fixed rigid sheets", "A cell coat"],
          answer: 0,
          explain: "Globules (red on slide 20). The bimolecular layer is the phospholipids.",
        },
        {
          id: "c1-pr-3",
          type: "mcq",
          prompt: "Transmembrane channels are formed by:",
          options: ["Intrinsic proteins", "Extrinsic proteins", "Glycolipids", "Cholesterol"],
          answer: 0,
          explain: "Some intrinsic proteins extend throughout the membrane and constitute transmembrane channels.",
        },
        {
          id: "c1-pr-4",
          type: "tf",
          statement: "Extrinsic proteins extend throughout the entire thickness of the membrane.",
          answer: false,
          correction: "Extrinsic (peripheral) proteins are only partially embedded to either aspect. It is some intrinsic proteins that extend throughout the entire thickness.",
          explain: "Extrinsic = partial. Intrinsic = firm, some go all the way through.",
        },
        {
          id: "c1-pr-5",
          type: "complete",
          prompt: "Transmembrane channels allow the passage of water-____ ions and molecules.",
          answers: ["soluble"],
          explain: "Channels for the passage of water-soluble ions and molecules.",
        },
        {
          id: "c1-pr-6",
          type: "compare",
          prompt: "Compare intrinsic and extrinsic proteins.",
          columns: ["", "Intrinsic (integral)", "Extrinsic (peripheral)"],
          rows: [
            ["Attachment", "Firmly attached to the lipid bilayer", "Only partially embedded"],
            ["Position", "Some extend throughout the entire thickness", "Either aspect of the membrane"],
            ["Role", "Transmembrane channels for water-soluble ions and molecules", "—"],
          ],
          explain: "Slide 21.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 22–24
    {
      id: "carbohydrates",
      title: "Carbohydrates & the cell coat",
      slides: "22–24",
      keyPoints: [
        "[[Carbohydrates (10%)]] are conjugated with protein ([[glycoprotein]]) and lipid ([[glycolipid]]) molecules.",
        "Glycoproteins and glycolipids project from the *outer* surface as cell coat or [[glycocalyx]].",
      ],
      blocks: [
        { kind: "number", value: "10", unit: "%", label: "Carbohydrates in the cell membrane", note: "Conjugated with protein (glycoprotein) and lipid (glycolipid) molecules." },
        {
          kind: "chips",
          title: "Carbohydrate conjugated with…",
          items: [
            { label: "Protein", note: "= glycoprotein" },
            { label: "Lipid", note: "= glycolipid" },
          ],
        },
        {
          kind: "diagram",
          diagram: "fluid-mosaic",
          title: "Modified fluid-mosaic model",
          caption: "Redrawn from slides 23–24.",
        },
      ],
      explain:
        "الكربوهيدرات 10% بس، ودايمًا متلزّقة: مع بروتين تبقى glycoprotein، ومع دهن تبقى glycolipid. دول طالعين من السطح الخارجي وعاملين طبقة اسمها cell coat أو glycocalyx.",
      questions: [
        {
          id: "c1-cho-1",
          type: "complete",
          prompt: "Carbohydrates conjugated with lipid molecules are called ____.",
          answers: ["glycolipid", "glycolipids"],
          explain: "With lipid → glycolipid. With protein → glycoprotein.",
        },
        {
          id: "c1-cho-2",
          type: "mcq",
          prompt: "The cell coat (glycocalyx) is formed of:",
          options: [
            "Glycoproteins and glycolipids projecting from the outer surface",
            "Phospholipid heads",
            "Extrinsic proteins on the inner aspect",
            "Cholesterol molecules",
          ],
          answer: 0,
          explain: "Glycoproteins and glycolipids project from the outer surface as cell coat or glycocalyx.",
        },
        {
          id: "c1-cho-3",
          type: "tf",
          statement: "Carbohydrates form 10% of the cell membrane.",
          answer: true,
          explain: "30 / 60 / 10: phospholipids / proteins / carbohydrates.",
        },
        {
          id: "c1-cho-4",
          type: "tf",
          statement: "The glycocalyx projects from the inner surface of the cell membrane.",
          answer: false,
          correction: "Glycoproteins and glycolipids project from the outer surface as the glycocalyx.",
          explain: "Cell coat = outside.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 25–27
    {
      id: "exchange",
      title: "Functions of the cell membrane: exchange",
      slides: "25–27",
      keyPoints: [
        "The cell membrane [[regulates the exchange of molecules and ions between its internal and external environment]].",
        "This occurs by several ways: passive diffusion, facilitated diffusion, active transport, selective transport.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Main function",
          text: "The cell membrane is the part of the cell that [[regulates the exchange of molecules and ions]] between its internal and external environment.",
        },
        {
          kind: "chips",
          title: "This occurs by several ways",
          items: [
            { label: "Passive diffusion" },
            { label: "Facilitated diffusion" },
            { label: "Active transport" },
            { label: "Selective transport" },
          ],
        },
      ],
      explain:
        "أهم شغلانة للغشاء إنه بيتحكم في دخول وخروج الجزيئات والأيونات. وده بيحصل بكذا طريقة: passive diffusion وfacilitated diffusion وactive transport وselective transport.",
      questions: [
        {
          id: "c1-ex-1",
          type: "complete",
          prompt: "The cell membrane regulates the exchange of molecules and ____ between its internal and external environment.",
          answers: ["ions"],
          explain: "Molecules and ions (red on slide 25).",
        },
        {
          id: "c1-ex-2",
          type: "mcq",
          prompt: "The cell membrane regulates exchange by all of the following EXCEPT:",
          options: ["Passive diffusion", "Facilitated diffusion", "Active transport", "Phosphorylation of ADP"],
          answer: 3,
          explain: "The four ways: passive diffusion, facilitated diffusion, active transport, selective transport.",
        },
        {
          id: "c1-ex-3",
          type: "tf",
          statement: "Selective transport is one of the ways by which the cell membrane regulates exchange.",
          answer: true,
          explain: "It is the 4th way listed on slide 25.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 28–33
    {
      id: "endo-exo",
      title: "Endocytosis & exocytosis",
      slides: "28–33",
      keyPoints: [
        "[[Endocytosis]]: engulfment of solid particles (phagocytosis) or a minute droplet of fluid (pinocytosis).",
        "The engulfed material is surrounded first by cytoplasmic extensions called pseudopodia.",
        "The membrane fuses → a vesicle: [[phagosome]] or endocytotic vesicle, which floats freely in the cytoplasm.",
        "The phagosome fuses with lysosomes → contents subjected to enzymatic digestion.",
        "[[Exocytosis]] (Exo = out): membranous vesicles fuse with the plasma membrane and release their contents outside the cell, as in many secretory processes.",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Endocytosis engulfs either…",
          items: [
            { label: "Solid particles", note: "phagocytosis" },
            { label: "Minute droplet of fluid", note: "pinocytosis" },
          ],
        },
        {
          kind: "steps",
          title: "Endocytosis, step by step",
          items: [
            "The engulfed material is surrounded first by cytoplasmic extensions called *pseudopodia*.",
            "When the particles become completely surrounded, the plasma membrane fuses.",
            "The membrane around the particles forms a vesicle: a [[phagosome]] or endocytotic vesicle.",
            "The vesicle detaches from the cell membrane to float freely within the cytoplasm.",
            "The phagosome fuses with the *lysosomes* and its contents are subjected to enzymatic digestion.",
          ],
        },
        {
          kind: "table",
          title: "Endocytosis vs exocytosis",
          columns: ["", "Endocytosis", "Exocytosis"],
          rows: [
            ["What it is", "Engulfment of solid particles or a minute droplet of fluid", "Membranous vesicles in the cytoplasm fuse with the plasma membrane"],
            ["Result", "Phagosome / endocytotic vesicle → fuses with lysosomes → digestion", "Contents released outside the cell (Exo = out)"],
            ["Types / where", "Phagocytosis (solid), pinocytosis (fluid)", "Many secretory processes"],
          ],
        },
      ],
      explain:
        "الـ endocytosis يعني الخلية بتبلع حاجة: لو صلبة اسمها phagocytosis، ولو نقطة سايلة اسمها pinocytosis. بتلفّ عليها بالـ pseudopodia وتعمل حويصلة (phagosome) تروح تتهضم مع الليسوسوم. الـ exocytosis العكس: حويصلة بتلزق في الغشاء وتطلّع اللي فيها برّه، زي الإفراز.",
      questions: [
        {
          id: "c1-endo-1",
          type: "mcq",
          prompt: "Engulfment of a minute droplet of fluid is called:",
          options: ["Pinocytosis", "Phagocytosis", "Exocytosis", "Selective transport"],
          answer: 0,
          explain: "Fluid → pinocytosis. Solid particles → phagocytosis.",
        },
        {
          id: "c1-endo-2",
          type: "complete",
          prompt: "The engulfed material is surrounded first by cytoplasmic extensions called ____.",
          answers: ["pseudopodia", "pseudopodium", "pseudopods"],
          explain: "Pseudopodia surround the material first.",
        },
        {
          id: "c1-endo-3",
          type: "complete",
          prompt: "The vesicle formed around engulfed particles is known as a ____ or endocytotic vesicle.",
          answers: ["phagosome"],
          explain: "Phagosome (red on slide 29).",
        },
        {
          id: "c1-endo-4",
          type: "mcq",
          prompt: "Once the phagosome enters the cytoplasm it fuses with:",
          options: ["Lysosomes", "Mitochondria", "Ribosomes", "The nucleus"],
          answer: 0,
          explain: "It fuses with lysosomes and the contents undergo enzymatic digestion.",
        },
        {
          id: "c1-endo-5",
          type: "tf",
          statement: "In exocytosis, membranous vesicles fuse with the plasma membrane and release their contents outside the cell.",
          answer: true,
          explain: "Exo = out. It occurs in many secretory processes.",
        },
        {
          id: "c1-endo-6",
          type: "compare",
          prompt: "Compare endocytosis and exocytosis.",
          columns: ["", "Endocytosis", "Exocytosis"],
          rows: [
            ["What it is", "Engulfment of solid particles or a minute droplet of fluid", "Vesicles fuse with the plasma membrane"],
            ["Result", "Phagosome → fuses with lysosomes → enzymatic digestion", "Contents released outside the cell"],
            ["Types / where", "Phagocytosis, pinocytosis", "Many secretory processes"],
          ],
          explain: "Slides 28–30.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 34
    {
      id: "cell-coat",
      title: "Functions of the cell coat (glycocalyx)",
      slides: "34",
      keyPoints: [
        "The cell coat = [[Glycocalyx]]. Six functions, in the lecturer's order:",
        "Protection · immunological response · hormone binding · intercellular adhesions · basement membrane · cell recognition.",
      ],
      blocks: [
        {
          kind: "list",
          title: "Functions of the cell coat (Glycocalyx)",
          items: [
            "Provides mechanical and chemical protection to the cell.",
            "Aids in the induction of immunological (antigen-antibody) response.",
            "It is a site for binding of the hormones.",
            "Shares in the formation of intercellular adhesions.",
            "Contributes in the formation of cell basement membrane.",
            "Cell recognition (e.g., during development).",
          ],
        },
        {
          kind: "mnemonic",
          phrase: "Please Invite Her In Before Rain",
          key: [
            { letter: "P", word: "Protection (mechanical & chemical)" },
            { letter: "I", word: "Immunological (antigen-antibody) response" },
            { letter: "H", word: "Hormone binding site" },
            { letter: "I", word: "Intercellular adhesions" },
            { letter: "B", word: "Basement membrane formation" },
            { letter: "R", word: "Recognition of cells" },
          ],
        },
      ],
      explain:
        "الـ glycocalyx ليه 6 وظايف: بيحمي الخلية، بيساعد في المناعة (antigen-antibody)، مكان ترتبط فيه الهرمونات، بيشارك في لزق الخلايا في بعض، وفي تكوين الـ basement membrane، وبيخلّي الخلايا تتعرّف على بعض (زي وقت النمو).",
      questions: [
        {
          id: "c1-coat-1",
          type: "mcq",
          prompt: "All are functions of the glycocalyx EXCEPT:",
          options: ["Site for binding of the hormones", "Cell recognition", "Formation of the cell basement membrane", "Storage of Ca++ ions"],
          answer: 3,
          explain: "Ca++ storage is the job of the mitochondrial matrix granules.",
        },
        {
          id: "c1-coat-2",
          type: "complete",
          prompt: "The cell coat provides mechanical and ____ protection to the cell.",
          answers: ["chemical"],
          explain: "Function 1: mechanical and chemical protection.",
        },
        {
          id: "c1-coat-3",
          type: "tf",
          statement: "The glycocalyx aids in the induction of immunological (antigen-antibody) response.",
          answer: true,
          explain: "Function 2.",
        },
        {
          id: "c1-coat-4",
          type: "tf",
          statement: "Transmission of impulses is a function of the glycocalyx.",
          answer: false,
          correction: "Transmission of impulses is one of the other functions of the cell membrane, not of the cell coat.",
          explain: "Keep the two lists apart: slide 34 (coat) vs slide 35 (membrane).",
        },
      ],
    },

    // ───────────────────────────────────────── slide 35
    {
      id: "other-functions",
      title: "Other functions of the cell membrane",
      slides: "35",
      keyPoints: [
        "Transmission of impulses in muscle fibers and nerve cells.",
        "Myelin sheath formation: Schwann cell around *peripheral* axons, oligodendrocytes around *central* axons.",
        "Shares in the formation of microvilli, cilia and flagella.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Myelin sheath formation",
          columns: ["Cell", "Around"],
          rows: [
            ["Schwann cell", "Peripheral axons"],
            ["Oligodendrocytes", "Central axons"],
          ],
        },
        {
          kind: "chips",
          title: "Shares in the formation of",
          items: [{ label: "Microvilli" }, { label: "Cilia" }, { label: "Flagella" }],
        },
      ],
      explain:
        "غير تنظيم التبادل، الغشاء بينقل الإشارات في العضلات والأعصاب، وبيعمل الـ myelin sheath (الـ Schwann في الأعصاب الطرفية، والـ oligodendrocytes في المركزية)، وبيشارك في تكوين microvilli وcilia وflagella.",
      questions: [
        {
          id: "c1-oth-1",
          type: "mcq",
          prompt: "The myelin sheath around central axons is formed by:",
          options: ["Oligodendrocytes", "Schwann cells", "Small lymphocytes", "Keratinocytes"],
          answer: 0,
          explain: "Central → oligodendrocytes. Peripheral → Schwann cell.",
        },
        {
          id: "c1-oth-2",
          type: "complete",
          prompt: "Schwann cells form the myelin sheath around ____ axons.",
          answers: ["peripheral"],
          explain: "Schwann cell around peripheral axons.",
        },
        {
          id: "c1-oth-3",
          type: "tf",
          statement: "The cell membrane shares in the formation of microvilli, cilia and flagella.",
          answer: true,
          explain: "Function 3 on slide 35.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 36–39
    {
      id: "mito-lm",
      title: "Mitochondria: definition & LM",
      slides: "36–39",
      keyPoints: [
        "Membranous organelles involved primarily in *cell respiration and energy production*.",
        "With LM: [[granules, rod-like or thread-like]].",
        "Number is highly variable according to the [[energy requirements]] of the cells.",
        "Liver cells (active) → as many as 1000. Small lymphocytes (inactive) → very few.",
        "[[Motile]] organelles; localize at sites of high-energy requirement, such as [[basal regions of ion-transporting cells]].",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Mitochondria",
          text: "Membranous organelles involved primarily in *cell respiration and energy production*.",
        },
        {
          kind: "chips",
          title: "Shape with LM",
          items: [{ label: "Granules" }, { label: "Rod-like" }, { label: "Thread-like" }],
        },
        {
          kind: "number",
          value: "1000",
          label: "Mitochondria in a liver cell (active cell)",
          note: "Small lymphocytes (inactive cells) contain very few. Number follows the [[energy requirements]].",
        },
      ],
      explain:
        "الميتوكوندريا مسؤولة عن التنفس الخلوي وإنتاج الطاقة. بالضوئي شكلها حبيبات أو عصيان أو خيوط. عددها على قد احتياج الخلية للطاقة: خلية الكبد النشيطة فيها لحد 1000، والليمفوسايت الصغيرة الخاملة فيها قليل جدًا. وبتتحرك تروح الأماكن اللي محتاجة طاقة، زي الجزء القاعدي من الخلايا اللي بتنقل أيونات.",
      questions: [
        {
          id: "c1-mlm-1",
          type: "mcq",
          prompt: "Mitochondria are membranous organelles involved primarily in:",
          options: ["Cell respiration and energy production", "Enzymatic digestion", "Myelin sheath formation", "Synthesis of the cell coat"],
          answer: 0,
          explain: "Definition, slide 36.",
        },
        {
          id: "c1-mlm-2",
          type: "mcq",
          prompt: "With LM, mitochondria appear as:",
          options: [
            "Granules, rod-like or thread-like",
            "Ovoid or elongated structures bounded by two membranes",
            "A trilaminar structure",
            "Pseudopodia",
          ],
          answer: 0,
          explain: "Ovoid or elongated is the EM description.",
        },
        {
          id: "c1-mlm-3",
          type: "complete",
          prompt: "Liver cells (active cells) contain as many as ____ mitochondria.",
          answers: ["1000", "1,000", "one thousand"],
          explain: "As many as 1000.",
        },
        {
          id: "c1-mlm-4",
          type: "reason",
          prompt: "Give reason: liver cells contain many mitochondria while small lymphocytes contain very few.",
          answer:
            "Because the number of mitochondria is highly variable according to the energy requirements of the cells: liver cells are active cells, small lymphocytes are inactive cells.",
          explain: "Slides 37 and 39.",
        },
        {
          id: "c1-mlm-5",
          type: "tf",
          statement: "Mitochondria are fixed organelles that cannot move within the cell.",
          answer: false,
          correction: "They are motile organelles and localize at intracellular sites of high-energy requirements.",
          explain: "\"Motile\" is red on slide 39.",
        },
        {
          id: "c1-mlm-6",
          type: "mcq",
          prompt: "Mitochondria localize at intracellular sites of high-energy requirements such as:",
          options: ["Basal regions of ion-transporting cells", "The outer surface of the cell coat", "Inside the nucleus", "Within lysosomes"],
          answer: 0,
          explain: "Basal regions of ion-transporting cells.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 40–41
    {
      id: "mito-stain",
      title: "Mitochondria: staining & distribution",
      slides: "40–41",
      keyPoints: [
        "Fixed tissues → selectively stained with [[iron hematoxylin]].",
        "Living cells → supravital staining with [[Janus green B]].",
        "Present in all cells except [[red blood cells and terminal keratinocytes]].",
        "Undergo morphologic changes related to their functional state.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Staining mitochondria",
          columns: ["Stain", "Used on", "What you see (slide 41)"],
          rows: [
            ["[[Iron hematoxylin]]", "Fixed tissues (selective)", "Not described"],
            ["[[Janus green B]]", "Living cells: supravital staining", "Oxidized by mitochondria to form blue stain"],
            ["H&E", "Not stated", "Tissues with abundant mitochondria tend to stain red. Eosin, an acidic dye, binds to H+ in the intermembrane space"],
          ],
        },
        {
          kind: "chips",
          title: "Mitochondria are present in all cells except",
          items: [{ label: "Red blood cells" }, { label: "Terminal keratinocytes" }],
        },
      ],
      explain:
        "عشان نشوف الميتوكوندريا: في الأنسجة المثبّتة نستخدم iron hematoxylin، وفي الخلايا الحية (supravital) نستخدم Janus green B اللي بيدّي لون أزرق. موجودة في كل الخلايا ما عدا كرات الدم الحمرا والـ keratinocytes الطرفية، وشكلها بيتغيّر على حسب هي شغالة قد إيه.",
      questions: [
        {
          id: "c1-mst-1",
          type: "mcq",
          prompt: "Supravital staining of mitochondria in living cells is done by:",
          options: ["Janus green B", "Iron hematoxylin", "Silver", "PAS"],
          answer: 0,
          explain: "Living → Janus green B. Fixed → iron hematoxylin.",
        },
        {
          id: "c1-mst-2",
          type: "complete",
          prompt: "In fixed tissues, mitochondria are selectively stained with iron ____.",
          answers: ["hematoxylin", "haematoxylin"],
          explain: "Iron hematoxylin.",
        },
        {
          id: "c1-mst-3",
          type: "tf",
          statement: "Mitochondria are present in all cells including red blood cells.",
          answer: false,
          correction: "They are present in all cells except red blood cells and terminal keratinocytes.",
          explain: "Two exceptions, in red on slide 40.",
        },
        {
          id: "c1-mst-4",
          type: "tf",
          statement: "Mitochondria undergo morphologic changes related to their functional state.",
          answer: true,
          explain: "Slide 40.",
        },
        {
          id: "c1-mst-5",
          type: "compare",
          prompt: "Compare iron hematoxylin and Janus green B as stains for mitochondria.",
          columns: ["", "Iron hematoxylin", "Janus green B"],
          rows: [
            ["Used on", "Fixed tissues", "Living cells (supravital staining)"],
            ["Result (slide 41)", "Not described", "Oxidized by mitochondria to form blue stain"],
          ],
          explain: "Slides 40–41.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 42–44
    {
      id: "mito-em",
      title: "Mitochondria with EM",
      slides: "42–44",
      keyPoints: [
        "[[Ovoid or elongated]] structures bounded by two unit membranes.",
        "Outer membrane is [[smooth]]; inner membrane is thrown into folds called *cristae*.",
        "Cristae project into the inner cavity, which is filled with an amorphous substance called *matrix*.",
        "The number of cristae is directly related to the energy requirement of the cell.",
        "The [[inner membrane]] carries tiny spherical projections (about 9 nm) on narrow stalks.",
        "These are the [[inner membrane spheres, globular subunits or elementary particles]], believed to be an [[enzyme known as F1]] that couples electron transport to the phosphorylation of ADP.",
      ],
      blocks: [
        { kind: "diagram", diagram: "mitochondrion", title: "Mitochondrion under EM", caption: "Redrawn from slides 44 and 47." },
        {
          kind: "number",
          value: "9",
          unit: "nm",
          label: "Diameter of the inner membrane spheres",
          note: "Supported by narrow stalks. Believed to be the [[enzyme known as F1]].",
        },
      ],
      explain:
        "بالإلكتروني الميتوكوندريا شكلها بيضاوي أو طويل ولها غشاءين: الخارجي ناعم، والداخلي متطبّق طيّات اسمها cristae (كل ما الخلية محتاجة طاقة أكتر، الـ cristae بتزيد). على الغشاء الداخلي فيه كُوَر صغيرة 9 نانومتر على رجول رفيعة اسمها elementary particles، وهي إنزيم F1 اللي بيربط نقل الإلكترونات بتحويل ADP.",
      questions: [
        {
          id: "c1-mem-1",
          type: "mcq",
          prompt: "With EM, the outer mitochondrial membrane is:",
          options: ["Smooth", "Thrown into folds called cristae", "Covered with elementary particles", "Covered with matrix granules"],
          answer: 0,
          explain: "Outer = smooth. Inner = cristae + elementary particles.",
        },
        {
          id: "c1-mem-2",
          type: "complete",
          prompt: "The folds of the inner mitochondrial membrane are called ____.",
          answers: ["cristae", "crista"],
          explain: "Cristae project into the inner cavity (matrix).",
        },
        {
          id: "c1-mem-3",
          type: "tf",
          statement: "The number of cristae is directly related to the energy requirement of the cell.",
          answer: true,
          explain: "Slide 43.",
        },
        {
          id: "c1-mem-4",
          type: "mcq",
          prompt: "Which is NOT a name for the tiny spherical projections of the inner membrane?",
          options: ["Inner membrane spheres", "Globular subunits", "Elementary particles", "Matrix granules"],
          answer: 3,
          explain: "Matrix granules are in the matrix and store Ca++.",
        },
        {
          id: "c1-mem-5",
          type: "complete",
          prompt: "Elementary particles are believed to represent an enzyme known as ____.",
          answers: ["F1", "F-1", "F 1"],
          explain: "F1, highlighted on slide 43.",
        },
        {
          id: "c1-mem-6",
          type: "mcq",
          prompt: "The elementary particles are about ____ in diameter and couple electron transport to:",
          options: [
            "9 nm, the phosphorylation of ADP",
            "7–10 nm, the passage of ions",
            "9 nm, Ca++ storage",
            "1000 nm, protein synthesis",
          ],
          answer: 0,
          explain: "≈9 nm spheres; F1 couples electron transport to the phosphorylation of ADP.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 45–48
    {
      id: "mito-compartments",
      title: "Intermembrane space & matrix",
      slides: "45–48",
      keyPoints: [
        "[[Intermembrane space]]: between the inner and outer membranes; specific enzymes that use the ATP generated in the inner membrane.",
        "[[Mitochondrial matrix]]: electron-dense [[matrix granules]] = sites for Ca++ ions storage.",
        "Matrix contains DNA and RNA → mitochondria can grow, divide and synthesize some of their proteins.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Inside the mitochondrion",
          columns: ["Compartment", "Where", "Contains", "Why it matters"],
          rows: [
            ["[[Intermembrane space]]", "Between the inner and outer membranes", "Specific enzymes", "They use the ATP generated in the inner membrane"],
            ["[[Mitochondrial matrix]]", "Inner cavity (amorphous substance)", "Electron-dense [[matrix granules]]", "Sites for Ca++ ions storage"],
            ["Matrix (cont.)", "Inner cavity", "DNA and RNA", "Ability to grow, divide and synthesize some of their proteins"],
          ],
        },
      ],
      explain:
        "المسافة اللي بين الغشاءين (intermembrane space) فيها إنزيمات بتستخدم الـ ATP اللي اتعمل في الغشاء الداخلي. والـ matrix فيه حبيبات بتخزّن الكالسيوم، وفيه DNA وRNA، وعشان كده الميتوكوندريا تقدر تكبر وتنقسم وتعمل شوية من بروتيناتها بنفسها.",
      questions: [
        {
          id: "c1-mcm-1",
          type: "reason",
          prompt: "Give reason: mitochondria can grow, divide and synthesize some of their proteins.",
          answer: "Because the mitochondrial matrix contains DNA and RNA.",
          explain: "Slide 46.",
        },
        {
          id: "c1-mcm-2",
          type: "mcq",
          prompt: "Matrix granules are the sites for storage of:",
          options: ["Ca++ ions", "ATP", "Hormones", "Glycoproteins"],
          answer: 0,
          explain: "Matrix granules → Ca++ storage.",
        },
        {
          id: "c1-mcm-3",
          type: "complete",
          prompt: "The intermembrane space contains specific enzymes that use the ____ generated in the inner membrane.",
          answers: ["ATP"],
          explain: "Enzymes use the ATP generated in the inner membrane.",
        },
        {
          id: "c1-mcm-4",
          type: "tf",
          statement: "Matrix granules are electron-lucent.",
          answer: false,
          correction: "They are electron-dense granules.",
          explain: "\"Many electron-dense granules called matrix granules.\"",
        },
      ],
    },

    // ───────────────────────────────────────── slide 49
    {
      id: "mito-functions",
      title: "Functions of mitochondria",
      slides: "49",
      keyPoints: [
        "Due to their role in [[energy production]], they are called the [[powerhouses of the cells]].",
        "Participate in regulation of calcium ions level within the cytosol.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Powerhouses of the cells",
          text: "What mitochondria are called, due to their role in [[energy production]].",
        },
        {
          kind: "list",
          title: "Functions",
          items: ["Energy production (the powerhouses of the cells).", "Participate in regulation of calcium ions level within the cytosol."],
        },
      ],
      explain: "الميتوكوندريا اسمها «بيت الطاقة» عشان هي اللي بتنتج الطاقة، وكمان بتظبط مستوى الكالسيوم في الـ cytosol.",
      questions: [
        {
          id: "c1-mfn-1",
          type: "reason",
          prompt: "Give reason: mitochondria are called the powerhouses of the cells.",
          answer: "Due to their role in energy production.",
          explain: "Slide 49.",
        },
        {
          id: "c1-mfn-2",
          type: "mcq",
          prompt: "Which organelle participates in regulation of calcium ions level within the cytosol?",
          options: ["Mitochondria", "Ribosomes", "Centrioles", "Lysosomes"],
          answer: 0,
          explain: "Second function of mitochondria on slide 49.",
        },
        {
          id: "c1-mfn-3",
          type: "tf",
          statement: "Mitochondria participate in regulation of calcium ions level within the cytosol.",
          answer: true,
          explain: "Matrix granules also store Ca++.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Histology", back: "The science which deals with the tissues. The bridge between structure and function." },
    { id: "f2", front: "Cytology", back: "The science which deals with cells." },
    { id: "f3", front: "Tissues", back: "Collections of cells that have a similar structure and function." },
    { id: "f4", front: "The cell", back: "The smallest structural and functional unit of body tissues." },
    { id: "f5", front: "Cytoplasm", back: "Part of protoplasm around the nucleus, designed to perform synthetic and metabolic activities." },
    { id: "f6", front: "Cytosol", back: "The liquid non-organelle part of the cytoplasm, between organelles and inclusions. Soluble proteins, lipids, carbohydrates, small ions." },
    { id: "f7", front: "Cytoplasmic organelles", back: "Permanent, indispensable living cytoplasmic structures that perform specific functions." },
    { id: "f8", front: "Non-membranous organelles", back: "No bounding membrane of their own: ribosomes and centrioles." },
    { id: "f9", front: "Membranous organelles (7)", back: "Cell membrane, mitochondria, ER (smooth & rough), Golgi apparatus, lysosomes, peroxisomes, nucleus." },
    { id: "f10", front: "Cell membrane with LM", back: "Invisible: too thin (7–10 nm) to be seen." },
    { id: "f11", front: "Cell boundary seen with LM is due to…", back: "1. Condensation of cytoplasm on the inner aspect. 2. Condensation of stain (silver/PAS) on the carbohydrate-rich coat. 3. Obliquity of the sections." },
    { id: "f12", front: "Cell membrane with EM", back: "Trilaminar: outer & inner electron-dense layers, intermediate electron-lucent layer." },
    { id: "f13", front: "Fluid mosaic model", back: "Currently acceptable model: protein ice cubes in a lipid sea." },
    { id: "f14", front: "Membrane composition", back: "Phospholipids 30% · Proteins 60% · Carbohydrates 10%." },
    { id: "f15", front: "Phospholipid head vs tail", back: "Head: polar, hydrophilic, outward. Tail: non-polar, hydrophobic, inward." },
    { id: "f16", front: "Cholesterol (membrane)", back: "Dispersed in the irregular spaces between the hydrophobic tails." },
    { id: "f17", front: "Intrinsic (integral) proteins", back: "Firmly attached; some extend through the whole membrane → transmembrane channels for water-soluble ions and molecules." },
    { id: "f18", front: "Extrinsic (peripheral) proteins", back: "Only partially embedded to either aspect of the membrane." },
    { id: "f19", front: "Glycocalyx", back: "Cell coat: glycoproteins + glycolipids projecting from the outer surface." },
    { id: "f20", front: "Ways the membrane regulates exchange", back: "Passive diffusion · Facilitated diffusion · Active transport · Selective transport." },
    { id: "f21", front: "Phagocytosis vs pinocytosis", back: "Phagocytosis: solid particles. Pinocytosis: minute droplet of fluid." },
    { id: "f22", front: "Phagosome", back: "Vesicle (endocytotic vesicle) around engulfed particles; floats in cytoplasm, fuses with lysosomes → enzymatic digestion." },
    { id: "f23", front: "Exocytosis", back: "Exo = out. Vesicles fuse with the plasma membrane and release contents outside; many secretory processes." },
    { id: "f24", front: "Functions of the glycocalyx (6)", back: "Protection · immunological response · hormone binding · intercellular adhesions · basement membrane · cell recognition." },
    { id: "f25", front: "Myelin sheath formation", back: "Schwann cell → peripheral axons. Oligodendrocytes → central axons." },
    { id: "f26", front: "Mitochondria with LM", back: "Granules, rod-like or thread-like." },
    { id: "f27", front: "Number of mitochondria", back: "Varies with energy requirements. Liver cells (active) up to 1000; small lymphocytes (inactive) very few." },
    { id: "f28", front: "Stains for mitochondria", back: "Fixed tissue: iron hematoxylin. Living cells (supravital): Janus green B." },
    { id: "f29", front: "Cells without mitochondria", back: "Red blood cells and terminal keratinocytes." },
    { id: "f30", front: "Mitochondria with EM", back: "Ovoid or elongated, two unit membranes. Outer smooth; inner folded into cristae; cavity filled with matrix." },
    { id: "f31", front: "Elementary particles", back: "≈9 nm spheres on narrow stalks on the inner membrane = enzyme F1, couples electron transport to phosphorylation of ADP." },
    { id: "f32", front: "Intermembrane space", back: "Between the two membranes; specific enzymes that use the ATP generated in the inner membrane." },
    { id: "f33", front: "Mitochondrial matrix", back: "Matrix granules (Ca++ storage) + DNA and RNA (grow, divide, synthesize some proteins)." },
    { id: "f34", front: "Powerhouses of the cells", back: "Mitochondria, due to their role in energy production. Also regulate Ca++ level in the cytosol." },
  ],

  highYield: [
    "Histology",
    "Tissues",
    "Cytology",
    "functional unit of body tissues",
    "cytoplasm",
    "cytosol",
    "permanent",
    "membranes",
    "membranous",
    "non-membranous",
    "no membrane",
    "invisible",
    "cell boundary",
    "electron microscope",
    "trilaminar",
    "fluid mosaic",
    "30",
    "central bimolecular layer",
    "Cholesterol",
    "60",
    "globules",
    "intrinsic",
    "transmembrane channels",
    "extrinsic",
    "10%",
    "glycoprotein",
    "glycolipid",
    "glycocalyx",
    "exchange of molecules and",
    "Endocytosis",
    "phagosome",
    "Exocytosis",
    "thread-like",
    "energy requirements",
    "motile",
    "basal regions of ion-transporting cells",
    "iron hematoxylin",
    "Janus green B",
    "red blood cells",
    "terminal keratinocytes",
    "ovoid or elongated",
    "smooth",
    "inner membrane",
    "inner membrane spheres",
    "globular subunits",
    "elementary particles",
    "F1",
    "Intermembrane space",
    "matrix granules",
    "mitochondrial matrix",
    "energy production",
    "powerhouses of the cells",
  ],

  sheet: [
    {
      heading: "Definitions",
      points: [
        "[[Histology]] → tissues · [[Cytology]] → cells",
        "[[Tissues]] = cells with similar structure & function",
        "Histology = bridge between structure and function",
        "[[The cell]] = smallest structural & functional unit",
        "[[Cytoplasm]] = around nucleus, synthetic & metabolic",
        "[[Cytosol]] = liquid non-organelle part",
      ],
    },
    {
      heading: "Organelles",
      points: [
        "[[Permanent]], indispensable, living",
        "Classified by presence of [[membranes]]",
        "Non-membranous ([[no]] membrane) = ribosomes + centrioles only",
        "Membranous = C M E G L P N",
      ],
    },
    {
      heading: "Cell membrane",
      points: [
        "= plasmalemma = plasma membrane; barrier",
        "LM: [[invisible]], 7–10 nm",
        "[[Cell boundary]]: cytoplasm condensation · stain (silver/PAS) · oblique section",
        "EM: [[trilaminar]], dense / lucent / dense",
        "[[Fluid mosaic model]]: protein ice cubes in a lipid sea",
      ],
    },
    {
      heading: "Composition",
      points: [
        "Phospholipids [[30%]]: [[central bimolecular layer]]; heads out, tails in",
        "[[Cholesterol]]: between hydrophobic tails",
        "Proteins [[60%]]: [[globules]] moving freely",
        "[[Intrinsic]]: firm, [[transmembrane channels]] · [[Extrinsic]]: partial",
        "[[Carbohydrates (10%)]]: [[glycoprotein]] / [[glycolipid]] → [[glycocalyx]]",
      ],
    },
    {
      heading: "Membrane functions",
      points: [
        "[[Regulates the exchange of molecules and ions]]",
        "Passive · facilitated · active · selective",
        "[[Endocytosis]]: phago (solid) / pino (fluid) → pseudopodia → [[phagosome]] → lysosomes",
        "[[Exocytosis]]: vesicles fuse → release outside (secretion)",
        "Impulses · myelin (Schwann = peripheral, oligodendrocytes = central) · microvilli, cilia, flagella",
      ],
    },
    {
      heading: "Glycocalyx functions",
      points: ["Protection · Immunological · Hormone binding", "Intercellular adhesions · Basement membrane · Recognition"],
    },
    {
      heading: "Mitochondria: LM",
      points: [
        "Cell respiration & energy production",
        "[[Granules, rod-like or thread-like]]",
        "Number ∝ [[energy requirements]]: liver 1000, small lymphocyte very few",
        "[[Motile]] → [[basal regions of ion-transporting cells]]",
        "Fixed: [[iron hematoxylin]] · Living: [[Janus green B]] (blue)",
        "Absent in [[red blood cells and terminal keratinocytes]]",
      ],
    },
    {
      heading: "Mitochondria: EM",
      points: [
        "[[Ovoid or elongated]], two unit membranes",
        "Outer [[smooth]] · inner → cristae (∝ energy need)",
        "[[Inner membrane]] spheres 9 nm = [[elementary particles]] = [[enzyme known as F1]]",
        "[[Intermembrane space]]: enzymes using ATP",
        "[[Matrix granules]]: Ca++ · matrix DNA & RNA",
        "[[Energy production]] → [[powerhouses of the cells]] · regulate cytosol Ca++",
      ],
    },
  ],
};

export default lecture;
