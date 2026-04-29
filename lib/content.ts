export const site = {
  name: "Kaique Alves",
  fullName: "Kaique dos Santos Alves",
  email: "kaiquedsalves@gmail.com",
  role: "Plant Disease Epidemiologist",
  description:
    "Plant disease epidemiologist working on disease risk, yield loss, and quantitative tools for plant health.",
  location: "Uberlandia, MG, Brazil",
  links: {
    linkedin: "https://www.linkedin.com/in/kaique-alves-ab253436/",
    github: "https://github.com/AlvesKS",
    x: "https://x.com/alvesks_",
    scholar: "https://scholar.google.com.br/citations?user=wTzslqsAAAAJ&hl=pt-BR&authuser=1"
  }
};

export const navItems = [
  { label: "Research", href: "/research" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about" }
];

export const researchThemes = [
  "Disease risk modeling",
  "Yield loss analysis",
  "Disease surveillance",
  "Quantitative phenotyping",
  "Decision support",
  "Applied epidemiology"
];

export const recentPublications = [
  {
    citation:
      "Alves KS, Barro JP, Del Ponte EM (2025) Quantifying ENSO-mediated shifts in soybean rust impact: Yield loss dynamics and management implications in Brazil.",
    venue: "Plant Pathology",
    href: "https://bsppjournals.onlinelibrary.wiley.com/doi/full/10.1111/ppa.70069"
  },
  {
    citation:
      "Alves KS, Shah DA, Dillard HR, Del Ponte EM, Pethybridge SJ (2025) Safer and Smarter: Leveraging Interpretation-Guided Modeling and Data Merging of Disease and Environmental Data for Plant Disease Risk Prediction.",
    venue: "Phytopathology",
    href: "https://doi.org/10.1094/PHYTO-01-25-0008-FI"
  },
  {
    citation:
      "Gondo IRG, da Rocha MR, Gondo CY, Alves KS, dos Anjos BB, Moraes SPCB, Camara GR, Zucoloto M, Barbosa DHSG, Alves FR, Xavier AS, Silva SA, Moraes WB (2025) Temporal dynamics of guava root-knot nematode under the effect of different management methods.",
    venue: "Crop Protection",
    href: "https://doi.org/10.1016/j.cropro.2024.107012"
  }
];

export const selectedPublications = [
  ...recentPublications,
  {
    citation:
      "Sparks AH, Ponte EMD, Alves KS, Foster ZSL, Grunwald NJ (2023) Openness and computational reproducibility in plant pathology: where we stand and a way forward.",
    venue: "Phytopathology",
    href: "https://doi.org/10.1094/PHYTO-10-21-0430-PER"
  },
  {
    citation:
      "Alves KS, Del Ponte EM (2021) Analysis and simulation of plant disease progress curves in R: introducing the epifitter package.",
    venue: "Phytopathology Research",
    href: "https://doi.org/10.1186/s42483-021-00098-7"
  },
  {
    citation:
      "Alves KS, Barro JP, Guimaraes M, Del Ponte EM (2021) Profitability of fungicide applications for managing soybean rust in scenarios of variable efficacy and costs: a stochastic simulation.",
    venue: "Plant Pathology",
    href: "https://doi.org/10.1111/ppa.13396"
  }
];

export const tools = [
  {
    name: "epifitter",
    type: "R package",
    href: "https://alvesks.github.io/epifitter/",
    description:
      "Analysis and simulation of plant disease progress curves for comparative epidemiology, teaching, and applied modeling."
  },
  {
    name: "ec50estimator",
    type: "R package",
    href: "https://alvesks.github.io/ec50estimator/",
    description:
      "Automated EC50 estimation for stratified multi-isolate fungicide sensitivity datasets."
  },
  {
    name: "windcut",
    type: "R package",
    href: "https://alvesks.github.io/windcut/",
    description:
      "Utilities for detecting and summarizing wind-speed periods from meteorological time series."
  },
  {
    name: "BSPcast",
    type: "Decision-support app",
    href: "https://alvesks.shinyapps.io/BSPcast/",
    description:
      "A weather-based forecasting interface for Stemphylium leaf blight risk in onion."
  },
  {
    name: "Rusty Profits",
    type: "Economic app",
    href: "https://alvesks.shinyapps.io/rusty-profits/",
    description:
      "An app for exploring fungicide profitability scenarios for soybean rust management."
  },
  {
    name: "simDPC",
    type: "Teaching app",
    href: "https://alvesks.shinyapps.io/simDPC/",
    description:
      "An interactive tool for simulating disease progress curves and comparing epidemic models."
  }
];

export const experience = [
  {
    title: "Plant Health Scientist",
    place: "Bayer Crop Science",
    period: "2024 to present",
    details:
      "Developing disease risk modeling frameworks, monitoring approaches, and decision-support tools for plant health and breeding decisions."
  },
  {
    title: "LATAM Risk Assessment Lead",
    place: "Bayer Crop Science",
    period: "2022 to 2024",
    details:
      "Led research on disease risk and quantitative epidemiology for corn and soybean breeding pipelines in Latin America."
  },
  {
    title: "Research Intern, Plant Pathology",
    place: "Cornell University",
    period: "2021 to 2022",
    details:
      "Studied environmental drivers of white mold prevalence and developed weather-based forecasting tools."
  }
];

export const education = [
  "D.Sc. in Plant Pathology, Universidade Federal de Vicosa",
  "M.Sc. in Plant Pathology, Universidade Federal de Vicosa",
  "B.S. in Agronomy, Universidade Federal do Espirito Santo"
];
