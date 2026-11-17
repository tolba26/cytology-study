import type { Lecture } from "./types";

/**
 * Cytology 2: ER, Golgi, lysosomes, peroxisomes, ribosomes, centrioles. Dr. Sahar Fayez. 68 slides.
 * [[term]] = colored/bold on the slide (high-yield).
 */
const lecture: Lecture = {
  id: "cytology-2",
  number: 2,
  title: "Cytology 2",
  subtitle: "ER · Golgi · Lysosomes · Peroxisomes · Ribosomes · Centrioles",
  lecturer: "Dr. Sahar Fayez",
  slideCount: 68,
  group: "Cytology",

  sections: [
    // ───────────────────────────────────────── slides 2–3
    {
      id: "er",
      title: "Endoplasmic reticulum: definition",
      slides: "2–3",
      keyPoints: [
        "Name: *Endo* = inside, *plasm* = cytoplasm, *reticulum* = network.",
        "An irregular network of branching and anastomosing tubules, cisternae (intercommunicating channels and sacs) and vesicles.",
        "Two recognized types: rough and smooth.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Endoplasmic reticulum (ER)",
          text: "An *irregular network* of branching and anastomosing tubules, cisternae (intercommunicating channels and sacs) and vesicles.",
        },
        {
          kind: "chips",
          title: "Reading the name",
          items: [
            { label: "Endo", note: "inside" },
            { label: "plasm", note: "cytoplasm" },
            { label: "reticulum", note: "network" },
          ],
        },
        {
          kind: "chips",
          title: "Built from",
          items: [
            { label: "Tubules" },
            { label: "Cisternae", note: "intercommunicating channels and sacs" },
            { label: "Vesicles" },
          ],
        },
      ],
      explain:
        "الـ ER يعني «شبكة جوّه السيتوبلازم»: أنابيب وأكياس (cisternae) وحويصلات متفرّعة وموصّلة ببعض. وليها نوعين: rough وsmooth.",
      questions: [
        {
          id: "c2-er-1",
          type: "complete",
          prompt: "In the word endoplasmic reticulum, \"reticulum\" means ____.",
          answers: ["network"],
          explain: "Endo = inside, plasm = cytoplasm, reticulum = network.",
        },
        {
          id: "c2-er-2",
          type: "mcq",
          prompt: "Cisternae of the ER are:",
          options: ["Intercommunicating channels and sacs", "Ribosome clusters", "Secretory granules", "Hollow cylinders closed at one end"],
          answer: 0,
          explain: "Cisternae = intercommunicating channels and sacs.",
        },
        {
          id: "c2-er-3",
          type: "tf",
          statement: "The ER is a regular network of separate, non-communicating tubules.",
          answer: false,
          correction: "It is an irregular network of branching and anastomosing tubules, cisternae and vesicles.",
          explain: "Irregular + branching + anastomosing.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 4–8
    {
      id: "rer-lm",
      title: "Rough ER: definition & LM",
      slides: "4–8",
      keyPoints: [
        "A membranous organelle concerned mainly with [[synthesis of proteins]].",
        "Called *rough* because of the large number of [[ribosomes]] attached to its limiting membrane from outside.",
        "LM: [[basophilic cytoplasmic areas]] called the *ergastoplasm* or *chromoidial substances*.",
        "Basophilia may be [[diffuse]] (plasma cells), [[localized]] (pancreatic acinar cells) or in [[clumps]] (Nissl's granules in nerve cells).",
        "rER is basophilic mainly because of the [[ribosomes]] on its outer surface.",
        "Cells making few or no proteins for secretion have very little rER.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Rough ER (rER)",
          text: "A membranous organelle concerned mainly with [[synthesis of proteins]]. Rough because of the [[ribosomes]] attached to its limiting membrane from outside.",
        },
        {
          kind: "chips",
          title: "Patterns of cytoplasmic basophilia (LM)",
          items: [
            { label: "Diffuse", note: "plasma cells" },
            { label: "Localized", note: "pancreatic acinar cells" },
            { label: "Clumps", note: "Nissl's granules in nerve cells" },
          ],
        },
        {
          kind: "list",
          title: "Which cells have rER",
          items: [
            "Cells that make few or no proteins for secretion → very little rER.",
            "Cells that synthesize, segregate and store proteins in secretory granules or vesicles → always have rER, a Golgi apparatus and a supply of granules ready to be secreted.",
          ],
        },
      ],
      explain:
        "الـ rER مصنع البروتين، وخشن عشان عليه ريبوسومات من برّه. بالضوئي بيبان أزرق (basophilic) بسبب الريبوسومات، واسمه ergastoplasm. الزُرقة دي ممكن تبقى منتشرة (plasma cells)، أو في حتة (pancreatic acinar)، أو كتل (Nissl's granules).",
      questions: [
        {
          id: "c2-rlm-1",
          type: "reason",
          prompt: "Give reason: rough ER is called \"rough\".",
          answer: "Because of the presence of a large number of ribosomes attached to its limiting membrane from outside.",
          explain: "Slide 4.",
        },
        {
          id: "c2-rlm-2",
          type: "reason",
          prompt: "Give reason: aggregates of rER appear basophilic.",
          answer: "Mainly due to the presence of ribosomes on their outer surface.",
          explain: "Slide 5.",
        },
        {
          id: "c2-rlm-3",
          type: "mcq",
          prompt: "Nissl's granules in nerve cells are an example of rER basophilia that is:",
          options: ["Arranged into clumps", "Diffuse", "Localized", "Absent"],
          answer: 0,
          explain: "Diffuse = plasma cells, localized = pancreatic acinar cells, clumps = Nissl's granules.",
        },
        {
          id: "c2-rlm-4",
          type: "complete",
          prompt: "With LM, rER appears as basophilic cytoplasmic areas referred to as the ____ or chromoidial substances.",
          answers: ["ergastoplasm"],
          explain: "Ergastoplasm or chromoidial substances.",
        },
        {
          id: "c2-rlm-5",
          type: "mcq",
          prompt: "Diffuse cytoplasmic basophilia is seen in:",
          options: ["Plasma cells", "Pancreatic acinar cells", "Nerve cells", "Striated muscle cells"],
          answer: 0,
          explain: "Diffuse → plasma cells.",
        },
        {
          id: "c2-rlm-6",
          type: "mcq",
          prompt: "Rough ER is a membranous organelle concerned mainly with:",
          options: ["Synthesis of proteins", "Steroid hormone synthesis", "Drug detoxification", "Production of HCl"],
          answer: 0,
          explain: "rER = synthesis of proteins; the other three are sER functions.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 9–13
    {
      id: "rer-em",
      title: "Rough ER: EM & functions",
      slides: "9–13",
      keyPoints: [
        "An anastomosing network of parallel tubules, vesicles and flattened cisternae that ramifies throughout the cytoplasm.",
        "Surface studded with ribosomes → rough or granular appearance.",
        "rER tubules may be continuous with those of sER or the nuclear envelope.",
        "Cisternae appear separated but actually form one continuous channel (compartment).",
        "Functions: synthesis of proteins for [[extracellular use]], and glycosylation of proteins to form glycoproteins.",
      ],
      blocks: [
        {
          kind: "list",
          title: "Functions of rER",
          items: ["Synthesis of proteins for [[extracellular use]].", "Glycosylation of proteins to form glycoproteins."],
        },
        {
          kind: "chips",
          title: "rER tubules may be continuous with",
          items: [{ label: "sER" }, { label: "Nuclear envelope" }],
        },
      ],
      explain:
        "بالإلكتروني الـ rER شبكة أنابيب وأكياس مفلطحة متوازية عليها ريبوسومات. شكلها منفصل بس هي في الحقيقة قناة واحدة متصلة. شغلها: بروتين يطلع برّه الخلية، وتضيف سكر للبروتين (glycoproteins).",
      questions: [
        {
          id: "c2-rem-1",
          type: "complete",
          prompt: "rER synthesizes proteins for ____ use.",
          answers: ["extracellular"],
          explain: "Function 1 (in red on slide 10).",
        },
        {
          id: "c2-rem-2",
          type: "tf",
          statement: "The cisternae of rER are truly separate compartments.",
          answer: false,
          correction: "They appear separated, but actually form a continuous channel or compartment in the cytoplasm.",
          explain: "Slide 10.",
        },
        {
          id: "c2-rem-3",
          type: "mcq",
          prompt: "rER tubules may be continuous with:",
          options: ["sER or the nuclear envelope", "Mitochondria", "Lysosomes", "Centrioles"],
          answer: 0,
          explain: "Slide 9.",
        },
        {
          id: "c2-rem-4",
          type: "mcq",
          prompt: "Glycosylation of proteins to form glycoproteins is a function of:",
          options: ["rER (and the Golgi apparatus)", "Peroxisomes", "Centrioles", "Free ribosomes only"],
          answer: 0,
          explain: "rER function 2; the Golgi also glycosylates (slide 32).",
        },
      ],
    },

    // ───────────────────────────────────────── slides 14–19, 21
    {
      id: "ser",
      title: "Smooth ER",
      slides: "14–19, 21",
      keyPoints: [
        "A network of branching and anastomosing tubules and vesicles, irregular in pattern compared to rER.",
        "Its limiting membrane is [[smooth and devoid of ribosomes]].",
        "LM: it does [[not appear]]. Cells with abundant sER look more [[acidophilic]].",
        "EM: irregular network of membranous tubules and vesicles devoid of ribosomes.",
        "sER tubules may be continuous with those of rER and the nuclear envelope.",
      ],
      blocks: [
        {
          kind: "table",
          title: "rER vs sER",
          columns: ["", "Rough ER", "Smooth ER"],
          rows: [
            ["Main job", "[[Synthesis of proteins]]", "Steroids, detoxification, lipids, Ca++, HCl (next section)"],
            ["Ribosomes", "Attached to the outer surface", "[[Smooth and devoid of ribosomes]]"],
            ["EM shape", "Flattened, ribosome-studded cisternae (+ tubules, vesicles)", "Irregular network of tubules and vesicles"],
            ["LM", "[[Basophilic cytoplasmic areas]] (ergastoplasm)", "Does [[not appear]]; cytoplasm more [[acidophilic]]"],
            ["Continuous with", "sER or nuclear envelope", "rER and nuclear envelope"],
          ],
        },
      ],
      explain:
        "الـ sER نفس الشبكة بس من غير ريبوسومات، فبتبقى ناعمة وأنابيبها مش منتظمة. بالضوئي مش بتبان، بس الخلية اللي فيها sER كتير السيتوبلازم بتاعها بيبقى acidophilic (وردي).",
      questions: [
        {
          id: "c2-ser-1",
          type: "mcq",
          prompt: "With LM, smooth ER:",
          options: [
            "Does not appear; cells rich in sER look more acidophilic",
            "Appears as basophilic areas called ergastoplasm",
            "Appears as a black network near the nucleus",
            "Appears as two tiny dots near the nucleus",
          ],
          answer: 0,
          explain: "sER doesn't appear with LM; abundant sER → acidophilic cytoplasm.",
        },
        {
          id: "c2-ser-2",
          type: "complete",
          prompt: "The sER differs from rER in that its limiting membrane is smooth and devoid of ____.",
          answers: ["ribosomes", "ribosome"],
          explain: "Smooth and devoid of ribosomes.",
        },
        {
          id: "c2-ser-3",
          type: "tf",
          statement: "The cytoplasm of cells containing abundant sER usually appears more basophilic.",
          answer: false,
          correction: "It usually appears more acidophilic. Basophilia goes with rER (ribosomes).",
          explain: "sER → acidophilic, rER → basophilic.",
        },
        {
          id: "c2-ser-4",
          type: "compare",
          prompt: "Compare rER and sER.",
          columns: ["", "rER", "sER"],
          rows: [
            ["Ribosomes", "Attached from outside", "Devoid of ribosomes"],
            ["EM", "Flattened ribosome-studded cisternae", "Irregular tubules and vesicles"],
            ["LM", "Basophilic (ergastoplasm)", "Not seen; acidophilic cytoplasm"],
            ["Function", "Proteins for extracellular use; glycosylation", "Steroids, detoxification, lipids, Ca++, HCl"],
          ],
          explain: "Slides 4–20.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 20
    {
      id: "ser-functions",
      title: "Functions of smooth ER",
      slides: "20",
      keyPoints: [
        "[[Steroid hormone synthesis]]: testicular interstitial cells, corpus luteum, adrenal cortex.",
        "[[Drug detoxification]]: liver cells (hepatocytes).",
        "[[Lipid biosynthesis]]: intestinal absorptive cells.",
        "[[Storage and release of Ca++ ions]]: striated muscle cells.",
        "[[Production of hydrochloric acid (HCl)]]: gastric parietal cells.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Function → where",
          columns: ["Function", "Cells"],
          rows: [
            ["[[Steroid hormone synthesis]]", "Testicular interstitial cells, cells of the corpus luteum, adrenal cortex cells"],
            ["[[Drug detoxification]]", "Liver cells (hepatocytes)"],
            ["[[Lipid biosynthesis]]", "Intestinal absorptive cells"],
            ["[[Storage and release of Ca++ ions]]", "Striated muscle cells"],
            ["[[Production of hydrochloric acid (HCl)]]", "Gastric parietal cells"],
          ],
        },
        {
          kind: "mnemonic",
          phrase: "Some Doctors Like Salty Hamburgers",
          key: [
            { letter: "S", word: "Steroid hormones (testis, corpus luteum, adrenal cortex)" },
            { letter: "D", word: "Drug detoxification (hepatocytes)" },
            { letter: "L", word: "Lipid biosynthesis (intestinal absorptive cells)" },
            { letter: "S", word: "Storage & release of Ca++ (striated muscle)" },
            { letter: "H", word: "HCl production (gastric parietal cells)" },
          ],
        },
      ],
      explain:
        "الـ sER ليه 5 وظايف وكل وظيفة ليها خلية: هرمونات ستيرويد (الخصية والجسم الأصفر والـ adrenal cortex)، تكسير الأدوية في الكبد، تصنيع الدهون في خلايا الأمعاء، تخزين الكالسيوم في العضلات المخططة، وعمل HCl في خلايا المعدة parietal.",
      questions: [
        {
          id: "c2-sfn-1",
          type: "mcq",
          prompt: "Drug detoxification by sER occurs mainly in:",
          options: ["Liver cells (hepatocytes)", "Gastric parietal cells", "Striated muscle cells", "Intestinal absorptive cells"],
          answer: 0,
          explain: "Detoxification → hepatocytes.",
        },
        {
          id: "c2-sfn-2",
          type: "mcq",
          prompt: "Production of hydrochloric acid (HCl) by sER occurs in:",
          options: ["Gastric parietal cells", "Adrenal cortex cells", "Plasma cells", "Hepatocytes"],
          answer: 0,
          explain: "HCl → gastric parietal cells.",
        },
        {
          id: "c2-sfn-3",
          type: "complete",
          prompt: "In striated muscle cells, sER is responsible for storage and release of ____ ions.",
          answers: ["Ca++", "Ca", "calcium", "ca2+"],
          explain: "Storage and release of Ca++ ions.",
        },
        {
          id: "c2-sfn-4",
          type: "tf",
          statement: "Steroid hormone synthesis by sER occurs in testicular interstitial cells, the corpus luteum and the adrenal cortex.",
          answer: true,
          explain: "Function 1.",
        },
        {
          id: "c2-sfn-5",
          type: "mcq",
          prompt: "Lipid biosynthesis by sER is a function of:",
          options: ["Intestinal absorptive cells", "Gastric parietal cells", "Nerve cells", "Osteoblasts"],
          answer: 0,
          explain: "Lipid biosynthesis → intestinal absorptive cells.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 22–24
    {
      id: "golgi-lm",
      title: "Golgi apparatus: definition & LM",
      slides: "22–24",
      keyPoints: [
        "Concerned principally with concentration, packaging, synthesis and release of the [[secretory products of the cells]].",
        "Silver or osmium salts → a [[black network]] located near the nucleus.",
        "H&E: it [[does not stain]] → a lighter region called the [[negative Golgi image]].",
        "Best seen in secretory cells: osteoblasts (bone-forming) and plasma cells (antibody-forming).",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Golgi apparatus",
          aside: "Golgi complex",
          text: "A membranous organelle concerned principally with concentration, packaging, synthesis and release of the [[secretory products of the cells]].",
        },
        {
          kind: "table",
          title: "Golgi with LM",
          columns: ["Stain", "What you see"],
          rows: [
            ["Silver or osmium salts", "[[Black network]] located near the nucleus"],
            ["H&E", "[[Does not stain]] → lighter region = [[negative Golgi image]]"],
          ],
        },
        {
          kind: "chips",
          title: "Seen to great advantage in",
          items: [
            { label: "Osteoblasts", note: "bone-forming cells" },
            { label: "Plasma cells", note: "antibody-forming cells" },
          ],
        },
      ],
      explain:
        "الجولجي بيركّز ويغلّف ويطلّع إفرازات الخلية. بالفضة أو الأوزميوم بيبان شبكة سودا جنب النواة. في الـ H&E مش بيصطبغ، فبيبان مكان فاتح اسمه negative Golgi image. وأوضح ما يكون في الخلايا اللي بتفرز زي الـ osteoblasts والـ plasma cells.",
      questions: [
        {
          id: "c2-glm-1",
          type: "reason",
          prompt: "Give reason: the Golgi apparatus appears as a negative Golgi image in H&E sections.",
          answer: "Because it does not stain with H&E, so it is visible as a lighter-stained region.",
          explain: "Slide 23.",
        },
        {
          id: "c2-glm-2",
          type: "mcq",
          prompt: "Stained with silver or osmium salts, the Golgi apparatus appears as:",
          options: ["A black network located near the nucleus", "Basophilic clumps", "Two tiny dots", "Granules, rods or threads"],
          answer: 0,
          explain: "Black network near the nucleus.",
        },
        {
          id: "c2-glm-3",
          type: "mcq",
          prompt: "The Golgi apparatus is seen to great advantage in:",
          options: ["Osteoblasts and plasma cells", "Red blood cells", "Small lymphocytes", "Striated muscle cells"],
          answer: 0,
          explain: "Secretory cells: osteoblasts (bone-forming) and plasma cells (antibody-forming).",
        },
        {
          id: "c2-glm-4",
          type: "complete",
          prompt: "The Golgi apparatus is concerned with concentration, packaging, synthesis and release of the ____ products of the cells.",
          answers: ["secretory"],
          explain: "Secretory products of the cells.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 25–30
    {
      id: "golgi-em",
      title: "Golgi apparatus with EM",
      slides: "25–30",
      keyPoints: [
        "Main unit: a flattened membranous vesicle or cistern [[called Golgi saccule]].",
        "Saccules are arranged in [[Golgi stacks]] of [[3-10 saccules]] (sometimes more).",
        "Several stacks form an elaborate ramifying network = the Golgi complex.",
        "[[Forming]] / [[Cis]] / receiving face: [[convex]], with [[small transfer vesicles]].",
        "[[Maturing]] / [[Trans]] face: [[concave]], with much [[larger secretory granules and lysosomes]].",
      ],
      blocks: [
        { kind: "diagram", diagram: "golgi", title: "A Golgi stack", caption: "Simplified from slides 27–30." },
        { kind: "number", value: "3–10", label: "Saccules per Golgi stack", note: "And sometimes more." },
        {
          kind: "table",
          title: "The two faces of a stack",
          columns: ["", "Cis face", "Trans face"],
          rows: [
            ["Other names", "[[Forming]] face, receiving face", "[[Maturing]] face"],
            ["Shape", "[[Convex]]", "[[Concave]]"],
            ["Associated with", "[[Small transfer vesicles]]", "Much [[larger secretory granules and lysosomes]]"],
          ],
        },
      ],
      explain:
        "وحدة الجولجي هي saccule (كيس مفلطح)، والأكياس متراصّة في stacks من 3 لـ 10. كل stack ليه وش داخل (cis/forming) محدّب وجنبه حويصلات صغيرة جاية من الـ ER، ووش خارج (trans/maturing) مقعّر وجنبه حبيبات إفراز كبيرة وليسوسومات.",
      questions: [
        {
          id: "c2-gem-1",
          type: "mcq",
          prompt: "The Trans face of the Golgi stack is:",
          options: [
            "Concave, associated with larger secretory granules and lysosomes",
            "Convex, associated with small transfer vesicles",
            "Concave, associated with small transfer vesicles",
            "Convex, associated with lysosomes",
          ],
          answer: 0,
          explain: "Trans = maturing = concave = large granules & lysosomes.",
        },
        {
          id: "c2-gem-2",
          type: "complete",
          prompt: "Golgi stacks contain from ____ saccules and sometimes more.",
          answers: ["3-10", "3 to 10", "3–10", "three to ten"],
          explain: "3–10 saccules.",
        },
        {
          id: "c2-gem-3",
          type: "complete",
          prompt: "The main structural unit of the Golgi apparatus is a flattened membranous cistern called the Golgi ____.",
          answers: ["saccule", "saccules"],
          explain: "Golgi saccule.",
        },
        {
          id: "c2-gem-4",
          type: "tf",
          statement: "The Cis (forming) face of the Golgi stack is convex.",
          answer: true,
          explain: "Cis/forming/receiving = convex.",
        },
        {
          id: "c2-gem-5",
          type: "compare",
          prompt: "Compare the Cis and Trans faces of the Golgi apparatus.",
          columns: ["", "Cis", "Trans"],
          rows: [
            ["Other names", "Forming, receiving", "Maturing"],
            ["Shape", "Convex", "Concave"],
            ["Associated with", "Small transfer vesicles", "Larger secretory granules and lysosomes"],
          ],
          explain: "Slide 26.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 31–33
    {
      id: "golgi-functions",
      title: "Functions of the Golgi apparatus",
      slides: "31–33",
      keyPoints: [
        "[[Factory]]: products from the ER are further processed and sorted for transport to their destinations.",
        "Material moves from rER cisternae to Golgi in small membrane-enclosed *transport vesicles*.",
        "Modification: glycosylation and sulfation → glycoproteins and sulfated glycoproteins (mucus).",
        "Production of primary lysosomes.",
        "Dynamic turnover of the cell membrane.",
      ],
      blocks: [
        {
          kind: "steps",
          title: "Path of a secretory product",
          items: [
            "Made in the rER.",
            "Carried to the Golgi in small membrane-enclosed *transport vesicles*.",
            "Further processed (e.g., glycosylation, sulfation) and sorted in the Golgi: the [[Factory]].",
            "Sent on to its eventual destination.",
          ],
        },
        {
          kind: "list",
          title: "Functions",
          items: [
            "[[Factory]]: processing and sorting of products received from the ER.",
            "Modification of secretory products: glycosylation and sulfation → glycoproteins and sulfated glycoproteins (mucus). Golgi enzymes do glycosylation, sulfation, phosphorylation and limited proteolysis.",
            "Production of primary lysosomes.",
            "Dynamic turnover of the cell membrane.",
          ],
        },
      ],
      explain:
        "الجولجي مصنع تشطيب: البروتين بييجي من الـ rER في transport vesicles، ويتعدّل فيه (يتضاف له سكر أو كبريت فيبقى mucus مثلًا) ويتفرز ويتبعت مكانه. وكمان بيعمل الـ primary lysosomes وبيجدّد غشاء الخلية.",
      questions: [
        {
          id: "c2-gfn-1",
          type: "mcq",
          prompt: "Material moves from rER cisternae to the Golgi apparatus in:",
          options: ["Transport vesicles", "Lysosomes", "Phagosomes", "Residual bodies"],
          answer: 0,
          explain: "Small, membrane-enclosed carriers called transport vesicles.",
        },
        {
          id: "c2-gfn-2",
          type: "complete",
          prompt: "Sulfation of proteins in the Golgi forms sulfated glycoproteins, such as ____.",
          answers: ["mucus"],
          explain: "Sulfated glycoproteins (mucus).",
        },
        {
          id: "c2-gfn-5",
          type: "complete",
          prompt: "The Golgi apparatus is described as a ____ in which products received from the ER are further processed and sorted.",
          answers: ["factory"],
          explain: "Function 1: Factory.",
        },
        {
          id: "c2-gfn-3",
          type: "tf",
          statement: "The Golgi apparatus produces primary lysosomes.",
          answer: true,
          explain: "Function 3.",
        },
        {
          id: "c2-gfn-4",
          type: "mcq",
          prompt: "All are functions of the Golgi apparatus EXCEPT:",
          options: ["Production of primary lysosomes", "Dynamic turnover of the cell membrane", "Glycosylation of proteins", "Drug detoxification"],
          answer: 3,
          explain: "Drug detoxification is sER (hepatocytes).",
        },
      ],
    },

    // ───────────────────────────────────────── slides 34–38
    {
      id: "lysosomes",
      title: "Lysosomes: definition, LM & EM",
      slides: "34–38",
      keyPoints: [
        "Digestive organelles: [[membrane-bounded vesicles]] (0.2–0.4 μm).",
        "Contain hydrolytic enzymes active at acid pH (acid hydrolases) kept inside them.",
        "These enzymes can destroy all the major macromolecules (e.g., proteins and lipids) in the cell.",
        "LM: [[invisible]] (no direct proof). Resolved when enzymes (e.g., acid phosphatase) are stained by [[histochemical methods]].",
        "EM: [[spherical uniformly granular, electron-dense]] membrane-bounded vacuoles; contents vary in electron density.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Lysosomes",
          text: "Digestive organelles: [[membrane-bounded vesicles]] containing hydrolytic enzymes that are active at *acid pH* (acid hydrolases).",
        },
        { kind: "number", value: "0.2–0.4", unit: "μm", label: "Size of a lysosome" },
        {
          kind: "table",
          title: "How lysosomes look",
          columns: ["Method", "Appearance"],
          rows: [
            ["LM", "[[Invisible]]; seen only when enzymes (e.g., acid phosphatase) are stained by [[histochemical methods]]"],
            ["EM", "[[Spherical uniformly granular, electron-dense]] membrane-bounded vacuoles"],
          ],
        },
      ],
      explain:
        "الليسوسوم هو «المعدة» بتاعة الخلية: حويصلة صغيرة (0.2–0.4 ميكرون) مليانة إنزيمات هاضمة بتشتغل في وسط حامضي، وتقدر تكسّر البروتين والدهون. بالضوئي مش بيبان إلا لو صبغنا الإنزيم (acid phosphatase) بطرق histochemical.",
      questions: [
        {
          id: "c2-lys-1",
          type: "complete",
          prompt: "Lysosomes are membrane-bounded vesicles measuring ____ μm.",
          answers: ["0.2-0.4", "0.2–0.4", "0.2 to 0.4"],
          explain: "0.2–0.4 μm.",
        },
        {
          id: "c2-lys-2",
          type: "mcq",
          prompt: "Lysosomes can be seen with LM when:",
          options: [
            "Their enzymes (e.g., acid phosphatase) are stained by histochemical methods",
            "They are stained with iron hematoxylin",
            "They are stained with silver salts",
            "Never; they are always invisible",
          ],
          answer: 0,
          explain: "Resolved at LM level by histochemical staining of their enzymes.",
        },
        {
          id: "c2-lys-3",
          type: "tf",
          statement: "Lysosomal enzymes are active at alkaline pH.",
          answer: false,
          correction: "They are active at acid pH (acid hydrolases) maintained within their interior.",
          explain: "Acid hydrolases.",
        },
        {
          id: "c2-lys-4",
          type: "mcq",
          prompt: "With EM, lysosomes appear as:",
          options: [
            "Spherical, uniformly granular, electron-dense membrane-bounded vacuoles",
            "Hollow cylinders closed at one end",
            "Flattened ribosome-studded cisternae",
            "Ovoid structures with cristae",
          ],
          answer: 0,
          explain: "Slide 37.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 39–41
    {
      id: "lysosome-types",
      title: "Types of lysosomes",
      slides: "39–41",
      keyPoints: [
        "[[Primary lysosomes]]: freshly formed from the Golgi; contain only hydrolytic enzymes.",
        "[[Secondary lysosomes]]: primary lysosome + phagosome.",
        "Phagosome with exogenous material (e.g., bacteria) = *heterophagosome*; with endogenous material (e.g., damaged organelle) = *autophagosome*.",
        "[[Multivesicular bodies]]: spherical heterophagosomes; large vesicles containing smaller vesicles.",
        "[[Residual bodies]]: debris-containing vacuoles, the terminal stage. Contents are extruded by exocytosis or accumulate as [[lipofuscin]] pigment.",
      ],
      blocks: [
        {
          kind: "steps",
          title: "Life of a lysosome",
          items: [
            "[[Primary lysosome]] forms from the Golgi apparatus (only hydrolytic enzymes).",
            "It fuses with a phagosome → [[secondary lysosome]].",
            "[[Multivesicular bodies]]: spherical heterophagosomes containing smaller vesicles.",
            "[[Residual body]]: terminal stage. Debris is extruded by exocytosis or stays as [[lipofuscin]] pigment.",
          ],
        },
        {
          kind: "table",
          title: "Two kinds of phagosome",
          columns: ["", "Heterophagosome", "Autophagosome"],
          rows: [
            ["Contains", "Exogenous material", "Endogenous material"],
            ["Example", "Bacteria", "Damaged organelle"],
          ],
        },
      ],
      explain:
        "الليسوسوم بيبدأ primary (إنزيمات بس، طالع من الجولجي). لما يندمج مع حاجة مبلوعة يبقى secondary. لو المبلوع من برّه (بكتيريا) اسمه heterophagosome، ولو من جوّه الخلية (عضية بايظة) اسمه autophagosome. وفي الآخر يفضل residual body بالبواقي، يا تطلع برّه يا تتراكم كـ lipofuscin.",
      questions: [
        {
          id: "c2-lyt-1",
          type: "mcq",
          prompt: "Residual bodies may accumulate inside the cell as:",
          options: ["Lipofuscin pigment", "Matrix granules", "Nissl's granules", "Ergastoplasm"],
          answer: 0,
          explain: "Lipofuscin pigment.",
        },
        {
          id: "c2-lyt-2",
          type: "complete",
          prompt: "A phagosome containing endogenous material (e.g., a damaged organelle) is called an ____.",
          answers: ["autophagosome"],
          explain: "Endogenous → autophagosome; exogenous → heterophagosome.",
        },
        {
          id: "c2-lyt-3",
          type: "tf",
          statement: "Primary lysosomes are freshly formed from the Golgi apparatus and contain only hydrolytic enzymes.",
          answer: true,
          explain: "Slide 39.",
        },
        {
          id: "c2-lyt-4",
          type: "mcq",
          prompt: "Secondary lysosomes are formed by fusion of primary lysosomes with:",
          options: ["Phagosomes", "Peroxisomes", "Ribosomes", "Golgi saccules"],
          answer: 0,
          explain: "Primary lysosome + phagosome = secondary lysosome.",
        },
        {
          id: "c2-lyt-5",
          type: "mcq",
          prompt: "Multivesicular bodies are:",
          options: [
            "Spherical forms of heterophagosomes containing smaller vesicles",
            "The terminal stage of lysosomal activity",
            "Freshly formed lysosomes",
            "Peroxisomes with a nucleoid",
          ],
          answer: 0,
          explain: "Residual bodies are the terminal stage.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 42–43
    {
      id: "lysosome-functions",
      title: "Functions of lysosomes",
      slides: "42–43",
      keyPoints: [
        "Degradation of any exogenous macromolecules (phagocytosis and pinocytosis).",
        "Breakdown of organelles or cell constituents no longer useful to the cell (*autophagy*).",
      ],
      blocks: [
        {
          kind: "table",
          title: "What lysosomes digest",
          columns: ["Material", "Process"],
          rows: [
            ["Exogenous macromolecules", "Phagocytosis and pinocytosis"],
            ["Organelles / cell constituents no longer useful", "Autophagy"],
          ],
        },
      ],
      explain: "الليسوسوم بيهضم حاجتين: حاجات جاية من برّه (phagocytosis وpinocytosis)، وأجزاء من الخلية نفسها مبقتش نافعة (autophagy).",
      questions: [
        {
          id: "c2-lyf-1",
          type: "complete",
          prompt: "Breakdown of organelles that are no longer useful to the cell is called ____.",
          answers: ["autophagy"],
          explain: "Autophagy.",
        },
        {
          id: "c2-lyf-2",
          type: "tf",
          statement: "Lysosomes degrade exogenous macromolecules taken in by phagocytosis and pinocytosis.",
          answer: true,
          explain: "Function 1.",
        },
        {
          id: "c2-lyf-3",
          type: "mcq",
          prompt: "Autophagy means:",
          options: [
            "Breakdown of the cell's own useless organelles",
            "Engulfment of bacteria",
            "Release of secretory products",
            "Formation of cilia",
          ],
          answer: 0,
          explain: "Auto = self.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 44–49
    {
      id: "peroxisomes",
      title: "Peroxisomes (microbodies)",
      slides: "44–49",
      keyPoints: [
        "Spherical, single membrane-bounded organelles with [[peroxide forming enzymes]] (oxidative) and catalase.",
        "Involved in the formation and degradation of intracellular hydrogen peroxide (H2O2).",
        "LM: does [[not appear]]. EM: [[membrane-bounded vacuoles]], varying with species and cell type.",
        "Large in hepatocytes and kidney cells; small in intestinal cells (*microperoxisomes*).",
        "Human: finely granular matrix of moderate density. Many other species: crystalline core = [[nucleoid]].",
        "Nucleoid is [[absent]] in liver peroxisomes of reptiles, birds and humans, which lack urate oxidase → uric acid accumulates → [[gout]].",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Peroxisomes",
          aside: "microbodies",
          text: "Spherical, single membrane-bounded organelles containing [[peroxide forming enzymes]] (oxidative enzymes) and catalase, involved in the formation and degradation of intracellular H2O2.",
        },
        {
          kind: "chips",
          title: "Size varies by cell",
          items: [
            { label: "Hepatocytes", note: "relatively large" },
            { label: "Kidney cells", note: "relatively large" },
            { label: "Intestinal cells", note: "small = microperoxisomes" },
          ],
        },
        {
          kind: "table",
          title: "The nucleoid",
          columns: ["", "Many other species", "Reptiles, birds, humans (liver)"],
          rows: [
            ["Core", "Crystalline core = [[nucleoid]]", "Nucleoid [[absent]]; finely granular matrix (human)"],
            ["Urate oxidase", "—", "Lacking"],
            ["Result", "—", "Uric acid accumulates → [[gout]] in humans"],
          ],
        },
      ],
      explain:
        "البيروكسيسوم حويصلة بغشاء واحد فيها إنزيمات بتعمل H2O2 وكاتاليز بيكسّره. بالضوئي مش بيبان. كبير في الكبد والكلى، وصغير في الأمعاء. في حيوانات كتير جوّاه نواة بلورية (nucleoid)، بس في الإنسان والطيور والزواحف مش موجودة لأننا معندناش urate oxidase، وده بيفسّر تراكم حمض اليوريك ومرض النقرس (gout).",
      questions: [
        {
          id: "c2-per-1",
          type: "reason",
          prompt: "Give reason: humans may develop gout.",
          answer:
            "Because human (liver) peroxisomes lack urate oxidase, the enzyme that degrades urates, so uric acid accumulates. (The nucleoid is absent in species that lack urate oxidase.)",
          explain: "Slide 49.",
        },
        {
          id: "c2-per-2",
          type: "mcq",
          prompt: "The nucleoid of peroxisomes is absent from liver peroxisomes of:",
          options: ["Reptiles, birds and human beings", "All mammals", "All species", "Only kidney cells"],
          answer: 0,
          explain: "Reptiles, birds and humans lack urate oxidase.",
        },
        {
          id: "c2-per-3",
          type: "complete",
          prompt: "Small peroxisomes in intestinal cells are called ____.",
          answers: ["microperoxisomes", "microperoxisome"],
          explain: "Microperoxisomes.",
        },
        {
          id: "c2-per-4",
          type: "tf",
          statement: "Peroxisomes are double membrane-bounded organelles visible with LM.",
          answer: false,
          correction: "They are single membrane-bounded and do not appear with LM.",
          explain: "Single membrane; LM: not appear.",
        },
        {
          id: "c2-per-6",
          type: "complete",
          prompt: "Peroxisomes contain ____ forming enzymes (oxidative enzymes) and catalase.",
          answers: ["peroxide"],
          explain: "Peroxide forming enzymes, involved in formation and degradation of H2O2.",
        },
        {
          id: "c2-per-5",
          type: "mcq",
          prompt: "Peroxisomes are relatively large in:",
          options: ["Hepatocytes and kidney cells", "Intestinal cells", "Red blood cells", "Nerve cells"],
          answer: 0,
          explain: "Large in hepatocytes and kidney; small in intestine.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 50–51
    {
      id: "peroxisome-functions",
      title: "Functions of peroxisomes",
      slides: "50–51",
      keyPoints: [
        "Contain many oxidative enzymes: D-amino acid oxidase, urate oxidase and catalase.",
        "D-amino acid oxidase and urate oxidase *produce* H2O2.",
        "Catalase *uses* the H2O2 to oxidize (detoxify) phenol, alcohol and fatty acids (β-oxidation).",
        "Also play a role in production of bile acids.",
      ],
      blocks: [
        {
          kind: "steps",
          title: "The H2O2 cycle",
          items: [
            "D-amino acid oxidase and urate oxidase produce hydrogen peroxide (H2O2).",
            "Catalase utilizes the H2O2 in oxidation, and therefore detoxification…",
            "…of toxic substances such as phenol, alcohol and fatty acids (β-oxidation).",
          ],
        },
        {
          kind: "chips",
          title: "Oxidative enzymes",
          items: [{ label: "D-amino acid oxidase", note: "makes H2O2" }, { label: "Urate oxidase", note: "makes H2O2" }, { label: "Catalase", note: "uses H2O2" }],
        },
      ],
      explain:
        "جوّه البيروكسيسوم في إنزيمين بيعملوا H2O2 (D-amino acid oxidase وurate oxidase)، والكاتاليز ياخد الـ H2O2 ده ويستخدمه يأكسد السموم زي الفينول والكحول والأحماض الدهنية. وكمان ليه دور في عمل الـ bile acids.",
      questions: [
        {
          id: "c2-pfn-1",
          type: "mcq",
          prompt: "In peroxisomes, the enzyme that utilizes H2O2 to detoxify phenol and alcohol is:",
          options: ["Catalase", "Urate oxidase", "D-amino acid oxidase", "Acid phosphatase"],
          answer: 0,
          explain: "The two oxidases make H2O2; catalase uses it.",
        },
        {
          id: "c2-pfn-2",
          type: "tf",
          statement: "Peroxisomes play a role in the production of bile acids.",
          answer: true,
          explain: "Function 2.",
        },
        {
          id: "c2-pfn-3",
          type: "complete",
          prompt: "Catalase oxidizes fatty acids by ____-oxidation.",
          answers: ["β", "beta", "b"],
          explain: "Fatty acids (β-oxidation).",
        },
      ],
    },

    // ───────────────────────────────────────── slides 52–54
    {
      id: "ribosomes",
      title: "Non-membranous organelles: ribosomes",
      slides: "52–54",
      keyPoints: [
        "Non-membranous organelles possess [[no bounding]] membrane: [[ribosomes]] and [[centrioles]].",
        "Ribosomes: small rounded ribonucleoprotein particles (rRNA + protein).",
        "They are the sites where amino acids are linked into polypeptide chains (proteins).",
        "LM: too small to be seen ([[not visible individually]]).",
        "Cells with abundant ribosomes have [[basophilic]] cytoplasm, due to the strong affinity of rRNA for hematoxylin.",
      ],
      blocks: [
        {
          kind: "definition",
          term: "Ribosomes",
          text: "Small rounded *ribonucleoprotein* particles (ribosomal RNA + protein) that provide the sites where amino acids are linked together into polypeptide chains (proteins).",
        },
      ],
      explain:
        "الريبوسوم حبة صغيرة من rRNA وبروتين، ودي المكان اللي الأحماض الأمينية بتتربط فيه وتعمل بروتين. بالضوئي مش بتبان لوحدها، بس الخلية اللي فيها ريبوسومات كتير السيتوبلازم بتاعها أزرق، لأن الـ rRNA بيحب الهيماتوكسيلين.",
      questions: [
        {
          id: "c2-rib-1",
          type: "reason",
          prompt: "Give reason: cells containing abundant ribosomes have basophilic cytoplasm.",
          answer: "Due to the strong affinity of rRNA for hematoxylin.",
          explain: "Slide 54.",
        },
        {
          id: "c2-rib-2",
          type: "mcq",
          prompt: "Ribosomes are composed of:",
          options: ["Ribosomal RNA (rRNA) and protein", "DNA and lipid", "Phospholipids only", "Microtubule triplets"],
          answer: 0,
          explain: "Ribonucleoprotein particles.",
        },
        {
          id: "c2-rib-3",
          type: "tf",
          statement: "Individual ribosomes are visible with the light microscope.",
          answer: false,
          correction: "They are too small to be seen individually with LM.",
          explain: "Not visible individually.",
        },
        {
          id: "c2-rib-4",
          type: "mcq",
          prompt: "Non-membranous organelles possess no bounding membrane and include:",
          options: ["Ribosomes and centrioles", "Lysosomes and peroxisomes", "Golgi and ER", "Mitochondria and nucleus"],
          answer: 0,
          explain: "Ribosomes and centrioles.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 55–61
    {
      id: "ribosomes-em",
      title: "Ribosomes: EM & functions",
      slides: "55–61",
      keyPoints: [
        "Electron-dense particles free in the cytoplasm: as singles, or attached to mRNA in small aggregations = polyribosomes (polysome).",
        "Frequently attached to the surface of rER and the nuclear envelope.",
        "Each ribosome = a [[large and a small]] subunit: four types of rRNA and almost 80 different proteins.",
        "Free ribosomes → proteins for [[internal use]] (cytoplasmic proteins and enzymes).",
        "Attached ribosomes → proteins for [[external use]] (secretory or lysosomal enzymes).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Free vs attached ribosomes",
          columns: ["", "Free", "Attached"],
          rows: [
            ["Where", "Free in the cytoplasm (singles or polysomes)", "Surface of rER and nuclear envelope"],
            ["Make proteins for", "[[Internal use]]: cytoplasmic proteins and enzymes", "[[External use]]: secretory or lysosomal enzymes"],
          ],
        },
        { kind: "number", value: "4 + ~80", label: "Types of rRNA + different proteins in a ribosome", note: "Built as a [[large and a small]] subunit." },
      ],
      explain:
        "الريبوسوم ليه جزئين (كبير وصغير). ممكن يبقى حر لوحده أو متجمّع على الـ mRNA (polysome)، أو لازق على الـ rER. الحر بيعمل بروتين للخلية نفسها، واللازق بيعمل بروتين يطلع برّه أو إنزيمات الليسوسوم.",
      questions: [
        {
          id: "c2-rem2-1",
          type: "mcq",
          prompt: "Attached ribosomes synthesize proteins for:",
          options: ["External use (secretory or lysosomal enzymes)", "Internal use (cytoplasmic proteins)", "Mitochondrial DNA", "Cilia formation"],
          answer: 0,
          explain: "Attached → external use. Free → internal use.",
        },
        {
          id: "c2-rem2-2",
          type: "complete",
          prompt: "Ribosomes attached to messenger RNA in small aggregations are called polyribosomes or ____.",
          answers: ["polysome", "polysomes"],
          explain: "Polyribosomes or polysome.",
        },
        {
          id: "c2-rem2-3",
          type: "tf",
          statement: "Each ribosome is composed of a large and a small subunit.",
          answer: true,
          explain: "Made of four types of rRNA and almost 80 proteins.",
        },
        {
          id: "c2-rem2-4",
          type: "compare",
          prompt: "Compare free and attached ribosomes.",
          columns: ["", "Free", "Attached"],
          rows: [
            ["Site", "Free in cytoplasm (singles / polysomes)", "rER surface, nuclear envelope"],
            ["Proteins for", "Internal use (cytoplasmic proteins, enzymes)", "External use (secretory, lysosomal enzymes)"],
          ],
          explain: "Slides 55–59.",
        },
        {
          id: "c2-rem2-5",
          type: "mcq",
          prompt: "A ribosome contains almost how many different proteins?",
          options: ["80", "4", "9", "1000"],
          answer: 0,
          explain: "Four types of rRNA and almost 80 different proteins.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 62–63
    {
      id: "centrosome",
      title: "Centrosome & centrioles: definition & LM",
      slides: "62–63",
      keyPoints: [
        "Centrosome: a specialized zone of cytoplasm with a *pair of centrioles* (= diplosome), procentrioles organizer and centriolar satellites.",
        "It functions as the microtubules organization center (MOC).",
        "LM: [[visible]]. Stained with [[iron hematoxylin]] → [[two tiny dots located close to the nucleus]].",
        "In some epithelial cells, centrioles sit in the apical cytoplasm beneath the ciliated surface = [[basal bodies]], from which cilia originate.",
      ],
      blocks: [
        {
          kind: "tree",
          title: "The centrosome contains",
          root: {
            label: "Centrosome",
            note: "microtubules organization center (MOC)",
            children: [
              { label: "Pair of centrioles", note: "= diplosome" },
              { label: "Procentrioles organizer" },
              { label: "Centriolar satellites" },
            ],
          },
        },
        {
          kind: "definition",
          term: "Basal bodies",
          text: "Apical centrioles located immediately beneath the ciliated surface of some epithelial cells; cilia originate from them.",
        },
      ],
      explain:
        "الـ centrosome منطقة في السيتوبلازم فيها اتنين centrioles (اسمهم diplosome)، وهي مركز تنظيم الـ microtubules. بالضوئي بتبان بالـ iron hematoxylin كنقطتين صغيرين جنب النواة. ولو السنتريول قاعد تحت سطح عليه cilia اسمه basal body.",
      questions: [
        {
          id: "c2-cen-1",
          type: "mcq",
          prompt: "With LM, centrioles stained with iron hematoxylin appear as:",
          options: ["Two tiny dots located close to the nucleus", "A black network near the nucleus", "Basophilic clumps", "A lighter negative image"],
          answer: 0,
          explain: "Two tiny dots close to the nucleus.",
        },
        {
          id: "c2-cen-2",
          type: "complete",
          prompt: "A pair of centrioles is known as a ____.",
          answers: ["diplosome"],
          explain: "Diplosome.",
        },
        {
          id: "c2-cen-3",
          type: "complete",
          prompt: "Apical centrioles beneath the ciliated surface are called ____ bodies.",
          answers: ["basal"],
          explain: "Basal bodies, from which cilia originate.",
        },
        {
          id: "c2-cen-4",
          type: "tf",
          statement: "Centrioles are invisible with the light microscope.",
          answer: false,
          correction: "They are visible with LM when stained with iron hematoxylin.",
          explain: "\"Visible\" is red on slide 63.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 64–67
    {
      id: "centrioles-em",
      title: "Centrioles: EM & functions",
      slides: "64–67",
      keyPoints: [
        "Each centriole is a *hollow cylinder* closed at one end.",
        "The two centrioles of a diplosome lie with their long axes at right angles.",
        "Wall = [[nine triplet of parallel microtubules]] connected by fine filaments, the [[protein link]].",
        "Functions: mitotic spindle during [[cell division]] · microtubules organization center · ciliogenesis.",
      ],
      blocks: [
        { kind: "diagram", diagram: "centriole", title: "Centriole in cross-section", caption: "Simplified from slide 67." },
        { kind: "number", value: "9 × 3", label: "Nine triplets of parallel microtubules in the wall" },
        {
          kind: "list",
          title: "Functions",
          items: [
            "Formation of the mitotic spindle during [[cell division]]: the position of centrioles determines the location of the spindle poles.",
            "Microtubules organization center.",
            "Ciliogenesis: procentrioles organizer forms procentrioles (basal bodies); the basal body organizes a cilium.",
          ],
        },
      ],
      explain:
        "السنتريول أسطوانة مجوّفة مقفولة من ناحية، والاتنين واقفين على بعض بزاوية قايمة. حيطته 9 مجموعات، كل مجموعة 3 microtubules، ومربوطين ببعض بـ protein link. شغله: المغزل في انقسام الخلية، وتنظيم الـ microtubules، وعمل الـ cilia.",
      questions: [
        {
          id: "c2-cem-1",
          type: "complete",
          prompt: "The wall of each centriole is made up of ____ triplets of parallel microtubules.",
          answers: ["nine", "9"],
          explain: "Nine triplets.",
        },
        {
          id: "c2-cem-2",
          type: "mcq",
          prompt: "The two centrioles of a diplosome are arranged with their long axes:",
          options: ["At right angles to each other", "Parallel to each other", "End to end", "Randomly"],
          answer: 0,
          explain: "Right angle.",
        },
        {
          id: "c2-cem-3",
          type: "mcq",
          prompt: "The microtubule triplets of the centriole are connected by fine filaments called:",
          options: ["The protein link", "Cristae", "Pseudopodia", "Stalks"],
          answer: 0,
          explain: "The protein link.",
        },
        {
          id: "c2-cem-4",
          type: "tf",
          statement: "Centrioles form the mitotic spindle during cell division; their position determines the location of the spindle poles.",
          answer: true,
          explain: "Function 1: formation of the mitotic spindle during cell division.",
        },
        {
          id: "c2-cem-5",
          type: "mcq",
          prompt: "Ciliogenesis depends on:",
          options: ["Formation of procentrioles (basal bodies) from the procentrioles organizer", "Lysosomes", "Golgi saccules", "Peroxisomes"],
          answer: 0,
          explain: "The basal body acts as the organizing center for a cilium.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Endoplasmic reticulum", back: "Endo = inside, plasm = cytoplasm, reticulum = network. Irregular network of tubules, cisternae and vesicles." },
    { id: "f2", front: "rER", back: "Synthesis of proteins; rough because of ribosomes attached from outside." },
    { id: "f3", front: "Ergastoplasm", back: "Basophilic cytoplasmic areas of rER seen with LM (also chromoidial substances)." },
    { id: "f4", front: "Patterns of rER basophilia", back: "Diffuse (plasma cells) · localized (pancreatic acinar cells) · clumps (Nissl's granules in nerve cells)." },
    { id: "f5", front: "rER functions", back: "Proteins for extracellular use; glycosylation → glycoproteins." },
    { id: "f6", front: "sER with LM", back: "Does not appear; cells rich in sER look acidophilic." },
    { id: "f7", front: "sER functions (5)", back: "Steroids (testis, corpus luteum, adrenal cortex) · drug detox (hepatocytes) · lipids (intestine) · Ca++ (striated muscle) · HCl (parietal cells)." },
    { id: "f8", front: "Golgi with LM", back: "Silver/osmium: black network near nucleus. H&E: does not stain → negative Golgi image." },
    { id: "f9", front: "Golgi stack", back: "3–10 Golgi saccules (sometimes more)." },
    { id: "f10", front: "Cis vs Trans face", back: "Cis (forming, receiving): convex, small transfer vesicles. Trans (maturing): concave, large secretory granules & lysosomes." },
    { id: "f11", front: "Golgi functions", back: "Factory (process & sort) · glycosylation/sulfation (mucus) · primary lysosomes · membrane turnover." },
    { id: "f12", front: "Lysosome", back: "Membrane-bounded vesicle 0.2–0.4 μm with acid hydrolases (active at acid pH)." },
    { id: "f13", front: "Lysosomes with LM / EM", back: "LM: invisible (histochemistry, e.g., acid phosphatase). EM: spherical, uniformly granular, electron-dense." },
    { id: "f14", front: "Heterophagosome vs autophagosome", back: "Hetero: exogenous material (bacteria). Auto: endogenous material (damaged organelle)." },
    { id: "f15", front: "Residual bodies", back: "Terminal stage; debris extruded by exocytosis or kept as lipofuscin pigment." },
    { id: "f16", front: "Lysosome functions", back: "Degrade exogenous macromolecules (phago/pinocytosis) · autophagy." },
    { id: "f17", front: "Peroxisomes", back: "Spherical, single membrane; peroxide-forming (oxidative) enzymes + catalase; make & break H2O2." },
    { id: "f18", front: "Microperoxisomes", back: "Small peroxisomes of intestinal cells. Large ones in hepatocytes and kidney." },
    { id: "f19", front: "Nucleoid & gout", back: "Crystalline core absent in reptiles, birds, humans (no urate oxidase) → uric acid accumulates → gout." },
    { id: "f20", front: "Peroxisome enzymes", back: "D-amino acid oxidase & urate oxidase make H2O2; catalase uses it to detoxify phenol, alcohol, fatty acids. Also bile acids." },
    { id: "f21", front: "Ribosomes", back: "Ribonucleoprotein particles (rRNA + protein); sites of protein synthesis." },
    { id: "f22", front: "Ribosomes with LM", back: "Not visible individually; abundant ribosomes → basophilic cytoplasm (rRNA loves hematoxylin)." },
    { id: "f23", front: "Ribosome structure", back: "Large + small subunit; 4 types of rRNA, almost 80 proteins." },
    { id: "f24", front: "Free vs attached ribosomes", back: "Free → internal use proteins. Attached → external use (secretory, lysosomal enzymes)." },
    { id: "f25", front: "Centrosome", back: "Zone with pair of centrioles (diplosome), procentrioles organizer, centriolar satellites = MOC." },
    { id: "f26", front: "Centrioles with LM", back: "Visible; iron hematoxylin → two tiny dots close to the nucleus." },
    { id: "f27", front: "Basal bodies", back: "Apical centrioles under the ciliated surface; cilia originate from them." },
    { id: "f28", front: "Centriole with EM", back: "Hollow cylinder closed at one end; wall = 9 triplets of microtubules + protein link; pair at right angles." },
    { id: "f29", front: "Centriole functions", back: "Mitotic spindle in cell division · microtubules organization center · ciliogenesis." },
  ],

  highYield: [
    "network",
    "synthesis of proteins",
    "ribosomes",
    "basophilic",
    "diffuse",
    "localized",
    "clumps",
    "extracellular",
    "devoid of",
    "not appear",
    "acidophilic",
    "Steroid hormone",
    "Drug detoxification",
    "Lipid biosynthesis",
    "Ca++",
    "hydrochloric acid",
    "secretory",
    "black network",
    "does not stain",
    "negative Golgi image",
    "saccule",
    "3-10",
    "Cis",
    "convex",
    "Trans",
    "concave",
    "small transfer vesicles",
    "larger secretory granules and lysosomes",
    "membrane-bounded vesicles",
    "histochemical methods",
    "electron-dense",
    "Primary lysosomes",
    "Secondary lysosomes",
    "Multivesicular bodies",
    "Residual bodies",
    "lipofuscin",
    "peroxide",
    "nucleoid",
    "gout",
    "no bounding",
    "centrioles",
    "visible",
    "large and a small",
    "internal use",
    "external use",
    "iron hematoxylin",
    "two tiny dots",
    "basal",
    "triplet",
    "cell division",
    "Factory",
    "Golgi stacks",
    "forming",
    "maturing",
    "membrane-bounded vacuoles",
    "absent",
    "invisible",
    "protein link",
    "mitotic spindle",
  ],

  sheet: [
    {
      heading: "ER",
      points: [
        "Endo inside · plasm cytoplasm · reticulum network",
        "rER: [[synthesis of proteins]]; rough = [[ribosomes]] outside",
        "LM: [[basophilic cytoplasmic areas]] = ergastoplasm",
        "[[Diffuse]] plasma cells · [[localized]] pancreatic acini · [[clumps]] Nissl",
        "rER functions: proteins for [[extracellular use]] · glycosylation",
        "sER: [[smooth and devoid of ribosomes]]; LM [[not appear]], [[acidophilic]]",
      ],
    },
    {
      heading: "sER functions",
      points: [
        "[[Steroid hormone synthesis]]: testis interstitial, corpus luteum, adrenal cortex",
        "[[Drug detoxification]]: hepatocytes",
        "[[Lipid biosynthesis]]: intestinal absorptive cells",
        "[[Storage and release of Ca++ ions]]: striated muscle",
        "[[Production of hydrochloric acid (HCl)]]: parietal cells",
      ],
    },
    {
      heading: "Golgi",
      points: [
        "Release of [[secretory products of the cells]]",
        "Silver/osmium: [[black network]] near nucleus",
        "H&E: [[does not stain]] → [[negative Golgi image]]",
        "Osteoblasts, plasma cells",
        "[[Golgi stacks]] of [[3-10 saccules]]",
        "[[Cis]]/[[forming]]: [[convex]], [[small transfer vesicles]]",
        "[[Trans]]/[[maturing]]: [[concave]], [[larger secretory granules and lysosomes]]",
        "[[Factory]] · mucus · primary lysosomes · membrane turnover",
      ],
    },
    {
      heading: "Lysosomes",
      points: [
        "[[Membrane-bounded vesicles]] 0.2–0.4 μm, acid hydrolases",
        "LM [[invisible]] → [[histochemical methods]] (acid phosphatase)",
        "EM: [[spherical uniformly granular, electron-dense]]",
        "[[Primary lysosomes]] (Golgi) → [[secondary lysosomes]] (+ phagosome)",
        "Hetero = exogenous · auto = endogenous",
        "[[Multivesicular bodies]] · [[residual bodies]] → [[lipofuscin]]",
        "Phago/pinocytosis · autophagy",
      ],
    },
    {
      heading: "Peroxisomes",
      points: [
        "Single membrane; [[peroxide forming enzymes]] + catalase",
        "LM [[not appear]] · EM [[membrane-bounded vacuoles]]",
        "Large: hepatocytes, kidney · small: intestine (microperoxisomes)",
        "[[Nucleoid]] [[absent]] in reptiles, birds, humans → no urate oxidase → [[gout]]",
        "Oxidases make H2O2 → catalase detoxifies phenol, alcohol, fatty acids · bile acids",
      ],
    },
    {
      heading: "Ribosomes",
      points: [
        "Non-membranous ([[no bounding]]) = [[ribosomes]] + [[centrioles]]",
        "rRNA + protein; [[not visible individually]]; [[basophilic]] (hematoxylin)",
        "Singles or polysomes; on rER & nuclear envelope",
        "[[Large and a small]] subunit · 4 rRNA · ~80 proteins",
        "Free → [[internal use]] · attached → [[external use]]",
      ],
    },
    {
      heading: "Centrioles",
      points: [
        "Centrosome: pair (diplosome) = MOC",
        "LM [[visible]]: [[iron hematoxylin]] → [[two tiny dots located close to the nucleus]]",
        "[[Basal bodies]] under cilia",
        "EM: hollow cylinder, right angles, [[nine triplet of parallel microtubules]] + [[protein link]]",
        "Spindle in [[cell division]] · MOC · ciliogenesis",
      ],
    },
  ],
};

export default lecture;
