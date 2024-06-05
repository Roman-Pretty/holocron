let taAction = true;
let taIncidental = true;
let taPassive = false;
let taManeuver = true;
let taIncidentalOOT = true;

export const adversary = {
  name: "Adversary",
  desc: "Upgrade the difficulty of any combat check targeting this character once per rank of Adversary.",
  ranked: true,
  active: taPassive
}

export const anatomyLessons = {
  name: "Anatomy Lessons",
  desc: "After making a successful attack, may spend 1 Destiny Point to add damage equal to Intellect to one hit.",
  ranked: false,
  active: taIncidental
}

export const allTerrainDriver = {
  name: "All-Terrain Driver",
  desc: "Do not suffer usual penalties for driving through different terrain when using Piloting (Planetary).",
  ranked: false,
  active: taPassive
}

export const armorMaster = {
  name: "Armor Master",
  desc: "When wearing armor, increase total soak value by 1.",
  ranked: false,
  active: taPassive
}

export const armorMasterImproved = {
  name: "Armor Master (Improved)",
  desc: "When wearing armor with a soak value of 2 or higher, increase defense by 1.",
  ranked: false,
  active: taPassive
}

export const bactaSpecialist = {
  name: "Bacta Specialist",
  desc: "Patients recover 1 additional wound per rank of Bacta Specialist when they recover wounds from bacta tanks or long term care.",
  ranked: true,
  active: taPassive
}

export const badMotivator = {
  name: "Bad Motivator",
  desc: "Once per game session, may take a Bad Motivator action; make a Hard ([difficulty][difficulty][difficulty]) Mechanics check to cause one targeted device to spontaneously fail.",
  ranked: false,
  active: taAction
}

export const balance = {
  name: "Balance",
  desc: "When the character heals strain at the end of the encounter, he may add [FO] per Force Rating. He recovers additional strain equal to [LI] generated.",
  ranked: false,
  active: taManeuver
}

export const barrage = {
  name: "Barrage",
  desc: "Add 1 damage per rank of Barrage to 1 hit of successful attack while using Ranged (Heavy) or Gunnery skills at long or extreme range.",
  ranked: true,
  active: taPassive
}

export const basicCombatTraining = {
  name: "Basic Combat Training",
  desc: "Brawl and Ranged (Light) become career skills.",
  ranked: false,
  active: taPassive
}

export const blackMarketContacts = {
  name: "Black Market Contacts",
  desc: "When purchasing illegal goods, may reduce rarity by 1 per rank of Black Market Contacts, increasing cost by 50 percent of base cost per reduction.",
  ranked: true,
  active: taIncidental
}

export const blooded = {
  name: "Blooded",
  desc: "Add [boost] per rank of Blooded to all checks to resist or recover from poisons, venoms, or toxins. Reduce duration of ongoing poisons by 1 round per rank of Blooded to a minimum of 1.",
  ranked: true,
  active: taPassive
}

export const bloodedImproved = {
  name: "Blooded (Improved)",
  desc: "As an action, make a Hard ([difficulty][difficulty][difficulty]) Resilience check to immediately recover from all poisons and side-effects of drugs. Reduce difficulty once per rank of Blooded.",
  ranked: false,
  active: taAction
}

export const bodyGuard = {
  name: "Body Guard",
  desc: "Once per round, perform the Body Guard maneuver to guard an engaged character. Suffer a number of strain no greater than ranks of Body Guard, then until the beginning of the next turn upgrade the difficulty of combat checks targeting the character by that number.",
  ranked: true,
  active: taManeuver
}

export const boughtInfo = {
  name: "Bought Info",
  desc: "Instead of making a Knowledge check, may take a Bought Info action; spend credits equal to 50 times the difficulty of the check to pass with one [success].",
  ranked: false,
  active: taAction
}

export const brace = {
  name: "Brace",
  desc: "Perform the Brace maneuver to remove [setback] per rank of Brace from next Action. This may only remove [setback] added by environmental circumstances.",
  ranked: true,
  active: taManeuver
}

export const braceImproved = {
  name: "Brace (Improved)",
  desc: "When the character performs the Brace maneuver, they may choose one environmental circumstance. The benefits of Brace apply to that circumstance until the end of the encounter. (This benefit is not cumulative with further uses of the Brace maneuver, although the character may select additional circumstances with subsequent uses.)",
  ranked: false,
  active: taPassive
}

export const braceSupreme = {
  name: "Brace (Supreme)",
  desc: "When the character performs the Brace maneuver, the benefits apply to all allies within short range.",
  ranked: false,
  active: taPassive
}

export const brilliantEvasion = {
  name: "Brilliant Evasion",
  desc: "Once per encounter may take Brilliant Evasion action. Select 1 opponent and make Opposed Piloting (Planetary or Space) check to stop opponent from attacking character for rounds equal to Agility.",
  ranked: false,
  active: taAction
}

export const bypassSecurity = {
  name: "Bypass Security",
  desc: "Remove [setback] per rank of Bypass Security from checks made to disable a security device or open a locked door.",
  ranked: true,
  active: taPassive
}

export const carefulPlanning = {
  name: "Careful Planning",
  desc: "Once per session, may introduce a 'fact' into the narrative as if a Destiny Point had been spent.",
  ranked: false,
  active: taAction
}

export const cleverSolution = {
  name: "Clever Solution",
  desc: "Once per session, make one skill check using Cunning rather than the characteristic linked to that skill.",
  ranked: false,
  active: taIncidental
}

export const codeBreaker = {
  name: "Codebreaker",
  desc: "Remove [setback] per rank in Codebreaker from checks to break codes or decrypt communications. Decrease difficulty of checks to break codes or decrypt communications by 1.",
  ranked: true,
  active: taPassive
}

export const command = {
  name: "Command",
  desc: "Add [boost] per rank of Command when making Leadership checks. Affected targets add [boost] to Discipline checks for next 24 hours.",
  ranked: true,
  active: taPassive
}

export const commandingPresence = {
  name: "Commanding Presence",
  desc: "Remove [setback] per rank of Commanding Presence from Leadership and Cool checks.",
  ranked: true,
  active: taPassive
}

export const confidence = {
  name: "Confidence",
  desc: "May decrease difficulty of Discipline checks to avoid fear by 1 per rank of Confidence.",
  ranked: true,
  active: taPassive
}

export const contraption = {
  name: "Contraption",
  desc: "Once per session, take Contraption action; make a  Hard ([difficulty][difficulty][difficulty]) Mechanics check to fashion a device to solve a current problem using just the tools and parts on hand.",
  ranked: false,
  active: taAction
}

export const convincingDemeanor = {
  name: "Convincing Demeanor",
  desc: "Remove [setback] per rank of Convincing Demeanor from any Deception or Skulduggery checks.",
  ranked: true,
  active: taPassive
}

export const coordinatedAssualt = {
  name: "Coordinated Assault",
  desc: "Take the Coordinated Assault maneuver; a number of engaged allies equal to Leadership ranks add [advantage] to combat checks until beginning of the next turn. Range increases per rank of Coordinated Assault.",
  ranked: true,
  active: taManeuver
}

export const creativeKiller = {
  name: "Creative Killer",
  desc: "Reduce the crit rating of improvised weapons by 2 (to a minimum of 1).",
  ranked: false,
  active: taPassive
}

export const cripplingBlow = {
  name: "Crippling Blow",
  desc: "Increase the difficulty of next combat check by 1. If check deals damage, target suffers 1 strain whenever he moves for the remainder of the encounter.",
  ranked: false,
  active: taIncidental
}

export const deadToRights = {
  name: "Dead to Rights",
  desc: "Spend 1 Destiny Point to add additional damage equal to half Agility (rounded up) to one hit of successful attack made with ship or vehicle-mounted weaponry.",
  ranked: false,
  active: taIncidental
}

export const deadToRightsImproved = {
  name: "Dead to Rights (Improved)",
  desc: "Spend 1 Destiny Point to add additional damage equal to Agility (rounded up) to one hit of successful attack made with ship or vehicle-mounted weaponry.",
  ranked: false,
  active: taIncidental
}

export const deadlyAccuracy = {
  name: "Deadly Accuracy",
  desc: "When acquired, choose 1 combat skill. Add damage equal to ranks in that skill to one hit of successful attack made using that skill.",
  ranked: true,
  active: taPassive
}

export const debilitatingShot = {
  name: "Debilitating Shot",
  desc: "Upon successful attack with a starship or vehicle weapon, may spend [advantage][advantage] to reduce the maximum speed of the target by 1 until the end of the next round.",
  ranked: false,
  active: taIncidental
}

export const dedication = {
  name: "Dedication",
  desc: "Gain +1 to a single characteristic. This cannot bring a characteristic above 6.",
  ranked: true,
  active: taPassive
}

export const defensiveDriving = {
  name: "Defensive Driving",
  desc: "Increase defense of vehicle or starship being piloted by 1 per rank of Defensive Driving.",
  ranked: true,
  active: taPassive
}

export const defensiveSlicing = {
  name: "Defensive Slicing",
  desc: "When defending computer systems, add [setback] per rank of Defensive Slicing to opponent's checks.",
  ranked: true,
  active: taPassive
}

export const defensiceSlicingImproved = {
  name: "Defensive Slicing (Improved)",
  desc: "Defensive Slicing now upgrades opponents' difficulty once per rank of Defensive Slicing, this replaces the usual benefits.",
  ranked: false,
  active: taPassive
}

export const defensiveStance = {
  name: "Defensive Stance",
  desc: "Once per round, may perform Defensive Stance maneuver and suffer a number of strain to upgrade difficulty of all incoming melee attacks by an equal number. Strain suffered this way cannot exceed ranks in Defensive Stance.",
  ranked: true,
  active: taManeuver
}

export const disorient = {
  name: "Disorient",
  desc: "After hitting with combat check, may spend [advantage][advantage] to disorient target for number of rounds equal to ranks in Disorient.",
  ranked: true,
  active: taPassive
}

export const dodge = {
  name: "Dodge",
  desc: "When targeted by combat check, may perform a Dodge incidental to suffer a number of strain no greater than ranks of Dodge, then upgrade the difficulty of the check by that number.",
  ranked: true,
  active: taIncidentalOOT
}

export const durable = {
  name: "Durable",
  desc: "May reduce any Critical Injury suffered by 10 per rank of Durable to a minimum of 1.",
  ranked: true,
  active: taPassive
}

export const dynamicFire = {
  name: "Dynamic Fire",
  desc: "When making a ranged attack while engaged with an opponent, may suffer 2 strain to reduce the ranged modifier by 1.",
  ranked: false,
  active: taIncidental
}

export const enduring = {
  name: "Enduring",
  desc: "Gain +1 soak value.",
  ranked: true,
  active: taPassive
}

export const exhaustPort = {
  name: "Exhaust Port",
  desc: "Before attacking a starship or vehicle, the character may spend 1 Destiny Point to ignore the effects of the Massive rule for the attack.",
  ranked: false,
  active: taIncidental
}

export const expertTracker = {
  name: "Expert Tracker",
  desc: "Remove [setback] per rank of Expert Tracker from checks to find tracks or track targets. Decrease time to track a target by half.",
  ranked: true,
  active: taPassive
}

export const familiarSuns = {
  name: "Familiar Suns",
  desc: "Once per session, may perform a Familiar Suns maneuver; make a  Hard ([difficulty][difficulty][difficulty]) Knowledge (Outer Rim) or (Core Worlds) check to reveal the current type of planetary environment and other useful information.",
  ranked: false,
  active: taManeuver
}

export const feralStrength = {
  name: "Feral Strength",
  desc: "Add 1 damage per rank of Feral Strength to one hit of successful attacks made using Brawl or Melee skills.",
  ranked: true,
  active: taPassive
}

export const fieldCommander = {
  name: "Field Commander",
  desc: "Take the Field Commander action; make a Average ([difficulty][difficulty]) Leadership check. A number of allies equal to Presence may immediately suffer 1 strain to perform 1 free maneuver.",
  ranked: false,
  active: taAction
}

export const fieldCommanderImproved = {
  name: "Field Commander (Improved)",
  desc: "Field Commander action affects allies equal to double Presence, and may spend [TR] to allow allies to suffer 1 strain and perform 1 free action instead.",
  ranked: false,
  active: taPassive
}

export const fineTuning = {
  name: "Fine Tuning",
  desc: "When reducing the amount of system strain a starship or vehicle suffers, reduce 1 additional strain per rank of Fine Tuning.",
  ranked: true,
  active: taPassive
}

export const fireControl = {
  name: "Fire Control",
  desc: "Take the Fire Control action; all combat checks made from current starship or vehicle count their target's silhouette as one higher than normal until the beginning of next turn. Does not stack.",
  ranked: false,
  active: taAction
}

export const forager = {
  name: "Forager",
  desc: "Remove up to [setback][setback] from skill checks to find food, water, or shelter. Survival checks to forage take half the time.",
  ranked: false,
  active: taPassive
}

export const forceOfWill = {
  name: "Force of Will",
  desc: "Once per session, make one skill check using Willpower rather than the characteristic linked to that skill.",
  ranked: false,
  active: taIncidental
}

export const forceRating = {
  name: "Force Rating",
  desc: "Gain +1 Force Rating.",
  ranked: true,
  active: taPassive
}

export const formOnMe = {
  name: "Form On Me",
  desc: "Allies equal to ranks in Leadership in close range gain the benefits of the Gain the Advantage action.",
  ranked: false,
  active: taPassive
}

export const frenziedAttack = {
  name: "Frenzied Attack",
  desc: "When making a Melee or Brawl check, suffer a number of strain to upgrade the attack an equal number of times. The strain suffered may not exceed ranks in Frenzied Attack.",
  ranked: true,
  active: taIncidental
}

export const fullStop = {
  name: "Full Stop",
  desc: "When piloting a ship or vehicle, take a full-stop maneuver to reduce speed to zero and suffer system strain equal to the speed reduced.",
  ranked: false,
  active: taManeuver
}

export const fullThrottle = {
  name: "Full Throttle",
  desc: "Take a Full Throttle action; make a Hard ([difficulty][difficulty][difficulty]) Piloting check to increase a vehicle's top speed by 1 for a number of rounds equal to Cunning.",
  ranked: false,
  active: taAction
}

export const fullThrottleImproved = {
  name: "Full Throttle (Improved)",
  desc: "Suffer 1 strain to attempt Full Throttle as a maneuver and decrease its difficultly to Average ([difficulty][difficulty]).",
  ranked: false,
  active: taAction
}

export const fullThrottleSuperior = {
  name: "Full Throttle (Supreme)",
  desc: "When performing Full Throttle, top speed increases by 2 instead of 1.",
  ranked: false,
  active: taPassive
}

export const galaxyMapper = {
  name: "Galaxy Mapper",
  desc: "Remove [setback] per rank of Galaxy Mapper from Astrogation checks. Astrogation checks take half normal time.",
  ranked: true,
  active: taPassive
}

export const gearhead = {
  name: "Gearhead",
  desc: "Remove [setback] per rank of Gearhead from Mechanics checks. Have the credit cost to add mods to attachments.",
  ranked: true,
  active: taPassive
}

export const greasedPalms = {
  name: "Greased Palms",
  desc: "Before making a social check, may spend up to 50 credits per rank of Greased Palms to upgrade the ability of the check once for every 50 spent.",
  ranked: true,
  active: taManeuver
}

export const grit = {
  name: "Grit",
  desc: "Gain +1 strain threshold",
  ranked: true,
  active: taPassive
}

export const hardHeaded = {
  name: "Hard Headed",
  desc: "When staggered or disoriented, perform the Hard Headed action; make a Daunting ([difficulty][difficulty][difficulty][difficulty]) Discipline check to remove status. Difficulty reduced per rank of Hard Headed.",
  ranked: true,
  active: taAction
}

export const hardHeadedImproved = {
  name: "Hard Headed (Improved)",
  desc: "When incapacitated due to strain exceeding threshold, may take a more difficult. Hard Headed action to reduce strain to 1 below threshold.",
  ranked: false,
  active: taAction
}

export const heightenedAwareness = {
  name: "Heightened Awareness",
  desc: "Allies within close range add [boost] to Perception or Vigilance checks. Engaged allies add [boost][boost].",
  ranked: false,
  active: taPassive
}

export const heroicFortitude = {
  name: "Heroic Fortitude",
  desc: "May spend 1 Destiny Point to ignore effects of Critical Injuries on Brawn or Agility checks until the end of the encounter.",
  ranked: false,
  active: taIncidental
}

export const hiddenStorage = {
  name: "Hidden Storage",
  desc: "Gain hidden storage in vehicles or equipment that holds items with total encumbrance equal to ranks in Hidden Storage.",
  ranked: true,
  active: taPassive
}

export const holdTogether = {
  name: "Hold Together",
  desc: "Spend 1 Destiny Point to perform a Hold Together incidental immediately after vehicle or starship takes damage to turn it into system strain.",
  ranked: false,
  active: taIncidental
}

export const hunter = {
  name: "Hunter",
  desc: "Add [boost] per rank of Hunter to all checks when interacting with beast or animals (including combat checks). Add +10 to Critical Injury results against beasts or animals per rank of Hunter.",
  ranked: true,
  active: taPassive
}

export const inciteRebellion = {
  name: "Incite Rebellion",
  desc: "Once per session, may take an Incite Rebellion action; make a Hard ([difficulty][difficulty][difficulty]) Coercion check to cause a number of beings up to ranks in Coercion to become rebellious until the end of the encounter.",
  ranked: false,
  active: taAction
}

export const indistinguishable = {
  name: "Indistinguishable",
  desc: "Upgrade difficulty of checks to identify character once per rank of Indistinguishable.",
  ranked: true,
  active: taPassive
}

export const insight = {
  name: "Insight",
  desc: "Perception and Discipline become career skills.",
  ranked: false,
  active: taPassive
}

export const inspiringRhetoric = {
  name: "Inspiring Rhetoric",
  desc: "Take the Inspiring Rhetoric action; making an Average ([difficulty][difficulty]) Leadership check. Each [success], 1 ally within close range recovers 1 strain. Spend [advantage] to cause 1 affected ally to recover 1 additional strain.",
  ranked: false,
  active: taAction
}

export const inspiringRhetoricImproved = {
  name: "Inspiring Rhetoric (Improved)",
  desc: "Each ally affected by Inspiring Rhetoric gains [boost] on all skill checks for a number of rounds equal to ranks in Leadership.",
  ranked: false,
  active: taPassive
}

export const inspiringRhetoricSupreme = {
  name: "Inspiring Rhetoric (Supreme)",
  desc: "Suffer 1 strain to perform Inspiring Rhetoric as a maneuver, not an action.",
  ranked: false,
  active: taIncidental
}

export const intenseFocus = {
  name: "Intense Focus",
  desc: "Perform an Intense Focus maneuver; suffer 1 strain and upgrade the ability of the next skill check once.",
  ranked: false,
  active: taManeuver
}

export const intensePresence = {
  name: "Intense Presence",
  desc: "Spend 1 Destiny Point to recover strain equal to Presence rating.",
  ranked: false,
  active: taIncidentalOOT
}

export const intimidating = {
  name: "Intimidating",
  desc: "May suffer a number of strain to downgrade difficulty of Coercion checks, or upgrade difficulty when targeted by Coercion checks, by an equal number. Strain suffered this way cannot exceed ranks in Intimidating.",
  ranked: true,
  active: taIncidentalOOT
}

export const inventor = {
  name: "Inventor",
  desc: "When constructing new items or modifying existing attachments, add [boost] or remove [setback] per rank of Inventor.",
  ranked: true,
  active: taPassive
}

export const invigorate = {
  name: "Invigorate",
  desc: "Once per encounter, may add [FO] to a check using Brawn or Agility made by an ally in short range [LI] add [success] and [DA] add [TH].",
  ranked: false,
  active: taIncidentalOOT
}

export const itsNotThatBad = {
  name: "It's Not that Bad",
  desc: "Once per session when an ally would suffer a Critical Injury, may take an It's Not That Bad action; make a Hard ([difficulty][difficulty][difficulty]) Medicine check to stop the ally from gaining the Critical Injury.",
  ranked: false,
  active: taAction
}

export const jumpUp = {
  name: "Jump Up",
  desc: "Once per round, may stand from seated or prone as an incidental.",
  ranked: false,
  active: taIncidental
}

export const juryRigged = {
  name: "Jury Rigged",
  desc: "Choose 1 weapon, armor, or other item and give it a permanent improvement while it remains in use.",
  ranked: true,
  active: taPassive
}

export const killWithKindness = {
  name: "Kill With Kindness",
  desc: "Remove [setback] per rank of Kill with Kindness from all Charm and Leadership checks.",
  ranked: true,
  active: taPassive
}

export const knockdown = {
  name: "Knockdown",
  desc: "After hitting with a melee attack, may spend [TR] to knock the target prone.",
  ranked: false,
  active: taPassive
}

export const knowSomebody = {
  name: "Know Somebody",
  desc: "Once per session, when attempting to purchase a legally available item, reduce its rarity by 1 per rank of Know Somebody.",
  ranked: true,
  active: taIncidental
}

export const knowledgeSpecialization = {
  name: "Knowledge Specialization",
  desc: "When acquired, choose 1 Knowledge skill. When making that skill check, may spend [TR] result to gain additional successes equal to ranks in Knowledge Specialization.",
  ranked: true,
  active: taPassive
}

export const knownSchematic = {
  name: "Known Schematic",
  desc: "Once per session, may perform the Known Schematic maneuver; make a Hard ([difficulty][difficulty][difficulty]) Knowledge (Education) check. Success grants familiarity with a building or ship's design.",
  ranked: false,
  active: taManeuver
}

export const letsRide = {
  name: "Let's Ride",
  desc: "Once per round, may mount or dismount a vehicle or beast, or enter a cockpit or weapon station on a vehicle, as an incidental.",
  ranked: false,
  active: taIncidental
}

export const lethalBlows = {
  name: "Lethal Blows",
  desc: "Add +10 per rank of Lethal Blows to any Critical Injury results inflicted on opponents.",
  ranked: true,
  active: taPassive
}

export const masterDoctor = {
  name: "Master Doctor",
  desc: "Once per round, suffer 2 strain to decrease the difficulty of a Medicine check by 1.",
  ranked: false,
  active: taIncidental
}

export const masterDriver = {
  name: "Master Driver",
  desc: "Once per round when driving a vehicle, may suffer 2 strain to perform any action as a maneuver.",
  ranked: false,
  active: taIncidental
}

export const masterGrenadier = {
  name: "Master Grenadier",
  desc: "Decrease the [advantage] cost to activate the Blast quality on any weapon used by 1 to a minimum of 1.",
  ranked: false,
  active: taPassive
}

export const masterLeader = {
  name: "Master Leader",
  desc: "Once per round, suffer 2 strain to decrease difficulty of the next Leadership check by one, to a minimum of Easy ([difficulty]).",
  ranked: false,
  active: taIncidental
}

export const masterMerchant = {
  name: "Master Merchant",
  desc: "When buying or selling goods, or paying off or taking Obligation, may suffer 2 strain to sell for 25% more, but for 25% less, pay off 1 more Obligation, or take 1 less.",
  ranked: false,
  active: taIncidental
}

export const masterOfShadows = {
  name: "Master of Shadows",
  desc: "Once per round, suffer 2 strain to decrease difficulty of next Stealth or Skulduggery check by one.",
  ranked: false,
  active: taIncidental
}

export const masterPilot = {
  name: "Master Pilot",
  desc: "Once per round when piloting a starship, may suffer 2 strain to perform any action as a maneuver.",
  ranked: false,
  active: taIncidental
}

export const masterSlicer = {
  name: "Master Slicer",
  desc: "Once per round, may take a Master Sliver incidental to suffer 2 strain and decrease difficulty of Computers or other slicing checks by 1 to a minimum of Easy ([difficulty]).",
  ranked: false,
  active: taIncidental
}

export const masterStarhopper = {
  name: "Master Starhopper",
  desc: "Once per round, suffer 2 strain to decrease the difficulty of next Astrogation check by 1 to a minimum of Easy ([difficulty]).",
  ranked: false,
  active: taIncidental
}

export const mentalFortress = {
  name: "Mental Fortress",
  desc: "Spend 1 Destiny Point to ignore effects of Critical Injuries on Intellect or Cunning checks until end of encounter.",
  ranked: false,
  active: taIncidental
}

export const naturalBrawler = {
  name: "Natural Brawler",
  desc: "Once per session, may reroll any 1 Brawl or Melee check.",
  ranked: false,
  active: taIncidental
}

export const naturalCharmer = {
  name: "Natural Charmer",
  desc: "Once per session, may reroll 1 Charm or Deception check.",
  ranked: false,
  active: taIncidental
}

export const naturalDoctor = {
  name: "Natural Doctor",
  desc: "Once per session, may reroll any 1 Medicine check.",
  ranked: false,
  active: taIncidental
}

export const naturalDriver = {
  name: "Natural Driver",
  desc: "Once per session, may reroll any 1 Piloting (Planetary) or Gunnery check.",
  ranked: false,
  active: taIncidental
}

export const naturalEnforcer = {
  name: "Natural Enforcer",
  desc: "Once per session, may reroll any 1 Coercion or Streetwise check.",
  ranked: false,
  active: taIncidental
}

export const naturalHunter = {
  name: "Natural Hunter",
  desc: "Once per session, may reroll any 1 Perception or Vigilance check.",
  ranked: false,
  active: taIncidental
}

export const naturalLeader = {
  name: "Natural Leader",
  desc: "Once per session, may reroll any 1 Cool or Leadership check.",
  ranked: false,
  active: taIncidental
}

export const naturalMarksman = {
  name: "Natural Marksman",
  desc: "Once per session, may reroll any 1 Ranged (Light) or Ranged (Heavy) check.",
  ranked: false,
  active: taIncidental
}

export const naturalNegotiator = {
  name: "Natural Negotiator",
  desc: "Once per session, may reroll any 1 Cool or Negotiation check.",
  ranked: false,
  active: taIncidental
}

export const naturalOutdoorsman = {
  name: "Natural Outdoorsman",
  desc: "Once per session, may reroll any 1 Resilience or Survival check.",
  ranked: false,
  active: taIncidental
}

export const naturalPilot = {
  name: "Natural Pilot",
  desc: "Once per session, may reroll any Piloting (Space) or Gunnery check.",
  ranked: false,
  active: taIncidental
}

export const naturalProgrammer = {
  name: "Natural Programmer",
  desc: "Once per session, may reroll any 1 Computers or Astrogation check.",
  ranked: false,
  active: taIncidental
}

export const naturalRogue = {
  name: "Natural Rogue",
  desc: "Once per session, may reroll any 1 Skulduggery or Stealth check.",
  ranked: false,
  active: taIncidental
}

export const naturalScholar = {
  name: "Natural Scholar",
  desc: "Once per session, may reroll any 1 Knowledge skill check.",
  ranked: false,
  active: taIncidental
}

export const naturalTinkerer = {
  name: "Natural Tinkerer",
  desc: "Once per session, may reroll any 1 Mechanics check.",
  ranked: false,
  active: taIncidental
}

export const nobodysFool = {
  name: "Nobody's Fool",
  desc: "May upgrade difficulty of incoming Charm, Coercion, or Deception checks once per rank of Nobody's Fool.",
  ranked: true,
  active: taPassive
}

export const outdoorsman = {
  name: "Outdoorsman",
  desc: "Remove [setback] per rank of Outdoorsman from checks to move through terrain or manage environmental effects. Decrease overland travel times by half.",
  ranked: true,
  active: taPassive
}

export const overwhelmEmotions = {
  name: "Overwhelm Emotions",
  desc: "May add [FO] per Force Rating to Charm, Coercion, or Deception checks. [LI] and [DA] add [success] to some checks and [FA] to others.",
  ranked: false,
  active: taPassive
}

export const overwhelmDefenses = {
  name: "Overwhelm Defenses",
  desc: "Upon unsuccessful attack with a starship or vehicle weapon, may spend [advantage][advantage] per rank of Overwhelm Defenses. Reduce the defense in the targeted zone by 1 for every [advantage][advantage] spent.",
  ranked: true,
  active: taIncidental
}

export const physicalTraining = {
  name: "Physical Training",
  desc: "Add [boost] per rank of Physical Training to Athletics and Resilience checks.",
  ranked: true,
  active: taPassive
}

export const plausibleDeniability = {
  name: "Plausible Deniability",
  desc: "Remove [setback] per rank of Plausible Deniability from all Coercion and Deception checks.",
  ranked: true,
  active: taPassive
}

export const pointBlank = {
  name: "Point Blank",
  desc: "Add 1 damage per rank of Point Blank to damage of one hit of successful attack while using Ranged (Heavy) or Ranged (Light) skills at short range or engaged.",
  ranked: true,
  active: taPassive
}

export const powerfulBlast = {
  name: "Powerful Blast",
  desc: "Increase Blast damage dealt by explosives, explosive weapons, and grenades by +1 per rank of Powerful Blast.",
  ranked: true,
  active: taPassive
}

export const preciseAim = {
  name: "Precise Aim",
  desc: "Once per round, may perform Precise Aim maneuver. Suffer a number of strain no greater than ranks in Precise Aim, then reduce target's melee and ranged defense by that number.",
  ranked: true,
  active: taManeuver
}

export const pressurePoint = {
  name: "Pressure Point",
  desc: "When making a Brawl check against an opponent, instead of dealing damage, may deal equivalent strain plus additional strain equal to ranks of Medicine (this ignores soak).",
  ranked: false,
  active: taIncidental
}

export const quickDraw = {
  name: "Quick Draw",
  desc: "Once per round, draw or holster a weapon or accessible item as an incidental.",
  ranked: false,
  active: taIncidental
}

export const quickFix = {
  name: "Quick Fix",
  desc: "Once per session, make one skill check using Agility rather than the characteristic linked to that skill.",
  ranked: false,
  active: taIncidental
}

export const quickStrike = {
  name: "Quick Strike",
  desc: "Add [boost] per rank of Quick Strike to combat checks against targets that have not acted yet this encounter.",
  ranked: true,
  active: taPassive
}

export const rapidReaction = {
  name: "Rapid Reaction",
  desc: "Suffer a number of strain to add an equal number of [success] to initiative checks. Strain suffered cannot exceed ranks in Rapid Reaction.",
  ranked: true,
  active: taIncidentalOOT
}

export const rapidRecovery = {
  name: "Rapid Recovery",
  desc: "When healing strain after an encounter, heal 1 additional strain per rank of Rapid Recovery.",
  ranked: true,
  active: taPassive
}

export const redundantSystems = {
  name: "Redundant Systems",
  desc: "Once per session, may take a Redundant Systems action; make an Easy ([difficulty]) Mechanics check to harvest components from a functioning device to repair a broken one without breaking the first device.",
  ranked: false,
  active: taAction
}

export const researcher = {
  name: "Researcher",
  desc: "Remove [setback] per rank of Researcher from all Knowledge checks. Researching a subject takes half the time.",
  ranked: true,
  active: taPassive
}

export const resolve = {
  name: "Resolve",
  desc: "When a character involuntarily suffers strain, he suffers 1 less strain per tank of Resolve to a minimum of 1.",
  ranked: true,
  active: taPassive
}

export const respectedScholar = {
  name: "Respected Scholar",
  desc: "May downgrade difficulty of checks to interact with institutes of learning by one level per rank of Respected Scholar.",
  ranked: true,
  active: taPassive
}

export const scathingTirade = {
  name: "Scathing Tirade",
  desc: "Take a Scathing Tirade action; make an  Average ([difficulty][difficulty]) Coercion check. Each [success] causes one enemy in short range to suffer 1 strain. Spend [advantage] to cause 1 affected enemy to suffer 1 additional strain.",
  ranked: false,
  active: taAction
}

export const scathingTiradeImproved = {
  name: "Scathing Tirade (Improved)",
  desc: "Each enemy affected by Scathing Tirade suffers [setback] on all skill checks for a number of rounds equal to ranks in Coercion.",
  ranked: false,
  active: taPassive
}

export const scathingTiradeSupreme = {
  name: "Scathing Tirade (Supreme)",
  desc: "Suffer 1 strain to perform Scathing Tirade as a maneuver, not an action.",
  ranked: false,
  active: taIncidental
}

export const secondWind = {
  name: "Second Wind",
  desc: "Once per encounter, may use Second Wind incidental to heal strain equal to ranks in Second Wind.",
  ranked: true,
  active: taIncidental
}

export const selectiveDetonation = {
  name: "Selective Detonation",
  desc: "When using a weapon with the Blast quality spend [advantage] to exclude 1 target that would be affected by the explosion, up to ranks in Selective Detonation.",
  ranked: true,
  active: taIncidental
}

export const senseDanger = {
  name: "Sense Danger",
  desc: "Once per session, remove [setback][setback] from any 1 check.",
  ranked: false,
  active: taIncidental
}

export const senseEmotions = {
  name: "Sense Emotions",
  desc: "Add [boost] to all Charm, Coercion, and Deception checks unless the target is immune to Force powers.",
  ranked: false,
  active: taPassive
}

export const shortcut = {
  name: "Shortcut",
  desc: "During a chase; add [boost] per rank in Shortcut to any checks made to catch or escape an opponent.",
  ranked: true,
  active: taPassive
}

export const sideStep = {
  name: "Side Step",
  desc: "Once per round, may perform Side Step maneuver and suffer a number of strain to upgrade difficulty of all incoming ranged attacks by an equal number for the next round. Strain suffered this way cannot exceed ranks in Side Step.",
  ranked: true,
  active: taManeuver
}

export const situationalAwareness = {
  name: "Situational Awareness",
  desc: "Allies with short range of the vehicle add [boost] to their Perception and Vigilance checks. Allies within close range add [boost][boost] instead.",
  ranked: false,
  active: taPassive
}

export const sixthSense = {
  name: "Sixth Sense",
  desc: "Gain +1 ranged defense.",
  ranked: false,
  active: taPassive
}

export const skilledJockey = {
  name: "Skilled Jockey",
  desc: "Remove [setback] per rank of Skilled Jockey from all Piloting (Planetary) and Piloting (Space) checks the character attempts.",
  ranked: true,
  active: taPassive
}

export const skilledSlicer = {
  name: "Skilled Slicer",
  desc: "When making a Computers check may spend [TR] to make further Computers checks within this system as maneuvers.",
  ranked: false,
  active: taIncidental
}

export const sleightOfMind = {
  name: "Sleight of Mind",
  desc: "Add [boost] to all Stealth checks unless the opposition is immune to Force powers.",
  ranked: true,
  active: taPassive
}

export const smoothTalker = {
  name: "Smooth Talker",
  desc: "When first acquired choose 1 skill; Charm, Coercion, Deception, or Negotiation. When making checks with that skill spend [TR] to gain additional [success] equal to ranks in Smooth Talker.",
  ranked: true,
  active: taIncidental
}

export const sniperShot = {
  name: "Sniper Shot",
  desc: "Before making a non-thrown ranged attack, may perform a Sniper Shot maneuver to increase the weapon's range by 1 range band per rank in Sniper Shot. Upgrade the difficulty of the attack by 1 per range band increase.",
  ranked: true,
  active: taManeuver
}

export const softSpot = {
  name: "Soft Spot",
  desc: "After making a successful attack, may spend 1 Destiny Point to add damage equal to Cunning to one hit.",
  ranked: false,
  active: taIncidental
}

export const solidRepairs = {
  name: "Solid Repairs",
  desc: "The character repairs +1 hull trauma per rank of Solid Repairs whenever he repairs a starship or vehicle.",
  ranked: true,
  active: taPassive
}

export const soundInvestments = {
  name: "Sound Investments",
  desc: "At the start of each session, gain 100 credits for each rank of Sound Investments.",
  ranked: true,
  active: taPassive
}

export const spareClip = {
  name: "Spare Clip",
  desc: "Cannot run out of ammo due to [despair]. Items with Limited Ammo quality run out of ammo as normal.",
  ranked: false,
  active: taPassive
}

export const speaksBinary = {
  name: "Speaks Binary",
  desc: "When directing NPC droids, may grant them [boost] per rank of Speaks Binary on checks.",
  ranked: true,
  active: taPassive
}

export const stalker = {
  name: "Stalker",
  desc: "Add [boost] per rank of Stalker to all Stealth and Coordination checks.",
  ranked: true,
  active: taPassive
}

export const steelyNerves = {
  name: "Steely Nerves",
  desc: "Spend 1 Destiny Point to ignore effects of Critical Injuries on Willpower or Presence checks until the end of the encounter.",
  ranked: false,
  active: taIncidental
}

export const stimAction = {
  name: "Stim Application",
  desc: "Take the Stim Application Action; make an Average ([difficulty][difficulty]) Medicine check. If successful 1 engaged ally increases 1 characteristic by 1 for the remained of the encounter and suffers 4 strain.",
  ranked: false,
  active: taAction
}

export const stimApplicationImproved = {
  name: "Stim Application (Improved)",
  desc: "When performing Stim Application Action, may increase difficulty of check to Hard ([difficulty][difficulty][difficulty]), and target only suffers 1 strain.",
  ranked: false,
  active: taIncidental
}

export const stimApplicationSupreme = {
  name: "Stim Application (Supreme)",
  desc: "When performing their Stim Application Action, spend [TR] to increase an additional Characteristic by 1.",
  ranked: false,
  active: taPassive
}

export const stimpackSpecialization = {
  name: "Stimpack Specialization",
  desc: "Stimpacks heal 1 additional wound per rank of Stimpack Specialization.",
  ranked: true,
  active: taPassive
}

export const streetSmarts = {
  name: "Street Smarts",
  desc: "Remove [setback] per rank of Street Smarts from Streetwise or Knowledge (Underworld) checks.",
  ranked: true,
  active: taPassive
}

export const strokeOfGenius = {
  name: "Stroke of Genius",
  desc: "Once per session, make one skill check using Intellect rather than the characteristic linked to that skill.",
  ranked: false,
  active: taIncidental
}

export const strongArm = {
  name: "Strong Arm",
  desc: "Treat thrown weapons as if they had 1 greater range.",
  ranked: false,
  active: taPassive
}

export const stunningBlow = {
  name: "Stunning Blow",
  desc: "While making Melee checks, may inflict damage as strain instead of wounds. This does not ignore soak.",
  ranked: false,
  active: taIncidental
}

export const stunningBlowImproved = {
  name: "Stunning Blow (Improved)",
  desc: "When dealing strain damage with Melee or Brawl checks, may spend [TR] to stagger target for 1 round per [TR]",
  ranked: false,
  active: taIncidental
}

export const superiorReflexes = {
  name: "Superior Reflexes",
  desc: "Gain +1 melee damage.",
  ranked: false,
  active: taPassive
}

export const surgeon = {
  name: "Surgeon",
  desc: "When making a Medicine check to help a character heal wounds, the target heals 1 additional wound per rank of Surgeon.",
  ranked: true,
  active: taPassive
}

export const swift = {
  name: "Swift",
  desc: "Do not suffer usual penalties for moving through difficult terrain.",
  ranked: false,
  active: taPassive
}

export const tacticalCombatTraining = {
  name: "Tactical Combat Training",
  desc: "Melee and Ranged (Heavy) become career skills.",
  ranked: false,
  active: taPassive
}

export const targettedBlow = {
  name: "Targeted Blow",
  desc: "After making a successful attack, may spend 1 Destiny Point to add damage equal to Agility to one hit.",
  ranked: false,
  active: taIncidental
}

export const technicalAptitude = {
  name: "Technical Aptitude",
  desc: "Reduces time needed to complete Computer-related tasks by 25% per rank.",
  ranked: true,
  active: taPassive
}

export const timeToGo = {
  name: "Time to Go",
  desc: "The character may spend 1 Destiny Point to perform a Move maneuver as an incidental to attempt to move into cover or out of the blast range of a weapon or explosion.",
  ranked: false,
  active: taManeuver
}

export const timeToGoImproved = {
  name: "Time to Go (Improved)",
  desc: "When activating Time to Go, allow 1 engaged ally to also perform an out of turn Move maneuver as an incidental to attempt to move into cover or out of the blast range of a weapon or explosion.",
  ranked: false,
  active: taManeuver
}

export const tinkerer = {
  name: "Tinkerer",
  desc: "May add 1 additional hard point to a number of items equal to ranks in Tinkerer. Each item may only be modified once.",
  ranked: true,
  active: taPassive
}

export const touchOfFate = {
  name: "Touch of Fate",
  desc: "Once per session, add [boost][boost] to any 1 check.",
  ranked: false,
  active: taIncidental
}

export const toughened = {
  name: "Toughened",
  desc: "Gain +2 wound threshold.",
  ranked: true,
  active: taPassive
}

export const trickyTarget = {
  name: "Tricky Target",
  desc: "Count vehicle or starship piloted as having a silhouette 1 lower when being attacked.",
  ranked: false,
  active: taPassive
}

export const trueAim = {
  name: "True Aim",
  desc: "Once per round, may perform a True Aim maneuver to gain benefits of aiming and upgrade combat check once per rank of True Aim.",
  ranked: true,
  active: taManeuver
}

export const uncannyReactions = {
  name: "Uncanny Reactions",
  desc: "Add [boost] per rank of Uncanny Reactions to all Vigilance checks.",
  ranked: true,
  active: taPassive
}

export const uncannySenses = {
  name: "Uncanny Senses",
  desc: "Add [boost] per rank of Uncanny Senses to all Perception checks.",
  ranked: true,
  active: taPassive
}

export const unstoppable = {
  name: "Unstoppable",
  desc: "If a Critical Injury roll is 1 or reduced to 1, do not receive the critical injury.",
  ranked: false,
  active: taPassive
}

export const utilityBelt = {
  name: "Utility Belt",
  desc: "Spend 1 Destiny Point to perform a Utility Belt incidental; produce a previously undocumented item or weapon (with restrictions) from a tool belt or a satchel.",
  ranked: false,
  active: taIncidental
}

export const utinni = {
  name: "Utinni!",
  desc: "Remove [setback] per rank of Utinni! from checks to find or scavenge items or gear. Such checks take half the time.",
  ranked: true,
  active: taPassive
}

export const vehicleCombatTraining = {
  name: "Vehicle Combat Training",
  desc: "Gunnery and Piloting (Planetary) become career skills.",
  ranked: false,
  active: taPassive
}

export const wellRounded = {
  name: "Well Rounded",
  desc: "Choose any 2 skills. They permanently become career skills.",
  ranked: true,
  active: taPassive
}

export const wellTraveled = {
  name: "Well Traveled",
  desc: "Knowledge (Core Worlds) and Knowledge (Outer Rim) become career skills.",
  ranked: false,
  active: taPassive
}

export const wheelAndDeal = {
  name: "Wheel and Deal",
  desc: "When selling good legally, gain 10% more credits per rank of Wheel and Deal.",
  ranked: true,
  active: taPassive
}

export const workLikeACharm = {
  name: "Works Like A Charm",
  desc: "Once per session, make one skill check using Presence rather than the characteristic linked to that skill.",
  ranked: false,
  active: taIncidental
}

export const pin = {
  name: "Pin",
  desc: "Take Pin action; make an Opposed athletics check to immobilize an engaged opponent until the end of the character's next turn. Spend [TR] to extend duration one round.",
  ranked: false,
  active: taAction
}

export const museumWorthy = {
  name: "Museum Worthy",
  desc: "Once per session, take Museum Worthy action, make a Hard ([difficulty][difficulty][difficulty]) Knowledge (Education) check to ascertain information regarding a relic, ruin, or piece of history.",
  ranked: false,
  active: taAction
}

export const BRNGITDWN = {
  name: "Bring It Down",
  desc: "Once per attack, spend 1 Destiny Point to add damage to a single hit equal to target's Brawn value.",
  ranked: false,
  active: taIncidental
}

export const HUNTERQUARRY = {
  name: "Hunter's Quarry",
  desc: "Take Hunter's Quarry action, make a Hard ([difficulty][difficulty][difficulty]) Survival check to upgrade the ability of all attacks made against a target at long range until the end of the character's next turn.",
  ranked: false,
  active: taAction
}

export const HUNTQIMP = {
  name: "Hunter's Quarry (Improved)",
  desc: "Suffer 2 strain to perform Hunter's Quarry action as a maneuver.",
  ranked: false,
  active: taPassive
}

export const BURLY = {
  name: "Burly",
  desc: "Reduce any wielded weapon's Cumbersome quality and Encumbrance rating by a number equal to ranks in Burly to a minimum of 1.",
  ranked: true,
  active: taPassive
}

export const FEARSOME = {
  name: "Fearsome",
  desc: "When an adversary becomes engaged with the character, the character may force the adversary to make a fear check, with the difficulty equal to the character's ranks in Fearsome.",
  ranked: true,
  active: taPassive
}

export const HEAVYHITTER = {
  name: "Heavy Hitter",
  desc: "Once per session, spend [TR] on a successful Ranged (Heavy) or Gunnery check to add the Breach 1 quality to the attack, or increase an existing Breach rating by 1.",
  ranked: false,
  active: taIncidental
}

export const HEROICRES = {
  name: "Heroic Resilience",
  desc: "Immediately after being hit by an attack but before suffering damage, spend 1 Destiny Point to increase soak by ranks in Resilience.",
  ranked: false,
  active: taIncidental
}

export const IMPDET = {
  name: "Improvised Detonation",
  desc: "Once per session, make a Hard ([difficulty][difficulty][difficulty]) Mechanics check to perform the Improvised Detonation action and build an explosive device, dealing damage equal to ranks in Intellect + ranks in Mechanics + [success].",
  ranked: false,
  active: taAction
}

export const IMPDETIMP = {
  name: "Improvised Detonation (Improved)",
  desc: "Reduce the difficulty of Improvise Detonation to Average ([difficulty][difficulty]) and increase damage to twice ranks in Mechanics.",
  ranked: false,
  active: taPassive
}

export const LOOM = {
  name: "Loom",
  desc: "When an ally engaged with the character makes a successful Charm, Deception, or Negotiation check, the character adds [advantage] per rank in Coercion to the ally's check.",
  ranked: false,
  active: taPassive
}

export const RAINDEATH = {
  name: "Rain of Death",
  desc: "Perform the Rain of Death maneuver to ignore the increased difficulty due to the Auto-fire quality of attacks made this turn.",
  ranked: false,
  active: taManeuver
}

export const STEADYNERVES = {
  name: "Steady Nerves",
  desc: "Remove [setback] per rank of Steady Nerves from Cool or Skulduggery checks.",
  ranked: true,
  active: taPassive
}

export const TALKTALK = {
  name: "Talk the Talk",
  desc: "When making a Knowledge skill check, the character may spend 1 Destiny Point to substitute Knowledge (Underworld) or Streetwise for the required skill.",
  ranked: false,
  active: taIncidental
}

export const WALKWALK = {
  name: "Walk the Walk",
  desc: "The character may spend 1 Destiny Point to add damage equal to his ranks in Streetwise to one hit of a successful Brawl check.",
  ranked: false,
  active: taIncidental
}

export const IDEALIST = {
  name: "Idealist",
  desc: "Spend 1 stain to add an [advantage] on a skill check.",
  ranked: true,
  active: taIncidental
}

export const AAO = {
  name: "Against All Odds",
  desc: "When incapacitated, perform Against All Odds action, making Hard ([difficulty][difficulty][difficulty]) Resilience check with [FO] equal to Force rating. Heal wounds equal to [success], spend [FP] to add [success].",
  ranked: false,
  active: taAction
}

export const ANIMALBOND = {
  name: "Animal Bond",
  desc: "Develop long-term bond with single animal of silhouette no greater than half Force rating rounded down.",
  ranked: false,
  active: taPassive
}

export const ANIMALBONDIMP = {
  name: "Animal Bond (Improved)",
  desc: "When spending a maneuver to direct a bonded animal, the character may suffer 1 strain to add [boost] to the animals next check.",
  ranked: false,
  active: taPassive
}

export const ANIMALEMP = {
  name: "Animal Empathy",
  desc: "When making checks to handle or tame animals, add [FO] no greater than Force rating to the check. Spend [FP] to add [success] or [advantage] to the check.",
  ranked: false,
  active: taPassive
}

export const ATARU = {
  name: "Ataru Technique",
  desc: "When making a check using the Lightsaber skill, the character may use Agility instead of Brawn.",
  ranked: false,
  active: taPassive
}

export const BODIMP = {
  name: "Body Guard (Improved)",
  desc: "Once per session, when an ally protected by the Body Guard maneuver suffers a hit, suffer the hit instead.",
  ranked: false,
  active: taIncidentalOOT
}

export const BODSUP = {
  name: "Body Guard (Supreme)",
  desc: "Body Guard maneuver may protect a number of engaged characters up to ranks in Resilience.",
  ranked: false,
  active: taPassive
}

export const CALMAURA = {
  name: "Calming Aura",
  desc: "When an opponent targets character with a Force power, reduce [FP] generated by 1.",
  ranked: false,
  active: taPassive
}

export const CALMAURAIMP = {
  name: "Calming Aura (Improved)",
  desc: "Spend a maneuver and suffer 2 strain to extend Calming Aura's effects to allies equal to Willpower at short range until start of next turn.",
  ranked: false,
  active: taManeuver
}

export const CENTBEING = {
  name: "Center of Being",
  desc: "Take a Center of Being maneuver. Until the beginning of next turn, attacks against the character increase their critical rating by 1 per rank of Center of Being.",
  ranked: true,
  active: taManeuver
}

export const CENTBEINGIMP = {
  name: "Center of Being (Improved)",
  desc: "Suffer 1 strain to perform Center of Being maneuver as an incidental.",
  ranked: false,
  active: taPassive
}

export const CIRCLESHELTER = {
  name: "Circle of Shelter",
  desc: "When an engaged ally suffers a hit, may use Parry or Reflect incidental against the hit.",
  ranked: false,
  active: taPassive
}

export const COMPTECH = {
  name: "Comprehend Technology",
  desc: "Take Comprehend Technology action; make an Average ([difficulty][difficulty]) Knowledge (Education) check to use Force rating as ranks in skills to use a single item.",
  ranked: false,
  active: taAction
}

export const CONDITIONED = {
  name: "Conditioned",
  desc: "Remove [setback] per rank of Conditioned from Athletics and Coordination check. Reduce the damage and strain suffered from falling by 1 per rank of Conditioned.",
  ranked: true,
  active: taPassive
}

export const CONTPLAN = {
  name: "Contingency Plan",
  desc: "Spend 1 Destiny Point to recover strain equal to Cunning rating.",
  ranked: false,
  active: taIncidentalOOT
}

export const COUNTERST = {
  name: "Counterstrike",
  desc: "When an attack misses the character and generates [despair] or [TH][TH], may upgrade next Lightsaber (Cunning) check against attacker during encounter once.",
  ranked: false,
  active: taPassive
}

export const DEFCIRCLE = {
  name: "Defensive Circle",
  desc: "May take the Defensive Circle action, making a Hard ([difficulty][difficulty][difficulty]) Lightsaber (Intellect) check. The character, plus one ally within short range per [success], gains X defense until the beginning of next turn. X equals 1, plus 1 per [advantage][advantage].",
  ranked: false,
  active: taAction
}

export const DEFTRAIN = {
  name: "Defensive Training",
  desc: "When wielding a Lightsaber, Melee, or Brawl weapon, the weapon gains the Defensive quality with a rating equal to ranks in Defensive Training.",
  ranked: true,
  active: taPassive
}

export const DISRUPSTRIKE = {
  name: "Disruptive Strike",
  desc: "Perform Disruptive Strike action; make a Lightsaber (Cunning) combat check, adding [FO] no greater than Force rating. Spend [FP] to add [FA] to the next combat check the target makes.",
  ranked: false,
  active: taAction
}

export const DJEMSODEFL = {
  name: "Djem So Deflection",
  desc: "After using Reflect, may spend 1 Destiny Point to perform Move maneuver as out-of-turn incidental to close distance with or engage opponent.",
  ranked: false,
  active: taIncidentalOOT
}

export const DRAWCLOSER = {
  name: "Draw Closer",
  desc: "Perform Draw Closer action; make a Lightsaber (Willpower) combat check against one silhouette 1 target within medium range, adding [FO] no greater than Force rating to check. Spend [FP] to move target one range band closer or to add [success] to check.",
  ranked: false,
  active: taAction
}

export const DUELTRAIN = {
  name: "Duelist's Training",
  desc: "Add [boost] to Melee and Lightsaber checks when engaged with only one opponent.",
  ranked: false,
  active: taPassive
}

export const ENHLEAD = {
  name: "Enhanced Leader",
  desc: "When making a Leadership check, add [FO] no greater than Force rating. Spend [FP] to add [success] or [advantage] to the result.",
  ranked: false,
  active: taPassive
}

export const FALLAVAL = {
  name: "Falling Avalanche",
  desc: "Suffer 2 strain to add damage equal to Brawn to next Lightsaber combat check made that turn.",
  ranked: false,
  active: taIncidental
}

export const FEINT = {
  name: "Feint",
  desc: "Spend [TR] or [advantage][advantage][advantage] generated on a missed melee attack to upgrade difficulty of opponent's next attack targeting character by ranks in Feint.",
  ranked: true,
  active: taPassive
}

export const FORCEASSAULT = {
  name: "Force Assault",
  desc: "Spend [TR] or [advantage][advantage][advantage] on a missed Lightsaber (Willpower) combat check to immediately perform Move Force power action as maneuver.",
  ranked: false,
  active: taPassive
}

export const FORCEPROT = {
  name: "Force Protection",
  desc: "Perform the Force Protection maneuver; suffer 1 strain and commit [FO] up to ranks of Force Protection. Increase soak by number of [FO] committed until beginning of next turn. Suffer 1 strain every turn [FO] remains committed.",
  ranked: true,
  active: taManeuver
}

export const FOREWARN = {
  name: "Forewarning",
  desc: "Perform the Forewarning action. All allies within medium range increase defense by character's Force rating until they act in the encounter.",
  ranked: true,
  active: taAction
}

export const HAWKSWOOP = {
  name: "Hawk Bat Swoop",
  desc: "Take the Hawk Bat Swoop action. Perform a Lightsaber (Agility) combat check against target within short range, adding [FO] no greater than Force rating. Spend [FP] to engage target and spend [FP] to add [advantage] to check.",
  ranked: true,
  active: taAction
}

export const HEALTRANCE = {
  name: "Healing Trance",
  desc: "Commit [FO]. For every full encounter [FO] remains committed, heal 1 wound per rank of Healing Trance.",
  ranked: true,
  active: taAction
}

export const HEALTRANCEIMP = {
  name: "Healing Trance (Improved)",
  desc: "When healing wounds due to Healing Trance, make a Resilience check to heal a Critical Injury. Difficulty of the check equals severity of the Critical Injury.",
  ranked: false,
  active: taPassive
}

export const IMBUEITEM = {
  name: "Imbue Item",
  desc: "Take the Imbue Item maneuver; suffer 1 strain and commit [FO] to grant one weapon, piece of armor, or item an improvement while [FO] remains committed. Suffer 1 strain every round [FO] remains committed.",
  ranked: false,
  active: taManeuver
}

export const INTUITEVA = {
  name: "Intuitive Evasion",
  desc: "Perform the Intuitive Evasion maneuver; suffer 1 strain and commit [FO] up to ranks of Intuitive Evasion. Upgrade difficulty of combat checks targeting starship or vehicle by equal amount. Suffer 1 strain every round [FO] remains committed.",
  ranked: true,
  active: taManeuver
}

export const INTUITIMP = {
  name: "Intuitive Improvements",
  desc: "When making check to craft or repair item, may add [FO] no greater than Force rating to check. Spend [FP][FP] to increase hard points by 1, to max of +2.",
  ranked: false,
  active: taPassive
}

export const INTUITSHOT = {
  name: "Intuitive Shot",
  desc: "When aimng a Ranged (Heavy) or Range (Light) combat check, add [FO] no greater than Force rating to the check. May spend [FP] to add [success] or [advantage].",
  ranked: false,
  active: taPassive
}

export const INTUITSTRIKE = {
  name: "Intuitive Strike",
  desc: "When making a combat check with a planetary scale weapon, add [FO] no greater than Force rating to the check. Spend [FP][FP] to add [success] or [advantage].",
  ranked: false,
  active: taPassive
}

export const KEENEYED = {
  name: "Keen Eyed",
  desc: "Remove [setback] per rank of Keen Eyed from Perception and Vigilance checks. Decrease time to search a specific area by half.",
  ranked: true,
  active: taPassive
}

export const KNOWPOW = {
  name: "Knowledge is Power",
  desc: "Once per session, when making a check count Force rating as being equal to ranks in Knowledge (Lore).",
  ranked: false,
  active: taIncidental
}

export const KNOWHEAL = {
  name: "Knowledgeable Healing",
  desc: "When healing an ally, spend 1 Destiny Point to heal additional wounds equal to ranks in Knowledge (Xenology).",
  ranked: false,
  active: taPassive
}

export const MAKFIN = {
  name: "Makashi Finish",
  desc: "Take the Makashi Finish action; Perform a Lightsaber (Presence) combat check against engaged target, adding [FO] no greater than Force rating. Spend [FP] to add +10 to any resulting Critical Injury rolls.",
  ranked: false,
  active: taAction
}

export const MAKFLOUR = {
  name: "Makashi Flourish",
  desc: "Once per encounter, perform Makashi Flourish action. Make an Average ([difficulty][difficulty]) Lightsaber (Presence) check. 1 engaged opponent suffers strain equal to [success], and heal an equal amount of strain.",
  ranked: false,
  active: taAction
}

export const MAKTECH = {
  name: "Makashi Technique",
  desc: "When making a check using the Lightsaber skill, the character may use Presence instead of Brawn.",
  ranked: false,
  active: taPassive
}

export const MASTART = {
  name: "Master Artisan",
  desc: "Once per round, may take the Master Artisan Incidental; suffer 2 strain to decrease the difficulty of next Mechanics check by 1, to a minimum of Easy ([difficulty]).",
  ranked: false,
  active: taIncidental
}

export const MENTBOND = {
  name: "Mental Bond",
  desc: "May perform the Mental Bond action. Commit [FO]. While committed, may communicate with bonded animal at long range and see and hear through its senses.",
  ranked: false,
  active: taAction
}

export const MENTTOOLS = {
  name: "Mental Tools",
  desc: "Always count as having the right tools for the job when performing Mechanics checks.",
  ranked: false,
  active: taPassive
}

export const MULTOPP = {
  name: "Multiple Opponents",
  desc: "Add [boost] to Lightsaber, Brawl, and Melee checks when engaged with multiple opponents.",
  ranked: false,
  active: taPassive
}

export const NATBLADE = {
  name: "Natural Blademaster",
  desc: "Once per session, may reroll any 1 Lightsaber or Melee check.",
  ranked: false,
  active: taIncidental
}

export const NATMYSTIC = {
  name: "Natural Mystic",
  desc: "Once per session, may reroll any 1 Force power check.",
  ranked: false,
  active: taIncidental
}

export const NIMTECH = {
  name: "Niman Technique",
  desc: "When making a Lightsaber skill check, the character may use Willpower instead of Brawn.",
  ranked: false,
  active: taPassive
}

export const NOWYOUSEE = {
  name: "Now You See Me",
  desc: "Once per session, take Now You See Me action. Make a Hard ([difficulty][difficulty][difficulty]) Deception check to make a number of NPC's equal to Cunning within medium range forget about character.",
  ranked: false,
  active: taAction
}

export const ONEUNI = {
  name: "One With The Universe",
  desc: "Once per session, mediate, then perform One with the Universe action; make Average ([difficulty][difficulty]) Astrogation check. If successful, add [LI] to all Force power checks in next encounter. If successful with [TH], add [DA] instead.",
  ranked: false,
  active: taAction
}

export const PARRY = {
  name: "Parry",
  desc: "When hit by a melee attack, suffer 3 strain to reduce damage by 2 plus ranks in Parry.",
  ranked: true,
  active: taIncidentalOOT
}

export const PARRYIMP = {
  name: "Parry (Improved)",
  desc: "When parrying a hit that generate [despair] or [TH][TH][TH], may hit attacker once with Lightsaber, Brawl, or Melee weapon (dealing base damage) after original attack resolves.",
  ranked: false,
  active: taIncidentalOOT
}

export const PARRYSUP = {
  name: "Parry (Supreme)",
  desc: "If the user did not make a combat check during his previous turn, may suffer 1 strain to use Parry.",
  ranked: false,
  active: taPassive
}

export const PHYSICIAN = {
  name: "Physician",
  desc: "When making a Medicine check to help a character heal wounds, the target heals 1 additional strain per rank of Physician.",
  ranked: true,
  active: taPassive
}

export const PREEMAVOID = {
  name: "Preemptive Avoidance",
  desc: "May spend 1 Destiny Point to disengage from engaged enemy as an out-of-turn incidental.",
  ranked: false,
  active: taIncidentalOOT
}

export const PREYWEAK = {
  name: "Prey on the Weak",
  desc: "Add +1 damage to one hit of successful combat checks against disoriented targets per rank of Prey on the Weak.",
  ranked: true,
  active: taPassive
}

export const QUICKMOVE = {
  name: "Quick Movement",
  desc: "Suffer 2 strain to perform the Quick Movement incidental; add [FO] no greater than Force rating to next check. May spend [FP][FP] to perform one additional Move maneuver after action.",
  ranked: false,
  active: taIncidental
}

export const REFLECT = {
  name: "Reflect",
  desc: "When hit by a ranged attack, suffer 3 strain to reduce damage by 2 plus ranks in Reflect.",
  ranked: true,
  active: taIncidentalOOT
}

export const REFLECTIMP = {
  name: "Reflect (Improved)",
  desc: "When reflecting a hit that generated [despair] or [TH][TH][TH] may hit one target in medium range with the same damage as the initial hit, after original attack resolves.",
  ranked: false,
  active: taIncidentalOOT
}

export const REFLECTSUP = {
  name: "Reflect (Supreme)",
  desc: "If the user did not make a combat check during previous turn, may suffer 1 strain to use Reflect.",
  ranked: false,
  active: taPassive
}

export const RESDISARM = {
  name: "Resist Disarm",
  desc: "Suffer 2 strain to avoid being disarmed or have weapon damaged or destroyed.",
  ranked: false,
  active: taIncidentalOOT
}

export const SABERSW = {
  name: "Saber Swarm",
  desc: "Perform the Saber Swarm maneuver; suffer 1 strain to make next Lightsaber (Agility) combat check this turn gain the Linked item quality equal to Force rating during check.",
  ranked: false,
  active: taManeuver
}

export const SABERTHROW = {
  name: "Saber Throw",
  desc: "Perform Saber Throw action; make Lightsaber combat check as ranged attack at target within medium range, adding [FO] no greater than Force rating. Must spend [FP] and succeed to hit target; spend [FP] to have weapon return to hand.",
  ranked: false,
  active: taAction
}

export const SARSWEEP = {
  name: "Sarlacc Sweep",
  desc: "Increase difficulty of Lightsaber check by 1 to perform Sarlacc Sweep action. May spend [advantage][advantage] to hit additional engaged targets.",
  ranked: false,
  active: taAction
}

export const SENSEADV = {
  name: "Sense Advantage",
  desc: "Once per session, may add [setback][setback] to 1 NPC's skill check.",
  ranked: false,
  active: taIncidentalOOT
}

export const SHAREPAIN = {
  name: "Share Pain",
  desc: "May perform the Share Pain incidental when bonded animal suffers wounds. Reduce wounds suffered to half, then character suffers wounds equal to number reduced.",
  ranked: false,
  active: taIncidentalOOT
}

export const SHIENTECH = {
  name: "Shien Technique",
  desc: "When making a check using the Lightsaber skill, the character may use Cunning instead of Brawn.",
  ranked: false,
  active: taPassive
}

export const SHROUD = {
  name: "Shroud",
  desc: "The character may spend 1 Destiny Point to make himself undetectable via Force powers and make his own powers go unnoticed for the remainder of the encounter.",
  ranked: false,
  active: taIncidental
}

export const SLIPMIND = {
  name: "Slippery Minded",
  desc: "If under the effects of a Force power, perform the Slippery Minded action; make a Hard ([difficulty][difficulty][difficulty]) Deception check to immediately end effects of power.",
  ranked: false,
  active: taAction
}

export const SORESUTECH = {
  name: "Soresu Technique",
  desc: "When making a Lightsaber skill check, the character may use Intellect instead of Brawn.",
  ranked: false,
  active: taPassive
}

export const STRATFORM = {
  name: "Strategic Form",
  desc: "May take the Strategic Form action, making a Hard ([difficulty][difficulty][difficulty]) Lightsaber check rolling [FO] no greater than Force rating. If successful, 1 target within short range may only attack character for 1 round. Spend [FP] to extend effects for 1 target for 1 round.",
  ranked: false,
  active: taAction
}

export const SUMDJEM = {
  name: "Sum Djem",
  desc: "May spend [TR] or [advantage][advantage] with a successful Lightsaber check to disarm opponent.",
  ranked: false,
  active: taPassive
}

export const TERRIFY = {
  name: "Terrify",
  desc: "Take the Terrify action; make a Hard ([difficulty][difficulty][difficulty]) Coercion check, adding [FO] no greater than Force rating. Disorient one target within medium range per [success]. Spend [advantage][advantage] to extend duration and spend [FP] to immobilize affected target.",
  ranked: false,
  active: taManeuver
}

export const TERRIFYIMP = {
  name: "Terrify (Improved)",
  desc: "Reduce the difficulty of Terrify's check to Average ([difficulty][difficulty]) and may spend [TR] to stagger an affected target.",
  ranked: false,
  active: taPassive
}

export const FORCEALLY = {
  name: "The Force Is My Ally",
  desc: "Once per session, may suffer 2 strain to perform Force power action as maneuver.",
  ranked: false,
  active: taIncidental
}

export const UNITYASSAULT = {
  name: "Unity Assault",
  desc: "If a missed combat check generates [TR] or [advantage][advantage][advantage], may spend to perform Force power targeting allies as a maneuver.",
  ranked: false,
  active: taManeuver
}

export const VALFACT = {
  name: "Valuable Facts",
  desc: "Once per encounter, perform a Valuable Facts action: make an Average ([difficulty][difficulty]) Knowledge check. If successful, add [TR] to one ally's skill check during the encounter.",
  ranked: false,
  active: taAction
}

export const BADCOP = {
  name: "Bad Cop",
  desc: "May spend [advantage][advantage] from a Deception or Coercion check to upgrade ability of a single ally's subsequent Social Interaction check against the target a number of times equal to ranks in Bad Cop.",
  ranked: true,
  active: taPassive
}

export const BIGGESTFAN = {
  name: "Biggest Fan",
  desc: "Once per session, may take a Biggest Fan action; make a Hard ([difficulty][difficulty][difficulty]) Charm check to turn one NPC into the character's biggest fan.",
  ranked: false,
  active: taAction
}

export const CONGENIAL = {
  name: "Congenial",
  desc: "May suffer a number of strain to downgrade difficulty of Charm or Negotiation checks or upgrade difficulty when target by Charm or Negotiation checks, by an equal number Strain suffered this way cannot exceed ranks in Congenial.",
  ranked: true,
  active: taIncidental
}

export const COORDODGE = {
  name: "Coordination Dodge",
  desc: "When targeted by a combat check, may spend 1 Destiny Point to add [FA] equal to ranks in Coordination to check.",
  ranked: false,
  active: taIncidental
}

export const DISBEH = {
  name: "Distracting Behavior",
  desc: "Make a Distracting Behavior maneuver and suffer strain no greater than ranks in Cunning. Until the beginning of next turn, equal number of NPC's suffer [TH] on checks. Range increases with additional ranks.",
  ranked: true,
  active: taManeuver
}

export const DISBEHIMP = {
  name: "Distracting Behavior (Improved)",
  desc: "The Distracting Behavior maneuver inflicts [TH][TH] on NPC's checks when NPC's target character's allies.",
  ranked: false,
  active: taPassive
}

export const DECEPTAUNT = {
  name: "Deceptive Taunt",
  desc: "Once per session, may make Deceptive Taunt action. Make opposed Deception check. If successful, one adversary must attack the character during adversary's next turn.",
  ranked: false,
  active: taAction
}

export const GOODCOP = {
  name: "Good Cop",
  desc: "May spend [advantage][advantage] from a Charm or Negotiation check to upgrade ability of a single ally's subsequent Social Interaction check against the target a number of times equal to ranks in Good Cop.",
  ranked: true,
  active: taPassive
}

export const NATATHL = {
  name: "Natural Athlete",
  desc: "Once per session, may reroll any 1 Athletics or Coordination check.",
  ranked: false,
  active: taIncidental
}

export const NATMERCH = {
  name: "Natural Merchant",
  desc: "Once per session, may reroll any 1 Streetwise or Negotiation check.",
  ranked: false,
  active: taIncidental
}

export const THROWCRED = {
  name: "Throwing Credits",
  desc: "At beginning of session, spend 100 credits to ignore strain threshold penalty due to triggered Obligation.",
  ranked: false,
  active: taIncidental
}

export const UNRELSKEP = {
  name: "Unrelenting Skeptic",
  desc: "When targeted by a Deception check, the character automatically adds [FA] to the check equal to ranks in Vigilance.",
  ranked: false,
  active: taPassive
}

export const UNRELSKEPIMP = {
  name: "Unrelenting Skeptic (Improved)",
  desc: "When targeted by a Deception check that fails, may spend 1 Destiny Point to add [despair] to results.",
  ranked: false,
  active: taIncidental
}

export const BEASTWRANG = {
  name: "Beast Wrangler",
  desc: "Add [boost] per rank of Beast Wrangler to checks to tame or wrangle creatures.",
  ranked: true,
  active: taPassive
}

export const BOLSTARMOR = {
  name: "Bolstered Armor",
  desc: "Increase the armor value of Signature Vehicle by 1 per rank of Bolstered Armor.",
  ranked: true,
  active: taPassive
}

export const CORSEND = {
  name: "Corellian Sendoff",
  desc: "Take a Corellian Sendoff action targeting two ships or vehicles at Close range; make a Hard ([difficulty][difficulty][difficulty]) Cool check to cause the targets to suffer a minor collision.",
  ranked: false,
  active: taAction
}

export const CORSENDIMP = {
  name: "Corellian Sendoff (Improved)",
  desc: "When performing a Corellian Sendoff, the targets suffer a major collision instead.",
  ranked: false,
  active: taPassive
}

export const CUSTCOOL = {
  name: "Customized Cooling Unit",
  desc: "Increase the system strain threshold of Signature Vehicle by 2 per rank of Customized Cooling Unit.",
  ranked: true,
  active: taPassive
}

export const EXHANDLER = {
  name: "Expert Handler",
  desc: "Remove [setback] per rank of Expert Handler from Survival checks made to ride beasts.",
  ranked: true,
  active: taPassive
}

export const FANCPAINT = {
  name: "Fancy Paint Job",
  desc: "Upgrade all Charm, Deception, and Negotiation checks made in the presence of Signature Vehicle once.",
  ranked: false,
  active: taPassive
}

export const FORTVAC = {
  name: "Fortified Vacuum Seal",
  desc: "Increase the hull trauma threshold of Signature Vehicle by 1 per rank of Fortified Vacuum Seal.",
  ranked: true,
  active: taPassive
}

export const HIGHGTRAIN = {
  name: "High-G Training",
  desc: "When a starship or vehicle being piloted would suffer system strain, may suffer strain up to ranks in High-G Training to prevent an equal amount of system strain.",
  ranked: true,
  active: taIncidental
}

export const KOITURN = {
  name: "Koiogran Turn",
  desc: "When an opponent has gained the advantage on a starship or vehicle being piloted, may perform a Koiogran Turn maneuver to remove the effects.",
  ranked: false,
  active: taManeuver
}

export const LARGEPROJ = {
  name: "Larger Project",
  desc: "Signature Vehicle can have a silhouette 1 larger per rank of Larger Project.",
  ranked: true,
  active: taPassive
}

export const NOTTODAY = {
  name: "Not Today",
  desc: "Once per session, spend a Destiny Point to save Signature Vehicle from destruction.",
  ranked: false,
  active: taIncidental
}

export const OVERAMMO = {
  name: "Overstocked Ammo",
  desc: "Increase the value of the Limited Ammo quality of any weapons mounted on Signature Vehicle by 1 per rank of Overstocked Ammo.",
  ranked: true,
  active: taPassive
}

export const REINFRAME = {
  name: "Reinforced Frame",
  desc: "Signature Vehicle gains Massive 1: when making an attack targeting the ship or vehicle, the Critical rating of any weapon used counts as 1 higher.",
  ranked: false,
  active: taPassive
}

export const SHOWBOAT = {
  name: "Showboat",
  desc: "When making a check in a starship or vehicle, may suffer 2 strain to gain [TR] on success or [despair] on failure.",
  ranked: false,
  active: taIncidental
}

export const SIGVEH = {
  name: "Signature Vehicle",
  desc: "Choose one starship or vehicle as Signature Vehicle Upgrade all Mechanics checks made on that vehicle once.",
  ranked: false,
  active: taPassive
}

export const SOOTHTONE = {
  name: "Soothing Tone",
  desc: "Take a Soothing Tone action; make an Average ([difficulty][difficulty]) Knowledge (Xenology) check to allow a beast to recover strain equal to [success].",
  ranked: false,
  active: taAction
}

export const SPUR = {
  name: "Spur",
  desc: "Take a Spur action; make a Hard ([difficulty][difficulty][difficulty]) Survival check to increase a beast's top speed by 1. The beast suffers 2 strain every round it stays spurred.",
  ranked: false,
  active: taAction
}

export const SPURIMP = {
  name: "Spur (Improved)",
  desc: "Suffer 1 strain to attempt Spur as a maneuver and decrease its difficult to Average ([difficulty][difficulty]).",
  ranked: false,
  active: taManeuver
}

export const SPURSUP = {
  name: "Spur (Supreme)",
  desc: "When activating and maintaining Spur, the beast only suffers 1 strain instead of 2.",
  ranked: false,
  active: taPassive
}

export const TUNEDTHRUST = {
  name: "Tuned Maneuvering Thrusters",
  desc: "Increase the handling of Signature Vehicle by 1 per rank of Tuned Maneuvering Thrusters.",
  ranked: true,
  active: taPassive
}

export const CALLEM = {
  name: "Call 'Em",
  desc: "Do not add [setback] to combat checks due to the use of the Aim maneuver.",
  ranked: false,
  active: taPassive
}

export const DISARMSMILE = {
  name: "Disarming Smile",
  desc: "Take the Disarming Smile action; succeed at an opposed Charm check to lower all defenses of a target by ranks in Disarming Smile until the end of the encounter.",
  ranked: true,
  active: taAction
}

export const DONTSHOOT = {
  name: "Don't Shoot!",
  desc: "Once per session as an action, make a Hard ([difficulty][difficulty][difficulty]) Charm check. On a success, cannot be target of combat checks until the end of the encounter or until making a combat check.",
  ranked: false,
  active: taAction
}

export const DOUBLEORNOTHING = {
  name: "Double or Nothing",
  desc: "Suffer 2 strain to perform the Double or Nothing incidental to increase the difficulty of the next check by one. Then, after canceling opposing symbols, double the amount of remaining [advantage]",
  ranked: false,
  active: taPassive
}

export const DOUBLEORNOTHINGIMP = {
  name: "Double or Nothing (Improved)",
  desc: "When performing the Double or Nothing incidental, after canceling opposing symbols, also double the amount of remaining [success].",
  ranked: false,
  active: taPassive
}

export const DOUBLEORNOTHINGSUP = {
  name: "Double or Nothing (Supreme)",
  desc: "When performing the Double or Nothing incidental, also double the number of [TR] and [despair].",
  ranked: false,
  active: taPassive
}

export const FORTFAVORBOLD = {
  name: "Fortune Favors the Bold",
  desc: "Once per session as an incidental, suffer 2 strain to flip one dark side Destiny Point to light side.",
  ranked: false,
  active: taIncidental
}

export const GUNSBLAZING = {
  name: "Guns Blazing",
  desc: "As an incidental, suffer 2 Strain to avoid increasing the difficulty of a Ranged (Light) check to attack with two weapons.",
  ranked: false,
  active: taIncidental
}

export const JUSTKID = {
  name: "Just Kidding!",
  desc: "Once per round as an incidental spend 1 Destiny Point to ignore [despair] generated on a social check by the character or any ally in short range.",
  ranked: false,
  active: taIncidental
}

export const QUICKDRIMP = {
  name: "Quick Draw (Improved)",
  desc: "May use Quick Draw twice per round.",
  ranked: false,
  active: taPassive
}

export const SECCHANCE = {
  name: "Second Chances",
  desc: "Once per encounter choose a number of positive dice equal to ranks in Second Changes and reroll them.",
  ranked: true,
  active: taIncidental
}

export const SORRYMESS = {
  name: "Sorry About the Mess",
  desc: "Decrease the Critical Rating of a weapon by 1 (to a minimum of 1) against targets that have not yet acted this encounter.",
  ranked: false,
  active: taPassive
}

export const SPITFIRE = {
  name: "Spitfire",
  desc: "After a successful combined check with two Ranged (Light) weapons, additional hits can be allocated to other targets within range of the weapon.",
  ranked: false,
  active: taPassive
}

export const UPANTE = {
  name: "Up the Ante",
  desc: "When gambling win 10% more credits per rank of Up the Ante.",
  ranked: true,
  active: taPassive
}

export const BADPRESS = {
  name: "Bad Press",
  desc: "Once per session, choose an organization and make a Hard ([difficulty][difficulty][difficulty]) Deception check. On success, organization members have their wound thresholds reduced by 1, plus 1 per [success][success][success], until the end of the session.",
  ranked: false,
  active: taAction
}

export const BLACKMAIL = {
  name: "Blackmail",
  desc: "When an NPC exceeds his strain threshold, may spend 1 Destiny Point to convince that NPC to perform a single task of choice instead.",
  ranked: false,
  active: taIncidentalOOT
}

export const CUTQUEST = {
  name: "Cutting Question",
  desc: "Once per encounter, when making a Coercion skill check, the character may use Deception skill instead.",
  ranked: false,
  active: taIncidental
}

export const DISCREDIT = {
  name: "Discredit",
  desc: "Once per encounter, take the Discredit action, make a Hard ([difficulty][difficulty][difficulty]) Deception check to upgrade the difficulty of one character's social checks once, plus once for every [advantage][advantage], until of the encounter.",
  ranked: false,
  active: taAction
}

export const ENCCOMM = {
  name: "Encoded Communique",
  desc: "Upgrade the difficulty of checks to decrypt this character's coded messages without the proper cipher a number of times equal to Computers skill.",
  ranked: false,
  active: taPassive
}

export const ENCWORD = {
  name: "Encouraging Words",
  desc: "After an engaged ally fails a check, may suffer 1 strain to assist that ally's next check this encounter as an out of turn incidental.",
  ranked: false,
  active: taIncidentalOOT
}

export const INKNOW = {
  name: "In The Know",
  desc: "Once per session while in an enemy facility or vessel, may perform the Inside Knowledge action, make a Hard ([difficulty][difficulty][difficulty]) Skulduggery check. Character may then find a single personal scale item with a rarity no greater than Cunning plus 2 previously stashed here, or gain a narrative benefit.",
  ranked: true,
  active: taPassive
}

export const INKNOWIMP = {
  name: "In The Know (Improved)",
  desc: "Once per session, make an opposed Deception vs Vigilance check with the difficulty downgraded once per rank of In the Know to have a target NPC believe specific false intelligence.",
  ranked: false,
  active: taAction
}

export const INFORM = {
  name: "Informant",
  desc: "Once per session, may reveal a contact who can shed light on a chosen subject.",
  ranked: false,
  active: taIncidental
}

export const INTERJECT = {
  name: "Interjection",
  desc: "After another character makes a social check, suffer 3 strain to take an interjection incidental make an Average ([difficulty][difficulty]) Vigilance check to add [success] or [FA] equal to [success], and [advantage] or [TH] equal to [advantage] to the check.",
  ranked: false,
  active: taIncidentalOOT
}

export const KNOWALL = {
  name: "Know-It-All",
  desc: "Once per session, perfectly recall an important fact previously learned as if a Destiny Point had been spent.",
  ranked: false,
  active: taIncidental
}

export const PLAUSDENIMP = {
  name: "Plausible Deniability (Improved)",
  desc: "Take an Improved Plausible Deniability action makes a Hard ([difficulty][difficulty][difficulty]) Coercion check to convince one bystander per rank of Plausible Deniability to depart quietly.",
  ranked: false,
  active: taAction
}

export const POSSPIN = {
  name: "Positive Spin",
  desc: "Whenever any character's Duty would increase, it increases by an additional 1 per rank of Positive Spin.",
  ranked: true,
  active: taPassive
}

export const POSSPINIMP = {
  name: "Positive Spin (Improved)",
  desc: "Once per session, if no PC's Duty triggered, make a Daunting ([difficulty][difficulty][difficulty][difficulty]) Charm check with the difficulty decreased once rank of Positive Spin to have one PC's Duty trigger.",
  ranked: false,
  active: taAction
}

export const RESEARCHIMP = {
  name: "Researcher (Improved)",
  desc: "On a successful Knowledge check, character and allies gain automatic [advantage] per rank of Researcher on checks to act on those facts until the end of his next turn.",
  ranked: false,
  active: taPassive
}

export const SUPPEVI = {
  name: "Supporting Evidence",
  desc: "When assisting an ally with a Charm, Deception, Leadership, or Negotiation check, add automatic [advantage] per rank of Supporting Evidence.",
  ranked: true,
  active: taPassive
}

export const THORASS = {
  name: "Thorough Assessment",
  desc: "Once per session, take a Thorough Assessment action: make a Hard ([difficulty][difficulty][difficulty]) Knowledge check to gain Boost dice equal to [success] that can be distributed during the encounter.",
  ranked: false,
  active: taAction
}

export const TWISTWORD = {
  name: "Twisted Words",
  desc: "When an incoming social check generates [TH][TH] or [despair], may suffer 1 strain as an incidental to inflict strain equal to ranks in Coercion on speaker.",
  ranked: false,
  active: taIncidentalOOT
}

export const DRIVEBACK = {
  name: "Drive Back",
  desc: "The Inquisitor may spend [TR] or [advantage][advantage][advantage] on a missed Brawl, Melee, or Lightsaber combat check to force target to make a move maneuver in a direction of the Inquisitor's choice.",
  ranked: false,
  active: taPassive
}

export const ARMSUP = {
  name: "Armor Master (Supreme)",
  desc: "Once per round, when the character suffers a Critical Injury, he may suffer 3 strain to take the Armor Master incidental. If he does he reduces the Critical Injury result that he suffers by 10 per point of his soak, to a minimum of 1.",
  ranked: false,
  active: taIncidentalOOT
}

export const BALEGAZE = {
  name: "Baleful Gaze",
  desc: "When targeted by combat check from within medium range, may spend a Destiny Point to upgrade the difficulty of the check a number of times equal to ranks in Coercion.",
  ranked: false,
  active: taIncidentalOOT
}

export const BLINDSPOT = {
  name: "Blind Spot",
  desc: "The character and allies within short range add automatic [advantage] to combat checks they make while benefiting from cover.",
  ranked: false,
  active: taPassive
}

export const GRAPPLE = {
  name: "Grapple",
  desc: "Once per round, the character may perform the Grapple maneuver. Until the beginning of the character's next turn, enemies must spend two maneuvers instead of one maneuver to move from engaged range to short range of him.",
  ranked: false,
  active: taManeuver
}

export const NOESC = {
  name: "No Escape",
  desc: "May spend [advantage][advantage] from a Coercion check or [TH][TH] from a foe's Discipline check; that target cannot perform a free maneuver during his next turn.",
  ranked: false,
  active: taPassive
}

export const OVERBAL = {
  name: "Overbalance",
  desc: "Whenever an enemy engaged with the character makes a combat check, after the attack is resolved, the character may spend [despair] or [TH][TH][TH] to stagger the attacker until the end of the attacker's next turn.",
  ranked: false,
  active: taPassive
}

export const PRECSTR = {
  name: "Precision Strike",
  desc: "When this character inflicts a Critical Injury with a Brawl, Melee, or Lightsaber weapon, may suffer 1 strain to change the result to any Easy ([difficulty]) Critical Injury result.",
  ranked: false,
  active: taIncidentalOOT
}

export const PRIMEPOS = {
  name: "Prime Positions",
  desc: "When this character or an ally in short range takes cover, he increases soak against ranged attacks by 1 per rank of Prime Positions until he leaves that cover.",
  ranked: true,
  active: taPassive
}

export const PRESSHOT = {
  name: "Prescient Shot",
  desc: "Add [boost] to all Ranged (Light) checks unless the target is immune to Force powers.",
  ranked: false,
  active: taPassive
}

export const PROPAIM = {
  name: "Prophetic Aim",
  desc: "While benefiting from an Aim maneuver, [despair] from the character's Ranged (Heavy) and Ranged (Light) checks cannot cause attacks to hit allies engaged with the target.",
  ranked: false,
  active: taPassive
}

export const REINITEM = {
  name: "Reinforce Item",
  desc: "Take the Reinforce Item maneuver: commit [LI][LI] to grant one weapon or piece of armor the Cortosis quality while [LI][LI] remains committed. Suffer 3 strain every round [LI][LI] remain committed.",
  ranked: false,
  active: taManeuver
}

export const SUPPRFIRE = {
  name: "Suppressing Fire",
  desc: "The character and each ally within short range may spend [advantage] on their failed combat checks to inflict one strain on the target per rank of Suppressing Fire. Each character can only activate this effect once per round.",
  ranked: true,
  active: taPassive
}

export const CALMCOMM = {
  name: "Calm Commander",
  desc: "May use ranks in Cool to upgrade Mass Combat checks instead of ranks in Leadership.",
  ranked: false,
  active: taPassive
}

export const CLEVCOMM = {
  name: "Clever Commander",
  desc: "May use ranks in Knowledge (Warfare) to upgrade Mass Combat checks instead of ranks in Leadership.",
  ranked: false,
  active: taPassive
}

export const COMMPRESIMP = {
  name: "Commanding Presence (Improved)",
  desc: "Once per session, may take Commanding Presence action; make an opposed Cool vs. Discipline check to force target to leave the encounter.",
  ranked: false,
  active: taAction
}

export const CONFIMP = {
  name: "Confidence (Improved)",
  desc: "My spend [TR] on a fear check to steady the nerves of other allies making the same fear check. If the character does so, each ally within short range who makes the fear check adds automatic [success] equal to the character's ranks in Confidence to the results of the check.",
  ranked: false,
  active: taPassive
}

export const MASINST = {
  name: "Master Instructor",
  desc: "Once per round as an out of turn incidental, may suffer 2 strain to allow ally to use character's ranks in Discipline for next Discipline check an ally makes.",
  ranked: false,
  active: taIncidentalOOT
}

export const MASSTRAT = {
  name: "Master Strategist",
  desc: "Once per phase during a mass combat, may suffer 2 strain to decrease difficulty of a Mass Combat check once.",
  ranked: false,
  active: taIncidentalOOT
}

export const NATINST = {
  name: "Natural Instructor",
  desc: "Once per session, may reroll one Discipline or Leadership check.",
  ranked: false,
  active: taIncidental
}

export const READANY = {
  name: "Ready for Anything",
  desc: "Remove [setback] per rank of Ready for Anything on Mass Combat checks and Cool or Vigilance checks to determine Initiative order.",
  ranked: true,
  active: taPassive
}

export const READANYIMP = {
  name: "Ready for Anything (Improved)",
  desc: "When making Cool or Vigilance checks to determine Initiative order, may spend [TR] to add [success] equal to ranks in Ready for Anything.",
  ranked: false,
  active: taPassive
}

export const THATHOWDONE = {
  name: "That's How It's Done",
  desc: "May suffer 1 strain on successful skill check to add [advantage] to the same skill check made by a number of allies equally to Willpower within short range during the next round.",
  ranked: true,
  active: taIncidental
}

export const WELLREAD = {
  name: "Well Read",
  desc: "Choose any 3 Knowledge skills. They permanently become career skills.",
  ranked: false,
  active: taPassive
}

export const CUSTLOAD = {
  name: "Custom Loadout",
  desc: "May add 2 additional hard points to Signature Vehicles.",
  ranked: false,
  active: taPassive
}

export const CYBERNETICIST = {
  name: "Cyberneticist",
  desc: "Remove [setback] per rank of Cyberneticist from checks to build, repair, and install cybernetic implants . Cybernetics cost 50% less.",
  ranked: true,
  active: taPassive
}

export const DEFTMAKER = {
  name: "Deft Maker",
  desc: "Remove [setback] per rank of Deft Maker from checks to repair, modify, construct, or program droids. Reduce the material cost to craft droids by 50%.",
  ranked: true,
  active: taPassive
}

export const ENGREDUN = {
  name: "Engineered Redundancies",
  desc: "Gain the ability to use emergency repair patches to heal. Additionally, can be healed with Mechanics checks.",
  ranked: false,
  active: taPassive
}

export const EYEDET = {
  name: "Eye for Detail",
  desc: "After making a Mechanics or Computers check, may suffer strain up to ranks in Eye for Detail to convert that many [success] to [advantage].",
  ranked: true,
  active: taIncidental
}

export const ENERGTRANS = {
  name: "Energy Transfer",
  desc: "May suffer 1 strain to use the Energy Transfer maneuver to power up an unpowered device or replenish exhausted ammunition for an energy weapon.",
  ranked: false,
  active: taManeuver
}

export const MACHMEND = {
  name: "Machine Mender",
  desc: "When making a Mechanics check to help a character heal wounds, the target heals 1 additional wound per rank of Machine Mender.",
  ranked: true,
  active: taPassive
}

export const MOREMACH = {
  name: "More Machine Than Man",
  desc: "Increase cybernetic implant cap by 1 per rank of More Machine than Man.",
  ranked: true,
  active: taPassive
}

export const OVERCHARGE = {
  name: "Overcharge",
  desc: "Once per encounter, may use the Overcharge action. Make a Hard ([difficulty][difficulty][difficulty]) Mechanics check. On success one installed cybernetic provides additional benefits. On [despair], overcharged cybernetic shorts out.",
  ranked: false,
  active: taAction
}

export const OVERCHARGEIMP = {
  name: "Overcharge (Improved)",
  desc: "May spend [advantage][advantage] or [TR] from Overcharge action to immediately take another action.",
  ranked: false,
  active: taPassive
}

export const OVERCHARGESUP = {
  name: "Supreme Overcharge",
  desc: "May perform the Overcharge action on any number of installed cybernetics. On [despair], one overcharged cybernetic shorts out.",
  ranked: false,
  active: taPassive
}

export const REROUTEPROC = {
  name: "Reroute Processors",
  desc: "Once per encounter, may take a Reroute Processors action, make an Average ([difficulty][difficulty]) Computers check to reduce one of a droid's characteristics by 1 and increase another of its characteristics by 1.",
  ranked: false,
  active: taAction
}

export const RESOURCEREFIT = {
  name: "Resourceful Refit",
  desc: "May perform the Resourceful Refit action, make an Average ([difficulty][difficulty]) Mechanics check to scavenge an old attachment to construct a new one, reducing its price by that of the dismantled attachment.",
  ranked: false,
  active: taAction
}

export const SPKBINIMP = {
  name: "Speaks Binary (Improved)",
  desc: "When directing NPC droids, those droids grand additional [boost] in addition to other benefits.",
  ranked: false,
  active: taPassive
}

export const SPKBINSUP = {
  name: "Speaks Binary (Supreme)",
  desc: "Once per encounter, may perform the Speaks Binary maneuver. A number of NPC droids up to ranks in Speaks Binary may use the character's ranks for 1 skill of character's choice.",
  ranked: false,
  active: taManeuver
}

export const DEATHBLOW = {
  name: "Deathblow",
  desc: "After making a successful attack with a non-starship/vehicle weapon, the character may spend one Destiny Point to add damage equal to his Willpower to one hit of the successful attack.",
  ranked: false,
  active: taPassive
}

export const ESSENKILL = {
  name: "Essential Kill",
  desc: "When making a non-Gunnery combat check, the character may add [FO] no greater than his Force rating to the check. The character may spend [FP] to add [advantage] or [FP][FP][FP] to add [TR] (character's choice) to the result.",
  ranked: false,
  active: taPassive
}

export const FORCECONN = {
  name: "Force Connection",
  desc: "When the character performs a Survival or Knowledge(Xenology) skill check, he may roll [FO] no greater than his Force rating. The character may spend [FP] to add [success] or [advantage] (character's choice) to the result.",
  ranked: false,
  active: taPassive
}

export const HARASS = {
  name: "Harass",
  desc: "Whenever the character's bonded animal makes a successful combat check against a target, it may forgo inflicting damage to upgrade the difficulty of the target's next check once instead.",
  ranked: false,
  active: taIncidental
}

export const HOLNAV = {
  name: "Holistic Navigation",
  desc: "When making an Astrogation skill check, the character may spend one Destiny Point to remove [despair], or to remove [TH] equal to his ranks in Perception.",
  ranked: false,
  active: taIncidental
}

export const INTUITNAV = {
  name: "Intuitive Navigation",
  desc: "When performing an Astrogation or Knowledge (Outer Rim) skill check, the character may roll [FO] no greater than his Force rating. The character may spend [FP] to ass [success] or [advantage] (character's choice) to the result.",
  ranked: false,
  active: taPassive
}

export const MARKDEATH = {
  name: "Marked for Death",
  desc: "Take the Marked for Death maneuver; committing [FO]. Add [advantage][advantage] to combat checks against target while [FO] remains committed but cannot use this talent again until the original target is incapacitated or the session ends. ",
  ranked: false,
  active: taManeuver
}

export const MENACE = {
  name: "Menace",
  desc: "Enemy within short range of the character's bonded animal adds [setback] to next Combat check made against the character.",
  ranked: false,
  active: taManeuver
}

export const MINDMAT = {
  name: "Mind Over Matter",
  desc: "The character may spend one Destiny Point to recover strain equal to to his Willpower rating.",
  ranked: false,
  active: taIncidentalOOT
}

export const ONENAT = {
  name: "One with Nature",
  desc: "When in the wilderness, the character may make a Simple (-) Survival check instead of Discipline or Cool to recover strain at the end of an encounter.",
  ranked: false,
  active: taPassive
}

export const PLANMAP = {
  name: "Planet Mapper",
  desc: "Remove [setback] per rank of Planet Mapper from Streetwise or Survival checks used for navigation on a world. Such checks also take half normal time.",
  ranked: true,
  active: taPassive
}

export const SHORTCUTIMP = {
  name: "Shortcut (Improved)",
  desc: "When engaging in a chase or race, may suffer 2 strain to add [success] equal to ranks in Shortcut to the check.",
  ranked: false,
  active: taIncidental
}

export const STUDPLOT = {
  name: "Studious Plotting",
  desc: "When making a Streetwise or Survival skill check to navigate on a world, the character may use Intellect instead of Cunning.",
  ranked: false,
  active: taPassive
}

export const SURVFIT = {
  name: "Survival of the Fittest",
  desc: "Once per session, when making a single check the character may treat his Force rating as being equal to ranks in Survival.",
  ranked: false,
  active: taIncidental
}

export const TERRKILL = {
  name: "Terrifying Kill",
  desc: "The character may spend 1 Destiny Point to take the Terrifying Kill mane.",
  ranked: false,
  active: taIncidental
}

export const AMBUSH = {
  name: "Ambush",
  desc: "Once per round while benefiting from cover, may make the Ambush maneuver. Add damage equal to Stealth skill to one hit of next successful combat check against a target within short range before the end of the turn.",
  ranked: false,
  active: taManeuver
}

export const CUNNSNARE = {
  name: "Cunning Snare",
  desc: "Once per encounter as an action, may create a trap. Any other character who moves to engaged range of the trap must make an Opposed Vigilance vs. Survival check to avoid harm and ill effects.",
  ranked: false,
  active: taAction
}

export const MOVTARGET = {
  name: "Moving Target",
  desc: "If the character has already acted this round, increase ranged defense by 1 per rank of moving target.",
  ranked: true,
  active: taPassive
}

export const SEIZEINIT = {
  name: "Seize the Initiative",
  desc: "Once per session, as a maneuver, may make a Hard ([difficulty][difficulty][difficulty]) Athletics check. On success, other PCs may take their turns immediately.",
  ranked: false,
  active: taManeuver
}

export const MOUNTDOMEST = {
  name: "Domesticable",
  desc: "Downgrade the difficulty of checks to train this mount by 1 per rank. ",
  ranked: true,
  active: taPassive
}

export const MOUNTTRAINED = {
  name: "Trained Mount",
  desc: "Add [boost] per rank to a rider's Survival checks while mounted on this mount. ",
  ranked: true,
  active: taPassive
}

export const MOUNTBURDEN = {
  name: "Beast of Burden",
  desc: "Add 1 per rank to the mount's encumbrance threshold. ",
  ranked: true,
  active: taPassive
}

export const MOUNTSTUBBORN = {
  name: "Stubborn",
  desc: "Upgrade the difficulty of checks to train this mount by 1 per rank. ",
  ranked: true,
  active: taPassive
}

export const MOUNTDOMESTED = {
  name: "Domesticated",
  desc: "Difficulty for training this beast is not upgraded. ",
  ranked: false,
  active: taPassive
}

export const MOUNTFLY = {
  name: "Flyer",
  desc: "This mount can fly. When on the ground, its Speed is reduced to 1. ",
  ranked: false,
  active: taPassive
}

export const BETTERLUCK = {
  name: "Better Luck Next Time",
  desc: "Take a Better Luck Next Time action; make a Hard([difficulty][difficulty][difficulty]) Cool check to force a competitor to suffer a major misfortune.",
  ranked: false,
  active: taAction
}

export const CONSTVIGIL = {
  name: "Constant Vigilance",
  desc: "May always use Vigilance when making checks to determine initiative.",
  ranked: false,
  active: taPassive
}

export const FEARSHAD = {
  name: "Fear the Shadows",
  desc: "Perform the Fear the Shadows action: make a Hard ([difficulty][difficulty][difficulty]) Deception check to force a single minion group or rival to flee the encounter.",
  ranked: false,
  active: taAction
}

export const FREERUN = {
  name: "Freerunning",
  desc: "Suffer 1 strain when making a Move maneuver to move to any location within short range.",
  ranked: false,
  active: taIncidental
}

export const FREERUNIMP = {
  name: "Freerunning (Improved)",
  desc: "Suffer 4 strain when making a move maneuver to move to any location within medium range.",
  ranked: false,
  active: taIncidental
}

export const IMPOSFALL = {
  name: "Impossible Fall",
  desc: "Once per session, perform Impossible Fall incidental when falling: make Force power check and spend [FP][FP] to decrease fall by one range band and land somewhere safe. Spend [FP] to decrease distance by one additional range band.",
  ranked: false,
  active: taIncidentalOOT
}

export const RECSCENE = {
  name: "Reconstruct the Scene",
  desc: "Perform the Reconstruct the Scene action; make a Hard ([difficulty][difficulty][difficulty]) Perception check to identify the physical characteristics of person present at the scene within 24 hours.",
  ranked: false,
  active: taAction
}

export const SABERTHROWIMP = {
  name: "Saber Throw (Improved)",
  desc: "When performing the Saber Throw action, may increase the range to long range. When attacking a target at long range, spend [FP][FP] to have weapon return to hand.",
  ranked: false,
  active: taPassive
}

export const SENSESCENE = {
  name: "Sense the Scene",
  desc: "Perform the Sense the Scene action; make a Hard ([difficulty][difficulty][difficulty]) Perception check and add [FO] no greater than Force rating. If successful, spend [FP] to identify the emotional characteristics of one person involved in the crime.",
  ranked: false,
  active: taAction
}

export const STRSMARTIMP = {
  name: "Street Smarts (Improved)",
  desc: "Once per session, amy take an Improved Street Smarts action; make a Formidable ([difficulty][difficulty][difficulty][difficulty][difficulty]) Streetwise or Knowledge (Underworld) check toe learn one vital clue from the GM. Reduce the difficulty once per rank of Street Smarts.",
  ranked: false,
  active: taAction
}

export const SUPHUMAN = {
  name: "Superhuman Reflexes",
  desc: "Once per session, after generating [despair] on a Piloting check cancel the [despair] and add [success] equal to ranks in Cool.",
  ranked: false,
  active: taIncidental
}

export const HARDBOILED = {
  name: "Hard-Boiled",
  desc: "When recovering strain after an encounter, may spend [advantage] up to ranks in Hard-Boiled to recover 1 wound per [advantage] spent.",
  ranked: true,
  active: taPassive
}

export const HINDERSHOT = {
  name: "Hindering Shot",
  desc: "Increase the difficulty of next Gunnery check by 1. If check deals damage, target starship or vehicle suffers system strain equal to speed when it moves until the end of the encounter..",
  ranked: false,
  active: taIncidental
}

export const IRONBODY = {
  name: "Iron Body",
  desc: "Remove [setback] per rank of Iron Body from Coordination and Resilience checks. Reduce the critical rating of unarmed attacks by 1 per rank of Iron Body (to a minimum of 1).",
  ranked: true,
  active: taPassive
}

export const MARTIALGRACE = {
  name: "Martial Grace",
  desc: "Once per round, suffers 2 strain to add damage equal to ranks in Coordination to next Brawl check made this turn.",
  ranked: false,
  active: taIncidental
}

export const OFFDRIVE = {
  name: "Offensive Driving",
  desc: "As a maneuver, suffer system strain up to vehicle's highest defense to upgrade the difficulty of target's next Piloting check that many times.",
  ranked: false,
  active: taManeuver
}

export const PRECSTRIMP = {
  name: "Precision Strike (Improved)",
  desc: "Once per round, when inflicting a Critical Injury with a Brawl or Melee weapon, may suffer 2 strain to change the result to any Average ([difficulty][difficulty]) Critical injury.",
  ranked: false,
  active: taIncidentalOOT
}

export const PRECSTRSUP = {
  name: "Precision Strike (Supreme)",
  desc: "When this character inflicts a Critical Injury with a Brawl, Melee, or Lightsaber weapon, may suffer 1 strain to change the result to any Easy ([difficulty]) Critical Injury.",
  ranked: false,
  active: taIncidentalOOT
}

export const UNARMPARRY = {
  name: "Unarmed Parry",
  desc: "May Parry while unarmed Reduce strain cost to Parry while unarmed by 1 (to a minimum of 1).",
  ranked: false,
  active: taPassive
}

export const AGGRNEG = {
  name: "Aggressive Negotiations",
  desc: "Once per session perform a Hard ([difficulty][difficulty][difficulty]) Lightsaber check to decrease the difficulty of all Negotiation checks for the rest of the encounter by 2.",
  ranked: false,
  active: taAction
}

export const CRUCPOINT = {
  name: "Crucial Point",
  desc: "Once per session, the character may introduce to negotiations and one potential concession that an opponent will do nearly anything to obtain.",
  ranked: true,
  active: taIncidental
}

export const EMPTYSOUL = {
  name: "Empty Soul",
  desc: "If the character is carrying items that total 2 encumbrance or less add [LI][DA] to Force power checks.",
  ranked: false,
  active: taPassive
}

export const GOWITHOUT = {
  name: "Go Without",
  desc: "Once per session, the character counts as having the right tools for the job when making a skill check.",
  ranked: false,
  active: taIncidental
}

export const IRONSOUL = {
  name: "Iron Soul",
  desc: "When carrying items that total 2 encumbrance or less, at the end of each encounter heal all strain the character is suffering.",
  ranked: false,
  active: taPassive
}

export const MEDTRANCE = {
  name: "Meditative Trance",
  desc: "When suffocating (see Force and Destiny Core Rulebook, page 221), the character suffers 1 strain each round instead of 3. When exposed to vacuum, the character suffers 1 wound each round instead of 3.",
  ranked: false,
  active: taPassive
}

export const MINDBLEED = {
  name: "Mind Bleed",
  desc: "When attacked, the character may choose to suffer strain no greater than the number of wounds suffered from the attack. If he does so, the attacker then suffers a number of wounds equal to the strain suffered by the character.",
  ranked: false,
  active: taIncidentalOOT
}

export const NOWMAST = {
  name: "Now the Master",
  desc: "Once per session, choose one talent or Force power that any character in the current encounter possesses. Gain that talent or Force power until the end of the encounter.",
  ranked: false,
  active: taIncidental
}

export const ONCELEARN = {
  name: "Once A Learner",
  desc: "As an action, suffer 4 strain and let one ally within short range increase the ally's Force rating by an amount equal to the character's Force rating until the end of the round.",
  ranked: false,
  active: taAction
}

export const SAVVYNEG = {
  name: "Savvy Negotiator",
  desc: "Remove [setback] per rank of Savvy Negotiator from all Negotiation and Streetwise checks.",
  ranked: true,
  active: taPassive
}

export const SAVVYNEGIMP = {
  name: "Savvy Negotiator (Improved)",
  desc: "Make a Hard ([difficulty][difficulty][difficulty]) Negotiation check to convince one bystander per rank of Savvy Negotiator to see one of an opponent's points as maliciously unreasonable.",
  ranked: false,
  active: taAction
}

export const SKILLEDTEACH = {
  name: "Skilled Teacher",
  desc: "If an ally at short range has lower ranks in a skill than the character, the character may perform a Skilled Teacher incidental to suffer a number of strain no greater than ranks of Skilled Teacher, then add an equal number of [success] to ally's next check.",
  ranked: true,
  active: taIncidentalOOT
}

export const SUNDERIMP = {
  name: "Sunder (Improved)",
  desc: "Each [advantage] spent to activate a weapon's Sunder quality damages an item two steps, instead of one.",
  ranked: false,
  active: taPassive
}

export const WISEWAR = {
  name: "Wise Warrior",
  desc: "When making a combat check, may perform the Wise Warrior incidental; spend 1 Destiny Point and use any characteristic for the check.",
  ranked: false,
  active: taIncidental
}

export const WISEWARIMP = {
  name: "Wise Warrior (Improved)",
  desc: "When performing the Wise Warrior incidental, one ally at short range may use the same characteristic for the next combat check the ally makes before the end of the character's next turn.",
  ranked: false,
  active: taIncidental
}

export const COMBATPROG = {
  name: "Combat Programming",
  desc: "Once per encounter make a Hard ([difficulty][difficulty][difficulty]) Computers check while repairing or working on a droid. For the remainder of the encounter, the droid gains 1 rank in two different combat skills.",
  ranked: false,
  active: taAction
}

export const CONSTSPEC = {
  name: "Construction Specialist",
  desc: "Remove [setback] equal to ranks in Construction Specialist from checks to construct defenses, positions, fortifications, and similar projects.",
  ranked: true,
  active: taPassive
}

export const CREATDES = {
  name: "Creative Design",
  desc: "As part of resolving a successful crafting check, the character may also apply a result equivalent to spending a number of [advantage] equal to his ranks in Creative Design. The GM may then apply a result equivalent to spending that same number of [TH].",
  ranked: true,
  active: taPassive
}

export const DESPREP = {
  name: "Desperate Repairs",
  desc: "Once per session may make a Hard ([difficulty][difficulty][difficulty]) Mechanics check on one engaged allied droid. If successful, the droid becomes immobilized and staggered for 1 round, then heals all strain and one Critical Injury with a severity rating no greater than Hard ([difficulty][difficulty][difficulty]).",
  ranked: false,
  active: taAction
}

export const DESFLAW = {
  name: "Design Flaw",
  desc: "When making a combat check with a personal scale weapon against a droid, may add [advantage] equal to ranks of Design Flaw.",
  ranked: true,
  active: taIncidental
}

export const DOCKEXP = {
  name: "Dockyard Expertise",
  desc: "May make an Average ([difficulty][difficulty]) Knowledge (Education) check when at a space dock, if successful, the cost and time for repairs is reduced by 25% per rank of Dockyard Expertise.",
  ranked: true,
  active: taAction
}

export const IMPDEF = {
  name: "Improvised Defenses",
  desc: "May make an Average ([difficulty][difficulty]) Survival check to fashion small defenses. It providing cover for up to 4 characters for the rest of encounter.",
  ranked: false,
  active: taAction
}

export const IMPPOS = {
  name: "Improvised Position",
  desc: "The character may make a Hard ([difficulty][difficulty][difficulty]) Mechanics check to construct a secure position. This provides cover for the group and its vehicles.",
  ranked: false,
  active: taAction
}

export const MASTDEMO = {
  name: "Master Demolitionist",
  desc: "When resolving an attack from a personal explosive or ordnance weapon, may spend [advantage] or [TR] to have the weapon's Blast quality act at short range, or medium if it already acts at short.",
  ranked: false,
  active: taAction
}

export const PUSHSPEC = {
  name: "Push the Specs",
  desc: "Perform the Push the Specs action when in a starship or vehicle, making an Average ([difficulty][difficulty]) Knowledge (Education) check. With success, the ship's top speed increases by 1 for a number of rounds equal to the characters Intellect.",
  ranked: false,
  active: taAction
}

export const REPPATCHSPEC = {
  name: "Repair Patch Specialization",
  desc: "Whenever using an emergency repair patch, the target heals an additional wound per rank of Repair Patch Specialization.",
  ranked: true,
  active: taPassive
}

export const SMARTHAND = {
  name: "Smart Handling",
  desc: "Once per session, take the Smart Handling action; making a Hard ([difficulty][difficulty][difficulty]) Knowledge (Education) check. Until the start of the next round the ship's handling increases by 2 plus an amount equal to [advantage] scored on the check to a maximum handling of +4.",
  ranked: false,
  active: taAction
}

export const WEAKFOUND = {
  name: "Weak Foundation",
  desc: "Once per session may take the Weak Foundation action; make a Hard ([difficulty][difficulty][difficulty]) Knowledge (Warfare) check, if successful, for the remainder of the encounter the character and all allies add automatic [advantage][advantage] or [success] to all combat checks made targeting the identified fixed structure.",
  ranked: false,
  active: taAction
}

export const ALCARTS = {
  name: "Alchemical Arts",
  desc: "After making a check to craft a potion or talisman, may suffer strain up to twice ranks in Alchemical Arts. For every two strain, add [LI] or [DA] to results.",
  ranked: true,
  active: taIncidental
}

export const CHANAG = {
  name: "Channel Agony",
  desc: "After rolling [FO], may suffer wounds up to twice ranks in Channel Agony to add automatic [DA] for every two wounds suffered to the results.",
  ranked: true,
  active: taIncidental
}

export const FONTPOW = {
  name: "Font of Power",
  desc: "Once per session, may take the Font of Power action. Until the end of the encounter, characters within medium range add automatic [LI] or [DA] to checks based on alignment.",
  ranked: false,
  active: taAction
}

export const IDING = {
  name: "Identify Ingredients",
  desc: "After being exposed to a substance, as an out-of-turn incidental, may roll [FO] no greater than Force rating. Spend [FP][FP] to immediately identify its composition and effects.",
  ranked: false,
  active: taIncidentalOOT
}

export const IMPCONC = {
  name: "Improvised Concoction",
  desc: "Once per session, as an action, make a Hard ([difficulty][difficulty][difficulty]) Knowledge (Xenology) check, adding [FO] no greater than Force rating to create 1 dose of a poison or drug with rarity of Intellect + [success] + [FP] spent or lower.",
  ranked: false,
  active: taAction
}

export const OVERWAURA = {
  name: "Overwhelming Aura",
  desc: "Commit [FO]. Add [advantage] to social checks equal to [FO] committed. Add [TH] to equal [FO] committed to enemy social checks in short range.",
  ranked: true,
  active: taManeuver
}

export const OVERWAURAIMP = {
  name: "Overwhelming Aura (Improved)",
  desc: "Characters affected by Overwhelming Aura add automatic [FA] to fear checks the character causes and automatic [success] to fear checks not caused by the character.",
  ranked: false,
  active: taPassive
}

export const POWDARK = {
  name: "Power of Darkness",
  desc: "Once per session, may perform the Power of Darkness maneuver. Increase wound threshold and strain threshold by 1 per Dark Side Destiny point currently in the Destiny pool until the end of the encounter.",
  ranked: false,
  active: taManeuver
}

export const SECRETLORE = {
  name: "Secret Lore",
  desc: "Remove [setback] per rank or Secret Lore from all Knowledge (Lore) checks. Reduce the difficulty of all Knowledge (Lore) checks by 1.",
  ranked: true,
  active: taPassive
}

export const TRANSMOG = {
  name: "Transmogrify",
  desc: "When making a crafting check, may add [FO] no greater than Force rating. Spend [FP] to add [success] and spend [FP][FP] to add [advantage] to check.",
  ranked: false,
  active: taIncidental
}

export const ACKLAYSCST = {
  name: "Acklay's Scything Strike",
  desc: "Brawl attacks gain Pierce equal to Force rating.",
  ranked: false,
  active: taPassive
}

export const DODGEIMP = {
  name: "Dodge (Improved)",
  desc: "After using Dodge, can make a Move maneuver as an out-of-turn incidental.",
  ranked: false,
  active: taIncidental
}

export const EMBHATE = {
  name: "Embrace Your Hate",
  desc: "May spend 1 Destiny Point and suffer Conflict equal to dark side Destiny Points in pool to add equal damage to melee attack. May use this ability once per encounter per rank.",
  ranked: true,
  active: taIncidental
}

export const FARSTRIKE = {
  name: "Far Strike",
  desc: "As an action, make a Brawl check as a ranged attack, adding [FO] up to Force rating, increase the range of the attack by one band for each [FP] spent, to a maximum of long.",
  ranked: true,
  active: taAction
}

export const HEADBUTT = {
  name: "Headbutt",
  desc: "Perform Headbutt incidental, suffering 2 wounds to knock down and disorient enemy.",
  ranked: false,
  active: taIncidental
}

export const INDWILL = {
  name: "Indomitable Will",
  desc: "Once per encounter as a maneuver, suffer 3 strain to commit [FO] up to Force rating and reduce all damage suffered by an equal amount, but suffer 1 strain per turn.",
  ranked: false,
  active: taManeuver
}

export const INNERPEACE = {
  name: "Inner Peace",
  desc: "Once per encounter, convert a number of dark side Destiny Points equal to ranks in Inner Peace to light side Destiny Points and reduce Conflict gained this session.",
  ranked: true,
  active: taIncidental
}

export const JUYOSAV = {
  name: "Juyo Savagery",
  desc: "The character adds +5 to Critical injury rolls from Lightsaber attacks for each dark side Destiny Point in the Destiny pool.",
  ranked: false,
  active: taPassive
}

export const POWPAIN = {
  name: "Power From Pain",
  desc: "Once per session as an incidental, may spend 1 Destiny Point to gain +1 Force rating for each Critical Injury character is suffering until the end of the encounter.",
  ranked: false,
  active: taIncidental
}

export const SAPITHSUND = {
  name: "Sapith Sundering",
  desc: "May add [FO] up to Force rating to Brawl checks; the attack gains the Sunder quality, and character may spend [FP] generated one the check as [advantage] to activate the Sunder quality.",
  ranked: false,
  active: taIncidental
}

export const TOUGHIMP = {
  name: "Toughened (Improved)",
  desc: "Once per session, may heal wounds equal to ranks in Toughened.",
  ranked: false,
  active: taIncidental
}

export const VAAPADCONT = {
  name: "Vaapad Control",
  desc: "When making a Lightsaber combat check, the character may suffer 1 strain to downgrade the difficulty of this check a number of times equal to the number of light side Destiny Points in the Destiny pool.",
  ranked: false,
  active: taIncidental
}

export const ASTEPAHEAD = {
  name: "A Step Ahead",
  desc: "Once per session, the character may suffer 2 strain in order to count his Cunning as one higher than normal for the remainder of the encounter.",
  ranked: false,
  active: taIncidental
}

export const ANALYZEDATA = {
  name: "Analyze Data",
  desc: "Once per session after capturing enemy data, the character may perform the Analyze Data action to make an Average ([difficulty][difficulty]) Knowledge (Warfare) check. Once during the remainder of session he may then add [success] equal to ranks in Knowledge (Warfare) to one check related to that data.",
  ranked: false,
  active: taAction
}

export const CUNNPERSON = {
  name: "Cunning Persona",
  desc: "The character may suffer 2 strain to perform a Charm check with Cunning instead of Presence.",
  ranked: false,
  active: taIncidental
}

export const EXHAUSTQUEST = {
  name: "Exhaustive Questioning",
  desc: "Whenever a character makes a successful social skill check against a captured enemy within short range, may reduce that enemy s strain threshold by 2 for the remainder of the session and can spend [advantage] to inflict 1 strain.",
  ranked: false,
  active: taIncidental
}

export const HIDDIMP = {
  name: "Hidden Storage (Improved)",
  desc: "The character may use Hidden Storage to store an item within his own suitably modified body.",
  ranked: false,
  active: taPassive
}

export const INCITEDIST = {
  name: "Incite Distraction",
  desc: "While in a crowd, may perform the Incite Distraction action to make an Average ([difficulty][difficulty]) Deception check. If successful, enemies treat the area as difficult terrain. The character may spend [TR] to make the location impassable terrain to them instead.",
  ranked: false,
  active: taAction
}

export const INDISIMP = {
  name: "Indistinguishable (Improved)",
  desc: "The character may extend the effects of Indistinguishable to a number of allied within short range equal to ranks in Deception.",
  ranked: false,
  active: taPassive
}

export const INSIDEKNOW = {
  name: "Inside Knowledge",
  desc: "Once per session while in an enemy facility or vessel, may perform the Inside Knowledge action, make a Hard ([difficulty][difficulty][difficulty]) Skulduggery check. Character may then find a single personal scale item with a rarity no greater than Cunning plus 2 previously stashed here, or gain a narrative benefit.",
  ranked: false,
  active: taAction
}

export const INSIDEPERSON = {
  name: "Inside Person",
  desc: "Once per session the character may spend a Destiny Point to establish he has been undercover in an identified enemy base or large vehicle. For the remainder of the session, add automatic [advantage][advantage] to checks he or his allies make that are associated with that location.",
  ranked: false,
  active: taIncidental
}

export const KNOWWEAK = {
  name: "Know Their Weakness",
  desc: "Once per session, may perform the Know Their Weakness action and choose one target within close range; make a Hard ([difficulty][difficulty][difficulty]) Perception check to downgrade the difficulty of social skill checks against target once per rank of Know Their Weakness until the end of the session.",
  ranked: true,
  active: taAction
}

export const KNOWWEAKIMP = {
  name: "Know Their Weakness (Improved)",
  desc: "The character may extend the effects of Know Their Weakness to a number of enemies within short range equal to his Presence.",
  ranked: false,
  active: taPassive
}

export const LOSETHEM = {
  name: "Lose Them",
  desc: "When being followed or chased, the character may perform the Lose Them action and make a Hard ([difficulty][difficulty][difficulty]) Stealth check. If successful, add [setback][setback] to checks to follow him for the remainder of the encounter and may spend [TR] to indicate his pursuers have lost him completely.",
  ranked: false,
  active: taAction
}

export const MADEYOUTALK = {
  name: "Made You Talk",
  desc: "Once per session, may make an opposed social skill check against a captured enemy character within short range and add [boost] for every 2 strain inflicted on the target that encounter. If successful, the PCs gain a bonus based on the enemy NPC type.",
  ranked: false,
  active: taAction
}

export const PILOTTRAIN = {
  name: "Pilot Training",
  desc: "Piloting (Planetary) and Piloting (Space) become career skills.",
  ranked: false,
  active: taPassive
}

export const RESISTQUEST = {
  name: "Resist Questioning",
  desc: "When targeted by an opposed social skill check, the character may suffer 2 strain to perform the Resist Questioning out-of-turn incidental, adding [setback] to the check. If the check fails, may spend [despair] to indicate he has provided false information to foe.",
  ranked: false,
  active: taIncidentalOOT
}

export const RESISTQUESTIMP = {
  name: "Resist Questioning (Improved)",
  desc: "When one ally within short range is targeted by an opposed social skill check, the character may perform Resist Questioning to affect this check instead. If the check fails, may spend [despair] to indicate the ally provided false information to foe.",
  ranked: false,
  active: taPassive
}

export const ADAPT = {
  name: "Adaptable",
  desc: "When resolving a check that uses a skill in which they nave no ranks, the character may spend one Destiny Point to remove [despair] from the check or to remove [TH] equal to their ranks in Cool from the check.",
  ranked: false,
  active: taIncidental
}

export const ANTREAS = {
  name: "Another's Treasure",
  desc: "The condition of an item does not affect the price the character receives when selling it. In addition, the character can always find a buyer for an item, no matter its condition or how useless or worthless it may seem. The details of the transaction are subject to the GM s discretion, as always, and a buyer might not be immediately (or easily) available.",
  ranked: false,
  active: taPassive
}

export const ASSAULTDR = {
  name: "Assault Drop",
  desc: "Once per session while piloting a vehicle or ship, the character may perform the Assault Drop incidental. All passengers aboard or allies engaged with the vehicle or ship may immediately disembark or embark as an out-of-turn incidental.",
  ranked: false,
  active: taIncidental
}

export const BACKROOM = {
  name: "Backroom Deal",
  desc: "Once per encounter, the character may take the Backroom Deal action, making a Hard ([difficulty][difficulty][difficulty]) Negotiation check. If the check succeeds the character (or player) reveals how their previously unknown dealings have a meaningful impact on the current scene or encounter. The nature of the revelation and its impact on the scene are ultimately subject to the GM's discretion, but they should give a significant advantage to the PCs. If the check fails and generates [despair], however, the GM may decide that the character's disastrously failed deal has negative repercussions.",
  ranked: false,
  active: taAction
}

export const BARREL = {
  name: "Barrel Roll",
  desc: "When a vehicle or starship the character is piloting suffers a hit from a combat check, after damage is calculated but before armor is applied, the character may take a Barrel Roll incidental. Their ship suffers 3 system strain, and the damage of that hit is reduced by an amount equal to their ranks in the Piloting skill used for that vehicle. This talent may only be used once per attack and only when the character is piloting a vehicle or starship of silhouette 3 or less.",
  ranked: false,
  active: taIncidentalOOT
}

export const BARRELIMP = {
  name: "Barrel Roll (Improved)",
  desc: "When the character takes the Barrel Roll incidental, reduce the damage of all hits (instead of only one hit) of the attack by the character's ranks in the relevant Piloting skill.",
  ranked: false,
  active: taPassive
}

export const BARRELSUP = {
  name: "Barrel Roll (Supreme)",
  desc: "When the character uses Barrel Roll to reduce the damage from a weapon with the Auto-fire, Blast, or Guided item qualities, they may spend [despair] or [TH][TH][TH] to inflict one hit on the attacker or another enemy vehicle or starship within close range after the initial attack resolves. The hit deals the base damage of the original attack.",
  ranked: false,
  active: taPassive
}

export const BEGLUCK = {
  name: "Beginner's Luck",
  desc: "Once per session when the character makes a check , the character may add [success] equal to the number of light side Destiny Points in the Destiny pool to the results.",
  ranked: false,
  active: taIncidental
}

export const CLANKILL = {
  name: "Clanker Killer",
  desc: "Before rolling a combat check that targets a droid (including a droid vehicle or a vehicle piloted by a droid), the character may remove [boost] up to their ranks in Clanker Killer from the pool, and add an equal number of [success] or [advantage] (in any combination) to the results.",
  ranked: true,
  active: taIncidental
}

export const CONCOPT = {
  name: "Consider our Options",
  desc: "The character may take the Consider Our Options action, makings Hard ([difficulty][difficulty][difficulty]) Negotiation check. If the check succeeds, until the start of the character's next turn, any enemy who attacks the character suffers 2 strain, plus 1 strain per additional [success][success] on the character's check, before resolving the attack. (If this strain causes an adversary to become incapacitated, the GM may determine that adversary simply bows out of the fight.) The effect ends immediately if the character inflicts damage on an enemy.",
  ranked: false,
  active: taAction
}

export const CONCOPTIMP = {
  name: "Consider our Options (Improved)",
  desc: "When the character takes the Consider Our Options action, the character may choose to have the effects also apply to attacks that target the character s allies who are within short range. The effects end for all characters if the character or an affected ally inflict damage on an enemy.",
  ranked: false,
  active: taIncidental
}

export const EXCEEDSPEC = {
  name: "Exceed Specifications",
  desc: "Before making a check using an item, the character may take the Exceed Specifications incidental, adding [boost] to the check. The GM may spend [TH][TH] on the check to damage the item one step, or [despair] to damage it beyond usability (see Table 5-4: Repairing Gear in any core rulebook). [TH] or [despair] may have additional consequences depending on the nature of the item, at the GM's discretion.",
  ranked: false,
  active: taIncidental
}

export const EXCEEDSPECIMP = {
  name: "Exceed Specifications (Improved)",
  desc: "When the character takes the Exceed Specifications incidental, upgrade the ability of the check once instead of adding [boost].",
  ranked: false,
  active: taPassive
}

export const EXCEEDSPECSUP = {
  name: "Exceed Specifications (Supreme)",
  desc: "If the character's check benefitting from the Exceed Specifications incidental generates [TR], they may damage the item one step to roll one additional [PR] and add it to the check results. If the check generates [despair] roll [CH] and add it to the check results.",
  ranked: false,
  active: taIncidental
}

export const FIRESUP = {
  name: "Fire Support",
  desc: "After the character makes a successful combat check using a vehicle weapon, the next ally to make a check adds [boost] equal to the character's ranks of Fire Support.",
  ranked: true,
  active: taPassive
}

export const FIREREADY = {
  name: "Fire When Ready",
  desc: "The character may take the Fire When Ready action, making a Hard ([difficulty][difficulty][difficulty]) Leadership check. If the check succeeds, the character chooses a number of crew aboard their ship equal to their Presence. Those crew members downgrade the difficulty of their next Gunnery check once, plus one time for every additional [success][success] on the check.",
  ranked: false,
  active: taAction
}

export const FIRSTBRO = {
  name: "First Among Brothers",
  desc: "When the character makes a check that does not result in any uncanceled [TH], add [advantage] equal to the character's ranks in First Among Brothers to the check results. The character may only spend these additional [advantage] to affect allied clones.",
  ranked: true,
  active: taPassive
}

export const FORREP = {
  name: "For the Republic!",
  desc: "Once per encounter when an ally is incapacitated or killed, the character may perform the For the Republic! incidental. The character makes a Daunting ([difficulty][difficulty][difficulty][difficulty]) Leadership check. If the check succeeds, the ally is not incapacitated or killed until the end of the following round, instead. If the character's wounds or strain are reduced below their threshold before the end of the next round, they are not incapacitated.",
  ranked: false,
  active: taIncidentalOOT
}

export const GUARDREP = {
  name: "Guardian of the Republic",
  desc: "After the character uses Parry or Reflect to reduce damage to an ally, that ally cannot be targeted by combat checks for the remainder of the round.",
  ranked: false,
  active: taPassive
}

export const HYPASSAULT = {
  name: "Hyperspace Assault",
  desc: "The character may use Astrogation or Knowledge (Warfare) to determine their Initiative during an encounter in which they are piloting or commanding a starship. If they do so, they may spend [TR] from the check to choose the starting locations of all allied ships in the encounter.",
  ranked: false,
  active: taPassive
}

export const LATTHINK = {
  name: "Lateral Thinking",
  desc: "Once per encounter after an enemy succeeds on a check targeting the character, the character may spend one Destiny Point to force the enemy to reroll the check. If the enemy is a droid, the character does not spend a Destiny Point to use this talent.",
  ranked: false,
  active: taIncidentalOOT
}

export const LEARNOPP = {
  name: "Learning Opportunity",
  desc: "Once per round, the character may spend [advantage][advantage][advantage] from a check they fail to upgrade the ability of their next check once.",
  ranked: false,
  active: taIncidental
}

export const LEVER = {
  name: "Leverage",
  desc: "The character removes [setback] per rank of Leverage from their Cool and Negotiation checks.",
  ranked: true,
  active: taPassive
}

export const MISSCRIT = {
  name: "Mission Critical",
  desc: "Once per session after rolling a Piloting (Planetary) or Piloting (Space) check but before resolving it, the character may spend a Destiny Point to add [success] or [advantage] to the results equal to their ranks in that skill. (The character may divide the results between [success] and [advantage] In any combination.)",
  ranked: false,
  active: taIncidental
}

export const NATOP = {
  name: "Natural Operator",
  desc: "Once per game session, the character may reroll any one Piloting (Planetary) or Piloting (Space) check.",
  ranked: false,
  active: taIncidental
}

export const NATTROOP = {
  name: "Natural Trooper",
  desc: "Once per game session, the character may reroll anyone Gunnery or Ranged (Heavy) check.",
  ranked: false,
  active: taIncidental
}

export const ONETRASH = {
  name: "One Person's Trash",
  desc: "The character may make a Perception check in order to locate a particular item amid a battlefield, shipwreck, junkyard, or other location with potential salvage. The difficulty of the check is equal to half the item's rarity, rounded down. There is no cost to acquire an item this way, but the item is in need of Moderate repairs (see Table 5-4: Repairing Gear in any of the core rulebooks) when found.",
  ranked: false,
  active: taAction
}

export const ONORDER = {
  name: "On My Order",
  desc: "The character may take the On My Order action, making a Hard (DDD) Leadership Check. If the check succeeds, the character chooses a number of crew aboard their ship equal to their Presence. Those crew members upgrade the ability of their next Gunnery check once, plus one time for every additional SS on the check.",
  ranked: false,
  active: taAction
}

export const ORDSAT = {
  name: "Ordnance Saturation",
  desc: "When the character or an ally who is currently benefiting from On My Order or Fire When Ready activates the Blast quality of a planetary-scale weapon, all ships or vehicles within close range of the target suffer damage equal to the weapon's Blast quality (plus 1 per additional SS as usual).",
  ranked: false,
  active: taPassive
}

export const OUTMAN = {
  name: "Outmaneuver",
  desc: "The character may take the Outmaneuver action, making a Hard (DDD) Knowledge (Warfare) check. If the check succeeds, the character chooses one enemy ship or vehicle in the current encounter for each SS. Until the end of the character's next turn, the chosen ships must perform one extra maneuver in order to move or change range bands relative to the characters ship or allies.",
  ranked: false,
  active: taAction
}

export const RAVAGE = {
  name: "Ravage",
  desc: "Once per encounter, the character may suffer 3 strain to add FO up to their current Force rating to a combat check targeting an engaged opponent. The character may spend FP to add SS or AD to the results of the check. If the rules for Morality in Force and Destiny are in use, a character who has purchased this talent gains 1 Conflict at the beginning of each game session.",
  ranked: false,
  active: taIncidental
}

export const RENFORM = {
  name: "Renegade Form",
  desc: "When the character purchases this talent, they choose one characteristic. They may use this characteristic in place of Brawn when making Lightsaber checks",
  ranked: false,
  active: taIncidental
}

export const RESPDEL = {
  name: "Respected Delegate",
  desc: "The character downgrades the difficulty of social skill checks made to interact with government institutions outside of their homeworld a number of times equal to their ranks in Respected Delegate.",
  ranked: true,
  active: taPassive
}

export const SCRAPEM = {
  name: "Scrap 'Em!",
  desc: "After making a successful combat check, the character may suffer 2 strain to perform the Scrap 'em! incidental. The character selects a number of allies no greater than their ranks in Leadership. Those allies Add BO to their combat checks against the character's target until the start of the character's next turn.",
  ranked: false,
  active: taIncidental
}

export const SCRAPEMIMP = {
  name: "Scrap 'Em! (Improved)",
  desc: "When the character takes the Scrap 'em! incidental, they affect a number of allies no greater than twice their ranks In Leadership, and affected allies add BOBO to combat checks (instead of BO).",
  ranked: false,
  active: taPassive
}

export const SECRETFORCE = {
  name: "Secrets of the Force",
  desc: "Knowledge (Lore) and Lightsaber become career skills for the character.",
  ranked: false,
  active: taPassive
}

export const SIDEBYSIDE = {
  name: "Side by Side",
  desc: "While the character is wielding a lightsaber and engaged with one or more allies also wielding a lightsaber, add [TH] to all combat checks that target the character or those allies.",
  ranked: false,
  active: taPassive
}

export const SINFLAT = {
  name: "Sincerest Flattery",
  desc: "Once per encounter when the character makes a check using a skill that another character has previously used during the encounter, they add [boost][boost].",
  ranked: false,
  active: taIncidental
}

export const SOMEPROVE = {
  name: "Something to Prove",
  desc: "Once per session the character may suffer 4 strain in order to reroll a failed check. If the check succeeds, the character heals 4 strain.",
  ranked: false,
  active: taIncidental
}

export const TACTADV = {
  name: "Tactical Advance",
  desc: "While in cover, the character may suffer 2 strain to perform the Tactical Advance incidental. Until the end of the character's next turn, the character and allies within short range may move out of cover and continue to receive its benefits.",
  ranked: false,
  active: taIncidental
}

export const TACTADVIMP = {
  name: "Tactical Advance (Improved)",
  desc: "The character may spend [advantage][advantage] from any check they make or [TH][TH] from a combat check targeting them to perform the Tactical Advance incidental (instead of suffering strain).",
  ranked: false,
  active: taIncidentalOOT
}

export const TEMPLETR = {
  name: "Temple Training",
  desc: "Before making a Lightsaber skill check, the character may spend one Destiny Point to add damage to the attack equal to their ranks in Knowledge (Lore).",
  ranked: false,
  active: taIncidental
}

export const TRANSERR = {
  name: "Translation Error",
  desc: "Once per encounter, the character may remove [despair] from the results of a social skill check they make.",
  ranked: false,
  active: taIncidental
}

export const UTILIMP = {
  name: "Utility Belt (Improved)",
  desc: "Once per session when the character performs a Utility Belt incidental, they may produce up to five functionally identical items.",
  ranked: false,
  active: taPassive
}

export const WILLFORCE = {
  name: "Will of the Force",
  desc: "Once per round after failing a skill check, the character may convert one dark Side Destiny Point to a light side Destiny Point.",
  ranked: false,
  active: taIncidental
}

export const CUNNINGSTUNT = {
  name: "Cunning Stunt",
  desc: "Use Cunning instead of Presence for Cool checks.",
  active: taPassive
}

export const FINESSE = {
  name: "Finesse",
  desc: "Use Agility instead of Brawn for Brawl or Melee checks.",
  active: taPassive
}

export const TENACIOUS = {
  name: "Tenacious",
  desc: "Upgrade the number of advantages needed to score a critical hit against the target a number of times equal to his ranks in Tenacious. Also, reduce a Critical Injury result he suffers by 10 per rank of Tenacious",
  ranked: true,
  active: taPassive
}

export const ALTDEAL = {
  name: "Altered Deal",
  desc: "Once per session may take the Altered Deal action and make Hard ([difficulty][difficulty][difficulty]) Coercion check to radically change a previously made deal or bargain to the character's advantage.",
  active: taAction
}

export const COMBATVET = {
  name: "Combat Veteran",
  desc: "The character adds [boost] to his Brawl and Discipline checks equal to his ranks in Combat Veteran.",
  ranked: true,
  active: taPassive
}

export const COMARMS = {
  name: "Comrades in Arms",
  desc: "Once per encounter, take Comrades in Arms action and make a Hard ([difficulty][difficulty][difficulty]) Discipline check. If successful, the character plus one ally per [success] within medium range gains +1 defense for the remainder of the encounter.",
  active: taAction
}

export const IMPCOMARMS = {
  name: "Comrades in Arms (Improved)",
  desc: "Spend [advantage][advantage][advantage] or [TR] from Comrades in Arms check to also gain +1 soak or give one affected ally +1 soak.",
  active: taPassive
}

export const DISCLORE = {
  name: "Disciple of Lore",
  desc: "Once per round, may suffer 1 strain to decrease the difficulty of next Knowledge (Lore) check a number of times equal to ranks in Disciple of Lore.",
  ranked: true,
  active: taIncidental
}

export const DISCSOUL = {
  name: "Disciplined Soul",
  desc: "Spend one Destiny Point after making a Discipline check to spend a number of [TH] not exceeding ranks in Knowledge (Lore) as [advantage].",
  active: taIncidental
}

export const DISSTRIKE = {
  name: "Disorienting Strike",
  desc: "After failing a Lightsaber combat check, may spend [advantage][advantage] or [TR] to disorient opponents for three rounds.",
  active: taPassive
}

export const DOUBLETALK = {
  name: "Double-Talk",
  desc: "The character may spend [advantage][advantage] or [TR] from a successful Charm or Deception check to disorient a number of opponents within short range equal to his Presence for remainder of round and next two rounds.",
  active: taPassive
}

export const EXTREACH = {
  name: "Extended Reach",
  desc: "While armed with a two-handed melee weapon, may suffer one strain to make a Melee combat check with that weapon targeting an enemy at up to short range (rather than engaged range).",
  active: taIncidental
}

export const FEARREP = {
  name: "Fearsome Rep",
  desc: "Add automatic [advantage] to the results of Coercion checks equal to ranks in Fearsome Rep.",
  ranked: true,
  active: taPassive
}

export const FORMTAC = {
  name: "Formation Tactics",
  desc: "May take the Formation Tactics action by making a Hard ([difficulty][difficulty][difficulty]) Leadership check. If successful, he may choose a number of allies within short range equal to [success] generated. Upgrade the difficulty of attacks against these allies once until the end of his next turn.",
  active: taAction
}

export const IMPFORMTAC = {
  name: "Formation Tactics (Improved)",
  desc: "The difficulty of Formation Tactics is reduced to Average ([difficulty][difficulty]). May spend [TR] or [advantage][advantage][advantage][advantage][advantage][advantage] to have effect last until the end of encounter.",
  active: taManeuver
}

export const INSPLEAD = {
  name: "Inspiring Leadership",
  desc: "Take the Inspiring Leadership action by making an Average ([difficulty][difficulty]) Leadership check. If successful, a number of allies not exceeding his rating in Presence within short range add automatic [success] to their next skill check.",
  active: taAction
}

export const MOSTIMP = {
  name: "Most Impressive",
  desc: "Spend [TR] from any skill check to allow a number of allies not exceeding the character's rating in Presence within short range to add automatic [advantage] to their next check.",
  active: taIncidental
}

export const PERSTARGET = {
  name: "Persistent Targeting",
  desc: "After making one or more successful combat checks against a target, add [boost] to combat checks against that same target for the remainder of the encounter.",
  active: taPassive
}

export const PRIDEJOY = {
  name: "Pride and Joy",
  desc: "Choose one starship or vehicle character owns with a silhouette or 4 or higher; it becomes his 'Pride and Joy' vessel. He upgrades the ability of all social skill checks he makes while within short range of the vessel once.",
  active: taPassive
}

export const IMPPRIDEJOY = {
  name: "Pride and Joy (Improved)",
  desc: "While inside his Pride and Joy vessel, recover 1 additional strain whenever recovering strain and spend [advantage] on checks made to recover strain to allow an ally also within the vessel to recover one strain.",
  active: taPassive
}

export const SUPPRIDEJOY = {
  name: "Pride and Joy (Supreme)",
  desc: "When inside his Pride and Joy vessel, once per session as an incidental, the character may reduce its silhouette by 2 (to a minimum of 0) for the remainder of the round and the following round.",
  active: taIncidental
}

export const PUSHASIDE = {
  name: "Push Aside",
  desc: "After making a successful Melee, Brawl, or Lightsaber combat check against an engaged foe, may force the foe to move to short range in a direction of the opponent's choosing. Spend [TR] to cause the opponent to fall prone after moving.",
  active: taIncidental
}

export const SEENTHINGS = {
  name: "Seen A Lot of Things",
  desc: "Whenever the character fails a Knowledge check, he may spend [advantage][advantage][advantage] to roll the check again during his next turn.",
  active: taPassive
}

export const STEADYAIM = {
  name: "Steady Aim",
  desc: "The character does not lose the benefits of the Aim maneuver if he performs other maneuvers (including moving) or actions. He does lose the benefits of the Aim maneuver if the encounter ends.",
  active: taPassive
}

export const TARGFIRE = {
  name: "Targeted Firepower",
  desc: "Once per session may take Targeted Firepower action; identify one enemy target and make a Hard ([difficulty][difficulty][difficulty]) Knowledge (Warfare) check. If successful, for the rest of the encounter allies within short range of character add [advantage] to attacks against target equal to [success] gained in the check.",
  active: taAction
}

export const TEMPTRAIN = {
  name: "Temple Training",
  desc: "Before making a Lightsaber skill check, the character may spend one Destiny Point to add damage to the attack equal to his ranks in Knowledge (Lore).",
  active: taIncidental
}

export const TRUSTNO = {
  name: "Trust No One",
  desc: "When targeted by a social check, may choose to suffer one strain to add automatic [FA] to the check. If the check fails with [despair], the character may immediately perform a maneuver as an out-of-turn incidental.",
  active: taIncidentalOOT
}

export const BYBOOK = {
  name: "By the Book",
  desc: "Once per encounter before making a combat check, the character may suffer two strain to add [advantage] to the results equal to his ranks in By the Book.",
  ranked: true,
  active: taIncidental
}

export const IMPSECRETJEDI = {
  name: "Secrets of the Jedi (Improved)",
  desc: "Discipline becomes a career skill. Secrets of the Jedi may also be used when installing mods on lightsabers.",
  active: taPassive
}

export const SECRETJEDI = {
  name: "Secrets of the Jedi",
  desc: "Lightsaber becomes a career skill. He may also decrease to difficulty of checks made to construct or repair lightsaber hilts a number of times equal to half his ranks in Knowledge (Lore) (rounded up), to a minimum of Easy ([difficulty]).",
  active: taPassive
}

export const KNOWROPES = {
  name: "Knows the Ropes",
  desc: "Add [boost] to checks made to escape from restraints equal to ranks in Knowledge (Underworld). Spend [TR] to free all other allies withing short range.",
  active: taPassive
}

export const KNOWENEMY = {
  name: "Know the Enemy",
  desc: "The character may use Knowledge (Warfare) skill when making checks to determine Initiative.",
  active: taPassive
}

export const ASFORCEWILLS = {
  name: "As the Force Wills It",
  desc: "May make an Easy ([difficulty]) Knowledge (Lore) check to heal strain at the end of an encounter. [TR] can be spent to heal all strain.",
  active: taPassive
}

export const TRUSTCAP = {
  name: "Trust the Captain",
  desc: "May take the Trust the Captain action by making a Hard ([difficulty][difficulty][difficulty]) Leadership check. If successful, for the rest of the encounter allies within short range increase their ranks in Discipline by an amount equal to ranks in Trust the Captain.",
  active: taAction
}

export const PREPBOARD = {
  name: "Prepare to be Boarded!",
  desc: "Once per encounter may take Prepare to be Boarded! action and make opposed Coercion vs. Discipline check against enemy ship captain. If successful, the enemy suffers 1 strain per uncanceled [success] and surrenders ship if he exceeds strain threshold. May also spend [TR] or [advantage][advantage][advantage][advantage] to inflict strain equal to ranks in Coercion.",
  active: taAction
}

export default {
  adversary,
  anatomyLessons,
  allTerrainDriver,
  armorMaster,
  armorMasterImproved,
  bactaSpecialist,
  badMotivator,
  balance,
  barrage,
  basicCombatTraining,
  blackMarketContacts,
  blooded,
  bloodedImproved,
  bodyGuard,
  boughtInfo,
  brace,
  braceImproved,
  braceSupreme,
  brilliantEvasion,
  bypassSecurity,
  carefulPlanning,
  cleverSolution,
  codeBreaker,
  command,
  commandingPresence,
  confidence,
  contraption,
  convincingDemeanor,
  coordinatedAssualt,
  creativeKiller,
  cripplingBlow,
  deadToRights,
  deadToRightsImproved,
  deadlyAccuracy,
  debilitatingShot,
  dedication,
  defensiveDriving,
  defensiveSlicing,
  defensiceSlicingImproved,
  defensiveStance,
  disorient,
  dodge,
  durable,
  dynamicFire,
  enduring,
  exhaustPort,
  expertTracker,
  familiarSuns,
  feralStrength,
  fieldCommander,
  fieldCommanderImproved,
  fineTuning,
  fireControl,
  forager,
  forceOfWill,
  forceRating,
  formOnMe,
  frenziedAttack,
  fullStop,
  fullThrottle,
  fullThrottleImproved,
  fullThrottleSuperior,
  galaxyMapper,
  gearhead,
  greasedPalms,
  grit,
  hardHeaded,
  hardHeadedImproved,
  heightenedAwareness,
  heroicFortitude,
  hiddenStorage,
  holdTogether,
  hunter,
  inciteRebellion,
  indistinguishable,
  insight,
  inspiringRhetoric,
  inspiringRhetoricImproved,
  inspiringRhetoricSupreme,
  intenseFocus,
  intensePresence,
  intimidating,
  inventor,
  invigorate,
  itsNotThatBad,
  jumpUp,
  juryRigged,
  killWithKindness,
  knockdown,
  knowSomebody,
  knowledgeSpecialization,
  knownSchematic,
  letsRide,
  lethalBlows,
  masterDoctor,
  masterDriver,
  masterGrenadier,
  masterLeader,
  masterMerchant,
  masterOfShadows,
  masterPilot,
  masterSlicer,
  masterStarhopper,
  mentalFortress,
  naturalBrawler,
  naturalCharmer,
  naturalDoctor,
  naturalDriver,
  naturalEnforcer,
  naturalHunter,
  naturalLeader,
  naturalMarksman,
  naturalNegotiator,
  naturalOutdoorsman,
  naturalPilot,
  naturalProgrammer,
  naturalRogue,
  naturalScholar,
  naturalTinkerer,
  nobodysFool,
  outdoorsman,
  overwhelmEmotions,
  overwhelmDefenses,
  physicalTraining,
  plausibleDeniability,
  pointBlank,
  powerfulBlast,
  preciseAim,
  pressurePoint,
  quickDraw,
  quickFix,
  quickStrike,
  rapidReaction,
  rapidRecovery,
  redundantSystems,
  researcher,
  resolve,
  respectedScholar,
  scathingTirade,
  scathingTiradeImproved,
  scathingTiradeSupreme,
  secondWind,
  selectiveDetonation,
  senseDanger,
  senseEmotions,
  shortcut,
  sideStep,
  situationalAwareness,
  sixthSense,
  skilledJockey,
  skilledSlicer,
  sleightOfMind,
  smoothTalker,
  sniperShot,
  softSpot,
  solidRepairs,
  soundInvestments,
  spareClip,
  speaksBinary,
  stalker,
  steelyNerves,
  stimAction,
  stimApplicationImproved,
  stimApplicationSupreme,
  stimpackSpecialization,
  streetSmarts,
  strokeOfGenius,
  strongArm,
  stunningBlow,
  stunningBlowImproved,
  superiorReflexes,
  surgeon,
  swift,
  tacticalCombatTraining,
  targettedBlow,
  technicalAptitude,
  timeToGo,
  timeToGoImproved,
  tinkerer,
  touchOfFate,
  toughened,
  trickyTarget,
  trueAim,
  uncannyReactions,
  uncannySenses,
  unstoppable,
  utilityBelt,
  utinni,
  vehicleCombatTraining,
  wellRounded,
  wellTraveled,
  wheelAndDeal,
  workLikeACharm,
  pin,
  museumWorthy,
  BRNGITDWN,
  HUNTERQUARRY,
  HUNTQIMP,
  BURLY,
  FEARSOME,
  HEAVYHITTER,
  HEROICRES,
  IMPDET,
  IMPDETIMP,
  LOOM,
  RAINDEATH,
  STEADYNERVES,
  TALKTALK,
  WALKWALK,
  IDEALIST,
  AAO,
  ANIMALBOND,
  ANIMALBONDIMP,
  ANIMALEMP,
  ATARU,
  BODIMP,
  BODSUP,
  CALMAURA,
  CALMAURAIMP,
  CENTBEING,
  CENTBEINGIMP,
  CIRCLESHELTER,
  COMPTECH,
  CONDITIONED,
  CONTPLAN,
  COUNTERST,
  DEFCIRCLE,
  DEFTRAIN,
  DISRUPSTRIKE,
  DJEMSODEFL,
  DRAWCLOSER,
  DUELTRAIN,
  ENHLEAD,
  FALLAVAL,
  FEINT,
  FORCEASSAULT,
  FORCEPROT,
  FOREWARN,
  HAWKSWOOP,
  HEALTRANCE,
  HEALTRANCEIMP,
  IMBUEITEM,
  INTUITEVA,
  INTUITIMP,
  INTUITSHOT,
  INTUITSTRIKE,
  KEENEYED,
  KNOWPOW,
  KNOWHEAL,
  MAKFIN,
  MAKFLOUR,
  MAKTECH,
  MASTART,
  MENTBOND,
  MENTTOOLS,
  MULTOPP,
  NATBLADE,
  NATMYSTIC,
  NIMTECH,
  NOWYOUSEE,
  ONEUNI,
  PARRY,
  PARRYIMP,
  PARRYSUP,
  PHYSICIAN,
  PREEMAVOID,
  PREYWEAK,
  QUICKMOVE,
  REFLECT,
  REFLECTIMP,
  REFLECTSUP,
  RESDISARM,
  SABERSW,
  SABERTHROW,
  SARSWEEP,
  SENSEADV,
  SHAREPAIN,
  SHIENTECH,
  SHROUD,
  SLIPMIND,
  SORESUTECH,
  STRATFORM,
  SUMDJEM,
  TERRIFY,
  TERRIFYIMP,
  FORCEALLY,
  UNITYASSAULT,
  VALFACT,
  BADCOP,
  BIGGESTFAN,
  CONGENIAL,
  COORDODGE,
  DISBEH,
  DISBEHIMP,
  DECEPTAUNT,
  GOODCOP,
  NATATHL,
  NATMERCH,
  THROWCRED,
  UNRELSKEP,
  UNRELSKEPIMP,
  BEASTWRANG,
  BOLSTARMOR,
  CORSEND,
  CORSENDIMP,
  CUSTCOOL,
  EXHANDLER,
  FANCPAINT,
  FORTVAC,
  HIGHGTRAIN,
  KOITURN,
  LARGEPROJ,
  NOTTODAY,
  OVERAMMO,
  REINFRAME,
  SHOWBOAT,
  SIGVEH,
  SOOTHTONE,
  SPUR,
  SPURIMP,
  SPURSUP,
  TUNEDTHRUST,
  CALLEM,
  DISARMSMILE,
  DONTSHOOT,
  DOUBLEORNOTHING,
  DOUBLEORNOTHINGIMP,
  DOUBLEORNOTHINGSUP,
  FORTFAVORBOLD,
  GUNSBLAZING,
  JUSTKID,
  QUICKDRIMP,
  SECCHANCE,
  SORRYMESS,
  SPITFIRE,
  UPANTE,
  BADPRESS,
  BLACKMAIL,
  CUTQUEST,
  DISCREDIT,
  ENCCOMM,
  ENCWORD,
  INKNOW,
  INKNOWIMP,
  INFORM,
  INTERJECT,
  KNOWALL,
  PLAUSDENIMP,
  POSSPIN,
  POSSPINIMP,
  RESEARCHIMP,
  SUPPEVI,
  THORASS,
  TWISTWORD,
  DRIVEBACK,
  ARMSUP,
  BALEGAZE,
  BLINDSPOT,
  GRAPPLE,
  NOESC,
  OVERBAL,
  PRECSTR,
  PRIMEPOS,
  PRESSHOT,
  PROPAIM,
  REINITEM,
  SUPPRFIRE,
  CALMCOMM,
  CLEVCOMM,
  COMMPRESIMP,
  CONFIMP,
  MASINST,
  MASSTRAT,
  NATINST,
  READANY,
  READANYIMP,
  THATHOWDONE,
  WELLREAD,
  CUSTLOAD,
  CYBERNETICIST,
  DEFTMAKER,
  ENGREDUN,
  EYEDET,
  ENERGTRANS,
  MACHMEND,
  MOREMACH,
  OVERCHARGE,
  OVERCHARGEIMP,
  OVERCHARGESUP,
  REROUTEPROC,
  RESOURCEREFIT,
  SPKBINIMP,
  SPKBINSUP,
  DEATHBLOW,
  ESSENKILL,
  FORCECONN,
  HARASS,
  HOLNAV,
  INTUITNAV,
  MARKDEATH,
  MENACE,
  MINDMAT,
  ONENAT,
  PLANMAP,
  SHORTCUTIMP,
  STUDPLOT,
  SURVFIT,
  TERRKILL,
  AMBUSH,
  CUNNSNARE,
  MOVTARGET,
  SEIZEINIT,
  MOUNTDOMEST,
  MOUNTTRAINED,
  MOUNTBURDEN,
  MOUNTSTUBBORN,
  MOUNTDOMESTED,
  MOUNTFLY,
  BETTERLUCK,
  CONSTVIGIL,
  FEARSHAD,
  FREERUN,
  FREERUNIMP,
  IMPOSFALL,
  RECSCENE,
  SABERTHROWIMP,
  SENSESCENE,
  STRSMARTIMP,
  SUPHUMAN,
  HARDBOILED,
  HINDERSHOT,
  IRONBODY,
  MARTIALGRACE,
  OFFDRIVE,
  PRECSTRIMP,
  PRECSTRSUP,
  UNARMPARRY,
  AGGRNEG,
  CRUCPOINT,
  EMPTYSOUL,
  GOWITHOUT,
  IRONSOUL,
  MEDTRANCE,
  MINDBLEED,
  NOWMAST,
  ONCELEARN,
  SAVVYNEG,
  SAVVYNEGIMP,
  SKILLEDTEACH,
  SUNDERIMP,
  WISEWAR,
  WISEWARIMP,
  COMBATPROG,
  CONSTSPEC,
  CREATDES,
  DESPREP,
  DESFLAW,
  DOCKEXP,
  IMPDEF,
  IMPPOS,
  MASTDEMO,
  PUSHSPEC,
  REPPATCHSPEC,
  SMARTHAND,
  WEAKFOUND,
  ALCARTS,
  CHANAG,
  FONTPOW,
  IDING,
  IMPCONC,
  OVERWAURA,
  OVERWAURAIMP,
  POWDARK,
  SECRETLORE,
  TRANSMOG,
  ACKLAYSCST,
  DODGEIMP,
  EMBHATE,
  FARSTRIKE,
  HEADBUTT,
  INDWILL,
  INNERPEACE,
  JUYOSAV,
  POWPAIN,
  SAPITHSUND,
  TOUGHIMP,
  VAAPADCONT,
  ASTEPAHEAD,
  ANALYZEDATA,
  CUNNPERSON,
  EXHAUSTQUEST,
  HIDDIMP,
  INCITEDIST,
  INDISIMP,
  INSIDEKNOW,
  INSIDEPERSON,
  KNOWWEAK,
  KNOWWEAKIMP,
  LOSETHEM,
  MADEYOUTALK,
  PILOTTRAIN,
  RESISTQUEST,
  RESISTQUESTIMP,
  ADAPT,
  ANTREAS,
  ASSAULTDR,
  BACKROOM,
  BARREL,
  BARRELIMP,
  BARRELSUP,
  BEGLUCK,
  CLANKILL,
  CONCOPT,
  CONCOPTIMP,
  EXCEEDSPEC,
  EXCEEDSPECIMP,
  EXCEEDSPECSUP,
  FIRESUP,
  FIREREADY,
  FIRSTBRO,
  FORREP,
  GUARDREP,
  HYPASSAULT,
  LATTHINK,
  LEARNOPP,
  LEVER,
  MISSCRIT,
  NATOP,
  NATTROOP,
  ONETRASH,
  ONORDER,
  ORDSAT,
  OUTMAN,
  RAVAGE,
  RENFORM,
  RESPDEL,
  SCRAPEM,
  SCRAPEMIMP,
  SECRETFORCE,
  SIDEBYSIDE,
  SINFLAT,
  SOMEPROVE,
  TACTADV,
  TACTADVIMP,
  TEMPLETR,
  TRANSERR,
  UTILIMP,
  WILLFORCE,
  CUNNINGSTUNT,
  FINESSE,
  TENACIOUS,
  ALTDEAL,
  COMBATVET,
  COMARMS,
  IMPCOMARMS,
  DISCLORE,
  DISCSOUL,
  DISSTRIKE,
  DOUBLETALK,
  EXTREACH,
  FEARREP,
  FORMTAC,
  IMPFORMTAC,
  INSPLEAD,
  MOSTIMP,
  PERSTARGET,
  PRIDEJOY,
  IMPPRIDEJOY,
  SUPPRIDEJOY,
  PUSHASIDE,
  SEENTHINGS,
  STEADYAIM,
  TARGFIRE,
  TEMPTRAIN,
  TRUSTNO,
  BYBOOK,
  IMPSECRETJEDI,
  SECRETJEDI,
  KNOWROPES,
  KNOWENEMY,
  ASFORCEWILLS,
  TRUSTCAP,
  PREPBOARD,
}
