const questions = [
  {
    question: "Which of the following is classified as a purely ketogenic amino acid?",
    answers: [
      { text: "Leucine", correct: true },
      { text: "Tyrosine", correct: false },
      { text: "Phenylalanine", correct: false },
      { text: "Tryptophan", correct: false },
      { text: "Tryptophan", correct: false },
    ],
  },
  {
    question: "The biological value of a protein is mainly related to which factor?",
    answers: [
      { text: "Essential amino acid content", correct: true },
      { text: "Amino acid content", correct: false },
      { text: "Nitrogen content", correct: false },
      { text: "Content of ammonia to urea", correct: false },
      { text: "Content of ammonia to urea", correct: false },
    ],
  },
  {
    question: "Which of the following is not true about xanthine oxidase?",
    answers: [
      { text: "Produces H2O", correct: true },
      { text: "Flavoprotein", correct: false },
      { text: "Contains molybdenum", correct: false },
      { text: "Contains iron", correct: false },
      { text: "Contains iron", correct: false },
    ],
  },
  {
    question: "Which one of the following statements about chromatin is NOT true?",
    answers: [
      { text: "H2A-H2B bind to both the entry and exit ends of DNA in nucleosomes", correct: true },
      { text: "DNA winds approximately 1.75 times around the nucleosomes", correct: false },
      { text: "Covalent modification of histones influence chromatin compaction", correct: false },
      { text: "Non-his tone proteins are part of mitotic chromosomes", correct: false },
      { text: "Non-his tone proteins are part of mitotic chromosomes", correct: false },
    ],
  },
  {
    question: "The process of gene regulation involve folding and unfolding of tightly packed DNA. This occur by binding of a variety of proteins and enzymes at DNA surface through charge-charge interactions.What is the charge present on DNA at physiologic pH?",
    answers: [
      { text: "Negative charge", correct: true },
      { text: "Positive charge", correct: false },
      { text: "Both positive and negative charge", correct: false },
      { text: "No charge", correct: false },
      { text: "No charge", correct: false },
    ],
  },
  {
    question: "Which of the following statements about porphyrins is false?",
    answers: [
      { text: "The pyrrole rings of porphyrins are joined by methenyl bridges", correct: true },
      { text: "Porphyrinogens are colored", correct: false },
      { text: "Porphyrins emit fluorescence under UV light", correct: false },
      { text: "The pyrrole rings of porphyrinogens are joined by methylene bridges", correct: false },
      { text: "The pyrrole rings of porphyrinogens are joined by methylene bridges", correct: false },
    ],
  },
  {
    question: "Nucleotides consist of sugars, nitrogenous bases and phosphate groups. Which of the following functions do they not perform?",
    answers: [
      { text: "Structural component of membrane", correct: true },
      { text: "Structural moieties of coenzymes", correct: false },
      { text: "Mediators in cellular signaling", correct: false },
      { text: "Monomeric units of nucleic acids", correct: false },
      { text: "Monomeric units of nucleic acids", correct: false },
    ],
  },
  {
    question: "Which cellular organelle stores peroxidases?",
    answers: [
      { text: "Peroxisomes", correct: true },
      { text: "Lysosomes", correct: false },
      { text: "Microsomes", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Mitochondria", correct: false },
    ],
  },
  {
    question: "Which of the following is required for the proper functioning of cytochrome oxidase, the enzyme that transfers electrons to the final electron acceptor, O₂, in the electron transport chain?",
    answers: [
      { text: "Copper (Cu)", correct: true },
      { text: "Iron (Fe)", correct: false },
      { text: "Molybdenum (Mo)", correct: false },
      { text: "Zinc (Zn)", correct: false },
      { text: "Zinc (Zn)", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes does NOT require pyridoxal phosphate (PLP) for its activity?",
    answers: [
      { text: "Glucose-6-phosphate dehydrogenase", correct: true },
      { text: "Cystathionine β-synthase", correct: false },
      { text: "Glutamate decarboxylase", correct: false },
      { text: "Aspartate transaminase", correct: false },
      { text: "Aspartate transaminase", correct: false },
    ],
  },
  {
    question: "Where is laminin primarily found in the body?",
    answers: [
      { text: "Basement membrane", correct: true },
      { text: "Inner nuclear membrane", correct: false },
      { text: "Outer nuclear membrane", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Mitochondria", correct: false },
    ],
  },
  {
    question: "A deficiency of aspartoacylase leads to which condition?",
    answers: [
      { text: "Canavan disease", correct: true },
      { text: "Oasthouse syndrome", correct: false },
      { text: "Hawkinsinuria", correct: false },
      { text: "Hartnup disease", correct: false },
      { text: "Hartnup disease", correct: false },
    ],
  },
  {
    question: "In Phase II of detoxification, metabolite from phase 1 is attached with a hydrophilic molecule to yield water-soluble and easily excretable products. Which of the following is not type of a reaction in Phase II?",
    answers: [
      { text: "Reduction", correct: true },
      { text: "Acetylation", correct: false },
      { text: "Glycine conjugation", correct: false },
      { text: "Methylation", correct: false },
      { text: "Methylation", correct: false },
    ],
  },
  {
    question: "What type of bond is formed between the phosphate group and the 5' carbon of ribose sugar in a nucleotide?",
    answers: [
      { text: "Ester bond", correct: true },
      { text: "Phosphodiester bond", correct: false },
      { text: "Beta N-glycosidic bond", correct: false },
      { text: "Acid anhydride bond", correct: false },
      { text: "Acid anhydride bond", correct: false },
    ],
  },
  {
    question: "What is the rate-limiting step in the de novo synthesis of pyrimidine nucleotides?",
    answers: [
      { text: "Carbamoyl phosphate synthetase-II", correct: true },
      { text: "Aspartate transcarbamoylase", correct: false },
      { text: "Dihydroorotate dehydrogenase", correct: false },
      { text: "Ornithine transcarbamoylase", correct: false },
      { text: "Ornithine transcarbamoylase", correct: false },
    ],
  },
  {
    question: "Wernicke's encephalopathy is a serious condition that occurs when the body lacks essential nutrients. Which vitamin plays a crucial role in the development of this condition?",
    answers: [
      { text: "Thiamine", correct: true },
      { text: "Folic acid", correct: false },
      { text: "Nicotinic acid", correct: false },
      { text: "Pyridoxine", correct: false },
      { text: "Pyridoxine", correct: false },
    ],
  },
  {
    question: "Which of the following substances is a substrate for the resynthesis of triacylglycerols in the cells of the small intestinal mucosa?",
    answers: [
      { text: "2-monoacylglycerol      ", correct: true },
      { text: "cholesterol", correct: false },
      { text: " sphingolipids", correct: false },
      { text: " inorganic phosphate", correct: false },
      { text: " inorganic phosphate", correct: false },
    ],
  },
  {
    question: "During vigorous exercise, which substance is released from muscle tissue?",
    answers: [
      { text: "Alanine", correct: true },
      { text: "Glutamine", correct: false },
      { text: "Branched-chain keto acids", correct: false },
      { text: "Asparagine", correct: false },
      { text: "Asparagine", correct: false },
    ],
  },
  {
    question: "Which of the following is considered a high-energy phosphate compound?",
    answers: [
      { text: "ATP", correct: true },
      { text: "Creatine phosphate", correct: false },
      { text: "Glucose-1-phosphate", correct: false },
      { text: "Glycerol-3-phosphate", correct: false },
      { text: "Glycerol-3-phosphate", correct: false },
    ],
  },
  {
    question: "Where does nucleic acid synthesis come from?  ",
    answers: [
      { text: "nucleoside triphosphates", correct: true },
      { text: "amino acids", correct: false },
      { text: "nucleoside diphosphates", correct: false },
      { text: "nucleoside monophosphates", correct: false },
      { text: "nucleoside monophosphates", correct: false },
    ],
  },
  {
    question: "A patient with biliary atresia is at higher risk for the deficiency of which vitamin?",
    answers: [
      { text: "Vitamin K", correct: true },
      { text: "Vitamin B12", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Niacin", correct: false },
      { text: "Niacin", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms may occur in a patient who takes high doses of vitamin E daily to strengthen the immune system?",
    answers: [
      { text: "Prolongation of bleeding time", correct: true },
      { text: "Hypercalcemia ", correct: false },
      { text: "Increased intracranial pressure", correct: false },
      { text: "Psychosis", correct: false },
      { text: "Psychosis", correct: false },
    ],
  },
  {
    question: "Due to the absence of which of the following substances, Vitamin C cannot be produced in the human body?",
    answers: [
      { text: "L-gulonolactone oxidase", correct: true },
      { text: "Xylutitol reductase", correct: false },
      { text: "Pyruvate dehydrogenase", correct: false },
      { text: "UDP glucose dehydrogenase", correct: false },
      { text: "UDP glucose dehydrogenase", correct: false },
    ],
  },
  {
    question: "Biological dehydrogenation reactions are enzyme catalyzed oxidation-reduction reactions where one molecule losses hydrogen or electrons and other molecule accept it. Most of the time the cofactor of enzyme plays a role as electron acceptor or donor. Which vitamin as coenzyme is required for glucose 6 phosphate dehydrogenase?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Biotin", correct: false },
      { text: "Thiamine", correct: false },
      { text: "Riboflavin", correct: false },
      { text: "Riboflavin", correct: false },
    ],
  },
  {
    question: "An overweight person went on high carbohydrate and low fat diet in order to loose body fat. Which of the following vitamins RDA level he has to increase to metabolize these excess carbohydrates?",
    answers: [
      { text: "Thiamine", correct: true },
      { text: "Vit E", correct: false },
      { text: "Vit C", correct: false },
      { text: "Pantothenate", correct: false },
      { text: "Pantothenate", correct: false },
    ],
  },
  {
    question: "Which of the following is a tetrameric glycoprotein in terms of chemical structure?",
    answers: [
      { text: "Insulin receptors", correct: true },
      { text: "Leptins", correct: false },
      { text: "Neuropeptide", correct: false },
      { text: "Thyrotrophin", correct: false },
      { text: "Thyrotrophin", correct: false },
    ],
  },
  {
    question: "The adenylate cyclase system is primarily mediated by which of the following?",
    answers: [
      { text: "cAMP", correct: true },
      { text: "Phosphodiesterase", correct: false },
      { text: "GTP-binding proteins", correct: false },
      { text: "Protein kinases", correct: false },
      { text: "Protein kinases", correct: false },
    ],
  },
  {
    question: "Which of the following glucose transporters is specific in the transport of fructose from the intestine to endorocytes?",
    answers: [
      { text: "GLUT 5", correct: true },
      { text: "GLUT 3", correct: false },
      { text: "GLUT 1", correct: false },
      { text: "GLUT 7", correct: false },
      { text: "GLUT 7", correct: false },
    ],
  },
  {
    question: "Dietitians and trainers recommend and use various diet plans and exercise regimens to control weight. What is the Atkin diet?",
    answers: [
      { text: "Low calorie, low carbohydrate diet", correct: true },
      { text: "Low fat diet", correct: false },
      { text: "Low carbohydrate diet", correct: false },
      { text: "Low calorie diet", correct: false },
      { text: "Low calorie diet", correct: false },
    ],
  },
  {
    question: "What is the relationship between oxidative phosphorylation, ATP production, and the respiratory chain?",
    answers: [
      { text: "Chemiosmotic methods", correct: true },
      { text: "Chemical methods", correct: false },
      { text: "Physical methods", correct: false },
      { text: "Conformational changes", correct: false },
      { text: "Conformational changes", correct: false },
    ],
  },
  {
    question: "Which substance inhibits oxidative phosphorylation by blocking the transportation of ADP and ATP?",
    answers: [
      { text: "Atractyloside", correct: true },
      { text: "Oligomycin", correct: false },
      { text: "Amobarbital", correct: false },
      { text: "Rotenone", correct: false },
      { text: "Rotenone", correct: false },
    ],
  },
  {
    question: "A child is in an emergency situation due to accidental ingestion of cyanide. Which of the following substances does it block in the citric acid cycle?",
    answers: [
      { text: "NAD+", correct: true },
      { text: "Acetyl-CoA Production", correct: false },
      { text: "Aconitase", correct: false },
      { text: "Citrate", correct: false },
      { text: "Citrate", correct: false },
    ],
  },
  {
    question: "Which of the following elements is missing from the mitochondrial matrix?",
    answers: [
      { text: "ATP synthase", correct: true },
      { text: "Pyruvate dehydrogenase", correct: false },
      { text: "13-oxidation enzymes", correct: false },
      { text: "Citric acid cycle enzymes", correct: false },
      { text: "Citric acid cycle enzymes", correct: false },
    ],
  },
  {
    question: "In which of the following cellular organelles does HMP shunt occur?",
    answers: [
      { text: "Cytosol", correct: true },
      { text: "Lysosome", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Nucleus", correct: false },
      { text: "Nucleus", correct: false },
    ],
  },
  {
    question: "Which of the following is false about HMP shunt?",
    answers: [
      { text: "Non oxidative phase of HMP pathway is irreversible", correct: true },
      { text: "Formation of NADPH", correct: false },
      { text: "Synthesis of ribose 5 phosphate", correct: false },
      { text: "No ATP formation", correct: false },
      { text: "No ATP formation", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes is involved in both the glycogenesis and glycogenolysis pathways?",
    answers: [
      { text: "Phosphoglucomutase", correct: true },
      { text: "Glycogen synthase", correct: false },
      { text: "Glucan transferase", correct: false },
      { text: "Glycogen phosphorylase", correct: false },
      { text: "Glycogen phosphorylase", correct: false },
    ],
  },
  {
    question: "A 15-year-old type I diabetic faints after injecting himself with insulin. He is administered Glucagon and rapidly recovers consciousness. This is best explained by induction of the activity of which of the following enzyme by Glucagon?",
    answers: [
      { text: "Glycogen phosphorylase", correct: true },
      { text: "Glycogen synthase", correct: false },
      { text: "Glucokinase", correct: false },
      { text: "Hexokinase", correct: false },
      { text: "Hexokinase", correct: false },
    ],
  },
  {
    question: "Which of the following is the first committed step of glycolysis?",
    answers: [
      { text: "Fructose 6 phosphate to Fructose 1, 6 bisphosphate", correct: true },
      { text: "Glucose to glucose 6 P04", correct: false },
      { text: "1,3 bisphosphoglycerate to 3-phosphoglycerate", correct: false },
      { text: "Phosphoenolpyruvate to pyruvate", correct: false },
      { text: "Phosphoenolpyruvate to pyruvate", correct: false },
    ],
  },
  {
    question: "Which of the following substances inhibits PFK-1 enzyme?",
    answers: [
      { text: "Citrate", correct: true },
      { text: "AMP", correct: false },
      { text: "Glucose-6-P04", correct: false },
      { text: "Insulin", correct: false },
      { text: "Insulin", correct: false },
    ],
  },
  {
    question: "Which of the following hormones does not activate hormone-sensitive lipase?",
    answers: [
      { text: "Insulin", correct: true },
      { text: "Glucagon", correct: false },
      { text: "Catecholamines", correct: false },
      { text: "T4", correct: false },
      { text: "T4", correct: false },
    ],
  },
  {
    question: "A 30-year-old presents with intractable vomiting and inability to eat or drink for the past 3 days. His blood glucose level is still normal. Which of the following is most important for the maintenance of the blood glucose in this patient?",
    answers: [
      { text: "Liver", correct: true },
      { text: "Heart", correct: false },
      { text: "Skeletal muscle", correct: false },
      { text: "Adipose tissue", correct: false },
      { text: "Adipose tissue", correct: false },
    ],
  },
  {
    question: "Which enzyme catalyzes substrate-level phosphorylation in the TCA cycle?",
    answers: [
      { text: "Succinate thiokinase", correct: true },
      { text: "Fumarase", correct: false },
      { text: "Succinate dehydrogenase", correct: false },
      { text: "Alpha-ketoglutarate dehydrogenase", correct: false },
      { text: "Alpha-ketoglutarate dehydrogenase", correct: false },
    ],
  },
  {
    question: "Which enzyme is responsible for ATP generation in the electron transport chain (ETC)?",
    answers: [
      { text: "FoF ATP synthase", correct: true },
      { text: "Na⁺/K⁺ ATPase", correct: false },
      { text: "Na⁺/Cl⁻ ATPase", correct: false },
      { text: "ADP kinase", correct: false },
      { text: "ADP kinase", correct: false },
    ],
  },
  {
    question: "Which of the following substances does not inhibit complex IV of the respiratory chain?",
    answers: [
      { text: "Malonate", correct: true },
      { text: "Cyanide", correct: false },
      { text: "Hydrogen sulfide (H₂S)", correct: false },
      { text: "Carbon monoxide (CO)", correct: false },
      { text: "Carbon monoxide (CO)", correct: false },
    ],
  },
  {
    question: "Chemiosmotic coupling in oxidative phosphorylation is primarily related to which of the following processes?",
    answers: [
      { text: "Formation of ATP at the substrate level", correct: true },
      { text: "ATP generation through the pumping of protons", correct: false },
      { text: "ATP generation through the pumping of neutrons", correct: false },
      { text: "ATP formation by the transport of O2", correct: false },
      { text: "ATP formation by the transport of O2", correct: false },
    ],
  },
  {
    question: "Which of the following statements about the mitochondrial genome is true?",
    answers: [
      { text: "It encodes 37 genes.", correct: true },
      { text: "It encodes 47 genes.", correct: false },
      { text: "It encodes 57 genes.", correct: false },
      { text: "It encodes 67 genes.", correct: false },
      { text: "It encodes 67 genes.", correct: false },
    ],
  },
  {
    question: "What is the primary source of energy for a running athlete during the first 3 minutes of running?",
    answers: [
      { text: "Creatine phosphate", correct: true },
      { text: "Free fatty acids", correct: false },
      { text: "Muscle glycogen", correct: false },
      { text: "Blood glucose", correct: false },
      { text: "Blood glucose", correct: false },
    ],
  },
  {
    question: "Which of the following is known as Complex V of the electron transport chain (ETC)?",
    answers: [
      { text: "ATP Synthase complex", correct: true },
      { text: "a-Cytochrome c oxidoreductase", correct: false },
      { text: "NADH-Q oxidoreductase", correct: false },
      { text: "Cytochrome c oxidase", correct: false },
      { text: "Cytochrome c oxidase", correct: false },
    ],
  },
  {
    question: "Which of the following is an X-linked recessive disorder in men with a blood clotting defect?",
    answers: [
      { text: "Hemophilia A", correct: true },
      { text: "Von - Willebrand disease", correct: false },
      { text: "Immune thrombocytopenia (ITP)", correct: false },
      { text: "Haemochromatosis", correct: false },
      { text: "Haemochromatosis", correct: false },
    ],
  },
  {
    question: "Tetrahydrobiopterin (THB) is a nucleotide cofactor derived from guanosine triphosphate (GTP).  For the metabolism of which of the above amino acids is it necessary?",
    answers: [
      { text: " Phenylalanine", correct: true },
      { text: " Lysine", correct: false },
      { text: "Alanine", correct: false },
      { text: "Serine", correct: false },
      { text: "Serine", correct: false },
    ],
  },
  {
    question: "What are the following causes of Hyperphenylalaninemia?",
    answers: [
      { text: "Dihydrobiopterin reductase deficiency", correct: true },
      { text: "Phenylalanine hydroxylase overactivity", correct: false },
      { text: "Tyrosine hydroxylase deficiency", correct: false },
      { text: "Defect in dihydrobiopterin biosynthesis", correct: false },
      { text: "Defect in dihydrobiopterin biosynthesis", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes provides an index of vitamin B1 nutritional status?",
    answers: [
      { text: "Transketolase", correct: true },
      { text: "Glucose-6-phosphate dehydrogenase", correct: false },
      { text: "6-Phosphogluconate dehydrogenase", correct: false },
      { text: "Transaldolase", correct: false },
      { text: "Transaldolase", correct: false },
    ],
  },
  {
    question: "During fasting, amino acids derived from muscle proteins are one of the main sources of energy for muscle cells. Which of the following amino acid is released from the muscles in fasting conditions?",
    answers: [
      { text: "Alanine", correct: true },
      { text: "Glutamine", correct: false },
      { text: "Branched keto acid", correct: false },
      { text: "Asparagine", correct: false },
      { text: "Asparagine", correct: false },
    ],
  },
  {
    question: "Animal indican is a product of decay and detoxification of which amino acid?       ",
    answers: [
      { text: " tryptophan", correct: true },
      { text: "phenylalanine", correct: false },
      { text: "tyrosine", correct: false },
      { text: " ornithine", correct: false },
      { text: " ornithine", correct: false },
    ],
  },
  {
    question: "Hyperuricemia is associated with which of the following conditions?",
    answers: [
      { text: "HGPRT deficiency", correct: true },
      { text: "HGPRT overactivity", correct: false },
      { text: "PRPP synthetase deficiency", correct: false },
      { text: "Glucose 6-phosphatase deficiency", correct: false },
      { text: "Glucose 6-phosphatase deficiency", correct: false },
    ],
  },
  {
    question: "Primary hyperoxaluria is associated with a defect in the metabolism of which compound?",
    answers: [
      { text: "Glycine", correct: true },
      { text: "Threonine", correct: false },
      { text: "Serine", correct: false },
      { text: "Alanine", correct: false },
      { text: "Alanine", correct: false },
    ],
  },
  {
    question: "Which metabolic defect is associated with an increased cardiovascular risk?",
    answers: [
      { text: "Branched-chain amino acids", correct: true },
      { text: "Aromatic amino acids", correct: false },
      { text: "Sulfur-containing amino acids", correct: false },
      { text: "Essential amino acids", correct: false },
      { text: "Essential amino acids", correct: false },
    ],
  },
  {
    question: "Which of the following tests is NOT commonly used in epigenetic (heritable changes in gene expression not caused by alterations in DNA sequence) analysis?",
    answers: [
      { text: "Genome-wide association study (GWAS)", correct: true },
      { text: "Bi-sulfate sequencing", correct: false },
      { text: "Methylation-sensitive restriction enzyme digestion", correct: false },
      { text: "Chromatin immunoprecipitation (ChIP)", correct: false },
      { text: "Chromatin immunoprecipitation (ChIP)", correct: false },
    ],
  },
  {
    question: "Which of the following fatty acid present in fish-oil is known for its cardio-protective function?",
    answers: [
      { text: "Eicosapentaenoic acid", correct: true },
      { text: "Arachidonic acid", correct: false },
      { text: "Linoleic acid", correct: false },
      { text: "Palmitic acid", correct: false },
      { text: "Palmitic acid", correct: false },
    ],
  },
  {
    question: "What causes impaired digestion and absorption of fats?        ",
    answers: [
      { text: "disruption of the flow of bile into the intestines", correct: true },
      { text: "hyperchlorhydria", correct: false },
      { text: " lack of secretion of chymotrypsin", correct: false },
      { text: "decreased elastase activity", correct: false },
      { text: "decreased elastase activity", correct: false },
    ],
  },
  {
    question: "Which enzyme is essential for the extrahepatic utilization of ketone bodies?",
    answers: [
      { text: "Thiophorase", correct: true },
      { text: "HMG-CoA lyase", correct: false },
      { text: "HMG-CoA reductase", correct: false },
      { text: "Succinate dehydrogenase", correct: false },
      { text: "Succinate dehydrogenase", correct: false },
    ],
  },
  {
    question: "What molecules are involved in the resynthesis of triacylglycerides in the cells of the small intestinal mucosa (β-monoglyceride pathway)?     ",
    answers: [
      { text: "2-monoacylglycerol and acyl-CoA", correct: true },
      { text: "glycerol and fatty acids", correct: false },
      { text: "1,2-diacylglycerol and phosphatidic acid", correct: false },
      { text: "phosphoglycerol and acyl-CoA", correct: false },
      { text: "phosphoglycerol and acyl-CoA", correct: false },
    ],
  },
  {
    question: "Which process below occurs in the mitochondria of cells?   ",
    answers: [
      { text: "β-oxidation of fatty acids", correct: true },
      { text: "lipolysis of triacylglycerols", correct: false },
      { text: "synthesis of palmitic acid", correct: false },
      { text: "phospholipid synthesis", correct: false },
      { text: "phospholipid synthesis", correct: false },
    ],
  },
  {
    question: "Which of the following substances is the structural precursor of all carbon atoms of ketone bodies?  ",
    answers: [
      { text: "malonyl-CoA", correct: true },
      { text: "acetyl-CoA", correct: false },
      { text: "succinyl-CoA", correct: false },
      { text: "CO2", correct: false },
      { text: "CO2", correct: false },
    ],
  },
  {
    question: "Which of the following shows the most marked increase in plasma concentration during starvation?",
    answers: [
      { text: "Ketone bodies", correct: true },
      { text: "Free fatty acids", correct: false },
      { text: "Glucose", correct: false },
      { text: "Glycogen", correct: false },
      { text: "Glycogen", correct: false },
    ],
  },
  {
    question: "Where is the formation of chylomicrons localized?  ",
    answers: [
      { text: "in intestinal epithelial cells", correct: true },
      { text: "in hepatocytes", correct: false },
      { text: "in the lymph", correct: false },
      { text: "in the blood", correct: false },
      { text: "in the blood", correct: false },
    ],
  },
  {
    question: "What is the function of VLDL?  ",
    answers: [
      { text: "transport of endogenous triacylglycerols", correct: true },
      { text: "transport of phospholipids from tissues to the liver", correct: false },
      { text: "antiatherogenic fraction of lipoproteins", correct: false },
      { text: "transport of cholesterol into tissues  ", correct: false },
      { text: "transport of cholesterol into tissues  ", correct: false },
    ],
  },
  {
    question: "The bulk of cholesterol is transported as part of which lipoprotein fractions?  ",
    answers: [
      { text: "LDL", correct: true },
      { text: " VLDL", correct: false },
      { text: "chylomicrons", correct: false },
      { text: "HDL", correct: false },
      { text: "HDL", correct: false },
    ],
  },
  {
    question: "What condition occurs when ketone bodies accumulate?",
    answers: [
      { text: "metabolic acidosis", correct: true },
      { text: "gas acidosis", correct: false },
      { text: "gas alkalosis", correct: false },
      { text: "metabolic alkalosis", correct: false },
      { text: "metabolic alkalosis", correct: false },
    ],
  },
  {
    question: "In what cases does hypercholesterolemia develop? ",
    answers: [
      { text: "absence of receptors for LDL", correct: true },
      { text: "hyperthyroidism", correct: false },
      { text: "hypoglycemia", correct: false },
      { text: "ascorbic acid vitamin deficiency", correct: false },
      { text: "ascorbic acid vitamin deficiency", correct: false },
    ],
  },
  {
    question: "What are the following consequences that can occur when fat absorption is impaired:       ",
    answers: [
      { text: "steatorrhea", correct: true },
      { text: "hypovitaminosis PP", correct: false },
      { text: "hypovitaminosis C", correct: false },
      { text: "xerophthalmia", correct: false },
      { text: "xerophthalmia", correct: false },
    ],
  },
  {
    question: "Which lipoproteins are elevated in the blood of patients with familial hypercholesterolemia?        ",
    answers: [
      { text: "LDL", correct: true },
      { text: "VLDL", correct: false },
      { text: "chylomicrons", correct: false },
      { text: " HDL", correct: false },
      { text: " HDL", correct: false },
    ],
  },
  {
    question: "A 5-year-old boy has short stature, coarse facial features, stiff joints, and intellectual disability. His siblings and parents are unaffected. His mother has a family history of a similar disease in her brother and nephew. If the mother is currently pregnant, what is the risk that the fetus will have the same disease?",
    answers: [
      { text: "0.25", correct: true },
      { text: "0", correct: false },
      { text: "0.5", correct: false },
      { text: "1", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Which of the following is a useful marker for lipid peroxidation in cells?",
    answers: [
      { text: "Malondialdehyde", correct: true },
      { text: "Catalase", correct: false },
      { text: "Glutathione reductase", correct: false },
      { text: "Maltase", correct: false },
      { text: "Maltase", correct: false },
    ],
  },
  {
    question: "An infant who appeared normal at birth began to develop lethargy, hypothermia, and apnea within 24 hours. Blood analysis indicated high levels of ammonia and citrulline, and low levels of urea. Which enzyme is most likely defective in this child?",
    answers: [
      { text: "Ornithine transcarbamoylase", correct: true },
      { text: "Carbamoyl phosphate synthetase I", correct: false },
      { text: "Argininosuccinate synthetase", correct: false },
      { text: "Argininosuccinate lyase", correct: false },
      { text: "Argininosuccinate lyase", correct: false },
    ],
  },
  {
    question: "Nucleosomes are the fundamental unit of DNA organization. It consists of histones bound to DNA. Which of the following amino acids are rich in histone proteins in nucleosomes?",
    answers: [
      { text: "Lysine and Arginine", correct: true },
      { text: "Arginine and Histidine", correct: false },
      { text: "Histidine and Valine", correct: false },
      { text: "Histidine and lysine", correct: false },
      { text: "Histidine and lysine", correct: false },
    ],
  },
  {
    question: "Restriction endonuclease, also known as molecular scissors, are enzymes widely used in molecular biology techniques such as gene cloning, recombinant DNA technology, RFLP, etc. What do these enzymes break down?",
    answers: [
      { text: "Double stranded DNA", correct: true },
      { text: "Single stranded DNA", correct: false },
      { text: "Single stranded RNA", correct: false },
      { text: "Polypeptide", correct: false },
      { text: "Polypeptide", correct: false },
    ],
  },
  {
    question: "Which of the following statements about eukaryotic DNA ligase is NOT true?",
    answers: [
      { text: "NAD+ is the energy source.", correct: true },
      { text: "It catalyzes the formation of phosphodiester bonds.", correct: false },
      { text: "ATP is the energy source.", correct: false },
      { text: "It can act only on double-stranded DNA.", correct: false },
      { text: "It can act only on double-stranded DNA.", correct: false },
    ],
  },
  {
    question: "Mitochondrial codons are an exception for the property of 'universality' of codons. For eg: Initiation codon in mammals is AUG, which codes for methionine. But in mitochondria, methionine is coded by some other codon. Which of the following is that initiation codon?",
    answers: [
      { text: "AUA", correct: true },
      { text: "AGA", correct: false },
      { text: "AAG", correct: false },
      { text: "AUG ", correct: false },
      { text: "AUG ", correct: false },
    ],
  },
  {
    question: "Which RNA component is part of the 50S ribosomal subunit?",
    answers: [
      { text: "23S RNA", correct: true },
      { text: "5S RNA", correct: false },
      { text: "5.8S RNA", correct: false },
      { text: "18S RNA", correct: false },
      { text: "18S RNA", correct: false },
    ],
  },
  {
    question: "Which of the following statements describes the major difference between the splicing mechanisms of Group I and Group II introns?",
    answers: [
      { text: "Lariat formation", correct: true },
      { text: "Nucleophilic attack by OH group", correct: false },
      { text: "Transesterification reaction", correct: false },
      { text: "Presence of specific proteins", correct: false },
      { text: "Presence of specific proteins", correct: false },
    ],
  },
  {
    question: "The protein synthesis machinery consists of ribosomes that are either associated with the ER or freely present in the cytosol. Which of the following proteins is not synthesized by free ribosomes?",
    answers: [
      { text: "Lysosomal enzymes", correct: true },
      { text: "Proteins that remain in cytosol", correct: false },
      { text: "Mitochondrial proteins", correct: false },
      { text: "Peroxisomal enzymes", correct: false },
      { text: "Peroxisomal enzymes", correct: false },
    ],
  },
  {
    question: "What are the initiation and termination sequences of spliceosomal introns in eukaryotes?",
    answers: [
      { text: "GU, AG", correct: true },
      { text: "AG, GU", correct: false },
      { text: "GA, GU", correct: false },
      { text: "UG, AG", correct: false },
      { text: "UG, AG", correct: false },
    ],
  },
  {
    question: "A patient presented with voracious appetite, obesity, short stature. hypogonadism, and mental disability. Xeryotypic analysis showed a small deletion on the proximal long arm of chromosome 1S. The physician  suspected It to be a case of genomic imprinting. Which out of the following is a disease due to genomic imprinting?",
    answers: [
      { text: "Prader willi syndrome", correct: true },
      { text: "Marfan syndrome", correct: false },
      { text: "EDS", correct: false },
      { text: "Osteogenesis imperfecta", correct: false },
      { text: "Osteogenesis imperfecta", correct: false },
    ],
  },
  {
    question: "Free radicals are unstable and highly reactive chemical compounds that can cause cellular damage and death. Among the given options, which one is the most active free radical?",
    answers: [
      { text: "Hydroxyl radical", correct: true },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Superoxide radical", correct: false },
      { text: "Hydroperolxyl radical", correct: false },
      { text: "Hydroperolxyl radical", correct: false },
    ],
  },
  {
    question: "Which of the following is a biological marker for Down syndrome, a common chromosomal disorder characterized by trisomy of chromosome 21?",
    answers: [
      { text: "Decreased maternal serum alpha-fetoprotein", correct: true },
      { text: "Increased maternal estriol", correct: false },
      { text: "Decreased HCG", correct: false },
      { text: "Increased CA-125", correct: false },
      { text: "Increased CA-125", correct: false },
    ],
  },
  {
    question: "Which is the best description of cancer?",
    answers: [
      { text: "Cancer is a disease of abnormal cells.", correct: true },
      { text: "Cancer is a genomic disease.", correct: false },
      { text: "Cancer is a single disease that is always fatal.", correct: false },
      { text: "Cancer is a set of diseases characterized by deregulated cell growth and survival.", correct: false },
      { text: "Cancer is a set of diseases characterized by deregulated cell growth and survival.", correct: false },
    ],
  },
  {
    question: "We often use sequence alignment for the analysis of sequence data (DNA, RNA, protein). An alignment is an optimal comparison of sequences showing regions where the sequences are similar to each other. Often we distinguish between pair-wise and multiple sequence alignment. What do we mean by multiple sequence alignment?",
    answers: [
      { text: "Sequence alignment with several equivalent solutions", correct: true },
      { text: "Iterative sequence alignment with several iterations.  ", correct: false },
      { text: "Simultaneous sequence alignment of more than two sequences. ", correct: false },
      { text: "Simultaneous sequence alignment of all DNA reading frames for a protein. ", correct: false },
      { text: "Simultaneous sequence alignment of all DNA reading frames for a protein. ", correct: false },
    ],
  },
  {
    question: " Which of the following could be coded by a tumor-supressor gene? ",
    answers: [
      { text: "A protein that helps prevent progression through cell cycle", correct: true },
      { text: "A protein that helps prevent apoptosis", correct: false },
      { text: "A protein that codes for a DNA repair enzyme", correct: false },
      { text: " A protein that forms part of a growth factor signaling pathway", correct: false },
      { text: " A protein that forms part of a growth factor signaling pathway", correct: false },
    ],
  },
  {
    question: "Which of the following viruses are implicated in causing cancer?",
    answers: [
      { text: "Oncolytic virus (ONYX-015)", correct: true },
      { text: "Human papilloma virus (HPV)", correct: false },
      { text: "Hepatitis B virus (HBV)", correct: false },
      { text: "Epstein-Barr virus (EBV)", correct: false },
      { text: "Epstein-Barr virus (EBV)", correct: false },
    ],
  },
  {
    question: "What is the end product of bilirubin conversion in the liver?         ",
    answers: [
      { text: "bilirubin monoglucuronides", correct: true },
      { text: "urobilinogen", correct: false },
      { text: "di- and tripyrroles", correct: false },
      { text: "stercobilinogen", correct: false },
      { text: "stercobilinogen", correct: false },
    ],
  },
  {
    question: "When the liver is completely removed, the concentration of which of the following substances in the blood decreases?         ",
    answers: [
      { text: "VLDL; albumin", correct: true },
      { text: "ammonia; glucose", correct: false },
      { text: "indican; glycogen, ", correct: false },
      { text: "chylomicrons, fatty acids", correct: false },
      { text: "chylomicrons, fatty acids", correct: false },
    ],
  },
  {
    question: "What is observed when glucuronyltransferase is activated in hepatocytes?       ",
    answers: [
      { text: "there is an increase in the amount of direct bilirubin in the blood;", correct: true },
      { text: "there is a decrease in the amount of direct bilirubin in the blood;", correct: false },
      { text: "there is an increase in the amount of indirect bilirubin in the blood;", correct: false },
      { text: " the ratio of direct and indirect bilirubin in the blood does not change.", correct: false },
      { text: " the ratio of direct and indirect bilirubin in the blood does not change.", correct: false },
    ],
  },
  {
    question: "What are the consequences of hemolytic jaundice?",
    answers: [
      { text: "increased breakdown of hemoglobin occurs;", correct: true },
      { text: "stool is discolored.", correct: false },
      { text: "there is no bilirubin in the urine;", correct: false },
      { text: "nothing changed", correct: false },
      { text: "nothing changed", correct: false },
    ],
  },
  {
    question: "What are the following signs characteristic of direct bilirubin?  ",
    answers: [
      { text: "low toxicity", correct: true },
      { text: " high toxicity ", correct: false },
      { text: "poor solubility in water", correct: false },
      { text: "present in blood serum in albumin-bound form", correct: false },
      { text: "present in blood serum in albumin-bound form", correct: false },
    ],
  },
  {
    question: "What are the causes of hypoalbuminemia?   ",
    answers: [
      { text: " liver damage", correct: true },
      { text: "hungry", correct: false },
      { text: "brain damage", correct: false },
      { text: " muscle damage", correct: false },
      { text: " muscle damage", correct: false },
    ],
  },
  {
    question: "What is most characteristic of mechanical (obstructive) jaundice?  ",
    answers: [
      { text: "low activity of alkaline phosphatase in blood serum", correct: true },
      { text: "no changes in the content of stercobilin in feces", correct: false },
      { text: "an increase in the concentration of total bilirubin, both due to indirect bilirubin and direct bilirubin", correct: false },
      { text: " the appearance of urobilinogen in the urine", correct: false },
      { text: " the appearance of urobilinogen in the urine", correct: false },
    ],
  },
  {
    question: "What conditions determine parenchymal jaundice?        ",
    answers: [
      { text: "the excretion of direct bilirubin into the bile capillaries is impaired; ", correct: true },
      { text: "increased hemolysis of red blood cells;", correct: false },
      { text: "the amount of stercobilinogen in the feces increases;", correct: false },
      { text: "urobilinogen appears in the blood and urine", correct: false },
      { text: "urobilinogen appears in the blood and urine", correct: false },
    ],
  },
  {
    question: "Which enzymes are most active in the liver?          ",
    answers: [
      { text: "alanine aminotransferase;", correct: true },
      { text: "LDH-1 and LDH-2;", correct: false },
      { text: "aspartate aminotransferase;", correct: false },
      { text: "creatine phosphokinase MM and MB;", correct: false },
      { text: "creatine phosphokinase MM and MB;", correct: false },
    ],
  },
  {
    question: "You have the results of biochemical tests in your hands. Determine normal indicators of pigment metabolism?        ",
    answers: [
      { text: "the blood contains 75% indirect and 25% direct bilirubin;", correct: true },
      { text: "urine contains bilirubin;", correct: false },
      { text: "urine contains stercobilinogen;", correct: false },
      { text: "There are no bile pigments in the stool.", correct: false },
      { text: "There are no bile pigments in the stool.", correct: false },
    ],
  },
  {
    question: "Which of the following is a purely glucogenic amino acid?",
    answers: [
      { text: "Alanine", correct: true },
      { text: "Leucine", correct: false },
      { text: "Tyrosine", correct: false },
      { text: "Tryptophan", correct: false },
      { text: "Tryptophan", correct: false },
    ],
  },
  {
    question: "The buffering capacity of proteins is attributed to which property?",
    answers: [
      { text: "Amphipathic nature", correct: true },
      { text: "Colloid", correct: false },
      { text: "Basic nature", correct: false },
      { text: "Acidic nature", correct: false },
      { text: "Acidic nature", correct: false },
    ],
  },
  {
    question: "What wavelength corresponds to the maximum absorption of ultraviolet light in nucleic acids?",
    answers: [
      { text: "260 nm", correct: true },
      { text: "280 nm", correct: false },
      { text: "410 nm", correct: false },
      { text: "320 nm", correct: false },
      { text: "320 nm", correct: false },
    ],
  },
  {
    question: "Which of the following cellular structures is NOT found in the nucleus?",
    answers: [
      { text: "P-bodies", correct: true },
      { text: "Nucleolus", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Interchromatin granule cluster", correct: false },
      { text: "Interchromatin granule cluster", correct: false },
    ],
  },
  {
    question: "Some methods, such as PCR, in situ hybridization, and RFLP, require the separation of DNA strands for analysis. Heating is a common method to denature double-stranded DNA (dsDNA) into single-stranded form. At the melting temperature (Tm), what percentage of dsDNA is denatured? ",
    answers: [
      { text: "0.5", correct: true },
      { text: "0.25", correct: false },
      { text: "0.75", correct: false },
      { text: "1", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "The patient, who had accidentally swallowed antifreeze, was brought to the emergency room. Among the listed components, which one is the main acid buffer that helps maintain blood pH levels within the normal range, apart from bicarbonate?",
    answers: [
      { text: "Hemoglobin", correct: true },
      { text: "Acetoacetate", correct: false },
      { text: "Hydroxybutyrate", correct: false },
      { text: "Acetate", correct: false },
      { text: "Acetate", correct: false },
    ],
  },
  {
    question: "What type of mutation is responsible for sickle cell anemia?",
    answers: [
      { text: "Point mutation", correct: true },
      { text: "Insertion mutation", correct: false },
      { text: "Deletion mutation", correct: false },
      { text: "Frameshift mutation", correct: false },
      { text: "Frameshift mutation", correct: false },
    ],
  },
  {
    question: "Aldehyde dehydrogenase an enzyme involved in the metabolism of alcohol requires NAD+ for its proper function. What NAD+ can be most appropriately termed as?",
    answers: [
      { text: "Coenzyme", correct: true },
      { text: "Cofactor", correct: false },
      { text: "Apoenzyme", correct: false },
      { text: "     Abenzyme", correct: false },
      { text: "     Abenzyme", correct: false },
    ],
  },
  {
    question: "Which of the following coenzymes is primarily required for anabolic reactions?",
    answers: [
      { text: "NADP", correct: true },
      { text: "NAD", correct: false },
      { text: "FAD", correct: false },
      { text: "FADP", correct: false },
      { text: "FADP", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes catalyses the most irreversible step in electron transport chain?",
    answers: [
      { text: "Cytochrome C oxidase", correct: true },
      { text: "Succinate dehydrogenase", correct: false },
      { text: "NADH dehydrogenase", correct: false },
      { text: "Ubiquinone cytochrome c oxidoreductase", correct: false },
      { text: "Ubiquinone cytochrome c oxidoreductase", correct: false },
    ],
  },
  {
    question: "A scientist has inserted a particular gene in mouse model and thereafter analyzed the tissue expression of that gene by Northern blot analysis. She observed three positive bands in lung sample but only one band in all other tissues examined. Which one of the following is a possible explanation for this finding?",
    answers: [
      { text: "Alternative splicing", correct: true },
      { text: "RNA editing", correct: false },
      { text: "Lungs contains three genes for this particular protein", correct: false },
      { text: "Posttranslational modifications", correct: false },
      { text: "Posttranslational modifications", correct: false },
    ],
  },
  {
    question: "A 10 year old boy presented with abdominal pain, muscle weakness and fatigue. On investigations , serum lead levels were found increased in blood . Activity of which of the following enzyme in the liver is increased :",
    answers: [
      { text: "ALA synthase", correct: true },
      { text: "Ferrochelatase", correct: false },
      { text: "PGB deaminase", correct: false },
      { text: "Heme oxygenase", correct: false },
      { text: "Heme oxygenase", correct: false },
    ],
  },
  {
    question: "A 4 year old baby boy landed in emergency with rapid breathing. He was cold & clammy, confused, lethargic. His mother gave a history of accidental ingestion of automobile antifreeze. What is the reason of using ethanol as treatment in this poisoning?",
    answers: [
      { text: "Inhibit binding of ethylene glycol to alcohol dehydrogenase", correct: true },
      { text: "It conjugate with ethylene glycol", correct: false },
      { text: "Inhibit enzyme alcohol dehydrogenase", correct: false },
      { text: "Stimulate the absorption of ethylene glycol", correct: false },
      { text: "Stimulate the absorption of ethylene glycol", correct: false },
    ],
  },
  {
    question: "A young boy has been eating five to six raw eggs a day in an attempt to gain muscle mass. However, he becomes tired between meals, and during one of these lethargic periods, he is taken to the emergency department. His blood glucose level was found to be 50 mg/dL. Which one of the following substances would be expected to be elevated in this boy’s blood?",
    answers: [
      { text: "Propionic acid", correct: true },
      { text: "Methylmalonic acid", correct: false },
      { text: "Malonic acid", correct: false },
      { text: "Succinate", correct: false },
      { text: "Succinate", correct: false },
    ],
  },
  {
    question: "Which of the following statements about Acetyl-CoA is NOT true?",
    answers: [
      { text: "It cannot be converted to glucose.", correct: true },
      { text: "It is a precursor for the synthesis of cholesterol and other steroids.", correct: false },
      { text: "It forms ketone bodies.", correct: false },
      { text: "It is the starting material for the synthesis of fatty acids.", correct: false },
      { text: "It is the starting material for the synthesis of fatty acids.", correct: false },
    ],
  },
  {
    question: "In the Krebs cycle, which of the following catalyses the step in which the first C02 is released?",
    answers: [
      { text: "Isocitrate dehydrogenase", correct: true },
      { text: "Aconitase", correct: false },
      { text: "Succinate Thiokinase", correct: false },
      { text: "Succinate dehydrogenase", correct: false },
      { text: "Succinate dehydrogenase", correct: false },
    ],
  },
  {
    question: "Where is NADPH used?",
    answers: [
      { text: "Fatty acid synthesis", correct: true },
      { text: "Ketone synthesis", correct: false },
      { text: "Gluconeogenesis", correct: false },
      { text: "Glycolysis", correct: false },
      { text: "Glycolysis", correct: false },
    ],
  },
  {
    question: "NADPH plays a critical role in protecting cells from oxidative damage. Which enzyme requires NADPH to convert harmful reactive oxygen species into water?",
    answers: [
      { text: "Glutathione reductase", correct: true },
      { text: "Glutathione peroxidase", correct: false },
      { text: "Superoxide dismutase", correct: false },
      { text: "Catalase", correct: false },
      { text: "Catalase", correct: false },
    ],
  },
  {
    question: "Which type of RNA contains abnormal purine and pyrimidine bases?",
    answers: [
      { text: "tRNA", correct: true },
      { text: "23S rRNA", correct: false },
      { text: "16S rRNA", correct: false },
      { text: "5S rRNA", correct: false },
      { text: "5S rRNA", correct: false },
    ],
  },
  {
    question: "Allopurinol is commonly used to treat gout. What is the mechanism by which allopurinol helps reduce uric acid levels in patients with gout?",
    answers: [
      { text: "Prevents the formation of uric acid", correct: true },
      { text: "Reduces purine synthesis.", correct: false },
      { text: "Excretion of uric acid by the kidneys", correct: false },
      { text: "Promotes purine salvage.", correct: false },
      { text: "Promotes purine salvage.", correct: false },
    ],
  },
  {
    question: "A full-term infant, born at home and initially thriving with breastfeeding, begins to bleed from the umbilical cord and nostrils within the next two days. What is the most likely cause of this condition?",
    answers: [
      { text: "Deficiency of vitamin K", correct: true },
      { text: "Deficiency of vitamin C", correct: false },
      { text: "Deficiency of vitamin E", correct: false },
      { text: "Hypervitaminosis A", correct: false },
      { text: "Hypervitaminosis A", correct: false },
    ],
  },
  {
    question: "I-cell disease is most closely associated with which cellular structure?",
    answers: [
      { text: "Lysosomes", correct: true },
      { text: "Golgi apparatus", correct: false },
      { text: "Peroxisomes", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Mitochondria", correct: false },
    ],
  },
  {
    question: "Erythrocyte glutathione reductase deficiency is associated with a deficiency of which vitamin?",
    answers: [
      { text: "Riboflavin", correct: true },
      { text: "Folic acid", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin E", correct: false },
      { text: "Vitamin E", correct: false },
    ],
  },
  {
    question: "A 30-year-old man consulted a dentist about loose teeth. Closer examination reveals that his gums are swollen, purple and spongy. Physical examination revealed multiple splinter hemorrhages near the distal ends of the patient's fingernails, and this patient's wound healing was impaired. What vitamin deficiency is observed in the patient?",
    answers: [
      { text: "Vitamin C", correct: true },
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B1", correct: false },
      { text: "Folic Acid", correct: false },
      { text: "Folic Acid", correct: false },
    ],
  },
  {
    question: "A 60-year-old man, presents with tingling in his hands and feet and increased forgetfulness. A CBC indicates mild anemia. Given his increased intake of red meat, which treatment would be most appropriate for him?",
    answers: [
      { text: "Oral administration of vitamin B12", correct: true },
      { text: "Oral administration of folic acid", correct: false },
      { text: "Oral administration of methionine", correct: false },
      { text: "Injections of vitamin B12", correct: false },
      { text: "Injections of vitamin B12", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes is directly inhibited by the mushroom poison?",
    answers: [
      { text: "Peptidyl transferase", correct: true },
      { text: "DNA polymerase", correct: false },
      { text: "RNA polymerase", correct: false },
      { text: "DNA lygase", correct: false },
      { text: "DNA lygase", correct: false },
    ],
  },
  {
    question: "Which of the following processes involves cyclic GMP-mediated action?",
    answers: [
      { text: "Photochemical reactions of the visual cycle", correct: true },
      { text: "Steroidogenesis", correct: false },
      { text: "Thyroid hormone action", correct: false },
      { text: "Recruitment of glucose transporters to the cell membrane", correct: false },
      { text: "Recruitment of glucose transporters to the cell membrane", correct: false },
    ],
  },
  {
    question: "Which of the following is a glucose transporter in myocytes under the action of insulin?",
    answers: [
      { text: "GLUT4", correct: true },
      { text: "GLUT 1", correct: false },
      { text: "GLUT3", correct: false },
      { text: "GLUT2", correct: false },
      { text: "GLUT2", correct: false },
    ],
  },
  {
    question: "In a patient with CSF analysis showing a glucose level of 30 and a CSF/Plasma glucose ratio of 0.4, which GLUT transporter is responsible for glucose transport in the brain?",
    answers: [
      { text: "GLUT 1 and 3", correct: true },
      { text: "GLUT 1 and 2", correct: false },
      { text: "GLUT 3 and 4", correct: false },
      { text: "GLUT 2 and 3", correct: false },
      { text: "GLUT 2 and 3", correct: false },
    ],
  },
  {
    question: "Which of the following ETC complexes does not pump hydrogen ions?",
    answers: [
      { text: "Complex II", correct: true },
      { text: "Complex I", correct: false },
      { text: "Complex III", correct: false },
      { text: "Complex IV", correct: false },
      { text: "Complex IV", correct: false },
    ],
  },
  {
    question: "The primary factor that determines whether glucose is oxidized through aerobic or anaerobic glycolysis is which of the following?",
    answers: [
      { text: "Presence of mitochondria", correct: true },
      { text: "NADH", correct: false },
      { text: "FADH2", correct: false },
      { text: "Presence of low glucose", correct: false },
      { text: "Presence of low glucose", correct: false },
    ],
  },
  {
    question: "A girl who suffered from anemia and jaundice has high levels of the following substances in her erythrocytes: glucose-6-phosphate, 1,3-bisphosphoglycerate, 3-phosphoglycerate, and others. Low levels of ATP, pyruvate, and lactate were also observed. Which of the following glycolytic enzymes is most likely defective?",
    answers: [
      { text: "Pyruvate kinase", correct: true },
      { text: "Glyceraldehyde-3-phosphate dehydrogenase", correct: false },
      { text: "Phosphoglycerate kinase", correct: false },
      { text: "Hexokinase", correct: false },
      { text: "Hexokinase", correct: false },
    ],
  },
  {
    question: "Muscles utilize a variety of substrates such as glycogen, fatty acids, and amino acids under various conditions to meet their energy demands for muscle contraction. Which of the following pathway is the major energy-providing pathway for fast-twitch muscle?",
    answers: [
      { text: "Glycolysis", correct: true },
      { text: "β-oxidation of fatty acids", correct: false },
      { text: "Utilisation of ketone bodies", correct: false },
      { text: "Amino acid breakdown", correct: false },
      { text: "Amino acid breakdown", correct: false },
    ],
  },
  {
    question: "In which of the following organs does HMP shunt not occur?",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Adrenal cortex", correct: false },
      { text: "Adipose tissue", correct: false },
      { text: "Liver", correct: false },
      { text: "Liver", correct: false },
    ],
  },
  {
    question: "Which of the following substances inhibits Aconitase enzyme?",
    answers: [
      { text: "Fluoroacetate", correct: true },
      { text: "Arsenite", correct: false },
      { text: "Malonate", correct: false },
      { text: "Iodoacetate", correct: false },
      { text: "Iodoacetate", correct: false },
    ],
  },
  {
    question: "Glycogen stores in the liver and muscles are used to maintain blood glucose levels and muscle contraction, respectively, after 2 hours of eating. How many hours can glycogen remain in the body?",
    answers: [
      { text: "12-18 hours", correct: true },
      { text: "6-8 hours", correct: false },
      { text: "2-96 hours", correct: false },
      { text: "7 days", correct: false },
      { text: "7 days", correct: false },
    ],
  },
  {
    question: "Which of the following reactions requires UDP-glucose?",
    answers: [
      { text: "Glycogen synthesis", correct: true },
      { text: "Galactose metabolism", correct: false },
      { text: "Heparin synthesis", correct: false },
      { text: "Bilirubin metabolism", correct: false },
      { text: "Bilirubin metabolism", correct: false },
    ],
  },
  {
    question: "Where are the components of the electron transport chain (ETC) located?",
    answers: [
      { text: "Inner mitochondrial membrane", correct: true },
      { text: "Outer mitochondrial membrane", correct: false },
      { text: "Mitochondrial matrix", correct: false },
      { text: "lntermembranous space", correct: false },
      { text: "lntermembranous space", correct: false },
    ],
  },
  {
    question: "Which of the following forms complex I of the electron transport chain?",
    answers: [
      { text: "NADH-Q oxidoreductase", correct: true },
      { text: "a-cytochrome c oxidoreductase", correct: false },
      { text: "Succinate-a reductase", correct: false },
      { text: "Cytochrome c oxidase", correct: false },
      { text: "Cytochrome c oxidase", correct: false },
    ],
  },
  {
    question: "In which of the following cellular organelles does the TCA cycle occur?",
    answers: [
      { text: "Mitochondria", correct: true },
      { text: "Endoplasmic reticulum", correct: false },
      { text: "Cytosol", correct: false },
      { text: "Nucleus", correct: false },
      { text: "Nucleus", correct: false },
    ],
  },
  {
    question: "Which of the following statements about insulin is true?",
    answers: [
      { text: "Acts on intrinsic tyrosine kinase receptors", correct: true },
      { text: "Acts on G-protein coupled receptors coupled to serine threonine kinases", correct: false },
      { text: "It acts on steroid receptor", correct: false },
      { text: "It acts on nuclear membrane receptor", correct: false },
      { text: "It acts on nuclear membrane receptor", correct: false },
    ],
  },
  {
    question: "Which of the following is true about Kreb’s cycle?",
    answers: [
      { text: "Kreb's cycle is the final common pathway for the oxidation of carbohydrate, lipid and protein", correct: true },
      { text: "Pyruvate condenses with oxaloacetate to form citrate", correct: false },
      { text: "Oxidative phosphorylation occurs in the cytoplasm", correct: false },
      { text: "Alpha keto glutarate is a 4 carbon compound", correct: false },
      { text: "Alpha keto glutarate is a 4 carbon compound", correct: false },
    ],
  },
  {
    question: "Which of the following is not an intermediate of the TCA?",
    answers: [
      { text: "Acetyl CoA", correct: true },
      { text: "Citrate", correct: false },
      { text: "Succinyl CoA", correct: false },
      { text: "Fumarate", correct: false },
      { text: "Fumarate", correct: false },
    ],
  },
  {
    question: "The respiratory quotient coefficient (RQ) is an important indicator that helps measure the energy expenditure of the body and determine various metabolic characteristics. How does RQ change in diabetes mellitus? ",
    answers: [
      { text: "RQ initially decreases, and then increases again after insulin administration", correct: true },
      { text: "RQ always increases in diabetes mellitus", correct: false },
      { text: "RQ initially increases and then decreases after insulin administration", correct: false },
      { text: "RQ remains unchanged in diabetes mellitus", correct: false },
      { text: "RQ remains unchanged in diabetes mellitus", correct: false },
    ],
  },
  {
    question: "The level of which of the following substances is reduced when the Krebs cycle is inhibited by hyperammonemia?",
    answers: [
      { text: "Alpha Keto glutarate", correct: true },
      { text: "Oxaloacetate", correct: false },
      { text: "Fumarate", correct: false },
      { text: "Oxaloacetate", correct: false },
      { text: "Oxaloacetate", correct: false },
    ],
  },
  {
    question: " Which of the following enzyme deficiency can cause congenital lactic acidosis?",
    answers: [
      { text: "Pyruvate dehydrogenase enzyme complex", correct: true },
      { text: "Pyruvate Kinase", correct: false },
      { text: "Pyruvate Decarboxylase", correct: false },
      { text: "Transketolase", correct: false },
      { text: "Transketolase", correct: false },
    ],
  },
  {
    question: "Which inhibitor affects the Fo-F1 complex, also known as ATP synthase?",
    answers: [
      { text: "Oligomycin", correct: true },
      { text: "Atractyloside", correct: false },
      { text: "Rotenone", correct: false },
      { text: "Cyanide", correct: false },
      { text: "Cyanide", correct: false },
    ],
  },
  {
    question: "Which of the following substances is an inhibitor of the electron transport chain (ETC) complex I?",
    answers: [
      { text: "Amobarbital", correct: true },
      { text: "Carboxin", correct: false },
      { text: "Hydrogen sulfide", correct: false },
      { text: "Malonate", correct: false },
      { text: "Malonate", correct: false },
    ],
  },
  {
    question: "Cytochrome P450 is primarily involved in which of the following processes?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Hydroxylation", correct: false },
      { text: "Methylation of xenobiotics", correct: false },
      { text: "Deamination reactions", correct: false },
      { text: "Deamination reactions", correct: false },
    ],
  },
  {
    question: "Where does beta-alanine, a naturally occurring beta amino acid, originate in humans?",
    answers: [
      { text: "Adenosine", correct: true },
      { text: "Adenine", correct: false },
      { text: "Guanine", correct: false },
      { text: "Uracil", correct: false },
      { text: "Uracil", correct: false },
    ],
  },
  {
    question: "The five-day-old child initially began to eat poorly, became irritable, and then very lethargic. When the diaper was changed it had a musky sweet smell. In the emergency room of a local hospital, the child was suspected of having an inborn error of metabolism and a blood test was ordered. Which of the following indicators will increase?",
    answers: [
      { text: "Isoleucine", correct: true },
      { text: "Phenylalanine", correct: false },
      { text: "Phenylketones", correct: false },
      { text: "Acetone", correct: false },
      { text: "Acetone", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids has an amino ring?",
    answers: [
      { text: "Proline", correct: true },
      { text: "Tyrosine", correct: false },
      { text: "Tryptophan", correct: false },
      { text: "Histidine", correct: false },
      { text: "Histidine", correct: false },
    ],
  },
  {
    question: "What does Tryptophan contain?",
    answers: [
      { text: "lndole group", correct: true },
      { text: "lmidazole group", correct: false },
      { text: "Thioalcohol", correct: false },
      { text: "Thioester linkage", correct: false },
      { text: "Thioester linkage", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids contains a hydroxyl group?",
    answers: [
      { text: "Threonine", correct: true },
      { text: "Tyrosine", correct: false },
      { text: "Serine", correct: false },
      { text: "Tryptophan", correct: false },
      { text: "Tryptophan", correct: false },
    ],
  },
  {
    question: "The histidine load test is used to identify deficiency in which of the following?",
    answers: [
      { text: "Pyridoxine", correct: true },
      { text: "Iron", correct: false },
      { text: "Folic acid", correct: false },
      { text: "Vitamin B12", correct: false },
      { text: "Vitamin B12", correct: false },
    ],
  },
  {
    question: "In a population exhibiting a genetic polymorphism affecting N5,N10-methylene-FH4 reductase activity at elevated temperatures, which metabolic product would this variant struggle to produce?",
    answers: [
      { text: "The thymine nucleotide required for DNA synthesis", correct: true },
      { text: "Creatine phosphate from creatine", correct: false },
      { text: "Pyrimidines required for RNA synthesis", correct: false },
      { text: "All deoxyribonucleotides", correct: false },
      { text: "All deoxyribonucleotides", correct: false },
    ],
  },
  {
    question: "Which of the following is WRONG regarding acute gouty arthritis?",
    answers: [
      { text: "Allopurinol is effective to treat the acute attack", correct: true },
      { text: "MSU crystals are needle shaped and negatively birefringent", correct: false },
      { text: "Serum uric acid levels can be normal or low at the time of an acute attack", correct: false },
      { text: "Tophi are made up of monosodium urate crystals (MSU)", correct: false },
      { text: "Tophi are made up of monosodium urate crystals (MSU)", correct: false },
    ],
  },
  {
    question: "Heritable changes in gene expression not caused by alterations in DNA sequence is called as epigenetics. Which of the following test is not used in epigenetic analysis?",
    answers: [
      { text: "HPLC", correct: true },
      { text: "Chip on chip", correct: false },
      { text: "Bi-sulfate sequencing", correct: false },
      { text: "Methylation sensitive Restriction ", correct: false },
      { text: "Methylation sensitive Restriction ", correct: false },
    ],
  },
  {
    question: "The choice of metabolic fuel to meet body energy demand varies depending on availability. Which of the following is the preferred fuel for body in fasting state?",
    answers: [
      { text: "Fats", correct: true },
      { text: "Carbohydrates", correct: false },
      { text: "Proteins", correct: false },
      { text: "Amino acids", correct: false },
      { text: "Amino acids", correct: false },
    ],
  },
  {
    question: "A teenager has been diagnosed with severe cystic acne. The patient is prescribed isotretinoin. What is isotretinoin chemically?",
    answers: [
      { text: "13 cis retinoic acid", correct: true },
      { text: "13 trans retinoic acid", correct: false },
      { text: "All cis retinoic acid", correct: false },
      { text: "All trans retinoic acid", correct: false },
      { text: "All trans retinoic acid", correct: false },
    ],
  },
  {
    question: "The genetic testing confirms a diagnosis of von Gierke disease, a glycogen storage disorder. This condition is due to a deficiency in which enzyme?",
    answers: [
      { text: "Glucose-6-phosphatase", correct: true },
      { text: "Glucokinase", correct: false },
      { text: "Maltase ", correct: false },
      { text: "Alpha amylase", correct: false },
      { text: "Alpha amylase", correct: false },
    ],
  },
  {
    question: "A patient with metabolic syndrome is advised to avoid foods with a high glycemic index (GI) to help control blood sugar levels. Which characteristic best describes high-GI foods?",
    answers: [
      { text: "Cause a rapid increase in blood glucose levels", correct: true },
      { text: "Contain more fiber than low-GI foods", correct: false },
      { text: " High in protein and fat", correct: false },
      { text: " Lead to a slow l rise in blood glucose", correct: false },
      { text: " Lead to a slow l rise in blood glucose", correct: false },
    ],
  },
  {
    question: "A 55-year-old man presents with fatigue, weight loss, and frequent urination. Lab results reveal elevated blood glucose levels and an A1C of 9.1%. Which carbohydrate metabolism disorder is the most likely diagnosis?",
    answers: [
      { text: "Diabetes mellitus", correct: true },
      { text: "Glycogen storage disease", correct: false },
      { text: "Galactosemia", correct: false },
      { text: "Lactose intolerance", correct: false },
      { text: "Lactose intolerance", correct: false },
    ],
  },
  {
    question: "A student reports episodes of abdominal pain, bloating, and diarrhea after consuming dairy products. A lactose tolerance test confirms lactose intolerance. Which enzyme deficiency is responsible for this condition?",
    answers: [
      { text: "Lactase", correct: true },
      { text: " Sucrase", correct: false },
      { text: "Maltase", correct: false },
      { text: "Amylase", correct: false },
      { text: "Amylase", correct: false },
    ],
  },
  {
    question: "Ketone bodies are formed and utilized by various organs (brain, heart, etc) as the major sources of energy during fasting/starvation. Which of the following  is a result of increased formation of ketone bodies during fasting?",
    answers: [
      { text: "Increased levels of free fatty acids in blood", correct: true },
      { text: "Decreased level of circulating glucagon", correct: false },
      { text: "Decreased formation of Acetyl CoA in the liver", correct: false },
      { text: "Inhibition of b-oxidation of fatty acids in liver", correct: false },
      { text: "Inhibition of b-oxidation of fatty acids in liver", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is most commonly associated with elevated LDL cholesterol levels?",
    answers: [
      { text: "Coronary artery disease", correct: true },
      { text: "Osteoporosis", correct: false },
      { text: "Anemia", correct: false },
      { text: "Pancreatitis", correct: false },
      { text: "Pancreatitis", correct: false },
    ],
  },
  {
    question: "In a patient with elevated serum LDL levels but normal LDL receptor numbers, what is the most probable cause?",
    answers: [
      { text: "APOB-100 mutation", correct: true },
      { text: "Phosphorylation of LDL receptors", correct: false },
      { text: "Lipoprotein lipase deficiency", correct: false },
      { text: "Cholesterol Acyl-CoA transferase deficiency", correct: false },
      { text: "Cholesterol Acyl-CoA transferase deficiency", correct: false },
    ],
  },
  {
    question: "A 55-year-old man presents with high cholesterol levels. High levels of low-density lipoprotein (LDL) cholesterol increase the risk of cardiovascular disease. Which of the following best describes the role of LDL?",
    answers: [
      { text: "Deposits cholesterol in blood vessel walls", correct: true },
      { text: " LDL removes cholesterol from artery walls", correct: false },
      { text: "LDL deposits cholesterol in the liver for energy", correct: false },
      { text: "LDL lowers blood cholesterol levels by breaking down fats", correct: false },
      { text: "LDL lowers blood cholesterol levels by breaking down fats", correct: false },
    ],
  },
  {
    question: "What role do triglycerides play in the body under normal conditions?",
    answers: [
      { text: "Primary source of energy storage", correct: true },
      { text: "Used for protein synthesis", correct: false },
      { text: "Serve as immune cells", correct: false },
      { text: "Involves in DNA synthesis", correct: false },
      { text: "Involves in DNA synthesis", correct: false },
    ],
  },
  {
    question: "Which of the following ratios primarily contributes to the development of fatty liver associated with chronic alcohol consumption?",
    answers: [
      { text: "NADH/NAD", correct: true },
      { text: "NAD/NADH", correct: false },
      { text: "NADP/NADPH", correct: false },
      { text: "NADPH/NADP", correct: false },
      { text: "NADPH/NADP", correct: false },
    ],
  },
  {
    question: "A patient with familial hypercholesterolemia, a genetic disorder, has extremely high levels of cholesterol despite a healthy lifestyle. Which of the following best explains?",
    answers: [
      { text: "Have a genetic defect that prevents proper clearance of LDL cholesterol", correct: true },
      { text: "Diet causes the liver to store excess cholesterol", correct: false },
      { text: "Production of very low levels of cholesterol.", correct: false },
      { text: "Metabolizes cholesterol more rapidly than normal.", correct: false },
      { text: "Metabolizes cholesterol more rapidly than normal.", correct: false },
    ],
  },
  {
    question: "A 45-year-old man with type 2 diabetes has low HDL levels and is at risk for cardiovascular disease. Which of the following lifestyle changes is most likely to help increase his HDL cholesterol?",
    answers: [
      { text: "Engaging in regular physical activity", correct: true },
      { text: "Reducing fiber intake", correct: false },
      { text: "Increasing his intake of simple carbohydrates", correct: false },
      { text: "Eating a diet high in trans fats", correct: false },
      { text: "Eating a diet high in trans fats", correct: false },
    ],
  },
  {
    question: "LDL cholesterol is often referred to as “bad” cholesterol because it can lead to which of the following conditions?",
    answers: [
      { text: "Plaque buildup in the arteries", correct: true },
      { text: "Increased muscle mass", correct: false },
      { text: "Lower blood pressure", correct: false },
      { text: "Decreased triglyceride levels", correct: false },
      { text: "Decreased triglyceride levels", correct: false },
    ],
  },
  {
    question: "What would be the LDL level if a person has total cholesterol = 300 mg/dL, HDL = 25 mg/dL, and triglycerides = 150 mg/dL?",
    answers: [
      { text: "245", correct: true },
      { text: "125", correct: false },
      { text: "95", correct: false },
      { text: "55", correct: false },
      { text: "55", correct: false },
    ],
  },
  {
    question: "Nucleotides such as AMP, ADP, and ATP are the sensors of energy status of the cell and their inter conversion plays an important role in the energy homeostasis of the cell. Which of the following enzyme catalyses the formation of AMP from two molecules of ADP?",
    answers: [
      { text: "Adenylate kinase", correct: true },
      { text: "Adenylyl cyclase", correct: false },
      { text: "Adenosine kinase", correct: false },
      { text: "Adenosine deaminase", correct: false },
      { text: "Adenosine deaminase", correct: false },
    ],
  },
  {
    question: "What is the total number of amino acids encoded in the human genetic code?",
    answers: [
      { text: "20", correct: true },
      { text: "25", correct: false },
      { text: "17", correct: false },
      { text: "15", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "Which of the following statements about chromatin remodeling is true?",
    answers: [
      { text: "Energy is required to displace histone octamers from DNA", correct: true },
      { text: "Histone modifications are only passive", correct: false },
      { text: "It does not involve enzymes", correct: false },
      { text: "It is not associated with any disease", correct: false },
      { text: "It is not associated with any disease", correct: false },
    ],
  },
  {
    question: "If a cell is placed in a medium containing radioactively labeled thymidine and undergoes replication three times, what percentage of the resulting cells will have both strands of DNA labeled?",
    answers: [
      { text: "0.25", correct: true },
      { text: "0.5", correct: false },
      { text: "0.75", correct: false },
      { text: "1", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "Dideoxynucleotides are used for Sanger DNA sequencing technique. Whenever this nucleotide is added in to growing DNA chain, the chain elongation stops causing termination of DNA synthesis. This form the basis of this sequencing technique. Which of the following dideoxynucleotide does not contain we can deduce based on that knowledge ?",
    answers: [
      { text: "2' & 3' OH group", correct: true },
      { text: "3' & 4' OH group", correct: false },
      { text: "4' & 5' OH group", correct: false },
      { text: "2' & 5' OH group", correct: false },
      { text: "2' & 5' OH group", correct: false },
    ],
  },
  {
    question: "Directionality is an important parameter in molecular biology processes such as replication, transcription and translation etc. Which of the following process doesn't occur in 5\" to 3’ direction?",
    answers: [
      { text: "RNA editing", correct: true },
      { text: "Transcription", correct: false },
      { text: "DNA replication", correct: false },
      { text: "DNA Repair", correct: false },
      { text: "DNA Repair", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a way to regulate gene expression in eukaryotes?",
    answers: [
      { text: "Attenuation by operon", correct: true },
      { text: "Gene amplification", correct: false },
      { text: "Gene rearrangement", correct: false },
      { text: "Regulation of mRNA stability", correct: false },
      { text: "Regulation of mRNA stability", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct sequence of the secretory or exocytotic pathway of protein sorting?",
    answers: [
      { text: "Endoplasmic Reticulum--> Golgi Apparatus-->Plasma Membrane-->Release into the external environment", correct: true },
      { text: "Golgi Apparatus -->Endoplasmic Reticulum -->Plasma Membrane -->Release into the external environment", correct: false },
      { text: "Plasma Membrane --> Endoplasmic Reticulum --> Golgi Apparatus -->Release into the external environment", correct: false },
      { text: "Plasma Membrane -->Golgi Apparatus -->Endoplasmic Reticulum -->Release into the external environment", correct: false },
      { text: "Plasma Membrane -->Golgi Apparatus -->Endoplasmic Reticulum -->Release into the external environment", correct: false },
    ],
  },
  {
    question: "What is the best method to assess protein binding regions on a DNA molecule?",
    answers: [
      { text: "DNA foot-printing", correct: true },
      { text: "RT-PCR", correct: false },
      { text: "Microarray analysis", correct: false },
      { text: "Western blotting", correct: false },
      { text: "Western blotting", correct: false },
    ],
  },
  {
    question: "In which of the inheritance, if father is affected no offspring is affected, but if mother affected, all offspring affected?",
    answers: [
      { text: "Mitochondrial", correct: true },
      { text: "X linked recessive", correct: false },
      { text: "Autosomal dominant", correct: false },
      { text: "Autosomal recessive", correct: false },
      { text: "Autosomal recessive", correct: false },
    ],
  },
  {
    question: "Which of the following is not a free radical?",
    answers: [
      { text: "Hydrogen peroxide", correct: true },
      { text: "Hydroxyl", correct: false },
      { text: "Superoxide", correct: false },
      { text: "Hydroperoxyl", correct: false },
      { text: "Hydroperoxyl", correct: false },
    ],
  },
  {
    question: "Cardiovascular disease patient is advised to increase  intake of antioxidants to reduce free radical damage. Which of the following processes that can worsen cardiovascular disease?",
    answers: [
      { text: "Oxidation of LDL cholesterol", correct: true },
      { text: "nan", correct: false },
      { text: " Lowering cholesterol", correct: false },
      { text: "Increasing the flexibility of blood vessels", correct: false },
      { text: "Increasing the flexibility of blood vessels", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a key characteristic of a cancer cell?",
    answers: [
      { text: "Contact inhibition", correct: true },
      { text: "Uncontrolled cell growth", correct: false },
      { text: "Evading apoptosis", correct: false },
      { text: "Angiogenesis", correct: false },
      { text: "Angiogenesis", correct: false },
    ],
  },
  {
    question: "A proto-oncogene becomes an oncogene through which of the following mechanisms?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Deletion of the gene", correct: false },
      { text: "Gene amplification", correct: false },
      { text: "Point mutation", correct: false },
      { text: "Point mutation", correct: false },
    ],
  },
  {
    question: "How do tumor suppressor genes typically function in normal cells?",
    answers: [
      { text: "They inhibit cell growth and division.", correct: true },
      { text: " They promote cell growth and division.", correct: false },
      { text: "They stimulate angiogenesis.", correct: false },
      { text: "They directly cause DNA mutations.", correct: false },
      { text: "They directly cause DNA mutations.", correct: false },
    ],
  },
  {
    question: "A patient presents with a mutation in the p53 gene. Which of the following outcomes is MOST likely?",
    answers: [
      { text: "Increased cell proliferation", correct: true },
      { text: "Reduced angiogenesis", correct: false },
      { text: "Increased apoptosis", correct: false },
      { text: "Normal cell cycle regulation", correct: false },
      { text: "Normal cell cycle regulation", correct: false },
    ],
  },
  {
    question: "What is the primary pigment associated with jaundice?",
    answers: [
      { text: "Bilirubin", correct: true },
      { text: "Hemoglobin", correct: false },
      { text: "Cholesterol", correct: false },
      { text: "Albumin", correct: false },
      { text: "Albumin", correct: false },
    ],
  },
  {
    question: "Which of the following liver functions primarily involves the conversion of bilirubin?",
    answers: [
      { text: " Bilirubin metabolism", correct: true },
      { text: "Glycogen storage", correct: false },
      { text: " Protein synthesis", correct: false },
      { text: "Gluconeogenesis", correct: false },
      { text: "Gluconeogenesis", correct: false },
    ],
  },
  {
    question: "What causes the yellowing of skin and eyes in jaundice?",
    answers: [
      { text: "Accumulation of bilirubin in tissues", correct: true },
      { text: "Increased levels of glucose", correct: false },
      { text: "Decreased liver function", correct: false },
      { text: "Dehydration", correct: false },
      { text: "Dehydration", correct: false },
    ],
  },
  {
    question: "What type of jaundice is typically characterized by elevated direct bilirubin levels?",
    answers: [
      { text: "Obstructive jaundice", correct: true },
      { text: "Hemolytic jaundice", correct: false },
      { text: "Hepatocellular jaundice", correct: false },
      { text: "Physiological jaundice", correct: false },
      { text: "Physiological jaundice", correct: false },
    ],
  },
  {
    question: "If a patient presents with jaundice, dark urine, and pale stools, what is the most likely cause?",
    answers: [
      { text: "Bile duct obstruction", correct: true },
      { text: "Increased hemolysis", correct: false },
      { text: "Liver cirrhosis", correct: false },
      { text: "Viral hepatitis", correct: false },
      { text: "Viral hepatitis", correct: false },
    ],
  },
  {
    question: "Which of the following enzymes is primarily found in the liver and is a sensitive indicator of hepatocellular damage? ",
    answers: [
      { text: "Alanine aminotransferase (ALT)", correct: true },
      { text: "Amylase", correct: false },
      { text: "Lipase ", correct: false },
      { text: "Creatinine kinase (CK)", correct: false },
      { text: "Creatinine kinase (CK)", correct: false },
    ],
  },
  {
    question: "Elevated levels of bilirubin in the blood primarily indicate a problem with which of the following liver functions?",
    answers: [
      { text: "Bile production and excretion", correct: true },
      { text: "Albumin synthesis", correct: false },
      { text: "Glucose metabolism", correct: false },
      { text: "Ammonia detoxification", correct: false },
      { text: "Ammonia detoxification", correct: false },
    ],
  },
  {
    question: "A patient presents with elevated alkaline phosphatase (ALP) and gamma-glutamyl transferase (GGT). What is the most likely cause?",
    answers: [
      { text: "Cholestasis", correct: true },
      { text: "Acute viral hepatitis", correct: false },
      { text: "Severe muscle damage", correct: false },
      { text: "Pancreatitis", correct: false },
      { text: "Pancreatitis", correct: false },
    ],
  },
  {
    question: "Prolonged elevation of which liver enzyme is strongly suggestive of chronic liver disease?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "ALT", correct: false },
      { text: "AST", correct: false },
      { text: "ALP", correct: false },
      { text: "ALP", correct: false },
    ],
  },
  {
    question: "A patient presents with the following liver test results: ALT slightly elevated, AST moderately elevated, ALP significantly elevated, and GGT significantly elevated. Bilirubin is also elevated. Which of the following is the MOST likely diagnosis? ",
    answers: [
      { text: "Cholestasis", correct: true },
      { text: "Acute hepatitis", correct: false },
      { text: "Alcoholic liver disease", correct: false },
      { text: "Hepatic encephalopathy", correct: false },
      { text: "Hepatic encephalopathy", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
