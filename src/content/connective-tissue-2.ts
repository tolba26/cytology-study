import type { Lecture } from "./types";

/**
 * Connective Tissue II: fibers, ground substance, types of CT. Dr. Asmaa Salaheldeen Aboelnour. 35 slides.
 * High-yield = red text on the slides.
 */
const lecture: Lecture = {
  id: "connective-tissue-2",
  number: 2,
  title: "Connective Tissue 2",
  subtitle: "Fibers · Ground substance · Types of CT",
  lecturer: "Dr. Asmaa Salaheldeen Aboelnour",
  slideCount: 35,
  group: "Histology",

  sections: [
    // ───────────────────────────────────────── slides 2–3
    {
      id: "fibers-names",
      title: "CT fibers: color, name, digestion, nature",
      slides: "2–3",
      keyPoints: [
        "Three fibers: white collagenous, yellow elastic, and reticular.",
        "Collagen: white; named because on boiling it gives gelatin (glue); tough and resists stretch.",
        "Elastic: yellow (when numerous); rubber-like branched fibers and discontinuous sheets; stretch to 2.5× their length.",
        "Reticular: color not clear; form a delicate network; *argyrophilic* (affinity to silver); mainly for support.",
        "Digestion: collagen by weak acids/alkalis, pepsin and collagenase; elastic resists boiling and weak acids, digested by elastase (pancreas); reticular as collagen.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Three fibers (slide 3)",
          columns: ["", "Collagen", "Elastic", "Reticular"],
          rows: [
            ["Color (fresh)", "White", "Yellow (when present in sufficient number)", "Not clear"],
            ["Name", "Collagenous: on boiling they give gelatin (glue)", "Rubber-like; fibers (branched) and discontinuous sheets", "Form a delicate network; argyrophilic (affinity to silver)"],
            ["Digestion", "Destroyed by weak acids and alkalis; digested by pepsin and collagenase (testis, some pathogenic bacteria)", "Resist boiling; not digested by weak acids and alkalis; digested by elastase (pancreas)", "As collagen fibers"],
            ["Nature", "Tough and resist stretch", "Stretched as much as 2.5 times their original length", "Mainly for support"],
          ],
        },
        { kind: "number", value: "2.5×", label: "Elastic fibers can stretch to 2.5 times their original length" },
      ],
      explain:
        "فيه 3 ألياف: الكولاجين أبيض، ولما يتغلي يدّي جيلاتين (غرا)، وجامد وبيقاوم الشد. الإيلاستيك أصفر، زي الأستيك ويتمط لحد مرتين ونص طوله، والـ elastase بتاع البنكرياس بس اللي بيهضمه. الـ reticular شبكة رفيعة بتحب الفضة (argyrophilic)، وبتسند.",
      questions: [
        {
          id: "c2t-fn-1",
          type: "reason",
          prompt: "Give reason: collagen fibers are called collagenous.",
          answer: "Because on boiling they give gelatin (glue).",
          explain: "Slide 3.",
        },
        {
          id: "c2t-fn-2",
          type: "mcq",
          prompt: "Elastic fibers are digested by:",
          options: ["Elastase secreted from the pancreas", "Pepsin", "Weak acids", "Collagenase"],
          answer: 0,
          explain: "Elastic fibers resist boiling and weak acids/alkalis; elastase digests them.",
        },
        {
          id: "c2t-fn-3",
          type: "complete",
          prompt: "Elastic fibers can be stretched as much as ____ times their original length.",
          answers: ["2.5", "2½", "two and a half"],
          explain: "2.5 times.",
        },
        {
          id: "c2t-fn-4",
          type: "mcq",
          prompt: "Reticular fibers are called argyrophilic because:",
          options: ["Of their affinity to silver", "They are yellow", "They give gelatin on boiling", "They stain with orcein"],
          answer: 0,
          explain: "Argyrophilic = silver-loving.",
        },
        {
          id: "c2t-fn-5",
          type: "tf",
          statement: "Collagen fibers are white in the fresh state.",
          answer: true,
          explain: "White collagenous fibers.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 4
    {
      id: "fibers-lm",
      title: "CT fibers: cells, function, LM & special stains",
      slides: "4, 9–10",
      keyPoints: [
        "Forming cells: collagen ← fibroblasts; elastic ← fibroblasts and smooth muscle cells; reticular ← fibroblasts and reticular cells.",
        "LM (H&E): collagen = acidophilic (pink) fibers and bundles (fibers unbranched, bundles branched); elastic = not stained (except bright-pink strands in large arteries); reticular = do not appear.",
        "Collagen stains: red (Van Gieson's), green (Masson's trichrome), blue (Mallory).",
        "Elastic stains: Verhoeff's, orcein (brown), resorcin fuchsin (blue).",
        "Reticular stains: black by silver impregnation; PAS positive (both due to their glycoprotein coat).",
      ],
      blocks: [
        {
          kind: "table",
          title: "Slide 4",
          columns: ["", "Collagen", "Elastic", "Reticular"],
          rows: [
            ["Forming cells", "Fibroblasts", "Fibroblasts and smooth muscle cells", "Fibroblasts and reticular cells"],
            ["Function", "Support, connect, resist stretch", "Elasticity to tissues and organs", "Support"],
            ["LM (H&E)", "Acidophilic (pink) fibers and bundles; fibers not branched, bundles are", "Not stained; elastic sheets in large arteries = highly reflective light-pink strands", "Do not appear"],
            ["Special stain", "Red: Van Gieson's · green: Masson's trichrome · blue: Mallory", "Verhoeff's · orcein (brown) · resorcin fuchsin (blue)", "Black: silver impregnation · PAS (glycoprotein coat)"],
          ],
        },
      ],
      explain:
        "الكولاجين بتعمله الـ fibroblasts، وبيبان وردي في الـ H&E. الإيلاستيك بتعمله الـ fibroblasts والعضلات الملساء، ومش بيصطبغ بالـ H&E، بيحتاج orcein (بني) أو Verhoeff. الـ reticular مش بيبان بالـ H&E خالص، وبيبان أسود بالفضة وموجب للـ PAS.",
      questions: [
        {
          id: "c2t-fl-1",
          type: "mcq",
          prompt: "Collagen fibers stain green with:",
          options: ["Masson's trichrome", "Van Gieson's", "Mallory stain", "Orcein"],
          answer: 0,
          explain: "Van Gieson red, Masson green, Mallory blue.",
        },
        {
          id: "c2t-fl-2",
          type: "mcq",
          prompt: "Elastic fibers are formed by:",
          options: ["Fibroblasts and smooth muscle cells", "Fibroblasts only", "Reticular cells", "Mast cells"],
          answer: 0,
          explain: "Slide 4.",
        },
        {
          id: "c2t-fl-3",
          type: "tf",
          statement: "Reticular fibers appear clearly in routine H&E sections.",
          answer: false,
          correction: "They do not appear in H&E; they stain black by silver impregnation and with PAS.",
          explain: "Slide 4.",
        },
        {
          id: "c2t-fl-4",
          type: "complete",
          prompt: "Elastic fibers stain brown with ____.",
          answers: ["orcein"],
          explain: "Orcein brown; resorcin fuchsin blue.",
        },
        {
          id: "c2t-fl-5",
          type: "compare",
          prompt: "Compare collagen, elastic and reticular fibers in their special stains.",
          columns: ["", "Collagen", "Elastic", "Reticular"],
          rows: [["Special stains", "Van Gieson red, Masson green, Mallory blue", "Verhoeff's, orcein brown, resorcin fuchsin blue", "Silver black, PAS positive"]],
          explain: "Slide 4.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 5, 7–8
    {
      id: "fibers-em",
      title: "CT fibers with EM",
      slides: "5, 7–8",
      keyPoints: [
        "Collagen: bundles of microfibrils = collagen fibrils, formed of tropocollagen molecules.",
        "Collagen fibrils show a characteristic periodicity repeated at 64 nm intervals.",
        "Periodicity: tropocollagen arranged end-to-end, each overlapping the adjacent one by a quarter of its length.",
        "Elastic: two components: elastin (amorphous, low electron density) and microfibrils (periphery and small fascicles inside).",
        "Reticular: individual collagen fibrils (type III) coated by glycoproteins, with the same 64 nm periodicity.",
      ],
      blocks: [
        { kind: "number", value: "64", unit: "nm", label: "Periodicity of collagen (and reticular) fibrils" },
        {
          kind: "steps",
          title: "Building a collagen fiber (slides 7–8)",
          items: [
            "Amino acids → tropocollagen molecules (≈ 300 nm long).",
            "Tropocollagen arranged end-to-end, overlapping by a quarter → fibrils with 64 nm banding.",
            "Fibrils → collagen fibers → bundles of collagen fibers.",
          ],
        },
      ],
      explain:
        "بالإلكتروني الكولاجين حزم من fibrils مكوّنة من جزيئات tropocollagen متراصة ورا بعض ومزاحة ربع طولها، فبيبان فيها خطوط بتتكرر كل 64 نانو. الإيلاستيك فيه حاجتين: elastin مادة فاتحة وmicrofibrils. والـ reticular هو كولاجين نوع III عليه glycoprotein، وفيه نفس الـ 64 نانو.",
      questions: [
        {
          id: "c2t-fe-1",
          type: "complete",
          prompt: "Collagen fibrils have a characteristic periodicity repeated at ____ nm intervals.",
          answers: ["64"],
          explain: "64 nm.",
        },
        {
          id: "c2t-fe-2",
          type: "reason",
          prompt: "Give reason: collagen fibrils show a characteristic periodicity.",
          answer:
            "Due to the unique arrangement of tropocollagen molecules end-to-end, each molecule overlapping the adjacent one by one quarter of its length.",
          explain: "Slide 5.",
        },
        {
          id: "c2t-fe-3",
          type: "mcq",
          prompt: "With EM, elastic fibers consist of:",
          options: ["Elastin and microfibrils", "Type III collagen fibrils", "Tropocollagen with 64 nm banding", "Glycoprotein-coated fibrils"],
          answer: 0,
          explain: "Elastin (amorphous) + microfibrils.",
        },
        {
          id: "c2t-fe-4",
          type: "tf",
          statement: "Reticular fibers are individual type III collagen fibrils coated by glycoproteins.",
          answer: true,
          explain: "Slide 5.",
        },
      ],
    },

    // ───────────────────────────────────────── slide 6
    {
      id: "fibers-location",
      title: "Collagen types & location of fibers",
      slides: "6",
      keyPoints: [
        "Type I: ≈90% of body collagen; fibers and bundles; fibrous CT, skin, tendon, ligaments, bone.",
        "Type II: hyaline cartilage; collagen fibrils.",
        "Type III (reticular fibers): delicate supporting network in liver and lymphoid organs.",
        "Types IV and V do not form fibrils: IV in basement membranes; V in small amounts in most CT.",
        "Elastic: organs needing elasticity: vocal cords, lung, ligamentum nuchae, skin and arteries.",
        "Reticular: network around capillaries, muscle cells, nerve, adipose cells, endocrine, lymphoid and blood-forming organs, and liver cells.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Collagen types",
          columns: ["Type", "Form", "Where"],
          rows: [
            ["I", "Fibers and bundles; ≈ 90% of body collagen", "Fibrous CT, skin, tendon, ligaments, bone"],
            ["II", "Collagen fibrils", "Hyaline cartilage"],
            ["III", "Reticular fibers", "Liver and lymphoid organs"],
            ["IV", "No fibrils", "Basement membranes"],
            ["V", "No fibrils", "Small amount in most CT"],
          ],
        },
        { kind: "number", value: "90", unit: "%", label: "Type I share of total body collagen" },
      ],
      explain:
        "الكولاجين أنواع: النوع I هو الأكتر (90%) وموجود في الجلد والأوتار والعظم. النوع II في الغضروف الزجاجي. النوع III هو الـ reticular في الكبد والأعضاء الليمفاوية. النوع IV في الـ basement membrane، والنوع V كمية قليلة. والإيلاستيك في الأماكن اللي محتاجة تتمط: الأحبال الصوتية والرئة والشرايين والجلد.",
      questions: [
        {
          id: "c2t-lo-1",
          type: "mcq",
          prompt: "Collagen type IV is present in:",
          options: ["Basement membranes", "Hyaline cartilage", "Tendons", "Lymphoid organs"],
          answer: 0,
          explain: "IV → basement membranes.",
        },
        {
          id: "c2t-lo-2",
          type: "mcq",
          prompt: "Collagen type II is found in:",
          options: ["Hyaline cartilage", "Bone", "Skin", "Liver"],
          answer: 0,
          explain: "Type II → hyaline cartilage.",
        },
        {
          id: "c2t-lo-3",
          type: "complete",
          prompt: "Collagen type I constitutes about ____% of total collagen in the body.",
          answers: ["90"],
          explain: "≈ 90%.",
        },
        {
          id: "c2t-lo-4",
          type: "tf",
          statement: "Elastic fibers are found in organs whose function requires great elasticity, such as vocal cords, lung and arteries.",
          answer: true,
          explain: "Slide 6.",
        },
        {
          id: "c2t-lo-5",
          type: "mcq",
          prompt: "Reticular fibers are collagen type:",
          options: ["III", "I", "II", "IV"],
          answer: 0,
          explain: "Type III.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 11–13
    {
      id: "ground-substance",
      title: "Ground substance (proteoglycans)",
      slides: "11–13",
      keyPoints: [
        "Amorphous gel-like material; not visible by H&E.",
        "At high concentration it stains basophilic, with characteristic metachromasia.",
        "Consists of [[glycosaminoglycans (GAGs)]] and [[proteins]].",
        "Non-sulfated GAGs: hyaluronic acid. Sulfated GAGs: chondroitin, dermatan, keratan, heparin.",
        "Functions: diffusion of nutrients; barrier against foreign materials.",
      ],
      blocks: [
        {
          kind: "tree",
          title: "Ground substance consists of",
          root: {
            label: "Proteoglycans",
            children: [
              {
                label: "Glycosaminoglycans (GAGs)",
                children: [
                  { label: "Non-sulfated", note: "hyaluronic acid" },
                  { label: "Sulfated", note: "chondroitin, dermatan, keratan, heparin" },
                ],
              },
              { label: "Proteins", note: "core protein" },
            ],
          },
        },
        {
          kind: "list",
          title: "Function of ground substance",
          items: ["Diffusion of nutrients.", "Barrier against any foreign materials."],
        },
      ],
      explain:
        "المادة الأساسية جل مش بيبان في الـ H&E، ولو مركّز بيبان أزرق ومعاه metachromasia. مكوّن من GAGs وبروتين. الـ GAGs نوعين: من غير كبريت (hyaluronic acid) وبكبريت (chondroitin وdermatan وkeratan وheparin). بيساعد الغذا ينتشر، وبيمنع الأجسام الغريبة.",
      questions: [
        {
          id: "c2t-gs-1",
          type: "mcq",
          prompt: "The non-sulfated glycosaminoglycan is:",
          options: ["Hyaluronic acid", "Chondroitin", "Dermatan", "Heparin"],
          answer: 0,
          explain: "Hyaluronic acid is the only non-sulfated GAG listed.",
        },
        {
          id: "c2t-gs-2",
          type: "complete",
          prompt: "Ground substance consists of glycosaminoglycans (GAGs) and ____.",
          answers: ["proteins", "protein"],
          explain: "GAGs + proteins.",
        },
        {
          id: "c2t-gs-3",
          type: "tf",
          statement: "Ground substance is clearly visible in routine H&E sections.",
          answer: false,
          correction: "It is not visible by H&E; at high concentration it stains basophilic with metachromasia.",
          explain: "Slide 11.",
        },
        {
          id: "c2t-gs-4",
          type: "mcq",
          prompt: "Functions of ground substance include:",
          options: ["Diffusion of nutrients and barrier against foreign materials", "Contraction", "Antibody production", "Heat production"],
          answer: 0,
          explain: "Slide 12.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 16–20
    {
      id: "embryonic-ct",
      title: "Embryonic CT: mesenchymal & mucous",
      slides: "16–20",
      keyPoints: [
        "Types of CT: embryonic and adult. Embryonic: mesenchymal CT and mucous CT.",
        "Mesenchymal CT: mesenchymal cells, [[no fibers]], [[non-sulfated amorphous]] ground substance.",
        "Mucous CT: large stellate fibroblasts with anastomosed processes; intercellular substance rich in [[mucin]] with thin collagen fibers that increase with age.",
        "Mucous CT: under the embryo's skin and in the umbilical cord ([[Wharton's jelly]]); in adults, in omasal laminae and the comb and wattles of chickens.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Two embryonic CTs",
          columns: ["", "Mesenchymal CT", "Mucous CT"],
          rows: [
            ["Cells", "Mesenchymal cells", "Large stellate fibroblasts with branching anastomosed processes"],
            ["Fibers", "[[No fibers]]", "Thin collagen fibers, increase with age"],
            ["Matrix", "[[Non-sulfated amorphous]] ground substance", "Rich in [[mucin]]"],
            ["Where", "Embryo", "Umbilical cord ([[Wharton's jelly]]), under embryo skin; adult: omasal laminae, comb and wattles of chickens"],
          ],
        },
      ],
      explain:
        "النسيج الضام الجنيني نوعين: الـ mesenchymal مفيهوش ألياف خالص، والمادة الأساسية فيه من غير كبريت. والـ mucous فيه fibroblasts نجمية ومادة غنية بالـ mucin وألياف كولاجين رفيعة بتزيد مع السن، وموجود في الحبل السري (Wharton's jelly).",
      questions: [
        {
          id: "c2t-em-1",
          type: "mcq",
          prompt: "Wharton's jelly of the umbilical cord is an example of:",
          options: ["Mucous connective tissue", "Mesenchymal CT", "Dense regular CT", "Reticular CT"],
          answer: 0,
          explain: "Mucous CT.",
        },
        {
          id: "c2t-em-2",
          type: "tf",
          statement: "Mesenchymal connective tissue contains abundant collagen fibers.",
          answer: false,
          correction: "It has no fibers; just mesenchymal cells in non-sulfated amorphous ground substance.",
          explain: "Slide 18.",
        },
        {
          id: "c2t-em-3",
          type: "complete",
          prompt: "The intercellular substance of mucous CT is rich in ____.",
          answers: ["mucin"],
          explain: "Mucin.",
        },
        {
          id: "c2t-em-4",
          type: "compare",
          prompt: "Compare mesenchymal and mucous connective tissue.",
          columns: ["", "Mesenchymal", "Mucous"],
          rows: [
            ["Cells", "Mesenchymal cells", "Large stellate fibroblasts"],
            ["Fibers", "None", "Thin collagen fibers (increase with age)"],
            ["Matrix", "Non-sulfated amorphous ground substance", "Rich in mucin"],
            ["Example", "Embryo", "Wharton's jelly (umbilical cord)"],
          ],
          explain: "Slides 18–20.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 21–24
    {
      id: "loose-dense",
      title: "Adult CT: loose & dense irregular",
      slides: "21–24",
      keyPoints: [
        "Adult CT contains all cell and fiber types; classified by the amount of cells and collagen fibers: loose, dense, reticular, adipose, cartilage/bone/blood.",
        "Loose CT: [[cells]] more abundant than fibers; loosely arranged fibers with wide spaces.",
        "Loose CT sites: around vessels and nerves, between muscle bundles, under the epithelium of GIT, respiratory and urinary tracts, deep skin, interstitial packing.",
        "Dense CT: fibers more abundant than cells and ground substance. Irregular = random bundles; regular = parallel bundles.",
        "[[Dense irregular]]: inactive fibroblasts, coarse interwoven collagen bundles; capsules of lung, spleen, liver, kidney, testis; fascia, joint capsule, dermis.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Loose vs dense CT",
          columns: ["", "Loose CT", "Dense CT"],
          rows: [
            ["Main component", "[[Cells]] more abundant than fibers", "Fibers more abundant than cells and ground substance"],
            ["Fibers", "Loosely arranged, wide spaces", "Irregular (random) or regular (parallel) bundles"],
            ["Examples", "Around vessels and nerves; under GIT, respiratory and urinary epithelium; deep skin", "Irregular: organ capsules, fascia, joint capsule, dermis"],
          ],
        },
      ],
      explain:
        "النسيج الضام في الكبار أنواع حسب كمية الخلايا والألياف. الرخو (loose) خلاياه أكتر من أليافه، وموجود حوالين الأوعية وتحت الطلائية. الكثيف (dense) أليافه أكتر: لو مترتبة عشوائي يبقى irregular (زي الأغلفة والـ dermis)، ولو متوازية يبقى regular.",
      questions: [
        {
          id: "c2t-ld-1",
          type: "mcq",
          prompt: "Dense irregular CT is found in:",
          options: ["Capsules of lung, spleen, liver, kidney and testis", "Tendons", "Umbilical cord", "Ligamentum nuchae"],
          answer: 0,
          explain: "Capsules, fascia, joint capsule, dermis.",
        },
        {
          id: "c2t-ld-2",
          type: "tf",
          statement: "In loose connective tissue, cells are more abundant than fibers.",
          answer: true,
          explain: "Slide 22.",
        },
        {
          id: "c2t-ld-3",
          type: "complete",
          prompt: "In dense ____ CT, bundles of fibers are arranged randomly.",
          answers: ["irregular"],
          explain: "Irregular = random; regular = parallel.",
        },
        {
          id: "c2t-ld-4",
          type: "mcq",
          prompt: "In dense irregular CT, fibroblasts are:",
          options: ["Inactive with highly condensed nuclei and minimal cytoplasm", "Highly active with basophilic cytoplasm", "Absent", "Replaced by adipocytes"],
          answer: 0,
          explain: "Slide 24.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 25–28
    {
      id: "dense-regular",
      title: "Dense regular CT",
      slides: "25–28",
      keyPoints: [
        "Two types: dense regular collagenous (tendon) and dense regular elastic (elastic ligaments).",
        "Tendon: parallel collagen bundles bound by loose CT with vessels, nerves and active fibroblasts (*peritendineum interna*), which repair the tendon.",
        "Tendon fibrocytes: inactive, long flat cells with wing-like processes; stellate in cross-section (*bird cells*).",
        "Elastic ligaments: branching parallel elastic fibers surrounded by loose CT, e.g., ligamentum nuchae.",
      ],
      blocks: [
        {
          kind: "table",
          title: "Dense regular collagenous vs elastic",
          columns: ["", "Collagenous (tendon)", "Elastic (elastic ligaments)"],
          rows: [
            ["Fibers", "Bundles of parallel collagen fibers", "Branching, interconnected parallel elastic fibers"],
            ["Between bundles", "Loose CT (peritendineum interna) with vessels, nerves, active fibroblasts", "Loose CT"],
            ["Cells", "Inactive fibrocytes with wing-like processes (bird cells in cross-section)", "—"],
            ["Example", "Tendon", "Ligamentum nuchae"],
          ],
        },
      ],
      explain:
        "الكثيف المنتظم نوعين: كولاجيني زي الوتر، أليافه متوازية وبينها نسيج رخو فيه fibroblasts نشيطة بتصلّح الوتر، والـ fibrocytes بين الألياف ليها زوائد زي الجناح (bird cells). وإيلاستيك زي ligamentum nuchae.",
      questions: [
        {
          id: "c2t-dr-1",
          type: "mcq",
          prompt: "An example of dense regular elastic CT is:",
          options: ["Ligamentum nuchae", "Tendon", "Dermis", "Umbilical cord"],
          answer: 0,
          explain: "Elastic ligaments, e.g., ligamentum nuchae.",
        },
        {
          id: "c2t-dr-2",
          type: "reason",
          prompt: "Give reason: tendon fibrocytes are called bird cells.",
          answer: "Because their wing-like cytoplasmic processes give them a stellate appearance in cross sections.",
          explain: "Slide 27.",
        },
        {
          id: "c2t-dr-3",
          type: "complete",
          prompt: "The loose CT containing active fibroblasts between tendon bundles is the peritendineum ____.",
          answers: ["interna"],
          explain: "Peritendineum interna.",
        },
        {
          id: "c2t-dr-4",
          type: "tf",
          statement: "The active fibroblasts between tendon bundles are responsible for repair of tendons.",
          answer: true,
          explain: "Slide 26.",
        },
      ],
    },

    // ───────────────────────────────────────── slides 29–34
    {
      id: "reticular-adipose",
      title: "Reticular CT & adipose tissue",
      slides: "29–34",
      keyPoints: [
        "Reticular CT: stellate reticular cells; complex network of delicate thin branched reticular fibers.",
        "Adipose tissue: mechanical protection, thermal insulation and body metabolism; white and brown.",
        "White: deep skin and around kidneys; divided by septa of loose CT into lobules; collagen network supports capillaries and nerves.",
        "White: narrow spaces with few fibrocytes, mast cells, scanty ground substance; fat as a single large droplet (monolocular).",
        "Brown: newborn mammals, rodents and some hibernating animals; important in body temperature regulation.",
        "Brown: more vascular, smaller cells, oval eccentric nuclei, strongly acidophilic cytoplasm.",
      ],
      blocks: [
        {
          kind: "table",
          title: "White vs brown adipose tissue",
          columns: ["", "White", "Brown"],
          rows: [
            ["Where", "Deep layer of skin, around kidneys", "Newborn mammals, rodents, some hibernating animals"],
            ["Fat", "Single large droplet (monolocular)", "—"],
            ["Cells", "Larger", "Smaller; oval eccentric nuclei; strongly acidophilic cytoplasm"],
            ["Vascularity", "Dense capillary plexus around each adipocyte", "More vascular than white"],
            ["Special role", "Lobules divided by septa of loose CT", "Body temperature regulation"],
          ],
        },
        {
          kind: "chips",
          title: "Functions of adipose tissue",
          items: [{ label: "Mechanical protection" }, { label: "Thermal insulation" }, { label: "Body metabolism" }],
        },
      ],
      explain:
        "الـ reticular CT شبكة ألياف reticular رفيعة مع خلايا نجمية. النسيج الدهني بيحمي وبيعزل الحرارة. الأبيض تحت الجلد وحوالين الكلى، متقسم فصوص، والدهن نقطة واحدة. البني في المواليد والحيوانات اللي بتبيّت (hibernating)، فيه أوعية أكتر وخلايا أصغر، ومهم في ضبط حرارة الجسم.",
      questions: [
        {
          id: "c2t-ra-1",
          type: "mcq",
          prompt: "Brown adipose tissue is found in:",
          options: ["Newborn mammals, rodents and some hibernating animals", "Around the kidneys of adults", "Umbilical cord", "Tendons"],
          answer: 0,
          explain: "Slide 33.",
        },
        {
          id: "c2t-ra-2",
          type: "tf",
          statement: "Brown adipose tissue plays an important part in body temperature regulation.",
          answer: true,
          explain: "Slide 33.",
        },
        {
          id: "c2t-ra-3",
          type: "mcq",
          prompt: "Reticular CT consists of:",
          options: ["Stellate reticular cells and a network of thin branched reticular fibers", "Parallel collagen bundles", "Mucin-rich matrix", "Elastic sheets"],
          answer: 0,
          explain: "Slide 29.",
        },
        {
          id: "c2t-ra-4",
          type: "complete",
          prompt: "White fat is divided by septa of loose CT into clusters known as ____.",
          answers: ["lobules", "lobule"],
          explain: "Lobules.",
        },
        {
          id: "c2t-ra-5",
          type: "compare",
          prompt: "Compare white and brown adipose tissue.",
          columns: ["", "White", "Brown"],
          rows: [
            ["Site", "Deep skin, around kidneys", "Newborns, rodents, hibernating animals"],
            ["Cells", "Larger, single droplet", "Smaller, oval eccentric nuclei, acidophilic"],
            ["Vascularity", "Capillary plexus", "More vascular"],
            ["Role", "Lobules; storage", "Temperature regulation"],
          ],
          explain: "Slides 31–34.",
        },
      ],
    },
  ],

  flashcards: [
    { id: "f1", front: "Collagen name & nature", back: "Gives gelatin (glue) on boiling; white; tough, resists stretch." },
    { id: "f2", front: "Elastic digestion & stretch", back: "Resists boiling & weak acids; digested by pancreatic elastase; stretches 2.5×." },
    { id: "f3", front: "Reticular fibers", back: "Delicate network; argyrophilic; black with silver; PAS +; type III collagen." },
    { id: "f4", front: "Collagen special stains", back: "Van Gieson red · Masson green · Mallory blue." },
    { id: "f5", front: "Elastic special stains", back: "Verhoeff's · orcein brown · resorcin fuchsin blue." },
    { id: "f6", front: "Forming cells", back: "Collagen: fibroblasts. Elastic: fibroblasts + smooth muscle. Reticular: fibroblasts + reticular cells." },
    { id: "f7", front: "Collagen periodicity", back: "64 nm; tropocollagen end-to-end, overlapping by a quarter." },
    { id: "f8", front: "Collagen types", back: "I 90% (skin, tendon, bone) · II hyaline cartilage · III reticular · IV BM · V small amounts." },
    { id: "f9", front: "Ground substance", back: "Gel; not seen in H&E; GAGs (hyaluronic; chondroitin, dermatan, keratan, heparin) + proteins." },
    { id: "f10", front: "Mesenchymal CT", back: "Mesenchymal cells, no fibers, non-sulfated ground substance." },
    { id: "f11", front: "Mucous CT", back: "Stellate fibroblasts, mucin, thin collagen; Wharton's jelly; chicken comb & wattles." },
    { id: "f12", front: "Loose CT", back: "Cells > fibers; around vessels, under GIT/respiratory/urinary epithelium, deep skin." },
    { id: "f13", front: "Dense irregular CT", back: "Random coarse collagen bundles; capsules, fascia, joint capsule, dermis." },
    { id: "f14", front: "Tendon", back: "Parallel collagen; peritendineum interna; fibrocytes = bird cells." },
    { id: "f15", front: "Brown adipose tissue", back: "Newborns, rodents, hibernators; more vascular; temperature regulation." },
  ],

  highYield: ["glycosaminoglycans", "proteins", "no fibers", "non-sulfated", "mucin", "Wharton", "cells", "dense irregular"],

  sheet: [
    {
      heading: "Fibers",
      points: [
        "Collagen: white, gelatin, tough · fibroblasts · pink in H&E",
        "Elastic: yellow, 2.5× stretch, elastase · fibroblasts + smooth muscle",
        "Reticular: network, argyrophilic, silver black, PAS · type III",
        "Collagen stains: Van Gieson red, Masson green, Mallory blue",
        "Elastic stains: Verhoeff's, orcein brown, resorcin fuchsin blue",
        "EM: 64 nm periodicity (quarter overlap) · elastin + microfibrils",
      ],
    },
    {
      heading: "Collagen types",
      points: ["I 90%: skin, tendon, ligament, bone", "II hyaline cartilage · III reticular (liver, lymphoid)", "IV basement membranes · V small amounts"],
    },
    {
      heading: "Ground substance",
      points: [
        "Gel, not in H&E; basophilic + metachromasia when concentrated",
        "[[Glycosaminoglycans (GAGs)]] + [[proteins]]",
        "Non-sulfated: hyaluronic · sulfated: chondroitin, dermatan, keratan, heparin",
        "Diffusion of nutrients · barrier",
      ],
    },
    {
      heading: "Types of CT",
      points: [
        "Mesenchymal: [[no fibers]], [[non-sulfated amorphous]]",
        "Mucous: [[mucin]], [[Wharton's jelly]], chicken comb",
        "Loose: [[cells]] > fibers",
        "[[Dense irregular]]: capsules, dermis · regular: tendon (bird cells), ligamentum nuchae",
        "Reticular: stellate cells + delicate network",
        "White fat: skin, kidneys, lobules · brown: newborns, hibernators, heat",
      ],
    },
  ],
};

export default lecture;
