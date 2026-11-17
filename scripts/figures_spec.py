# Figure list: (pdf, page or slide, section id, caption, spot) per lecture.
# spot = (prompt, answer) or None. Captions use only the labels printed on the slide or its text.
# For the CamScanner handout (3 slides per page) the number is the SLIDE number.

C1 = "cytology 1.pdf"
C2 = "Cytology 2.pdf"
C3 = "Cytology 3  lecture.pdf"
E2 = "Epithelium #2.pdf"
E3 = "epithelial 3.pdf"
T1 = "CamScanner 10-28-2026 14.14.pdf"
T2 = "connective tissue 2.pdf"

FIGURES = {
    "cytology-1": [
        (C1, 9, "the-cell", "Cell structures: nucleus, nucleolus, ER, Golgi apparatus, mitochondrion, lysosome, centriole, microvilli, cilia.", None),
        (C1, 10, "organelles", "Schematic drawing of cell structures.", None),
        (C1, 13, "membrane-lm", "Cell membrane with LM: drawing and H&E section (arrow = cell membrane).", None),
        (C1, 15, "membrane-em", "Membrane of two adjoining cells, EM; 'trilaminar' appearance highlighted.", (
            "These are the membranes of two adjoining cells (EM). Describe their appearance.",
            "Trilaminar: outer and inner electron-dense layers separated by an intermediate electron-lucent layer.")),
        (C1, 18, "phospholipids", "Phospholipid bilayer: hydrophilic heads face the extracellular and intracellular sides; hydrophobic tails point inward.", None),
        (C1, 23, "fluid-mosaic", "Modified fluid-mosaic model: integral and peripheral proteins, cholesterol, carbohydrates.", None),
        (C1, 24, "carbohydrates", "Glycoprotein (protein + carbohydrate) and glycolipid (lipid + carbohydrate); integral and peripheral proteins, cholesterol, protein channel.", None),
        (C1, 26, "exchange", "Membrane transport: simple diffusion, facilitated diffusion, primary active transport (ATP → ADP + Pi).", None),
        (C1, 31, "endo-exo", "(a) Exocytic vesicle leaving the cytoplasm. (b) Endocytic vesicle forming.", None),
        (C1, 32, "endo-exo", "Exocytosis of secretory vesicles; endocytosis through coated vesicles.", None),
        (C1, 33, "endo-exo", "Exocytosis vs endocytosis.", None),
        (C1, 38, "mito-lm", "Figure from slide 38 (mitochondria with LM).", None),
        (C1, 41, "mito-stain", "Mitochondria with LM: Janus green (oxidized by mitochondria → blue) and H&E (mitochondria-rich tissue stains red).", None),
        (C1, 44, "mito-em", "Mitochondria, EM: outer membrane, inner membrane, cristae (2), matrix (3), matrix granules (4).", None),
        (C1, 47, "mito-em", "Mitochondrion: membranes, intermembrane space, cristae, matrix, matrix granules, elementary particles.", None),
        (C1, 48, "mito-em", "Organelle, EM (slide 48).", (
            "Identify this organelle (EM) and name the parallel folds inside it.",
            "Mitochondrion. The folds are cristae: folds of the inner membrane projecting into the matrix.")),
    ],
    "cytology-2": [
        (C2, 11, "rer-em", "Rough ER: cisternae, ribosomes, cisternal space.", None),
        (C2, 12, "rer-em", "Organelle, EM (slide 12).", (
            "Identify the organelle in this EM: parallel membranes covered with dense dots.",
            "Rough ER: flattened cisternae studded with ribosomes (rough / granular appearance).")),
        (C2, 13, "rer-em", "Rough ER, EM: stacked parallel cisternae.", None),
        (C2, 24, "golgi-lm", "Negative Golgi image, H&E (arrows).", (
            "The arrows point to pale areas beside the nuclei in an H&E section. What are they, and why are they pale?",
            "Negative Golgi image: the Golgi apparatus does not stain with H&E, so it appears as a lighter-stained region.")),
        (C2, 27, "golgi-em", "Golgi apparatus, EM: forming face, maturing face, vesicles.", None),
        (C2, 28, "golgi-em", "E.M. picture of Golgi apparatus.", (
            "Name the two faces of this organelle's stack and the shape of each.",
            "Cis (forming, receiving) face: convex. Trans (maturing) face: concave.")),
        (C2, 29, "golgi-em", "Golgi stacks, EM: cis and trans faces near the nucleus.", None),
        (C2, 30, "golgi-functions", "Golgi: transport vesicles, cisterna filled with secretory product, secretory vesicles.", None),
        (C2, 33, "golgi-functions", "Golgi (cis and trans sides of a dictyosome) with rER, sER, secretory vesicle, centrosome.", None),
        (C2, 36, "lysosomes", "Lysosomes (L) and nuclei (N), LM.", (
            "Lysosomes are invisible in routine LM. How can they be shown as dark granules like these (L)?",
            "By staining their enzyme contents (e.g., acid phosphatase) with histochemical methods.")),
        (C2, 41, "lysosome-types", "EM: primary lysosomes and a residual body.", None),
        (C2, 43, "lysosome-types", "Lysosome pathways: primary lysosomes from the Golgi, autophagosome, secondary lysosomes, residual body.", None),
        (C2, 47, "peroxisomes", "EM: peroxisomes and a lysosome (Ly).", None),
        (C2, 57, "ribosomes-em", "EM: sER (1), mitochondria (2), ribosomes (3).", None),
        (C2, 58, "ribosomes-em", "Ribosome: large and small subunits on mRNA.", None),
        (C2, 60, "ribosomes-em", "Functions of ribosomes: mRNA leaves the nucleus; the ribosome builds the protein.", None),
        (C2, 61, "ribosomes-em", "Free polyribosomes vs ER-bound polyribosomes.", None),
        (C2, 67, "centrioles-em", "Centrioles, EM and diagram: microtubule triplets, protein links.", (
            "Identify the ring-shaped structures in the EM (left) and describe their wall.",
            "Centrioles in cross-section: wall of nine triplets of parallel microtubules joined by protein links.")),
    ],
    "cytology-3": [
        (C3, 5, "nucleus-lm", "Nerve cell: cell body, nucleus, nucleolus, cytoplasm, plasma membrane.", None),
        (C3, 6, "nucleus-lm", "Liver cells: nucleus and nucleolus.", None),
        (C3, 12, "nuclear-pore", "Nuclear pore complex: cytoplasmic and nucleoplasmic rings, spoke rings, central transporter, nuclear basket.", None),
        (C3, 20, "nucleolus", "Nucleolus, EM: nuclear organizing regions (NO), pars granulosa (PG), pars fibrosa (PF).", None),
        (C3, 22, "nucleolus", "Nucleus, EM: nucleolus, DNA, endoplasmic reticulum.", None),
        (C3, 23, "hetero-eu", "Nucleus, EM: euchromatin, heterochromatin, nuclear envelope, nucleolus.", (
            "Of the two chromatins labelled here, which predominates in active cells, and how does it look with LM?",
            "Euchromatin: extended, uncoiled, transcriptionally active; invisible with LM (thin and extended). Heterochromatin predominates in inactive cells.")),
        (C3, 24, "envelope-em", "Nuclear envelope: inner and outer membranes, nuclear pore, nuclear lamina, ribosomes, chromatin.", None),
        (C3, 25, "envelope-em", "Perinuclear space, rough ER, nuclear pore complex, nuclear lamina, chromatin.", None),
        (C3, 33, "cytoskeleton-functions", "Cytoskeleton: microtubules from the centrosome, intermediate filaments, cortical actin network.", None),
        (C3, 34, "microtubules", "Microtubule built from α- and β-tubulin; microfilament, intermediate filament and microtubule.", None),
        (C3, 35, "microtubules", "EM: microtubules near the nucleus and basal feet of centrioles.", None),
        (C3, 39, "inclusions-glycogen", "Liver section (slide 39, glycogen part of the lecture).", None),
        (C3, 40, "inclusions-glycogen", "EM (slide 40, glycogen part of the lecture).", (
            "Identify these dark rosette-shaped particles in a hepatocyte (EM).",
            "Glycogen α-particles: rosettes of moderately electron-dense particles (hepatocytes, chondrocytes).")),
        (C3, 42, "lipids", "Lipid droplets (L), EM and LM.", None),
        (C3, 43, "lipids", "Adipose tissue, H&E.", (
            "Why do these fat cells look like empty spaces in H&E?",
            "Routine processing extracts the lipid, so lipid droplets appear as unstained regular-shaped vacuoles.")),
        (C3, 44, "lipids", "Unilocular white adipocytes.", None),
        (C3, 45, "lipids", "Lipid droplet, EM.", None),
    ],
    "epithelium-2": [
        (E2, 3, "cell-number-shape", "Goblet cells: unicellular glands (drawing and LM).", None),
        (E2, 5, "cell-number-shape", "Shapes of glands: simple and compound, tubular and acinar.", None),
        (E2, 6, "secretion-nature", "Sublingual gland, H&E: mucous acinus, nuclei, lumen.", (
            "This acinus is from the sublingual gland. Mucous or serous? Give three features.",
            "Mucous: cuboidal cells, flattened nuclei, wide lumen (thick viscous secretion).")),
        (E2, 7, "secretion-nature", "Parotid gland, H&E: serous acinus, basement membrane, secretory vesicles, nuclei, lumen.", (
            "This acinus is from the parotid gland. Mucous or serous? Give three features.",
            "Serous: pyramidal cells, spherical nuclei, narrow lumen (thin watery secretion).")),
        (E2, 9, "secretion-nature", "Serous demilune capping mucus-secreting cells; mixed gland drawing.", None),
        (E2, 11, "mode-secretion", "Merocrine, apocrine and holocrine secretion.", None),
        (E2, 17, "basement-membrane", "Basement membrane: basal lamina (lamina lucida, lamina densa), reticular fibers (type III collagen), anchoring fibrils.", None),
        (E2, 19, "hemi-enfolding", "EM: hemidesmosome (H), basal lamina (BL), reticular lamina (RL).", None),
        (E2, 21, "hemi-enfolding", "EM, basal region of an epithelial cell (page 21).", (
            "EM of the base of an ion-transporting cell. Name this specialization and the organelles lined up in it.",
            "Basal surface enfolding with vertically oriented mitochondria.")),
    ],
    "epithelium-3": [
        (E3, 3, "luminal", "Cell drawing with cilia and microvilli on the luminal surface.", None),
        (E3, 4, "luminal", "Ciliated epithelium, LM.", (
            "Identify the hair-like projections on the free surface of these cells (LM).",
            "Cilia (kinocilia): motile, readily visible with LM, longer than microvilli.")),
        (E3, 7, "cilia-em", "Axoneme cross-section: outer doublets (A, B), central fibers, central sheath, nexin bridge, radial links, inner and outer arms.", None),
        (E3, 8, "cilia-em", "EM cross-section (page 8).", (
            "Identify this EM cross-section and its microtubule pattern.",
            "A cilium (axoneme) in cross-section: 9 peripheral doublets + 2 central singlets (9+2).")),
        (E3, 10, "microvilli", "Absorptive epithelium, LM (page 10).", (
            "Name the fine border on the free surface of these absorptive cells (LM).",
            "Striated (brush) border, made of numerous microvilli.")),
        (E3, 12, "microvilli", "Microvilli: EM and diagram of the actin core inserted into the terminal web.", None),
        (E3, 14, "stereocilia", "Epithelium of the male genital tract, LM (page 14).", (
            "These long projections line the epididymis. Name them and say whether they move.",
            "Stereocilia: extremely long, branched non-motile microvilli.")),
        (E3, 17, "junctions", "Tight junction: EM and diagram (occludin, claudin, intercellular space).", None),
        (E3, 18, "junctions", "Zonula occludens: paracellular vs transcellular pathways.", None),
        (E3, 21, "adherens-desmosome", "Desmosome, EM.", None),
        (E3, 22, "adherens-desmosome", "Desmosome: intermediate filaments, intracellular attachment plaque, desmocollin and desmoglein.", None),
        (E3, 24, "gap", "Gap junction: connexons (open, closed), connexin monomers, hydrophilic channel.", None),
        (E3, 25, "junctions", "Junctions in one cell: tight, adherens, desmosome, gap junction, hemidesmosome.", None),
        (E3, 26, "junctions", "Apical, lateral and basal domains and their junctions.", None),
    ],
    "connective-tissue-1": [
        (T1, 7, "ct-general", "Loose CT: mast cells, fibroblasts, collagen and elastic fibers, plasma cells, lymphocytes, macrophage, capillary.", None),
        (T1, 31, "ct-general", "Extracellular matrix (ground substance, elastic, collagen and reticular fibers) and resident cells.", None),
        (T1, 10, "mesenchymal-cells", "Cells, LM (slide 10).", (
            "Identify these pale stellate / spindle-shaped cells with oval nuclei and branching processes.",
            "Mesenchymal cells: undifferentiated, can differentiate into all CT cell types.")),
        (T1, 16, "macrophages", "Active macrophage (drawing).", None),
        (T1, 17, "macrophages", "Macrophages (M), neutrophils (N) and a blood vessel (BV), LM; macrophage, EM.", None),
        (T1, 23, "pericytes", "Pericyte around the endothelium, sharing the basement membrane.", None),
        (T1, 24, "pericytes", "Pericyte, EM.", None),
        (T1, 28, "fibroblasts", "Undifferentiated mesenchymal cell (inactive) → mature collagen-producing fibroblast (active).", None),
        (T1, 29, "fibroblasts", "Fibroblasts (F), LM.", None),
        (T1, 35, "adipocytes", "White adipocyte: fat reservoir, nucleus, Golgi apparatus, mitochondria.", None),
        (T1, 38, "adipocytes", "White adipocyte (mature lipocyte) and brown adipocytes; brown adipose cell.", None),
        (T1, 41, "mast-cells", "Mast cell (drawing).", None),
        (T1, 42, "mast-cells", "Cells beside a blood vessel (BV), LM and EM (slide 42).", (
            "Identify these cells packed with dark granules next to a blood vessel.",
            "Mast cells: large metachromatic granules obscure the nucleus.")),
        (T1, 44, "mast-cells", "Mast cell activation: IgE receptors, antigen, Ca2+, fusion of granules, heparin, histamine, ECF-A.", None),
        (T1, 48, "plasma-cells", "Plasma cell, EM.", None),
        (T1, 49, "plasma-cells", "Plasma cell: nucleus, nucleolus, Golgi, centriole, abundant rER.", None),
        (T1, 50, "plasma-cells", "Cells, LM (slide 50).", (
            "Identify these cells with eccentric nuclei showing clock-face chromatin.",
            "Plasma cells: cartwheel / clock face nucleus, strongly basophilic cytoplasm.")),
        (T1, 53, "melanocytes", "Connective tissue cells: fibroblast, plasma cell, adipose cell, lymphocytes, macrophage, eosinophil, neutrophil, pigment cell.", None),
    ],
    "connective-tissue-2": [
        (T2, 7, "fibers-em", "Collagen: amino acids (~1 nm) → tropocollagen (~300 nm) → fibrils (~1 µm) → fibers (~10 µm).", None),
        (T2, 8, "fibers-em", "Collagen fibril: procollagen subunits, gap and overlapping regions → fibril → fiber → bundle.", None),
        (T2, 9, "fibers-lm", "Special stains of connective tissue fibers (slide 9).", None),
        (T2, 10, "fibers-lm", "Special stain of connective tissue fibers (slide 10).", None),
        (T2, 13, "ground-substance", "Proteoglycan: sulphated GAGs, core protein, hyaluronic acid, complete proteoglycan.", None),
        (T2, 14, "fibers-location", "Liver, reticulin stain: reticular fibres and hepatocyte nuclei.", (
            "Name the black fibres in this liver section and the method that shows them.",
            "Reticular fibers (collagen type III), stained black by silver impregnation.")),
        (T2, 15, "loose-dense", "Connective tissue: neutrophil, eosinophil, macrophage, fibroblast, mast cell, fat cell, elastic fibers.", None),
        (T2, 18, "embryonic-ct", "Mesenchymal CT.", None),
        (T2, 19, "embryonic-ct", "Figure on the mucous CT slide, labelled 'Foetal Kidney H&E': mesenchymal cells, collagen fibres, cell processes.", None),
        (T2, 20, "embryonic-ct", "Comb and wattles of the chicken: mucous CT in adults.", None),
        (T2, 22, "loose-dense", "Loose CT: cells, collagen and elastic fibers loosely arranged.", None),
        (T2, 24, "loose-dense", "Connective tissue of the skin (slide 24).", (
            "Coarse collagen bundles running in all directions with very narrow spaces. Name this tissue.",
            "Dense irregular connective tissue (e.g., dermis, organ capsules).")),
        (T2, 26, "dense-regular", "Connective tissue (slide 26).", (
            "Parallel collagen bundles with rows of flat nuclei between them. Name the tissue and give an example.",
            "Dense regular collagenous connective tissue: tendon.")),
        (T2, 27, "dense-regular", "Tendon: fibroblasts between collagenous fibers.", None),
        (T2, 28, "dense-regular", "Ligamentum nuchae: dense regular elastic CT.", None),
        (T2, 29, "reticular-adipose", "Connective tissue (slide 29).", (
            "A delicate network of thin branched fibers around stellate cells. Name the tissue.",
            "Reticular connective tissue: stellate reticular cells + network of reticular fibers.")),
        (T2, 31, "reticular-adipose", "White adipose tissue: lobules separated by septa.", None),
        (T2, 32, "reticular-adipose", "White adipocytes: single large droplet, thin rim of cytoplasm.", None),
        (T2, 34, "reticular-adipose", "Adipose tissue (slide 34).", (
            "Small cells with many small fat droplets and oval eccentric nuclei. White or brown fat?",
            "Brown adipose tissue: multilocular, more vascular, strongly acidophilic cytoplasm.")),
    ],
}

# How to crop special cases: "photo" = keep only the coloured micrograph (drops slide titles that
# would give away a Spot-it answer); "below-blue" = drop the blue text slide above the figure;
# a 4-tuple = manual crop box as fractions of the slide (x0, y0, x1, y1).
CROP = {
    ("epithelium-2", 5): "below-blue",
    ("epithelium-2", 6): "below-blue",
    ("epithelium-2", 7): "below-blue",
    ("epithelium-2", 17): "below-blue",
    ("epithelium-3", 4): "below-blue",
    ("connective-tissue-2", 18): (0.215, 0.50, 0.80, 0.92),
    ("connective-tissue-2", 19): (0.51, 0.27, 0.95, 0.90),
    ("connective-tissue-2", 24): "photo",
    ("connective-tissue-2", 26): (0.53, 0.26, 0.88, 0.85),
    ("connective-tissue-2", 29): (0.55, 0.25, 0.875, 0.87),
    ("connective-tissue-2", 32): (0.55, 0.28, 0.88, 0.895),
    ("connective-tissue-2", 34): "photo",
}
