import type { Lecture } from "./types";

/**
 * Connective Tissue (I): general features & cells. Dr. Sahar Fayez.
 * Scanned handout, 18 pages × 3 slides; slide numbers as printed on the slides.
 */
const lecture: Lecture = {
  id: "connective-tissue-1",
  number: 1,
  title: "Connective Tissue 1",
  subtitle: "General features · Fixed cells · Free cells",
  lecturer: "Dr. Sahar Fayez",
  slideCount: 53,
  group: "Histology",

  sections: [
    // ───────────────────────────────────────── slides 2–6
    {
      id: "ct-general",
      title: "Definition, general features & types",
      slides: "2–6",
      keyPoints: [
        "One of the four basic tissues, designed primarily to [[connect and support]] the other tissues.",
        "Derived from the [[mesoderm]] (the ectoderm of the head region may also contribute).",
        "Three main components: [[cells]] (widely separated), [[fibers]] (different types), and [[amorphous ground substances]].",
        "Well vascularized. Many functions: mechanical, defense, storage, temperature regulation, tissue repair.",
        "Types: connective tissue proper, adipose tissue, cartilage, bone, blood.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Connective tissue",
          text: "One of the four basic tissues of the body, designed primarily to [[connect and support]] the other tissues.",
        },
        {
          kind: "list",
          title: "General features",
          items: [
            "Derived from the [[mesoderm]]; the ectoderm of the head region may also contribute.",
            "Made of [[cells]] (widely separated from each other), [[fibers]] (of different types) and [[amorphous ground substances]].",
            "Well vascularized.",
            "Functions: mechanical (connection, supporting, protection), defense (phagocytes, immunocompetent cells, and the ground substance acting against spread of pathogens), storage (water, electrolytes, fat), temperature regulation (by adipose tissue), and tissue repair (scar tissue).",
          ],
        },
        {
          kind: "tree",
          title: "Connective tissue proper is formed of",
          root: {
            label: "CT proper",
            children: [
              { label: "Cells", note: "fixed (resident, permanent) and free (wandering, visitant)" },
              { label: "Fibers", note: "collagen, elastic and reticular" },
              { label: "Amorphous ground substance" },
            ],
          },
        },
      ],
      explain:
        "النسيج الضام وظيفته يربط ويسند باقي الأنسجة، وجاي من الـ mesoderm. مكوّن من خلايا متباعدة وألياف ومادة أساسية (ground substance)، وفيه أوعية دموية كتير. بيحمي ويخزّن ويدافع ويصلّح الجروح. أنواعه: CT proper والدهني والغضروف والعظم والدم.",
      questions: [
        {
          id: "c1t-ge-1",
          type: "mcq",
          prompt: "Connective tissues are mainly derived from:",
          options: ["Mesoderm", "Endoderm", "Neural crest only", "Ectoderm only"],
          answer: 0,
          explain: "Mesoderm (ectoderm of the head may contribute).",
        },
        {
          id: "c1t-ge-2",
          type: "complete",
          prompt: "Connective tissue is designed primarily to connect and ____ the other tissues.",
          answers: ["support"],
          explain: "Connect and support.",
        },
        {
          id: "c1t-ge-3",
          type: "mcq",
          prompt: "The three main components of connective tissue are:",
          options: ["Cells, fibers and amorphous ground substance", "Cells, cilia and microvilli", "Glands, ducts and lumen", "Nucleus, cytoplasm and membrane"],
          answer: 0,
          explain: "Slide 3.",
        },
        {
          id: "c1t-ge-4",
          type: "tf",
          statement: "In connective tissue, the cells are closely packed with little intercellular material.",
          answer: false,
          correction: "The cells are widely separated from each other.",
          explain: "Slide 3.",
        },
        {
          id: "c1t-ge-5",
          type: "mcq",
          prompt: "Temperature regulation by connective tissue is carried out by:",
          options: ["Adipose tissue", "Cartilage", "Reticular fibers", "Mast cells"],
          answer: 0,
          explain: "Slide 4.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 8–11
    {
      id: "mesenchymal-cells",
      title: "Fixed cells: mesenchymal cells",
      slides: "8–11",
      keyPoints: [
        "Fixed (resident, permanent) cells: 1. [[Mesenchymal cells]].",
        "Undifferentiated, with large nuclei, prominent nucleoli and fine chromatin; \"spindle-shaped\" with scant cytoplasm.",
        "[[Irregular stellate]] shape with delicate branching processes forming an interlacing network.",
        "Nucleus [[oval]] with dispersed chromatin and prominent nucleolus.",
        "Functions: relatively unspecialized and capable of differentiation into all types of CT cells; some remain in mature CT as a source of other cells.",
      ],
      blocks: [
        {
          kind: "list",
          title: "Mesenchymal cells: functions",
          items: [
            "Relatively unspecialized and capable of differentiation into all types of connective tissue cells.",
            "Some remain in mature connective tissue and provide a source for other types of connective tissue cells.",
          ],
        },
        {
          kind: "chips",
          title: "Look",
          items: [
            { label: "Shape", note: "irregular stellate / spindle-shaped" },
            { label: "Nucleus", note: "oval, large, fine chromatin" },
            { label: "Cytoplasm", note: "scant, branching processes" },
          ],
        },
      ],
      explain: "الخلايا الـ mesenchymal خلايا لسه مش متخصصة، شكلها نجمي أو مغزلي، ونواتها بيضاوي وكبيرة. تقدر تتحول لأي نوع من خلايا النسيج الضام، وفيه منها احتياطي في النسيج الكبير.",
      questions: [
        {
          id: "c1t-me-1",
          type: "mcq",
          prompt: "Mesenchymal cells are:",
          options: ["Undifferentiated cells capable of differentiating into all CT cell types", "Fully differentiated antibody-producing cells", "Phagocytic cells derived from monocytes", "Fat-storing cells"],
          answer: 0,
          explain: "Slide 11.",
        },
        {
          id: "c1t-me-2",
          type: "complete",
          prompt: "Mesenchymal cells have an irregular ____ shape with delicate branching processes.",
          answers: ["stellate"],
          explain: "Irregular stellate.",
        },
        {
          id: "c1t-me-3",
          type: "tf",
          statement: "The nucleus of mesenchymal cells is oval with dispersed chromatin and a prominent nucleolus.",
          answer: true,
          explain: "Slide 9.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 12–20
    {
      id: "macrophages",
      title: "Macrophages (histiocytes)",
      slides: "12–20",
      keyPoints: [
        "Phagocytic cells derived from [[monocytes]], with abundant lysosomes. Two forms: fixed (histiocytes) and stimulated (active).",
        "Fixed: [[stellate or fusiform]], hard to tell from fibroblasts. Differ by smaller darker nuclei and strong acid phosphatase reaction; vital stain: trypan blue.",
        "Active: large [[ovoid or spherical]] cells with [[eccentric kidney-shaped]] nuclei and foamy cytoplasm; irregular projections or [[pseudopodia]].",
        "EM: indented nucleus; well-developed Golgi, abundant lysosomes, many phagosomes and residual bodies.",
        "Can fuse into multinucleated [[foreign body giant cells]].",
        "Present in all organs = [[mononuclear phagocyte system]]: [[osteoclasts]] (bone), [[monocytes]] (blood), [[dust cells or heart failure cells]] (lung), [[Kupffer cells]] (liver), [[microglia]] (CNS).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Fixed vs active macrophages",
          columns: ["", "Fixed (histiocytes)", "Stimulated (active)"],
          rows: [
            ["Shape", "[[Stellate or fusiform]]", "Large [[ovoid or spherical]]"],
            ["Nucleus", "Smaller and darker than fibroblasts'", "[[Eccentric kidney-shaped]]; EM: indented"],
            ["Cytoplasm", "Strong acid phosphatase reaction; trypan blue (vital)", "Foamy; [[pseudopodia]]; Golgi, lysosomes, phagosomes, residual bodies"],
          ],
        },
        {
          kind: "table",
          title: "Mononuclear phagocyte system: other names",
          columns: ["Organ", "Name"],
          rows: [
            ["Bone", "[[Osteoclasts]]"],
            ["Blood", "[[Monocytes]]"],
            ["Lung alveoli", "[[Dust cells or heart failure cells]]"],
            ["Liver", "[[Kupffer cells]]"],
            ["Central nervous system", "[[Microglia]]"],
          ],
        },
        {
          kind: "list",
          title: "Functions",
          items: [
            "Phagocytosis of any cellular debris and pathogens.",
            "Antigen processing and antigen presentation.",
            "Synthesize and secrete lysozyme (antibacterial), interferon (antiviral) and interleukin (for proliferation of T and B lymphocytes).",
            "Many fuse into multinucleated [[foreign body giant cells]] that engulf large foreign bodies.",
            "Macrophages and blood monocytes are considered identical: monocytes migrate to CT and are called macrophages.",
          ],
        },
      ],
      explain:
        "الـ macrophage خلية بلّاعة جاية من الـ monocyte. الثابتة شكلها نجمي ويتلخبط مع الـ fibroblast (بنفرّقها بنواة أصغر وأغمق وacid phosphatase قوي). النشيطة كبيرة ونواتها على جنب شكل الكلوة. ممكن كذا واحدة تندمج وتعمل foreign body giant cell. ليها أسماء في كل عضو: osteoclast في العظم، Kupffer في الكبد، microglia في المخ، dust cells في الرئة.",
      questions: [
        {
          id: "c1t-ma-1",
          type: "mcq",
          prompt: "Macrophages in the liver are called:",
          options: ["Kupffer cells", "Microglia", "Osteoclasts", "Dust cells"],
          answer: 0,
          explain: "Liver = Kupffer; CNS = microglia; bone = osteoclasts; lung = dust cells.",
        },
        {
          id: "c1t-ma-2",
          type: "complete",
          prompt: "Fused macrophages forming large multinucleated cells are called foreign body ____ cells.",
          answers: ["giant"],
          explain: "Foreign body giant cells.",
        },
        {
          id: "c1t-ma-3",
          type: "reason",
          prompt: "Fixed macrophages are stellate or fusiform. How can they be differentiated from fibroblasts?",
          answer: "They have smaller and darker nuclei, and give a strong positive reaction when stained for lysosomal enzymes such as acid phosphatase.",
          explain: "Slide 13.",
        },
        {
          id: "c1t-ma-4",
          type: "mcq",
          prompt: "Active macrophages are large ovoid or spherical cells with:",
          options: ["Eccentric kidney-shaped nuclei, foamy cytoplasm and pseudopodia", "Cartwheel nuclei", "Flattened nuclei pushed to one side", "Nuclei obscured by metachromatic granules"],
          answer: 0,
          explain: "Cartwheel = plasma cell; flattened = white fat; obscured = mast cell.",
        },
        {
          id: "c1t-ma-5",
          type: "tf",
          statement: "The macrophages present in all organs constitute the mononuclear phagocyte system.",
          answer: true,
          explain: "Slide 20.",
        },
        {
          id: "c1t-ma-6",
          type: "mcq",
          prompt: "Macrophages in lung alveoli are called:",
          options: ["Dust cells or heart failure cells", "Kupffer cells", "Microglia", "Osteoclasts"],
          answer: 0,
          explain: "Lung alveoli → dust / heart failure cells.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 21–25
    {
      id: "pericytes",
      title: "Pericytes",
      slides: "21–25",
      keyPoints: [
        "Also known as [[Rouget cells]], [[adventitial cells]] or [[mural cells]].",
        "Perivascular cells around capillaries and venules: elongated, with long processes, external to the endothelium.",
        "Share a common basal lamina with the endothelial cells; [[fusiform nuclei]].",
        "[[Undifferentiated]]: progenitors for fibroblasts, macrophages, osteocytes, chondrocytes and smooth muscle cells.",
        "Important in [[blood-brain barrier]] stability and angiogenesis.",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Other names",
          items: [{ label: "Rouget cells" }, { label: "Adventitial cells" }, { label: "Mural cells" }],
        },
        {
          kind: "chips",
          title: "Progenitor for",
          items: [{ label: "Fibroblasts" }, { label: "Macrophages" }, { label: "Osteocytes" }, { label: "Chondrocytes" }, { label: "Smooth muscle cells" }],
        },
      ],
      explain: "الـ pericytes خلايا طويلة ملفوفة حوالين الشعيرات الدموية برّه الـ endothelium، وبيشاركوها نفس الـ basal lamina. لسه مش متخصصة، فتقدر تبقى fibroblast أو macrophage أو عظم أو غضروف أو عضلات ملساء. ومهمة لثبات الحاجز الدموي الدماغي وتكوين أوعية جديدة.",
      questions: [
        {
          id: "c1t-pe-1",
          type: "mcq",
          prompt: "Pericytes are also known as:",
          options: ["Rouget cells", "Kupffer cells", "Basket cells", "Goblet cells"],
          answer: 0,
          explain: "Rouget, adventitial or mural cells.",
        },
        {
          id: "c1t-pe-2",
          type: "complete",
          prompt: "Pericytes are important in ____-brain barrier stability and angiogenesis.",
          answers: ["blood"],
          explain: "Blood-brain barrier.",
        },
        {
          id: "c1t-pe-3",
          type: "tf",
          statement: "Pericytes share a common basal lamina with the adjacent endothelial cells.",
          answer: true,
          explain: "Slide 22.",
        },
        {
          id: "c1t-pe-4",
          type: "mcq",
          prompt: "Pericytes are undifferentiated cells that serve as progenitors for all EXCEPT:",
          options: ["Neurons", "Fibroblasts", "Chondrocytes", "Smooth muscle cells"],
          answer: 0,
          explain: "Fibroblasts, macrophages, osteocytes, chondrocytes, smooth muscle.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 26–31
    {
      id: "fibroblasts",
      title: "Fibroblasts & fibrocytes",
      slides: "26–31",
      keyPoints: [
        "Fibroblasts = [[fiber-forming cells]], the [[most common]] fixed CT cells.",
        "Active fibroblasts are seen in [[healing wounds]]: large ovoid lightly stained nuclei, prominent nucleoli, extensive strongly [[basophilic]] cytoplasm.",
        "EM: rich rER and well-developed Golgi.",
        "Inactive fibroblasts ([[fibrocytes]]): smaller, spindle-shaped, fewer processes; sparse rER, poor Golgi.",
        "Functions: secrete precursors of collagen (tropocollagen), elastin (tropoelastin), GAGs and all other extracellular components; principal cells in [[wound repair]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "Active fibroblast vs fibrocyte",
          columns: ["", "Active fibroblast", "Fibrocyte (inactive)"],
          rows: [
            ["Size / shape", "Large, extensive cytoplasm with interconnected extensions", "Smaller, spindle-shaped, fewer processes"],
            ["Nucleus", "Large, ovoid, lightly stained, prominent nucleoli", "—"],
            ["Cytoplasm (LM)", "Strongly [[basophilic]]", "Small quantity"],
            ["EM", "Rich rER, well-developed Golgi", "Sparse rER, poorly developed Golgi, few organelles"],
          ],
        },
        {
          kind: "list",
          title: "Functions",
          items: [
            "Synthesize and secrete precursors of collagen (tropocollagen), elastin (tropoelastin), the glycosaminoglycans and all other extracellular components.",
            "The principal cells involved in [[wound repair]] and growth of connective tissue.",
          ],
        },
      ],
      explain:
        "الـ fibroblast أكتر خلية في النسيج الضام، وهي اللي بتعمل الألياف والمادة الأساسية. النشيطة (في الجروح اللي بتلم) كبيرة وسيتوبلازمها أزرق من كتر الـ rER. الخاملة اسمها fibrocyte: صغيرة ومغزلية. وهي الخلية الأساسية في التئام الجروح.",
      questions: [
        {
          id: "c1t-fi-1",
          type: "mcq",
          prompt: "The most common type of fixed connective tissue cells, demonstrated actively in healing wounds, is:",
          options: ["Fibroblasts", "Mast cells", "Plasma cells", "Pericytes"],
          answer: 0,
          explain: "Fibroblasts (fiber-forming cells).",
        },
        {
          id: "c1t-fi-2",
          type: "reason",
          prompt: "Give reason: the cytoplasm of active fibroblasts is strongly basophilic.",
          answer: "Because at the EM level it is rich in rER (with a well-developed Golgi) for synthesis of fibers and extracellular components.",
          explain: "Slides 26–27.",
        },
        {
          id: "c1t-fi-3",
          type: "complete",
          prompt: "Inactive fibroblasts are called ____.",
          answers: ["fibrocytes", "fibrocyte"],
          explain: "Fibrocytes.",
        },
        {
          id: "c1t-fi-4",
          type: "tf",
          statement: "Fibroblasts are the principal cells involved in wound repair.",
          answer: true,
          explain: "Function 2.",
        },
        {
          id: "c1t-fi-5",
          type: "mcq",
          prompt: "Fibroblasts secrete the collagen precursor:",
          options: ["Tropocollagen", "Tropoelastin", "Histamine", "Interleukin"],
          answer: 0,
          explain: "Collagen → tropocollagen; elastin → tropoelastin.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 32–38
    {
      id: "adipocytes",
      title: "Adipose cells (adipocytes)",
      slides: "32–38",
      keyPoints: [
        "Two types: white (monolocular) and brown (multilocular).",
        "White: polygonal or spherical; one large lipid droplet in a thin rim of cytoplasm; flattened nuclei displaced to one side.",
        "White in H&E: fat dissolved → large clear spaces with a [[signet ring appearance]].",
        "White, EM: lipid not membrane-bounded; cells occur along blood vessels, singly or in groups.",
        "Brown: smaller; oval eccentric nuclei; [[strongly acidophilic cytoplasm]].",
        "Brown: lipid stored as [[multiple]] small droplets → [[vacuolated appearance]]; abundant [[mitochondria]] rich in [[cytochromes]] give the [[brown color]].",
      ],
      blocks: [
        {
          kind: "table",
          title: "White vs brown adipocytes",
          columns: ["", "White (monolocular)", "Brown (multilocular)"],
          rows: [
            ["Lipid", "Single large droplet", "[[Multiple]] small droplets → [[vacuolated appearance]]"],
            ["Nucleus", "Flattened, displaced to one side", "Oval, eccentric"],
            ["Cytoplasm", "Thin rim", "Relatively large, [[strongly acidophilic cytoplasm]]"],
            ["LM (H&E)", "[[Signet ring appearance]]", "—"],
            ["Color", "—", "[[Brown color]] from [[mitochondria]] rich in [[cytochromes]]"],
            ["Size", "Larger", "Smaller"],
          ],
        },
      ],
      explain:
        "الخلايا الدهنية نوعين: البيضا فيها نقطة دهن واحدة كبيرة زاقّة النواة على جنب، فبتبان زي «خاتم» (signet ring) بعد ما الدهن يدوب. البني أصغر، الدهن فيها نقط كتير صغيرة، والسيتوبلازم وردي غامق، ولونها بني من كتر الميتوكوندريا اللي فيها cytochromes.",
      questions: [
        {
          id: "c1t-ad-1",
          type: "reason",
          prompt: "Give reason: white fat cells show a signet ring appearance in H&E sections.",
          answer:
            "Because fat is dissolved during dehydration and clearing, leaving a large clear space surrounded by a thin layer of cytoplasm, with the flattened nucleus displaced to one side.",
          explain: "Slide 33.",
        },
        {
          id: "c1t-ad-2",
          type: "reason",
          prompt: "Give reason: brown adipose tissue is brown.",
          answer: "Because brown adipocytes contain abundant mitochondria rich in cytochromes, which give the brown color.",
          explain: "Slide 37.",
        },
        {
          id: "c1t-ad-3",
          type: "mcq",
          prompt: "Fat cells storing lipid as multiple small droplets, giving a vacuolated appearance, are:",
          options: ["Brown adipocytes", "White adipocytes", "Mast cells", "Plasma cells"],
          answer: 0,
          explain: "Brown = multilocular; white = monolocular.",
        },
        {
          id: "c1t-ad-4",
          type: "compare",
          prompt: "Compare white and brown adipocytes.",
          columns: ["", "White", "Brown"],
          rows: [
            ["Lipid", "Single large droplet (monolocular)", "Multiple small droplets (multilocular)"],
            ["Nucleus", "Flattened, to one side", "Oval, eccentric"],
            ["Cytoplasm", "Thin rim; signet ring in H&E", "Strongly acidophilic; vacuolated"],
            ["Mitochondria", "Few", "Abundant, rich in cytochromes (brown color)"],
          ],
          explain: "Slides 32–37.",
        },
        {
          id: "c1t-ad-5",
          type: "tf",
          statement: "The lipid inclusion of white fat cells is membrane-bounded.",
          answer: false,
          correction: "The lipid inclusion is not membrane-bounded.",
          explain: "Slide 34.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 39–45
    {
      id: "mast-cells",
      title: "Free cells: mast cells",
      slides: "39–45",
      keyPoints: [
        "Free (wandering, visitant) cells. Mast cells: loose CT, especially skin and intestine, near blood vessels.",
        "LM: large polymorphic, spherical or ovoid, with spherical central nuclei.",
        "Nuclei obscured by large [[metachromatic granules]] (e.g., red with toluidine blue) = [[metachromasia]].",
        "EM: membrane-bounded granules with dense amorphous material; prominent Golgi, rER, ribosomes, mitochondria.",
        "Surface receptors for [[immunoglobulin E (IgE)]] → mediator release in [[allergic and anaphylactic]] reactions.",
        "Granules: histamine (vasodilator, ↑ permeability), heparin (anticoagulant), ECF-A; serotonin (vasoconstrictor) in rat and mouse.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Metachromasia",
          text: "Granules take a *different color* than the dye used; e.g., mast cell granules stained with toluidine blue take a red color.",
        },
        {
          kind: "table",
          title: "Mast cell granule contents",
          columns: ["Substance", "Action"],
          rows: [
            ["Histamine", "Dilatation of small vessels; increases capillary permeability"],
            ["Heparin", "Potent blood anticoagulant"],
            ["ECF-A", "Eosinophil chemotactic factor for anaphylaxis"],
            ["Serotonin (rat & mouse)", "Vasoconstrictor"],
          ],
        },
        {
          kind: "steps",
          title: "Immediate hypersensitivity",
          items: [
            "IgE antibody binds to [[IgE]] receptors on the mast cell surface.",
            "In [[allergic and anaphylactic]] reactions, foreign antigen meets the bound antibody.",
            "The mast cell releases chemical mediators stored in its granules → immediate hypersensitivity (anaphylaxis).",
          ],
        },
      ],
      explain:
        "الـ mast cell موجودة في النسيج الضام الرخو جنب الأوعية (الجلد والأمعاء). مليانة حبيبات بتغطي النواة، وبتاخد لون غير لون الصبغة (metachromasia). على سطحها مستقبلات IgE، ولما الأنتيجين يرتبط بيها بتفرّغ الحبيبات (هيستامين وهيبارين) فيحصل الحساسية أو الـ anaphylaxis.",
      questions: [
        {
          id: "c1t-mc-1",
          type: "complete",
          prompt: "Granules that take a different color from the dye used show the property called ____.",
          answers: ["metachromasia"],
          explain: "Metachromasia.",
        },
        {
          id: "c1t-mc-2",
          type: "mcq",
          prompt: "The surface of the mast cell contains specific receptors for:",
          options: ["IgE", "IgG", "IgA", "Insulin"],
          answer: 0,
          explain: "Immunoglobulin E.",
        },
        {
          id: "c1t-mc-3",
          type: "mcq",
          prompt: "In mast cell granules, heparin is:",
          options: ["A potent blood anticoagulant", "A vasoconstrictor", "An antiviral agent", "A chemotactic factor"],
          answer: 0,
          explain: "Histamine dilates vessels; serotonin constricts; heparin = anticoagulant.",
        },
        {
          id: "c1t-mc-4",
          type: "tf",
          statement: "The nuclei of mast cells are completely obscured by numerous large metachromatic granules; in allergic and anaphylactic reactions these granules release chemical mediators.",
          answer: true,
          explain: "Slide 40.",
        },
        {
          id: "c1t-mc-5",
          type: "mcq",
          prompt: "Mast cell granules stained with toluidine blue appear:",
          options: ["Red", "Blue", "Black", "Green"],
          answer: 0,
          explain: "Metachromasia: red with toluidine blue.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 46–51
    {
      id: "plasma-cells",
      title: "Plasma cells",
      slides: "46–51",
      keyPoints: [
        "Spherical, oval or pear-shaped, with spherical eccentric nuclei.",
        "Chromatin condensed peripherally → [[cartwheel]] or [[clock face]] appearance.",
        "Cytoplasm [[strongly basophilic]] with a prominent negative Golgi image.",
        "EM: prominent Golgi; abundant rER with dilated cisternae containing immunoglobulin inclusions = [[Russell's bodies]].",
        "Found in loose CT of digestive, respiratory and female reproductive systems. Develop from B-lymphocytes.",
        "Function: production of antibodies.",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Plasma cell at a glance",
          items: [
            { label: "Nucleus", note: "eccentric, cartwheel / clock face" },
            { label: "Cytoplasm", note: "strongly basophilic + negative Golgi image" },
            { label: "EM", note: "Russell's bodies in dilated rER" },
            { label: "Origin", note: "B-lymphocytes" },
            { label: "Function", note: "antibodies" },
          ],
        },
      ],
      explain:
        "الـ plasma cell جاية من B-lymphocyte ووظيفتها تعمل أجسام مضادة. نواتها على جنب والكروماتين متوزّع زي عجلة العربية أو وش الساعة. السيتوبلازم أزرق غامق من كتر الـ rER، وفيه مكان فاتح للجولجي. بالإلكتروني فيه حبيبات immunoglobulin جوّه الـ rER اسمها Russell's bodies.",
      questions: [
        {
          id: "c1t-pl-1",
          type: "mcq",
          prompt: "A nucleus with a cartwheel or clock face appearance is characteristic of:",
          options: ["Plasma cells", "Mast cells", "Macrophages", "Fibroblasts"],
          answer: 0,
          explain: "Peripheral condensed chromatin.",
        },
        {
          id: "c1t-pl-2",
          type: "complete",
          prompt: "Immunoglobulin-containing inclusions in the rER of plasma cells are called ____ bodies.",
          answers: ["Russell's", "Russell", "Russells"],
          explain: "Russell's bodies.",
        },
        {
          id: "c1t-pl-3",
          type: "mcq",
          prompt: "Plasma cells develop from:",
          options: ["B-lymphocytes", "T-lymphocytes", "Monocytes", "Mesenchymal cells directly"],
          answer: 0,
          explain: "B-lymphocytes.",
        },
        {
          id: "c1t-pl-4",
          type: "reason",
          prompt: "Give reason: the cytoplasm of plasma cells is strongly basophilic.",
          answer: "Because it contains abundant rER (for antibody production).",
          explain: "Slide 47.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 52–53
    {
      id: "melanocytes",
      title: "Melanocytes & other CT cells",
      slides: "52–53",
      keyPoints: [
        "Melanocytes are derived from [[neural crest]].",
        "Large pigmented cells with numerous long branching processes.",
        "Occur in epidermis of skin, uterine caruncles of sheep, meninges of brain, choroid and iris of eye.",
        "Other CT cells: lymphocytes, monocytes and granulocytes (especially eosinophils and neutrophils).",
      ],
      blocks: [
        {
          kind: "chips",
          title: "Where melanocytes occur",
          items: [{ label: "Epidermis of skin" }, { label: "Uterine caruncles of sheep" }, { label: "Meninges of brain" }, { label: "Choroid and iris of eye" }],
        },
        {
          kind: "table",
          title: "All the CT cells in this lecture",
          columns: ["Fixed (resident)", "Free (wandering)"],
          rows: [
            ["Mesenchymal cells", "Mast cells"],
            ["Macrophages (fixed)", "Plasma cells"],
            ["Pericytes", "Melanocytes (listed with free cells)"],
            ["Fibroblasts & fibrocytes", "Lymphocytes, monocytes, granulocytes"],
            ["Adipocytes", "—"],
          ],
        },
      ],
      explain: "الـ melanocytes جاية من الـ neural crest، خلايا مصبوغة ليها زوائد طويلة، موجودة في الجلد والسحايا والعين. وفيه كمان خلايا تانية في النسيج الضام: lymphocytes وmonocytes وgranulocytes.",
      questions: [
        {
          id: "c1t-mel-1",
          type: "mcq",
          prompt: "Melanocytes are derived from:",
          options: ["Neural crest", "Mesoderm", "Monocytes", "B-lymphocytes"],
          answer: 0,
          explain: "Neural crest.",
        },
        {
          id: "c1t-mel-2",
          type: "tf",
          statement: "Melanocytes occur in the choroid and iris of the eye.",
          answer: true,
          explain: "Slide 52.",
        },
        {
          id: "c1t-mel-3",
          type: "complete",
          prompt: "Other connective tissue cells include lymphocytes, monocytes and ____ (especially eosinophils and neutrophils).",
          answers: ["granulocytes"],
          explain: "Granulocytes.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Connective tissue", back: "Connects and supports; mesoderm; cells + fibers + ground substance; well vascularized." },
    { id: "f2", front: "CT types", back: "CT proper · adipose · cartilage · bone · blood." },
    { id: "f3", front: "Mesenchymal cells", back: "Undifferentiated, stellate/spindle, oval nucleus; give rise to all CT cells." },
    { id: "f4", front: "Fixed macrophage vs fibroblast", back: "Macrophage: smaller darker nucleus, strong acid phosphatase; trypan blue vital stain." },
    { id: "f5", front: "Active macrophage", back: "Large ovoid; eccentric kidney-shaped nucleus; foamy; pseudopodia." },
    { id: "f6", front: "Mononuclear phagocyte system", back: "Osteoclasts (bone), monocytes (blood), dust cells (lung), Kupffer (liver), microglia (CNS)." },
    { id: "f7", front: "Macrophage functions", back: "Phagocytosis · antigen presentation · lysozyme, interferon, interleukin · giant cells." },
    { id: "f8", front: "Pericytes", back: "Rouget / adventitial / mural cells; around capillaries; progenitors; blood-brain barrier." },
    { id: "f9", front: "Fibroblast vs fibrocyte", back: "Active: large, basophilic, rich rER. Fibrocyte: small spindle, sparse rER." },
    { id: "f10", front: "Fibroblast functions", back: "Secrete tropocollagen, tropoelastin, GAGs; wound repair." },
    { id: "f11", front: "White adipocyte", back: "Monolocular; flattened side nucleus; signet ring in H&E." },
    { id: "f12", front: "Brown adipocyte", back: "Multilocular; acidophilic; mitochondria with cytochromes → brown." },
    { id: "f13", front: "Mast cell", back: "Metachromatic granules hide nucleus; IgE receptors; histamine, heparin, ECF-A." },
    { id: "f14", front: "Plasma cell", back: "Cartwheel eccentric nucleus; basophilic + negative Golgi; Russell's bodies; from B cells; antibodies." },
    { id: "f15", front: "Melanocytes", back: "Neural crest; pigmented, branching; skin, meninges, choroid & iris." },
  ],

  highYield: [
    "connect",
    "support",
    "mesoderm",
    "cells",
    "fibers",
    "amorphous ground",
    "stellate",
    "oval",
    "monocytes",
    "fusiform",
    "ovoid or spherical",
    "kidney-shaped",
    "giant",
    "mononuclear phagocyte system",
    "osteoclasts",
    "dust cells",
    "Kupffer",
    "microglia",
    "Rouget",
    "blood",
    "fibroblasts",
    "basophilic",
    "fibrocytes",
    "wound repair",
    "signet ring",
    "acidophilic",
    "multilocular",
    "cytochromes",
    "metachromasia",
    "IgE",
    "cartwheel",
    "Russell",
    "neural crest",
    "pseudopodia",
    "Undifferentiated",
    "most common",
    "healing wounds",
    "multiple",
    "vacuolated appearance",
    "mitochondria",
    "brown color",
    "metachromatic granules",
    "allergic and anaphylactic",
    "clock face",
  ],

  sheet: [
    {
      heading: "General",
      points: [
        "[[Connect and support]] · [[mesoderm]] · well vascularized",
        "[[Cells]] + [[fibers]] + [[amorphous ground substances]]",
        "Proper · adipose · cartilage · bone · blood",
        "Fixed (resident) vs free (wandering)",
      ],
    },
    {
      heading: "Mesenchymal & pericytes",
      points: [
        "Mesenchymal: [[irregular stellate]], [[oval]] nucleus, → all CT cells",
        "Pericytes = [[Rouget cells]] / [[adventitial cells]] / [[mural cells]]; [[fusiform nuclei]]",
        "[[Undifferentiated]] progenitors; [[blood-brain barrier]]",
      ],
    },
    {
      heading: "Macrophages",
      points: [
        "From [[monocytes]]; lysosomes",
        "Fixed: [[stellate or fusiform]]; smaller darker nucleus, acid phosphatase, trypan blue",
        "Active: [[ovoid or spherical]], [[eccentric kidney-shaped]], foamy, [[pseudopodia]]",
        "[[Foreign body giant cells]] · [[mononuclear phagocyte system]]",
        "[[Osteoclasts]] · [[monocytes]] · [[dust cells or heart failure cells]] · [[Kupffer cells]] · [[microglia]]",
      ],
    },
    {
      heading: "Fibroblasts & fat",
      points: [
        "[[Fiber-forming cells]], [[most common]]; [[healing wounds]]; [[basophilic]]",
        "[[Fibrocytes]] = inactive, spindle",
        "Tropocollagen, tropoelastin, GAGs · [[wound repair]]",
        "White: [[signet ring appearance]] · brown: [[strongly acidophilic cytoplasm]], [[multiple]] droplets, [[vacuolated appearance]]",
        "[[Mitochondria]] + [[cytochromes]] → [[brown color]]",
      ],
    },
    {
      heading: "Free cells",
      points: [
        "Mast: [[metachromatic granules]] → [[metachromasia]]; [[immunoglobulin E (IgE)]]; [[allergic and anaphylactic]]",
        "Histamine dilates · heparin anticoagulant · ECF-A · serotonin constricts",
        "Plasma: [[cartwheel]] / [[clock face]], [[strongly basophilic]], [[Russell's bodies]], B cells → antibodies",
        "Melanocytes: [[neural crest]]",
      ],
    },
  ],
};

export default lecture;
