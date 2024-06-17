export const Duties: Duty[] = [
  {
    label: "Combat Victory",
    value: "combatvictory",
    desc: "You have proven yourself in combat, and wish to continue to do so.",
  },
  {
    label: "Counter-Intelligence",
    value: "counterintelligence",
    desc: "You hunt down enemy agents and threats, and spread misinformation to opposing factions.",
  },
  {
    label: "Intelligence",
    value: "intelligence",
    desc: "You gather information and intelligence for your faction.",
  },
  {
    label: "Internal Security",
    value: "internalsecurity",
    desc: "You protect your faction from internal threats and spies.",
  },
  {
    label: "Personnel",
    value: "personnel",
    desc: "You manage existing members of your faction, ensuring they are well-trained and equipped.",
  },
  {
    label: "Political Support",
    value: "politicalsupport",
    desc: "You ensure that your faction has the political support it needs to operate effectively.",
  },
  {
    label: "Recruiting",
    value: "recruiting",
    desc: "You recruit new members for your faction, ensuring that they are loyal and capable.",
  },
  {
    label: "Resource Acquisition",
    value: "resourceacquisition",
    desc: "You acquire resources for your faction, ensuring that they have the supplies they need to operate effectively.",
  },
  {
    label: "Space Superiority",
    value: "spacesuperiority",
    desc: "Your focus is ship-to-ship combat, where you believe the war is ultimately decided.",
  },
  {
    label: "Tech Procurement",
    value: "techprocurement",
    desc: "You acquire new technology for your faction, ensuring that they have the best equipment available.",
  },
  {
    label: "Support",
    value: "support",
    desc: "You are devoted to helping fellow PCs fulfill their Duties.",
  },
];

export const Obligations: Obligation[] = [
  {
    label: "Addiction",
    value: "addiction",
    desc: "You have a substance addiction that you must feed, or suffer the consequences.",
  },
  {
    label: "Betrayal",
    value: "betrayal",
    desc: "Either you have betrayed someone, and they are looking for you, or you are the target of a deep and personal betrayal.",
  },
  {
    label: "Blackmail",
    value: "blackmail",
    desc: "Someone has something on you, and they are using it to get you to do their bidding.",
  },
  {
    label: "Bounty",
    value: "bounty",
    desc: "You have a bounty on your head, and you are always looking over your shoulder.",
  },
  {
    label: "Criminal",
    value: "criminal",
    desc: "You are a criminal with a criminal record, and you are always on the run from the law.",
  },
  {
    label: "Debt",
    value: "debt",
    desc: "You owe someone a lot of money, and they are always looking for you to pay up.",
  },
  {
    label: "Dutybound",
    value: "dutybound",
    desc: "You have a duty to someone or something, and you must fulfill that duty no matter what.",
  },
  {
    label: "Family",
    value: "family",
    desc: "You have deep ties with your family, and you must always put them first.",
  },
  {
    label: "Favor",
    value: "favor",
    desc: "You owe someone a big favor, and they are looking for a way to call it in.",
  },
  {
    label: "Oath",
    value: "oath",
    desc: "You have sworn an oath to someone or something, and you must always keep that oath.",
  },
  {
    label: "Obsession",
    value: "obsession",
    desc: "You are obsessed with something, and you will do anything to get it.",
  },
  {
    label: "Responsibility",
    value: "responsibility",
    desc: "You have a great responsibility to someone or something, and you must always put that responsibility first.",
  },
];

export const MoralityStrengths: Morality[] = [
  {
    label: "Bravery",
    value: "bravery",
  },
  {
    label: "Love",
    value: "love",
  },
  {
    label: "Caution",
    value: "caution",
  },
  {
    label: "Enthusiasm",
    value: "enthusiasm",
  },
  {
    label: "Compassion",
    value: "compassion",
  },
  {
    label: "Mercy",
    value: "mercy",
  },
  {
    label: "Curiosity",
    value: "curiosity",
  },
  {
    label: "Pride",
    value: "pride",
  },
  {
    label: "Independence",
    value: "independence",
  },
  {
    label: "Ambition",
    value: "ambition",
  },
  {
    label: "Justice",
    value: "justice",
  },
  {
    label: "Discipline",
    value: "discipline",
  },
];

export const MoralityWeaknesses: Morality[] = [
  {
    label: "Anger",
    value: "anger",
  },
  {
    label: "Jealousy",
    value: "jealousy",
  },
  {
    label: "Fear",
    value: "fear",
  },
  {
    label: "Recklessness",
    value: "recklessness",
  },
  {
    label: "Hatred",
    value: "hatred",
  },
  {
    label: "Weakness",
    value: "weakness",
  },
  {
    label: "Obsession",
    value: "obsession",
  },
  {
    label: "Arrogance",
    value: "arrogance",
  },
  {
    label: "Coldness",
    value: "coldness",
  },
  {
    label: "Greed",
    value: "greed",
  },
  {
    label: "Cruelty",
    value: "cruelty",
  },
  {
    label: "Obstinance",
    value: "obstinance",
  },
];

export interface Obligation {
  label: string;
  value: string;
  desc: string;
}

export interface Duty {
  label: string;
  value: string;
  desc: string;
}

export interface Morality {
  label: string;
  value: string;
}
