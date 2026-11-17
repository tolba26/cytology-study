import type { Lecture } from "./types";

/**
 * Epithelium #3: Luminal and lateral surface specializations. 27 scanned pages.
 * High-yield = yellow underlined/italic text on the (blue) slides.
 */
const lecture: Lecture = {
  id: "epithelium-3",
  number: 3,
  title: "Epithelium #3",
  subtitle: "Cilia · Microvilli · Stereocilia · Cell junctions",
  lecturer: "Histology department",
  slideCount: 27,
  group: "Histology",

  sections: [
    // ───────────────────────────────────────── pp. 2–4
    {
      id: "luminal",
      title: "Luminal surface & cilia: definition",
      slides: "2–4",
      keyPoints: [
        "The luminal (apical) surface may have: cilia (kinocilia), microvilli, stereocilia.",
        "Cilia: [[motile]] structures, readily [[visible]] with LM, longer than microvilli.",
      ],
      blocks: [
        {
          kind: "chips",
          title: "The luminal surface may have",
          items: [{ label: "Cilia", note: "kinocilia" }, { label: "Microvilli" }, { label: "Stereocilia" }],
        },
        {
          kind: "definition",
          term: "Cilia",
          aside: "kinocilia",
          text: "[[Motile]] structures, readily [[visible]] with LM, *longer than microvilli*.",
        },
      ],
      explain: "السطح اللي بيبص للتجويف ممكن يكون عليه cilia أو microvilli أو stereocilia. الـ cilia بتتحرك، وبتبان بالضوئي بسهولة، وأطول من الـ microvilli.",
      questions: [
        {
          id: "e3-lu-1",
          type: "mcq",
          prompt: "Cilia are also called:",
          options: ["Kinocilia", "Stereocilia", "Microvilli", "Brush border"],
          answer: 0,
          explain: "Cilia (kinocilia).",
        },
        {
          id: "e3-lu-2",
          type: "tf",
          statement: "Cilia are motile structures readily visible with LM and longer than microvilli.",
          answer: true,
          explain: "Page 4.",
        },
        {
          id: "e3-lu-3",
          type: "mcq",
          prompt: "All are specializations of the luminal surface EXCEPT:",
          options: ["Hemidesmosomes", "Cilia", "Microvilli", "Stereocilia"],
          answer: 0,
          explain: "Hemidesmosomes are basal (Epithelium #2).",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 5–8
    {
      id: "cilia-em",
      title: "Cilia: EM & functions",
      slides: "5–8",
      keyPoints: [
        "Outer cell membrane; central core = the [[axoneme]].",
        "Axoneme: [[two central single]] and [[nine peripheral doublets]] (subunits A and B) = 9+2 microtubules.",
        "Central singlets are surrounded by a [[central sheath]].",
        "Protein links ([[nexins]]) connect adjacent doublets; [[radial spokes]] connect doublets to the central sheath.",
        "Short [[dynein arms]] project from [[subunit A]] of each doublet.",
        "Each axoneme is inserted into a [[basal body]].",
        "Functions: propel mucus in respiratory airways; transport the ovum toward the uterus in oviducts.",
      ],
      blocks: [
        { kind: "diagram", diagram: "axoneme", title: "Axoneme (9 + 2) in cross-section", caption: "Simplified from page 7." },
        { kind: "number", value: "9 + 2", label: "Microtubule pattern of the axoneme", note: "[[Nine peripheral doublets]] + [[two central single]] microtubules." },
        {
          kind: "list",
          title: "Functions of cilia",
          items: ["In respiratory airways: propel mucus.", "In oviducts: transport ovum towards uterus."],
        },
      ],
      explain:
        "جوّه الـ cilium في محور اسمه axoneme: 9 أزواج microtubules برّه + 2 مفردين في النص (9+2). المفردين حواليهم central sheath، والأزواج مربوطة ببعض بالـ nexins، وبالنص بالـ radial spokes، وطالع من subunit A أذرع dynein. كل axoneme قاعد في basal body. شغلها: تزق المخاط في الجهاز التنفسي، وتحرّك البويضة في قناة فالوب.",
      questions: [
        {
          id: "e3-ce-1",
          type: "complete",
          prompt: "The central core of a cilium is called the ____.",
          answers: ["axoneme"],
          explain: "Axoneme.",
        },
        {
          id: "e3-ce-2",
          type: "mcq",
          prompt: "Adjacent doublets of the axoneme are connected by:",
          options: ["Nexins", "Radial spokes", "Dynein arms", "Central sheath"],
          answer: 0,
          explain: "Nexins link doublets; radial spokes link doublets to central sheath.",
        },
        {
          id: "e3-ce-3",
          type: "mcq",
          prompt: "Dynein arms project from:",
          options: ["Subunit A of each doublet", "Subunit B", "The central sheath", "The basal body"],
          answer: 0,
          explain: "Subunit A.",
        },
        {
          id: "e3-ce-4",
          type: "tf",
          statement: "The axoneme consists of nine central singlets and two peripheral doublets.",
          answer: false,
          correction: "It consists of two central single and nine peripheral doublet microtubules (9+2).",
          explain: "9 doublets outside, 2 singles inside.",
        },
        {
          id: "e3-ce-5",
          type: "mcq",
          prompt: "In the oviducts, cilia function to:",
          options: ["Transport the ovum towards the uterus", "Propel mucus", "Absorb nutrients", "Increase surface area"],
          answer: 0,
          explain: "Airways: mucus. Oviducts: ovum.",
        },
        {
          id: "e3-ce-6",
          type: "complete",
          prompt: "Each axoneme is inserted into a ____ body.",
          answers: ["basal"],
          explain: "Basal body.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 9–12
    {
      id: "microvilli",
      title: "Microvilli",
      slides: "9–12",
      keyPoints: [
        "Minute [[finger-like]] projections.",
        "On the surface of [[absorptive cells]] (e.g., intestine and kidney proximal tubules).",
        "Too small to be seen with LM; when numerous they make a [[striated or brush border]].",
        "EM: core of [[actin filaments]] inserted into the [[terminal web]] under the cell surface.",
        "Function: increase the surface area for absorption.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Microvilli",
          text: "Minute [[finger-like]] projections on the surface of [[absorptive cells]] (intestine, kidney proximal tubules).",
        },
        {
          kind: "table",
          title: "Cilia vs microvilli",
          columns: ["", "Cilia", "Microvilli"],
          rows: [
            ["Movement", "[[Motile]]", "Not described as motile"],
            ["LM", "Readily [[visible]]", "Too small; numerous → [[striated or brush border]]"],
            ["Core", "[[Axoneme]] 9+2 microtubules", "[[Actin filaments]] into [[terminal web]]"],
            ["Length", "Longer", "Shorter"],
            ["Function", "Propel mucus; transport ovum", "Increase surface area for absorption"],
          ],
        },
      ],
      explain:
        "الـ microvilli بروزات صغيرة زي الصوابع على خلايا الامتصاص (الأمعاء والـ proximal tubules في الكلى). لوحدها مش بتبان بالضوئي، بس لما تكتر بتعمل brush border. جوّاها actin داخل في الـ terminal web، وشغلها تزوّد مساحة الامتصاص.",
      questions: [
        {
          id: "e3-mv-1",
          type: "mcq",
          prompt: "The core of microvilli contains:",
          options: ["Actin filaments inserted into the terminal web", "9+2 microtubules", "Intermediate filaments", "Collagen fibers"],
          answer: 0,
          explain: "Actin → terminal web.",
        },
        {
          id: "e3-mv-2",
          type: "complete",
          prompt: "When numerous, microvilli make a striated or ____ border.",
          answers: ["brush"],
          explain: "Striated or brush border.",
        },
        {
          id: "e3-mv-3",
          type: "mcq",
          prompt: "Microvilli are found on the surface of:",
          options: ["Absorptive cells (intestine, kidney proximal tubules)", "Respiratory airways only", "Epididymis", "Myoepithelial cells"],
          answer: 0,
          explain: "Absorptive cells.",
        },
        {
          id: "e3-mv-4",
          type: "compare",
          prompt: "Compare cilia and microvilli.",
          columns: ["", "Cilia", "Microvilli"],
          rows: [
            ["LM", "Readily visible", "Too small; brush border when numerous"],
            ["Core", "Axoneme (9+2)", "Actin filaments into terminal web"],
            ["Function", "Propel mucus / transport ovum", "Increase surface area for absorption"],
          ],
          explain: "Pages 4–11.",
        },
        {
          id: "e3-mv-5",
          type: "tf",
          statement: "Individual microvilli are easily seen with LM.",
          answer: false,
          correction: "They are too small to be seen with LM; numerous microvilli form the brush border.",
          explain: "Page 9.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 13–14
    {
      id: "stereocilia",
      title: "Stereocilia",
      slides: "13–14",
      keyPoints: [
        "Extremely long, branched [[non-motile microvilli]].",
        "Location: male genital tract (epididymis and vas deferens).",
        "Function: increase surface area.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Stereocilia",
          text: "Extremely long, branched [[non-motile microvilli]]; despite the name, they are not cilia.",
        },
        {
          kind: "chips",
          title: "Location",
          items: [{ label: "Epididymis" }, { label: "Vas deferens" }],
        },
      ],
      explain: "الـ stereocilia اسمها cilia بس هي في الحقيقة microvilli طويلة جدًا ومتفرّعة ومش بتتحرك. موجودة في الجهاز التناسلي الذكري (البربخ والـ vas deferens)، وبتزوّد المساحة.",
      questions: [
        {
          id: "e3-st-1",
          type: "mcq",
          prompt: "Stereocilia are:",
          options: ["Extremely long, branched non-motile microvilli", "Motile cilia with 9+2 axoneme", "Short finger-like projections", "Cell junctions"],
          answer: 0,
          explain: "Non-motile microvilli.",
        },
        {
          id: "e3-st-2",
          type: "complete",
          prompt: "Stereocilia are located in the epididymis and the vas ____.",
          answers: ["deferens"],
          explain: "Male genital tract.",
        },
        {
          id: "e3-st-3",
          type: "tf",
          statement: "Stereocilia are motile structures that propel mucus.",
          answer: false,
          correction: "They are non-motile microvilli that increase surface area.",
          explain: "Page 13.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 15–18
    {
      id: "junctions",
      title: "Intercellular surfaces & zonula occludens",
      slides: "15–18",
      keyPoints: [
        "Cell junctions and junctional complex are of [[four]] types: zonula occludens, zonula adherens, macula adherens, gap junctions.",
        "Zonula occludens (tight junction) sits just [[below]] the luminal surface.",
        "Two cell membranes [[fuse]] together, forming a complete [[belt]] around the cell.",
        "[[Sealing]] the intercellular space: [[prevents paracellular]] pathway, [[allows transcellular]] pathway.",
      ],
      blocks: [
        {
          kind: "steps",
          title: "Four junctions, from luminal surface down",
          items: [
            "Zonula occludens (tight junctions).",
            "Zonula adherens (anchoring or intermediate junction).",
            "Macula adherens (desmosomes).",
            "Gap junctions (nexus).",
          ],
        },
        {
          kind: "table",
          title: "Tight junction and the two pathways",
          columns: ["Pathway", "Effect of zonula occludens"],
          rows: [
            ["Paracellular (between cells)", "[[Prevents]]"],
            ["Transcellular (through cells)", "[[Allows]]"],
          ],
        },
      ],
      explain:
        "الخلايا الطلائية مربوطة ببعض بـ 4 أنواع junctions. أولهم tight junction تحت السطح على طول: الغشاءين بيلتحموا وبيعملوا حزام كامل يقفل المسافة بين الخلايا، فمفيش حاجة تعدّي من بين الخلايا (paracellular)، ولازم تعدّي من جوّه الخلية (transcellular).",
      questions: [
        {
          id: "e3-ju-1",
          type: "mcq",
          prompt: "The zonula occludens:",
          options: ["Sealing the intercellular space: prevents paracellular, allows transcellular pathway", "Allows paracellular pathway", "Is a spot-like junction", "Is a communicating junction"],
          answer: 0,
          explain: "Sealing → prevents paracellular, allows transcellular.",
        },
        {
          id: "e3-ju-2",
          type: "complete",
          prompt: "Cell junctions and junctional complex are of ____ different types.",
          answers: ["four", "4"],
          explain: "Four.",
        },
        {
          id: "e3-ju-3",
          type: "tf",
          statement: "In tight junctions, the two cell membranes fuse together forming a complete belt around the cell.",
          answer: true,
          explain: "Page 16.",
        },
        {
          id: "e3-ju-4",
          type: "mcq",
          prompt: "Macula adherens is also called:",
          options: ["Desmosome", "Tight junction", "Nexus", "Hemidesmosome"],
          answer: 0,
          explain: "Macula adherens = desmosome; gap junction = nexus.",
        },
        {
          id: "e3-ju-5",
          type: "complete",
          prompt: "The zonula occludens is located just ____ the luminal surface.",
          answers: ["below", "beneath", "under"],
          explain: "Just below the luminal surface.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 19–22
    {
      id: "adherens-desmosome",
      title: "Zonula adherens & desmosomes",
      slides: "19–22",
      keyPoints: [
        "Zonula adherens: [[deep]] to tight junctions, forming [[a belt]] around each cell.",
        "Its two cell membranes [[diverge]]; [[actin]] filaments insert into [[electron-dense plaques]]; the filaments belong to the [[terminal web]].",
        "Macula adherens (desmosome): [[spot-like]], the third element of the junctional complex; may occur [[singly]].",
        "Has a [[wider gap with filaments]] and a circular electron-dense [[attachment plaque]] on the cytoplasmic side.",
        "[[Intermediate]] filaments insert into the plaques or make a [[hairpin loop]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Zonula adherens vs macula adherens",
          columns: ["", "Zonula adherens", "Macula adherens (desmosome)"],
          rows: [
            ["Shape", "[[A belt]] around each cell", "[[Spot-like]]; may occur [[singly]]"],
            ["Position", "[[Deep]] to tight junctions", "Third element of the junctional complex"],
            ["Membranes", "[[Diverge]]", "[[Wider gap with filaments]]"],
            ["Plaque", "[[Electron-dense plaques]]", "Circular [[attachment plaque]]"],
            ["Filaments", "[[Actin]] (of the [[terminal web]])", "[[Intermediate]] filaments; insert or [[hairpin loop]]"],
          ],
        },
      ],
      explain:
        "الـ zonula adherens حزام تحت الـ tight junction، الغشاءين فيه بيبعدوا شوية، وفيه actin من الـ terminal web بيدخل في plaques غامقة. الـ desmosome نقطة مش حزام، والمسافة فيه أوسع وفيها خيوط، وليه attachment plaque بيدخل فيه الـ intermediate filaments أو بيلفّوا عليه زي دبوس الشعر.",
      questions: [
        {
          id: "e3-ad-1",
          type: "mcq",
          prompt: "Filaments inserting into the plaques of desmosomes are:",
          options: ["Intermediate filaments", "Actin filaments", "Microtubules", "Collagen fibrils"],
          answer: 0,
          explain: "Desmosome → intermediate; zonula adherens → actin.",
        },
        {
          id: "e3-ad-2",
          type: "complete",
          prompt: "The actin filaments of the zonula adherens belong to the ____ web.",
          answers: ["terminal"],
          explain: "Terminal web.",
        },
        {
          id: "e3-ad-3",
          type: "tf",
          statement: "The macula adherens is spot-like and may occur singly.",
          answer: true,
          explain: "Page 20.",
        },
        {
          id: "e3-ad-4",
          type: "compare",
          prompt: "Compare zonula adherens and macula adherens.",
          columns: ["", "Zonula adherens", "Macula adherens"],
          rows: [
            ["Shape", "Belt around each cell", "Spot-like, may be single"],
            ["Membranes", "Diverge", "Wider gap with filaments"],
            ["Filaments", "Actin (terminal web) into electron-dense plaques", "Intermediate filaments into attachment plaque / hairpin loop"],
          ],
          explain: "Pages 19–20.",
        },
        {
          id: "e3-ad-5",
          type: "mcq",
          prompt: "The zonula adherens lies deep to tight junctions. Its two cell membranes:",
          options: ["Diverge", "Fuse", "Are very close without fusion", "Are absent"],
          answer: 0,
          explain: "Fuse = tight junction; very close = gap junction.",
        },
      ],
    },

    // ───────────────────────────────────────── pp. 23–26
    {
      id: "gap",
      title: "Gap junction (nexus)",
      slides: "23–26",
      keyPoints: [
        "Membranes are very close but [[no fusion]] occurs.",
        "Pores in two adjacent cells line up together.",
        "Pores consist of tubules called [[connexon]], each of [[six transmembrane proteins]] ([[connexins]]).",
        "A communicating junction: responsible for [[metabolic coupling]] and [[functional synchronization]].",
      ],
      blocks: [
        { kind: "number", value: "6", label: "Connexins in one connexon", note: "[[Six transmembrane proteins]]." },
        {
          kind: "table",
          title: "Membranes in each junction",
          columns: ["Junction", "The two membranes"],
          rows: [
            ["Zonula occludens", "[[Fuse]]"],
            ["Zonula adherens", "[[Diverge]]"],
            ["Macula adherens", "[[Wider gap with filaments]]"],
            ["Gap junction", "Very close, [[no fusion]]"],
          ],
        },
      ],
      explain:
        "الـ gap junction الغشاءين قريبين جدًا بس مش ملتحمين، والثقوب في الخليتين بتتقابل. كل ثقب أنبوبة اسمها connexon معمولة من 6 بروتينات (connexins). ده junction للتواصل: بيربط الخلايا ببعض في الأيض وبيخليهم يشتغلوا مع بعض في نفس الوقت.",
      questions: [
        {
          id: "e3-ga-1",
          type: "complete",
          prompt: "Each connexon consists of six transmembrane proteins called ____.",
          answers: ["connexins", "connexin"],
          explain: "Six transmembrane proteins = connexins.",
        },
        {
          id: "e3-ga-2",
          type: "mcq",
          prompt: "The junction responsible for metabolic coupling and functional synchronization is:",
          options: ["Gap junction (nexus)", "Zonula occludens", "Zonula adherens", "Hemidesmosome"],
          answer: 0,
          explain: "Communicating junction = gap junction.",
        },
        {
          id: "e3-ga-3",
          type: "tf",
          statement: "In gap junctions, the two cell membranes fuse together.",
          answer: false,
          correction: "Membranes are very close but no fusion occurs.",
          explain: "Fusion is the tight junction.",
        },
        {
          id: "e3-ga-4",
          type: "mcq",
          prompt: "The tubules forming the pores of gap junctions are called:",
          options: ["Connexons", "Nexins", "Plaques", "Axonemes"],
          answer: 0,
          explain: "Connexon made of connexins. (Nexins link ciliary doublets.)",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Luminal surface specializations", back: "Cilia (kinocilia) · microvilli · stereocilia." },
    { id: "f2", front: "Cilia (LM)", back: "Motile, readily visible, longer than microvilli." },
    { id: "f3", front: "Axoneme", back: "9 peripheral doublets (A & B) + 2 central singles; central sheath; nexins; radial spokes; dynein arms on A." },
    { id: "f4", front: "Cilia functions", back: "Airways: propel mucus. Oviducts: transport ovum to uterus." },
    { id: "f5", front: "Microvilli", back: "Finger-like; absorptive cells; brush border; actin core → terminal web; ↑ absorption area." },
    { id: "f6", front: "Stereocilia", back: "Long, branched, non-motile microvilli; epididymis & vas deferens; ↑ surface area." },
    { id: "f7", front: "Four junctions", back: "Zonula occludens · zonula adherens · macula adherens · gap junction." },
    { id: "f8", front: "Zonula occludens", back: "Below surface; membranes fuse; belt; seals; prevents paracellular, allows transcellular." },
    { id: "f9", front: "Zonula adherens", back: "Deep to tight junction; belt; membranes diverge; actin (terminal web) into dense plaques." },
    { id: "f10", front: "Macula adherens", back: "Spot-like desmosome; wider gap; attachment plaque; intermediate filaments / hairpin loop." },
    { id: "f11", front: "Gap junction", back: "Very close, no fusion; connexon of 6 connexins; metabolic coupling & synchronization." },
  ],

  highYield: [
    "motile",
    "visible",
    "axoneme",
    "two central single",
    "nine peripheral",
    "central sheath",
    "nexins",
    "radial spokes",
    "dynein arms",
    "subunit A",
    "basal",
    "finger-like",
    "absorptive cells",
    "brush border",
    "actin filaments",
    "terminal web",
    "non-motile microvilli",
    "four",
    "below",
    "fuse",
    "belt",
    "sealing",
    "paracellular",
    "transcellular",
    "deep",
    "diverge",
    "electron-dense plaques",
    "spot-like",
    "singly",
    "wider gap with filaments",
    "attachment plaque",
    "intermediate",
    "hairpin loop",
    "no fusion",
    "connexon",
    "six transmembrane",
    "connexins",
    "metabolic coupling",
    "functional synchronization",
  ],

  sheet: [
    {
      heading: "Luminal surface",
      points: [
        "Cilia (kinocilia) · microvilli · stereocilia",
        "Cilia: [[motile]], [[visible]], longer",
        "[[Axoneme]]: [[nine peripheral doublets]] + [[two central single]] (9+2)",
        "[[Central sheath]] · [[nexins]] · [[radial spokes]] · [[dynein arms]] on [[subunit A]] · [[basal body]]",
        "Airways: mucus · oviducts: ovum",
      ],
    },
    {
      heading: "Microvilli & stereocilia",
      points: [
        "Microvilli: [[finger-like]], [[absorptive cells]], [[striated or brush border]]",
        "[[Actin filaments]] → [[terminal web]]; ↑ absorption",
        "Stereocilia: [[non-motile microvilli]]; epididymis, vas deferens",
      ],
    },
    {
      heading: "Junctions",
      points: [
        "[[Four]] types",
        "Z. occludens: [[below]] surface, [[fuse]], [[belt]], [[sealing]], [[prevents paracellular]], [[allows transcellular]]",
        "Z. adherens: [[deep]], [[a belt]], [[diverge]], [[actin]] → [[electron-dense plaques]], [[terminal web]]",
        "Macula adherens: [[spot-like]], [[singly]], [[wider gap with filaments]], [[attachment plaque]], [[intermediate]], [[hairpin loop]]",
        "Gap: [[no fusion]], [[connexon]] of [[six transmembrane proteins]] ([[connexins]]), [[metabolic coupling]], [[functional synchronization]]",
      ],
    },
  ],
};

export default lecture;
