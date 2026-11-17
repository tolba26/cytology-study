/**
 * One mind map per lecture: the whole lecture as a tree, built only from the slide content.
 * label = what you must recall; note = the short detail shown next to it.
 */
export interface MapNode {
  label: string;
  note?: string;
  children?: MapNode[];
}

const n = (label: string, note?: string, children?: MapNode[]): MapNode => ({ label, note, children });

export const MINDMAPS: Record<string, MapNode> = {
  "cytology-1": n("Cytology 1", "The cell, cell membrane, mitochondria", [
    n("Basics", undefined, [
      n("Histology", "science of the tissues"),
      n("Cytology", "science of cells"),
      n("Tissues", "cells with similar structure & function"),
      n("The cell", "smallest structural & functional unit"),
    ]),
    n("Inside the cell", undefined, [
      n("Protoplasm", "nucleus + cytoplasm, inside a membrane"),
      n("Cytoplasm", "synthetic & metabolic activities", [
        n("Matrix (cytosol)", "liquid, non-organelle part"),
        n("Organelles", "permanent, living"),
        n("Inclusions"),
        n("Cytoskeleton", "supports"),
      ]),
    ]),
    n("Organelles", "classified by membranes", [
      n("Membranous", "own membrane", [
        n("Cell membrane"),
        n("Mitochondria"),
        n("ER (rough & smooth)"),
        n("Golgi apparatus"),
        n("Lysosomes"),
        n("Peroxisomes"),
        n("Nucleus"),
      ]),
      n("Non-membranous", "no membrane", [n("Ribosomes"), n("Centrioles")]),
    ]),
    n("Cell membrane", "= plasmalemma; barrier", [
      n("LM", "invisible: 7–10 nm", [
        n("Boundary seen because of", undefined, [
          n("Condensed cytoplasm inside"),
          n("Stain (silver / PAS) on the coat"),
          n("Oblique sections"),
        ]),
      ]),
      n("EM", "trilaminar: dense / lucent / dense"),
      n("Fluid mosaic model", "protein ice cubes in a lipid sea", [
        n("Phospholipids 30%", "bilayer; heads out, tails in; cholesterol between tails"),
        n("Proteins 60%", "globules", [
          n("Intrinsic", "firm; transmembrane channels"),
          n("Extrinsic", "partially embedded"),
        ]),
        n("Carbohydrates 10%", "glycoprotein + glycolipid → glycocalyx"),
      ]),
      n("Functions", undefined, [
        n("Exchange", "passive · facilitated · active · selective"),
        n("Endocytosis", "phagocytosis (solid) / pinocytosis (fluid) → phagosome → lysosome"),
        n("Exocytosis", "vesicle fuses → release outside"),
        n("Others", "impulses · myelin · microvilli, cilia, flagella"),
      ]),
      n("Glycocalyx functions", "protection · immunity · hormones · adhesion · basement membrane · recognition"),
    ]),
    n("Mitochondria", "respiration & energy", [
      n("LM", undefined, [
        n("Shape", "granules, rods, threads"),
        n("Number", "∝ energy need: liver 1000, small lymphocyte few"),
        n("Motile", "→ basal regions of ion-transporting cells"),
        n("Stains", "fixed: iron hematoxylin · living: Janus green B"),
        n("Absent in", "RBCs & terminal keratinocytes"),
      ]),
      n("EM", "ovoid / elongated, two membranes", [
        n("Outer membrane", "smooth"),
        n("Inner membrane", "folds = cristae (∝ energy)"),
        n("Elementary particles", "≈ 9 nm spheres = enzyme F1"),
        n("Intermembrane space", "enzymes using ATP"),
        n("Matrix", "Ca++ granules · DNA & RNA"),
      ]),
      n("Functions", "powerhouse (energy) · Ca++ regulation"),
    ]),
  ]),

  "cytology-2": n("Cytology 2", "ER, Golgi, lysosomes, peroxisomes, ribosomes, centrioles", [
    n("Endoplasmic reticulum", "network of tubules, cisternae, vesicles", [
      n("Rough ER", "protein synthesis; ribosomes outside", [
        n("LM", "basophilic ergastoplasm: diffuse / localized / clumps"),
        n("EM", "flattened cisternae studded with ribosomes"),
        n("Functions", "proteins for extracellular use · glycosylation"),
      ]),
      n("Smooth ER", "no ribosomes", [
        n("LM", "not seen; cytoplasm acidophilic"),
        n("EM", "irregular tubules & vesicles"),
        n("Functions", "steroids · drug detox · lipids · Ca++ · HCl"),
      ]),
    ]),
    n("Golgi apparatus", "secretory products", [
      n("LM", "silver/osmium: black network · H&E: negative Golgi image"),
      n("EM", "saccules in stacks of 3–10", [
        n("Cis (forming)", "convex · small transfer vesicles"),
        n("Trans (maturing)", "concave · secretory granules & lysosomes"),
      ]),
      n("Functions", "factory (sort) · glycosylation & sulfation · primary lysosomes · membrane turnover"),
    ]),
    n("Lysosomes", "0.2–0.4 μm · acid hydrolases", [
      n("LM / EM", "invisible (histochemistry) · dense granular vacuoles"),
      n("Types", undefined, [
        n("Primary", "from Golgi, enzymes only"),
        n("Secondary", "primary + phagosome (hetero / auto)"),
        n("Multivesicular bodies", "vesicles inside vesicle"),
        n("Residual bodies", "debris → lipofuscin"),
      ]),
      n("Functions", "phago/pinocytosis · autophagy"),
    ]),
    n("Peroxisomes", "single membrane · peroxide enzymes + catalase", [
      n("Size", "large: liver, kidney · small: intestine"),
      n("Nucleoid", "absent in humans → no urate oxidase → gout"),
      n("Functions", "oxidases make H2O2 → catalase detoxifies · bile acids"),
    ]),
    n("Ribosomes", "rRNA + protein; no membrane", [
      n("LM", "not seen alone; basophilia"),
      n("EM", "singles or polysomes; large + small subunit"),
      n("Free", "proteins for internal use"),
      n("Attached", "proteins for external use"),
    ]),
    n("Centrioles", "centrosome = diplosome = MOC", [
      n("LM", "two tiny dots near nucleus (iron hematoxylin) · basal bodies"),
      n("EM", "hollow cylinder · right angles · 9 triplets + protein link"),
      n("Functions", "mitotic spindle · MOC · ciliogenesis"),
    ]),
  ]),

  "cytology-3": n("Cytology 3", "Nucleus, cytoskeleton, inclusions", [
    n("Nucleus", "archive · DNA 20%", [
      n("LM", undefined, [
        n("Position", "central · eccentric · peripheral"),
        n("Shape", "spherical/ovoid · spindle (smooth muscle) · kidney (monocytes) · lobulated (neutrophils)"),
        n("Number", "mono · bi · multi"),
      ]),
      n("Envelope", undefined, [
        n("LM", "single basophilic line"),
        n("EM", "2 membranes · perinuclear space 25 nm · nuclear lamina"),
        n("Pores", "2 annuli × 8 subunits · 8 spokes · central plug"),
      ]),
      n("Chromatin", "DNA + histones · 46 chromosomes", [
        n("Heterochromatin", "coiled · repressed · inactive cells · basophilic granules"),
        n("Euchromatin", "extended · active · invisible with LM"),
      ]),
      n("Nucleolus", "makes rRNA", [n("Nucleolonema", "pars granulosa + pars fibrosa"), n("Pars amorpha", "DNA filaments")]),
      n("Nuclear sap", "colloid · moves RNA to pores"),
      n("Functions", "regulates activities · makes ribosomal subunits"),
    ]),
    n("Cytoskeleton", "shape & stability", [
      n("Cytofilaments", "thread-like", [
        n("Actin (thin)", "5 nm · motility"),
        n("Intermediate", "10 nm · neuro / glial / tono"),
        n("Myosin (thick)", "15 nm · muscle"),
      ]),
      n("Microtubules", "25 nm · 13 protofilaments · tubulin α β · from MTOC"),
      n("Functions", "support · transport · motility · contraction · adhesion & division"),
    ]),
    n("Inclusions", "temporary, lifeless", [
      n("Stored food", undefined, [
        n("Glycogen", "H&E rough spaces · PAS · α rosettes / β singles"),
        n("Lipids", "H&E vacuoles · frozen: osmium black, Sudan III orange"),
      ]),
      n("Pigments", undefined, [
        n("Exogenous", "carotene · carbon dust · silver gray · lead blue gum · tattoo"),
        n("Endogenous", "Hb red · hemosiderin golden brown · bilirubin yellowish brown · melanin · lipofuscin"),
      ]),
      n("Crystals", "Reinke (Leydig cells) · Sertoli · lens"),
    ]),
  ]),

  "epithelium-2": n("Epithelium #2", "Glands and the basal surface", [
    n("Glands", undefined, [
      n("By ducts", undefined, [n("Exocrine", "ducts · salivary"), n("Endocrine", "ductless · pituitary, thyroid")]),
      n("By cell number", undefined, [n("Unicellular", "goblet cells"), n("Multicellular", "simple ×6 · compound ×3")]),
      n("By secretion", undefined, [
        n("Mucous", "thick · cuboidal · flattened nuclei · wide lumen"),
        n("Serous", "watery · pyramidal · spherical nuclei · narrow lumen"),
        n("Mixed", "serous demilunes"),
      ]),
      n("By mode", undefined, [n("Merocrine", "no loss"), n("Apocrine", "apical loss"), n("Holocrine", "whole loss")]),
    ]),
    n("Myoepithelium", "flattened · long processes · basket cells · actin & myosin"),
    n("Neuroepithelium", "sensory: taste buds, olfactory epithelium"),
    n("Basal surface", undefined, [
      n("Basement membrane", "basal lamina (epithelium) + reticular lamina (CT)", [n("Functions", "support · filter · barrier")]),
      n("Hemidesmosome", "cell ↔ BM"),
      n("Basal enfolding", "vertical mitochondria · ion-transporting cells"),
    ]),
  ]),

  "epithelium-3": n("Epithelium #3", "Luminal and lateral surfaces", [
    n("Luminal surface", undefined, [
      n("Cilia", "motile · visible with LM", [
        n("Axoneme", "9 doublets + 2 singlets"),
        n("Parts", "central sheath · nexins · radial spokes · dynein on A"),
        n("Functions", "airways: mucus · oviduct: ovum"),
      ]),
      n("Microvilli", "finger-like · absorptive cells", [
        n("LM", "brush border"),
        n("EM", "actin core → terminal web"),
        n("Function", "↑ absorption area"),
      ]),
      n("Stereocilia", "long, branched, non-motile microvilli · epididymis, vas deferens"),
    ]),
    n("Lateral surface", "4 junctions", [
      n("Zonula occludens", "below surface · membranes fuse · belt · seals"),
      n("Zonula adherens", "deep · belt · diverge · actin → plaques"),
      n("Macula adherens", "spot · wide gap · attachment plaque · intermediate filaments"),
      n("Gap junction", "very close · connexon = 6 connexins · coupling"),
    ]),
  ]),

  "connective-tissue-1": n("Connective Tissue 1", "General features and cells", [
    n("General", undefined, [
      n("Job", "connect & support"),
      n("Origin", "mesoderm"),
      n("Components", "cells · fibers · ground substance"),
      n("Types", "proper · adipose · cartilage · bone · blood"),
    ]),
    n("Fixed cells", undefined, [
      n("Mesenchymal", "stellate · oval nucleus · → all CT cells"),
      n("Macrophages", "from monocytes", [
        n("Fixed", "stellate / fusiform · acid phosphatase"),
        n("Active", "kidney nucleus · foamy · pseudopodia"),
        n("Giant cells", "fused macrophages"),
        n("Other names", "osteoclasts · monocytes · dust cells · Kupffer · microglia"),
      ]),
      n("Pericytes", "Rouget cells · around capillaries · progenitors · BBB"),
      n("Fibroblasts", "most common · wound repair", [
        n("Active", "basophilic · rich rER"),
        n("Fibrocyte", "inactive · spindle"),
      ]),
      n("Adipocytes", undefined, [
        n("White", "one droplet · signet ring"),
        n("Brown", "many droplets · mitochondria · cytochromes"),
      ]),
    ]),
    n("Free cells", undefined, [
      n("Mast cells", "metachromatic granules · IgE · histamine, heparin"),
      n("Plasma cells", "cartwheel nucleus · Russell's bodies · antibodies"),
      n("Melanocytes", "neural crest · skin, meninges, eye"),
      n("Others", "lymphocytes · monocytes · granulocytes"),
    ]),
  ]),

  "connective-tissue-2": n("Connective Tissue 2", "Fibers, ground substance, CT types", [
    n("Fibers", undefined, [
      n("Collagen", "white · gelatin · tough", [
        n("Stains", "Van Gieson red · Masson green · Mallory blue"),
        n("EM", "64 nm banding"),
        n("Types", "I 90% · II cartilage · III reticular · IV BM · V small"),
      ]),
      n("Elastic", "yellow · stretch 2.5×", [
        n("Stains", "Verhoeff · orcein brown · resorcin fuchsin blue"),
        n("EM", "elastin + microfibrils"),
        n("Where", "vocal cords · lung · arteries · skin"),
      ]),
      n("Reticular", "network · argyrophilic", [
        n("Stains", "silver black · PAS"),
        n("EM", "type III fibrils + glycoprotein"),
      ]),
    ]),
    n("Ground substance", "gel · not seen in H&E", [
      n("GAGs", "hyaluronic (non-sulfated) · chondroitin, dermatan, keratan, heparin"),
      n("Functions", "diffusion · barrier"),
    ]),
    n("Types of CT", undefined, [
      n("Embryonic", undefined, [
        n("Mesenchymal", "no fibers"),
        n("Mucous", "mucin · Wharton's jelly"),
      ]),
      n("Adult", undefined, [
        n("Loose", "cells > fibers"),
        n("Dense irregular", "capsules · dermis"),
        n("Dense regular", "tendon (bird cells) · ligamentum nuchae"),
        n("Reticular", "stellate cells + network"),
        n("Adipose", "white: lobules · brown: heat"),
      ]),
    ]),
  ]),
};
