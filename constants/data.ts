import {
  NavItem,
  ServiceItem,
  ProjectItem,
  ReviewItem,
  ServiceArea,
  TrustBadgeItem,
  ProcessStep,
  FAQItem,
  FinancingPlan,
} from '@/types';

export const SITE_CONFIG = {
  name: 'ApexShield Roofing',
  legalName: 'ApexShield Roofing Contractors LLC',
  tagline: 'We protect what matters most.',
  subtitle: 'Premier Residential Roofing & Roof Replacement',
  industry: 'Residential Roofing & Roof Replacement',
  phone: '(555) 245-ROOF',
  phoneRaw: 'tel:5552457663',
  phoneDisplay: '(555) 245-7663',
  email: 'hello@apexshieldroofing.com',
  emailRaw: 'mailto:hello@apexshieldroofing.com',
  address: '4820 Research Blvd',
  city: 'Austin',
  state: 'TX',
  zip: '78759',
  fullAddress: '4820 Research Blvd, Austin, TX 78759',
  license: 'TX-ROC-84920',
  yearsInBusiness: 20,
  liabilityInsurance: '$2,000,000 Aggregate Coverage + Full Workman\'s Comp',
  hours: 'Mon-Sat: 7:00 AM - 7:00 PM',
  emergencyHours: '24/7 Rapid Emergency Response',
  averageRating: 4.9,
  totalReviews: 650,
  installedRoofs: '4,200+',
  primaryCTA: 'Get a Free Estimate',
  secondaryCTA: 'Call (555) 245-ROOF',
  announcement: {
    badge: 'Need Emergency Storm Repair? Available 24/7',
    license: 'License #TX-ROC-84920 • Fully Licensed & Insured',
    status: 'Crew On Standby',
  },
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Roof Inspection', href: '/roof-inspection' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Financing', href: '/financing' },
  { label: 'Contact', href: '/contact' },
];

export const TRUST_BADGES: TrustBadgeItem[] = [
  {
    title: '100% Insured',
    description: '$2M liability coverage & workman\'s comp for every worker.',
    iconName: 'ShieldCheck',
  },
  {
    title: '4K Drone Scans',
    description: 'Comprehensive 21-point aerial photographic wear report.',
    iconName: 'Plane',
  },
  {
    title: 'Master Elite',
    description: 'Top 2% factory-certified Owens Corning & GAF contractor.',
    iconName: 'Award',
  },
  {
    title: '50-Yr Warranty',
    description: 'Non-prorated transferrable manufacturer & labor guarantee.',
    iconName: 'Clock',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'replacement',
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortDesc:
      'Architectural shingles, standing seam metal, and Spanish barrel tile. Master-certified installations with 50-year transferrable manufacturer guarantees.',
    fullDesc:
      'When your roof reaches the end of its useful lifespan or sustains severe unrepairable storm damage, ApexShield delivers precision whole-home roof replacement. We strip down to original wood decking, repair compromised substrate, install heavy-duty synthetic moisture barriers, and precision-install class-leading architectural materials engineered for Central Texas climate extremes.',
    iconName: 'Home',
    features: [
      '50-year non-prorated transferrable warranty',
      'Class 4 impact-resistant shingles that reduce homeowner insurance premiums up to 28%',
      'Complete tear-off down to wood decking with ice/water barrier installation',
      'Continuous ridge-vent attic ventilation engineering for lower HVAC energy costs',
      'Typically completed in just 1 business day with spotless clean-up',
    ],
    materials: ['GAF Timberline HDZ', 'Owens Corning Duration', '24-Gauge Standing Seam Metal', 'Eagle Concrete & Clay Tile'],
    warranty: '50-Year Non-Prorated System Plus Warranty',
    ctaText: 'Explore Replacement Options',
    badge: 'Most Popular',
  },
  {
    id: 'repair',
    slug: 'roof-repair',
    title: 'Roof Repair & Leak Detection',
    shortDesc:
      'Missing shingles, damaged chimney flashing, rusted valleys, and pipe boot degradation stopped dead in their tracks before structural decking rots.',
    fullDesc:
      'A minor leak left unaddressed can silently rot ceiling rafters, breed mold, and weaken foundational framing. ApexShield utilizes high-resolution infrared thermal detection to locate moisture pathways hidden beneath shingles, providing permanent repairs with color-matched architectural materials that preserve your roof aesthetics and structural integrity.',
    iconName: 'Wrench',
    features: [
      'Pinpoint leak diagnostics using high-resolution thermal imaging',
      'Pipe jack, flashing, and chimney cricket rebuilds',
      'Wind-torn shingle replacement matched seamlessly to existing weathering',
      'Valley resealing and reinforced water-channel metal installation',
      'Same-day emergency response for active interior water intrusion',
    ],
    ctaText: 'Schedule Leak Diagnosis',
    badge: 'Same-Day Service',
  },
  {
    id: 'inspection',
    slug: 'roof-inspection',
    title: 'Free Drone Roof Inspection',
    shortDesc:
      'Ultra-detailed 4K optical inspections that safely map hail impacts, granular loss, and valley integrity without scuffing delicate shingle granules.',
    fullDesc:
      'Walking on steep or sun-baked roofs often breaks brittle shingles and displaces protective granules. Our FAA-certified remote pilots deploy 4K high-zoom inspection drones that capture high-resolution imagery of every facet, ridge, and valley. We compile a 21-point engineering report delivered to your inbox with zero obligation.',
    iconName: 'Camera',
    features: [
      '100% Free 21-point photographic assessment',
      'Zero foot-traffic damage to aging or brittle shingles',
      'Digital hail impact grid analysis for insurance documentation',
      'Attic structural moisture barrier and insulation check included',
      'Comprehensive PDF report sent to your email within 2 hours',
    ],
    ctaText: 'Book Free Drone Flight',
    badge: '100% Free',
  },
  {
    id: 'storm-damage',
    slug: 'services',
    title: 'Storm & Hail Damage Claim',
    shortDesc:
      'Direct insurance advocate representation. We meet your claims adjuster on the roof with photographic evidence to ensure 100% fair payout.',
    fullDesc:
      'Texas weather is notorious for golf-ball hail and 70+ mph straight-line gusts. Filing insurance claims alone often results in wrongful claim denials or lowball scope payouts. ApexShield acts as your technical advocate: we document storm damage using Xactimate industry software, climb the roof alongside your adjuster, and fight for full replacement coverage.',
    iconName: 'CloudLightning',
    features: [
      'Xactimate certified estimates matching insurance adjuster protocols',
      'In-person roof walk with your insurance adjuster',
      'Photographic proof of hail granule bruising and wind creases',
      'Help navigating depreciation checks and code upgrade supplements',
      'Zero out-of-pocket beyond your standard insurance deductible',
    ],
    ctaText: 'Get Insurance Assistance',
    badge: 'Advocacy Support',
  },
  {
    id: 'emergency-tarping',
    slug: 'services',
    title: '24/7 Emergency Tarping',
    shortDesc:
      'Rapid 60-minute dispatch across Austin when high winds or fallen branches puncture your attic envelope. Prevent catastrophic structural water losses.',
    fullDesc:
      'When tree limbs pierce your roof or torrential rain overwhelms flashings in the middle of the night, every minute counts. Our on-call emergency fleet carries heavy 20-mil reinforced waterproof tarps, framing lumber, and safety equipment to immediately secure your home and prevent catastrophic ceiling collapse.',
    iconName: 'AlertTriangle',
    features: [
      '60-minute rapid emergency response team',
      'Hurricane-rated sandbag and timber mechanical fastening',
      'Fallen tree limb stabilization and removal coordination',
      'Immediate interior water extraction mitigation guidance',
      'Full documentation for fast insurance emergency reimbursement',
    ],
    ctaText: 'Call Emergency Dispatch',
    badge: '24/7 On-Call',
  },
  {
    id: 'maintenance',
    slug: 'services',
    title: 'Preventative Roof Shield Care',
    shortDesc:
      'Scheduled annual maintenance, thermal attic inspections, valley clearance, and silicone reseals that prolong the service lifespan of your roof by 8-10 years.',
    fullDesc:
      'The brutal Central Texas summer sun bakes pipe boots and dries out elastomeric sealants within 5 to 7 years. Our preventative shield program provides bi-annual inspections, debris removal from critical roof valleys, gutter flow verification, and UV-resistant resealing of all penetration flashings to extend total roof life.',
    iconName: 'Shield',
    features: [
      'Bi-annual multi-point inspection and tune-up',
      'Valley and gutter clearance preventing leaf-dam water backups',
      'High-grade commercial silicone resealing on all flashings & pipe collars',
      'Early detection of thermal shock micro-fissures',
      'Transferrable maintenance records boosting home resale value',
    ],
    ctaText: 'View Maintenance Plans',
    badge: 'Value Protection',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Free 21-Point Drone Scan',
    description:
      'We deploy automated 4K aerial photography and conduct an internal attic crawl to assess moisture barriers, deck rot, and ventilation airflow.',
    duration: 'Duration: 45 Mins',
    iconName: 'Plane',
  },
  {
    number: '02',
    title: 'Itemized Proposal & 3D Design',
    description:
      'Review multiple shingle styles and color renderings on a 3D digital model of your house. Clear pricing breakdowns with zero surprise fees.',
    duration: 'Same-Day Turnaround',
    iconName: 'FileText',
  },
  {
    number: '03',
    title: '1-Day Precision Tear-Off & Install',
    description:
      'Old layers are removed down to fresh wood. We lay heavy synthetic underlayment, ice/water shields, and precision nail every architectural shingle.',
    duration: 'Usually 1 Business Day',
    iconName: 'Hammer',
  },
  {
    number: '04',
    title: 'Magnetic Sweep & Warranty',
    description:
      'We sweep your property 4 times with commercial magnets. We do a final walkthrough together and hand over your certified 50-year warranty documents.',
    duration: 'Zero Debris Left Behind',
    iconName: 'CheckCircle2',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Architectural Shingle Upgrade',
    category: 'replacement',
    categoryLabel: 'Roof Replacement',
    location: 'Austin, TX',
    neighborhood: 'Davenport Ranch',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtKNsmHTqUIqtZrJUxUtI-ZyoiaifDPJzPBrileKn5oAwHkuN9ZQEG3B6wps2cEZL3CRsc2UeEGICXid0TFTp_1jReYIYTzIfA-Rk2JEjpY4ugHAe6NtUpTax27SbrF6Br995JqOia9xUPcuCVjk0U9kAqgqYq6XnEbaJUNYUjZKMsQ220eH0PfxzwQy7D3JKaNHw6jeaRLQr7gJVMBo68LwEh4-Gmify1KRsFkmym-5HJ9HzgRzWd',
    completionTime: 'Completed in 1 Day',
    material: 'Architectural Shingle (GAF Timberline HDZ Charcoal)',
    ratingOrStat: '130 MPH Wind Rated',
    description:
      'Replaced 18-year-old hail-pitted 3-tab shingles with GAF Timberline HDZ in Charcoal. Includes continuous ridge vent and lifetime algae guard protection.',
  },
  {
    id: 'proj-2',
    title: 'Hailstorm Damage Restoration',
    category: 'storm',
    categoryLabel: 'Insurance Restoration',
    location: 'Round Rock, TX',
    neighborhood: 'Forest Creek',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbX6OVRR_ut_-lnnfzcwFo5vxKVKA97ECjIylef1vROAIeRHLxukcEJstIj7XTUGkS8exTjXCD5ZL923dLm5uL8-Ikr1k1d0GGPExjGNJRK7RXfakwoOtMQ4sBQSBvSmADvKgv8uW-RRqWXwM1tNQwKQTluphmPf7WMIafeMepGzhlnzrDOJZ6bfzNnfHAltCtwuLb8BMxpPM_Cv3rSafCBtMGg8FNiXX0bobgWb4L0byps7h44nsH',
    completionTime: '100% Insurance Covered',
    material: 'Owens Corning Duration (Estate Gray)',
    ratingOrStat: 'Zero Out of Pocket',
    description:
      'Catastrophic spring hailstorm restoration. ApexShield worked hand-in-hand with the homeowner\'s insurance to secure complete decking and shingle replacement.',
  },
  {
    id: 'proj-3',
    title: 'Standing Seam Metal Roof',
    category: 'metal',
    categoryLabel: 'Architectural Metal',
    location: 'Westlake Hills, TX',
    neighborhood: 'Westlake Hills',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBR66DvOV8d0NEdViAdw3Vs84if0imFCKSIgYrp-5FGhYS8h5C5scfmmXP4pJuKpLYLO6gIb9krTyMRgXd4hUONUSTPvoFUGJ3AxiRDw3Ih-8Ce2IVS9CDeaj0iaZsp_GRFLB_OBxOXDG8cTVaOH3A6HP922ACAWFZFLLmwvhwADlj_2inilwgIO1S66CEmEE8TxGT0xTQcrgA6pd39PvwBmdYfgiAvFJUOG1iBTwarYqgMmNbOP-uT',
    completionTime: 'Architectural Metal',
    material: '24-Ga Galvalume Metal (Matte Black)',
    ratingOrStat: 'Class A Fire Rated',
    description:
      'Engineered 24-gauge matte black standing seam metal roof for exceptional fire resistance, maximum reflectivity, and 70+ year operational lifespan.',
  },
  {
    id: 'proj-4',
    title: 'Class 4 Hail Shield Replacement',
    category: 'replacement',
    categoryLabel: 'Roof Replacement',
    location: 'Cedar Park, TX',
    neighborhood: 'Ranch at Cypress Creek',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBme3HRP8Qwkr8wud1R_UVrtDV8-N1ENyRRh9i_UJA-RUey_RolfM2oe0cS9soLBm0QW9fqDd41AjpOCmXZVfdtzT-1YwXH4R2DLyjfohFks2J1ffSyBqyfhpKWpeXCUWJYuJFmxJ0lCFXY1akYbkKN0FRSHwtlcLXyLo6b12BDlTsJ7qdWzReBMDNLBfgaCFmSv33x0kXGhqJ6ZkF6uNZNfnxNYi8wy78uWM6KpOLwhX2clQ7yNkyS',
    completionTime: 'Completed in 1 Day',
    material: 'CertainTeed Landmark IR (Pewterwood)',
    ratingOrStat: '28% Insurance Discount',
    description:
      'Installed high-impact Class 4 shingles qualifying the homeowner for maximum homeowner insurance premium discounts while resisting up to 2-inch hail impact.',
  },
  {
    id: 'proj-5',
    title: 'Chimney & Valley Leak Reconstruction',
    category: 'repair',
    categoryLabel: 'Precision Repair',
    location: 'Georgetown, TX',
    neighborhood: 'Berry Creek',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg24K2d0PvN13pnieVCxj-t2YG0cpCC4zGcZukYTiuwxx07fw9ECceIZM5ocPm6c8Z3Mb8hnsaJgwkSBuwPo1D_LKFwGQRaU_qeA9Q4rzlUL-LY8tR9HkzDFcWYS9eaac_fFyLqPixKhybF6f6Z9nQOXz6pMJumqSMicW1lySJv6TdABwwRNvK_NjBZYJmf2xbfNFMhc41WJ4Ik2DbbpnxSK4EZQesj2uEVtdovDthtfm2LHsWv6MS',
    completionTime: 'Same-Day Repair',
    material: 'Heavy Copper Step Flashing & Ice Barrier',
    ratingOrStat: 'Leak Terminated',
    description:
      'Fixed chronic flashing leak behind stone fireplace. Constructed custom diversion cricket and soldered copper step flashings with 10-year warranty.',
  },
  {
    id: 'proj-6',
    title: 'Modern Farmhouse Standing Seam',
    category: 'metal',
    categoryLabel: 'Architectural Metal',
    location: 'Lakeway, TX',
    neighborhood: 'Rough Hollow',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtKNsmHTqUIqtZrJUxUtI-ZyoiaifDPJzPBrileKn5oAwHkuN9ZQEG3B6wps2cEZL3CRsc2UeEGICXid0TFTp_1jReYIYTzIfA-Rk2JEjpY4ugHAe6NtUpTax27SbrF6Br995JqOia9xUPcuCVjk0U9kAqgqYq6XnEbaJUNYUjZKMsQ220eH0PfxzwQy7D3JKaNHw6jeaRLQr7gJVMBo68LwEh4-Gmify1KRsFkmym-5HJ9HzgRzWd',
    completionTime: 'Completed in 2 Days',
    material: 'Kynar 500 Coated Standing Seam (Slate Gray)',
    ratingOrStat: 'Solar Ready System',
    description:
      'Stunning standing seam metal roof integrated with low-profile snow/debris guards and custom downspout collector heads for rainwater harvesting.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'David & Sarah M.',
    initials: 'DS',
    location: 'Lakeway, TX',
    serviceType: 'Full Roof Replacement',
    rating: 5,
    text:
      'ApexShield replaced our entire 3,400 sq ft roof in a single day after the big April hail storm. Not a single loose nail was left in the lawn for our two dogs. Outstanding crew!',
    source: 'Google',
    verified: true,
    date: '2 weeks ago',
  },
  {
    id: 'rev-2',
    author: 'Michael R.',
    initials: 'MR',
    location: 'Round Rock, TX',
    serviceType: 'Insurance Storm Claim',
    rating: 5,
    text:
      'Their drone inspection caught hairline micro-cracks that our insurance adjuster originally skipped. ApexShield met with them directly and our entire claim was approved in full.',
    source: 'Google',
    verified: true,
    date: '1 month ago',
  },
  {
    id: 'rev-3',
    author: 'Elena T.',
    initials: 'ET',
    location: 'Austin, TX',
    serviceType: 'GAF Timberline HDZ',
    rating: 5,
    text:
      'Zero sales gimmicks, transparent pricing, and the roof looks stunning. Even better, our summer electricity bills dropped noticeably due to the ridge-vent ventilation they installed.',
    source: 'Angi',
    verified: true,
    date: '1 month ago',
  },
  {
    id: 'rev-4',
    author: 'Robert K.',
    initials: 'RK',
    location: 'Georgetown, TX',
    serviceType: 'Emergency Repair',
    rating: 5,
    text:
      'They arrived at 2 AM to tarp our leaking chimney during severe tropical rain, then completed the permanent flashing repair 3 days later. Unmatched reliability.',
    source: 'BBB',
    verified: true,
    date: '2 months ago',
  },
  {
    id: 'rev-5',
    author: 'Patricia & Greg L.',
    initials: 'PL',
    location: 'Cedar Park, TX',
    serviceType: 'Class 4 Impact Roof',
    rating: 5,
    text:
      'We saved $740 annually on our home insurance with the Class 4 certificate ApexShield provided after installation. From estimate to cleanup, this was the cleanest contractor experience we have ever had.',
    source: 'Google',
    verified: true,
    date: '3 months ago',
  },
  {
    id: 'rev-6',
    author: 'Travis W.',
    initials: 'TW',
    location: 'Westlake Hills, TX',
    serviceType: 'Standing Seam Metal',
    rating: 5,
    text:
      'True architectural artisans. We requested a matte black standing seam metal roof for our custom home. The seams are ruler-straight and the perimeter flashings look like sculpture.',
    source: 'Google',
    verified: true,
    date: '3 months ago',
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Austin',
    slug: 'austin',
    county: 'Travis County',
    zipCodes: ['78701', '78703', '78704', '78731', '78746', '78759'],
    description:
      'Covering all Austin metro neighborhoods including Central Austin, Westlake, Circle C, Steiner Ranch, and Great Hills with rapid drone dispatch.',
    responseTime: '30-45 minutes',
    activeCrews: 6,
  },
  {
    name: 'Round Rock',
    slug: 'round-rock',
    county: 'Williamson County',
    zipCodes: ['78664', '78665', '78681'],
    description:
      'Serving Forest Creek, Teravista, Brushy Creek, and surrounding Round Rock subdivisions with high-frequency storm hail restoration.',
    responseTime: '20-30 minutes',
    activeCrews: 4,
  },
  {
    name: 'Cedar Park',
    slug: 'cedar-park',
    county: 'Williamson County',
    zipCodes: ['78613', '78630'],
    description:
      'Providing Class 4 impact shingles and standing seam metal solutions across Ranch at Cypress Creek, Twin Creeks, and Buttercup Creek.',
    responseTime: '25-35 minutes',
    activeCrews: 3,
  },
  {
    name: 'Georgetown',
    slug: 'georgetown',
    county: 'Williamson County',
    zipCodes: ['78626', '78628', '78633'],
    description:
      'Dedicated roofing crews for Sun City, Berry Creek, and historic Georgetown estates requiring precision masonry flashing and architectural roofing.',
    responseTime: '30-40 minutes',
    activeCrews: 3,
  },
  {
    name: 'Pflugerville',
    slug: 'pflugerville',
    county: 'Travis County',
    zipCodes: ['78660', '78691'],
    description:
      'Specializing in fast roof replacements, insurance storm recovery, and leak detection across Highland Park and Falcon Pointe.',
    responseTime: '25-35 minutes',
    activeCrews: 2,
  },
  {
    name: 'Lakeway',
    slug: 'lakeway',
    county: 'Travis County',
    zipCodes: ['78734', '78738'],
    description:
      'Luxury lakefront properties and steep-pitch estate roofing solutions throughout Rough Hollow, The Hills, and Spanish Oaks.',
    responseTime: '35-45 minutes',
    activeCrews: 2,
  },
  {
    name: 'Leander',
    slug: 'leander',
    county: 'Williamson County',
    zipCodes: ['78641', '78646'],
    description:
      'New construction and hail replacement roofing for Travisso, Crystal Falls, and rapidly growing North Austin family neighborhoods.',
    responseTime: '30-40 minutes',
    activeCrews: 2,
  },
  {
    name: 'Buda & Kyle',
    slug: 'buda-kyle',
    county: 'Hays County',
    zipCodes: ['78610', '78640'],
    description:
      'Southern corridor dispatch covering Plum Creek, Shadow Creek, and Sunfield with same-day roof inspections and fast tarping.',
    responseTime: '40-50 minutes',
    activeCrews: 2,
  },
  {
    name: 'Dripping Springs',
    slug: 'dripping-springs',
    county: 'Hays County',
    zipCodes: ['78620'],
    description:
      'Hill Country estate roofing featuring heavy metal standing seam, rainwater collection flashing, and fire-resistant materials.',
    responseTime: '40-50 minutes',
    activeCrews: 2,
  },
];

export const FINANCING_PLANS: FinancingPlan[] = [
  {
    title: 'Same-As-Cash 0% APR',
    apr: '0% APR',
    term: '12 Months',
    monthlyPer10k: '$833/mo',
    description:
      'No interest if paid in full within 12 months. Ideal for homeowners awaiting insurance proceeds or preferring zero financing costs.',
    features: [
      'Zero interest if paid within 12 months',
      'No prepayment penalties',
      'Fast 60-second soft-pull pre-qualification',
      'Pairs seamlessly with pending insurance payout checks',
    ],
    recommended: true,
  },
  {
    title: 'Low Monthly Payment',
    apr: '7.99% Fixed',
    term: '60 Months',
    monthlyPer10k: '$202/mo',
    description:
      'Predictable, budget-friendly fixed monthly installments allowing you to upgrade to premium Class 4 impact shingles or standing seam metal.',
    features: [
      'Low fixed monthly rate for 5 full years',
      'No early pay-off fees',
      'Covers complete project including decking & gutters',
      'High approval rates across credit tiers',
    ],
  },
  {
    title: 'Zero Money Down Flex',
    apr: '8.99% Fixed',
    term: '84 Months',
    monthlyPer10k: '$161/mo',
    description:
      'Maximum flexibility with $0 out-of-pocket on installation day. Lowest monthly payment spread out over 7 years.',
    features: [
      '$0 down payment required at signing',
      'Instant electronic approval on site',
      'Keep your emergency cash reserves untouched',
      'Can be transferred to new homeowner upon sale',
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a full roof replacement cost in Austin, TX?',
    answer:
      'Residential roof replacement in Central Texas typically ranges between $8,500 and $19,500 for standard architectural shingles depending on square footage, pitch, layers, and decking condition. Standing seam metal systems generally range higher due to their 70-year lifespan. ApexShield provides guaranteed, itemized pricing upfront with zero hidden fees.',
  },
  {
    question: 'How does the free 4K drone roof inspection work?',
    answer:
      'Our certified drone pilot arrives at your property, executes an automated high-resolution flight grid capturing over 80 detailed macro images of your roof surfaces, gutters, and flashings without touching or scuffing your shingles. We then inspect the attic crawl space for moisture and deliver a comprehensive 21-point PDF report to your phone or email.',
  },
  {
    question: 'Can you help me file a storm or hail damage insurance claim?',
    answer:
      'Yes! Over 60% of our roof replacements are covered by homeowner insurance. We prepare industry-standard Xactimate estimates, meet your insurance adjuster directly on your roof to point out storm collateral damage, and ensure you receive the full scope payout you are entitled to.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Approximately 90% of our residential roof replacements are completed in just 1 single business day! We arrive at 7:00 AM, protect your landscaping and property with heavy tarps, tear off old layers, install synthetic underlayment and new shingles, and perform a 4-pass magnetic sweep before leaving by evening.',
  },
  {
    question: 'What kind of warranty does ApexShield provide?',
    answer:
      'Because ApexShield is a factory-certified Master Elite contractor (top 2% nationwide), we offer 50-year non-prorated manufacturer system warranties covering both materials and labor. If any component fails due to manufacturer defect, the replacement costs including tear-off and labor are 100% covered.',
  },
  {
    question: 'What makes Class 4 Impact-Resistant shingles worth it?',
    answer:
      'Class 4 shingles are tested to withstand 2-inch steel balls dropped from 20 feet without cracking. In Texas hail country, installing Class 4 shingles not only prevents future leak damage but also earns you up to a 28% discount on your annual homeowner insurance premium.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Factory-Certified Master Craftsmen',
    desc: 'No sub-contracted casual labor. Our dedicated full-time technicians are GAF & CertainTeed Master Elite credentialed.',
    icon: 'Award',
  },
  {
    title: 'Pristine Yard & Flowerbed Protection',
    desc: 'Every bush, flower bed, and A/C condenser is protected with heavy-duty netting. We run quad-pass rolling magnets so zero nails harm pets or tires.',
    icon: 'Shield',
  },
  {
    title: 'Locked-In, Guaranteed Itemized Estimates',
    desc: 'No surprise price jumps midway through tear-off. What we quote on day one is exactly what you pay on final sign-off.',
    icon: 'FileCheck',
  },
  {
    title: 'Dedicated Live Concierge & Photo Feed',
    desc: 'Receive real-time WhatsApp or SMS photo updates throughout install day so you know exactly how your roof decking is being sealed.',
    icon: 'MessageSquare',
  },
];

export const STATS = [
  { value: '4,200+', label: 'Roofs Installed', desc: 'Across Central Texas with zero failures.' },
  { value: '0% APR', label: 'Flexible Financing', desc: 'Up to 60-month terms available.' },
  { value: '4.9 / 5.0', label: 'Customer Rating', desc: 'Over 650+ verified 5-star reviews.' },
  { value: '50-Year', label: 'Transferrable Warranty', desc: 'Non-prorated manufacturer guarantee.' },
];
