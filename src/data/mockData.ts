import { Product, StarterKit, DistributorRank, Testimonial, TrainingLesson, FAQItem, DistributorProfile } from '../types';

export const STARTER_KIT: StarterKit = {
  id: 'starter-kit-2999',
  name: 'VitaNest Consultant Starter Kit',
  price: 2999,
  pv: 40,
  image: '/src/assets/images/starter_kit_showcase_1791561214102.jpg',
  description: 'Everything you need to experience our core formulations and launch your independent ethical direct-selling business with confidence.',
  itemsIncluded: [
    '5 Full-size & Travel Formulations (Greens Mix, Ashwagandha, Neem Face Wash, Tulsi Tea, Pure Aloe Gel)',
    'Official Direct Selling Guidelines 2021 Compliant Onboarding Manual',
    'Personal Replicated Website & Shareable Storefront Link (vitanest.in/ref/[your-id])',
    '1-Year Access to VitaNest Distributor Backoffice Portal & Training Academy',
    'Product Sample Sachets, Eco-cotton Tote Bag & Ingredient Reference Cards'
  ],
  perks: [
    'Immediate 20%–30% retail margin on all catalog items',
    'No mandatory monthly inventory holding or auto-ship requirement',
    'Full 30-Day Buyback & Return Protection as per Consumer Protection Rules',
    'Dedicated regional mentor & distributor compliance hotline support'
  ]
};

export const PRODUCTS: Product[] = [
  // Daily Nutrition
  {
    id: 'prod-plant-protein',
    name: 'Plant-Based Organic Protein Powder',
    category: 'daily-nutrition',
    categoryLabel: 'Daily Nutrition',
    price: 1899,
    distributorPrice: 1425,
    pv: 25,
    size: '500g Jar',
    tagline: 'Clean pea and brown rice protein with digestive enzymes.',
    description: 'Sustainably harvested plant protein providing 24g of complete, highly bioavailable protein per serving. Gentle on digestion with zero chalkiness, formulated with organic sprouted seeds and prebiotic fiber.',
    benefits: ['24g complete protein per scoop', 'Naturally flavored with Madagascar vanilla', 'Zero added refined sugars', 'Dairy-free, gluten-free, hypoallergenic'],
    keyIngredients: ['Organic Pea Protein Isolate', 'Sprouted Brown Rice Protein', 'Digestive Enzyme Blend (Papain & Bromelain)', 'Organic Inulin Prebiotic'],
    usage: 'Mix 1 rounded scoop (32g) with 300ml of cold water, almond milk, or your morning smoothie.',
    image: '/src/assets/images/product_daily_nutrition_1791561229653.jpg',
    badge: 'Bestseller',
    fssaiCategory: 'Nutraceutical (FSSAI Lic. 10019011006421)',
    inStock: true,
    rating: 4.9,
    reviewsCount: 142
  },
  {
    id: 'prod-multivitamin-gummies',
    name: 'Daily Multivitamin Berry Gummies',
    category: 'daily-nutrition',
    categoryLabel: 'Daily Nutrition',
    price: 899,
    distributorPrice: 675,
    pv: 12,
    size: '60 Pectin Gummies',
    tagline: 'Essential vitamins and minerals in delicious pectin chews.',
    description: 'Chewable daily nutrition crafted with real fruit pectin instead of animal gelatin. Packed with vitamins A, C, D3, E, B-Complex, and zinc to support natural vitality, focus, and immune health.',
    benefits: ['100% RDA of essential micronutrients', '100% vegetarian pectin formula', 'Natural strawberry and blueberry flavors', 'No artificial colors or preservatives'],
    keyIngredients: ['Vitamin D3 (from lichen)', 'Vitamin C (Ascorbic Acid)', 'B-Complex (B6, B12, Folic Acid)', 'Zinc Citrate', 'Fruit Pectin Base'],
    usage: 'Chew 2 gummies daily with breakfast or afternoon snack. Suitable for adults and children 12+.',
    image: '/src/assets/images/product_daily_nutrition_1791561229653.jpg',
    fssaiCategory: 'Health Supplement (FSSAI Lic. 10019011006421)',
    inStock: true,
    rating: 4.8,
    reviewsCount: 98
  },
  {
    id: 'prod-greens-mix',
    name: 'Vital Greens Superfood Drink Mix',
    category: 'daily-nutrition',
    categoryLabel: 'Daily Nutrition',
    price: 1299,
    distributorPrice: 975,
    pv: 18,
    size: '250g Powder',
    tagline: 'Cold-milled wheatgrass, spirulina, moringa, and barley.',
    description: 'An alkaline powerhouse blending raw Indian greens, adaptogenic herbs, and digestive botanicals. Supports gentle daily detox, metabolic balance, and sustained cellular energy.',
    benefits: ['Alkalizing green botanicals blend', 'Rich in natural chlorophyll and antioxidants', 'Mild refreshing lemon-mint taste', 'Promotes gut microbiome balance'],
    keyIngredients: ['Organic Wheatgrass Powder', 'Spirulina', 'Shade-Dried Moringa Leaf', 'Barley Grass', 'Amla Extract', 'Natural Mint'],
    usage: 'Stir 1 teaspoon (8g) into a tall glass of room temperature or chilled water first thing in the morning.',
    image: '/src/assets/images/product_daily_nutrition_1791561229653.jpg',
    badge: 'Popular',
    fssaiCategory: 'Nutraceutical (FSSAI Lic. 10019011006421)',
    inStock: true,
    rating: 4.9,
    reviewsCount: 186
  },

  // Herbal Care
  {
    id: 'prod-ashwagandha',
    name: 'Organic Ashwagandha Capsules (KSM-66)',
    category: 'herbal-care',
    categoryLabel: 'Herbal Care',
    price: 799,
    distributorPrice: 599,
    pv: 11,
    size: '60 Veggie Capsules',
    tagline: 'Standardized full-spectrum root extract for stress resilience.',
    description: 'Gold-standard KSM-66 organic ashwagandha root extract clinically backed for promoting calm, restful sleep, and healthy cortisol levels without inducing drowsiness.',
    benefits: ['Supports healthy nervous system response', 'Encourages deep, restorative sleep', 'Zero synthetic fillers or binders', 'Standardized with 5% withanolides'],
    keyIngredients: ['Organic Ashwagandha (Withania somnifera) Root Extract KSM-66 (500mg)', 'Piperine Bio-enhancer (5mg)'],
    usage: 'Take 1 capsule twice daily with warm water or milk, preferably after meals.',
    image: '/src/assets/images/product_herbal_care_1791561241176.jpg',
    badge: 'Bestseller',
    fssaiCategory: 'Ayurvedic Proprietary (AYUSH Certified)',
    inStock: true,
    rating: 5.0,
    reviewsCount: 215
  },
  {
    id: 'prod-tulsi-tea',
    name: 'Sacred Tulsi Wellness Herbal Tea',
    category: 'herbal-care',
    categoryLabel: 'Herbal Care',
    price: 449,
    distributorPrice: 335,
    pv: 6,
    size: '100g Loose Leaf',
    tagline: 'Pure Krishna, Rama, and Vana Tulsi whole leaf blend.',
    description: 'A comforting caffeine-free infusion of three revered holy basil varieties grown organically on small family farms in Uttar Pradesh. Rejuvenates the senses with subtle peppery and aromatic notes.',
    benefits: ['Caffeine-free and calming', 'Naturally rich in antioxidant eugenol', 'Supports clear respiratory passages', 'Single-origin certified organic leaves'],
    keyIngredients: ['Krishna Tulsi Leaf', 'Rama Tulsi Leaf', 'Vana Tulsi Leaf', 'Cardamom Pods'],
    usage: 'Steep 1 teaspoon in boiling water for 3–5 minutes. Strain and sip warm. Delicious with a drop of raw honey.',
    image: '/src/assets/images/product_herbal_care_1791561241176.jpg',
    fssaiCategory: 'Herbal Infusion (FSSAI Lic. 10019011006421)',
    inStock: true,
    rating: 4.8,
    reviewsCount: 84
  },
  {
    id: 'prod-turmeric-shots',
    name: 'Turmeric Immunity Cold-Pressed Shots',
    category: 'herbal-care',
    categoryLabel: 'Herbal Care',
    price: 999,
    distributorPrice: 750,
    pv: 14,
    size: 'Pack of 12 x 50ml Glass Bottles',
    tagline: 'Fresh raw turmeric juice with black pepper and ginger.',
    description: 'Potent daily wellness elixir crafted from fresh Lakadong high-curcumin turmeric rhizomes, cold-pressed raw ginger, black pepper extract, and raw lemon juice.',
    benefits: ['High 7.5% natural curcuminoid concentration', 'Enhanced bioavailability with piperine', 'Instant natural digestive boost', 'Recyclable amber glass bottles'],
    keyIngredients: ['Lakadong Raw Turmeric Rhizome Juice', 'Ginger Juice', 'Black Pepper Oleoresin', 'Lemon Juice Concentrate'],
    usage: 'Drink 1 chilled shot bottle daily before breakfast or post-workout.',
    image: '/src/assets/images/product_herbal_care_1791561241176.jpg',
    badge: 'Trending',
    fssaiCategory: 'Functional Beverage (FSSAI Lic. 10019011006421)',
    inStock: true,
    rating: 4.9,
    reviewsCount: 110
  },

  // Skin and Body
  {
    id: 'prod-aloe-gel',
    name: 'Cold-Pressed Pure Aloe Vera Gel',
    category: 'skin-body',
    categoryLabel: 'Skin & Body',
    price: 549,
    distributorPrice: 410,
    pv: 8,
    size: '200ml Glass Jar',
    tagline: '99% pure inner leaf gel with natural vitamin E.',
    description: 'Transparent, ultra-soothing gel harvested from mature organic aloe barbadensis leaves. Hydrates parched skin, soothes sunburn, and provides a weightless, non-sticky moisture shield.',
    benefits: ['Multi-purpose: face, scalp, and body hydrator', 'Free from artificial green dyes or fragrance', 'Instant cooling and calming relief', 'Soothes razor burns and dry patches'],
    keyIngredients: ['Organic Aloe Barbadensis Leaf Juice (99%)', 'Tocopherol (Plant Vitamin E)', 'Radish Root Ferment'],
    usage: 'Apply gently onto clean face, neck, or body. Can be used as an overnight sleep mask or calming after-sun balm.',
    image: '/src/assets/images/product_skin_body_1791561256053.jpg',
    badge: 'Popular',
    fssaiCategory: 'Cosmetic / Dermatologically Tested',
    inStock: true,
    rating: 4.9,
    reviewsCount: 167
  },
  {
    id: 'prod-neem-facewash',
    name: 'Botanical Neem & Tea Tree Face Wash',
    category: 'skin-body',
    categoryLabel: 'Skin & Body',
    price: 499,
    distributorPrice: 375,
    pv: 7,
    size: '150ml Pump Bottle',
    tagline: 'Gentle clarifying cleanser without SLS or sulfates.',
    description: 'A botanical cleansing wash that sweeps away excess sebum, pollution particles, and impurities without stripping the skin of its natural protective moisture barrier.',
    benefits: ['Soap-free gentle foaming action', 'Natural antibacterial neem leaves', 'Calms redness and breakout congestion', 'Leaves skin feeling soft and balanced'],
    keyIngredients: ['Wild Neem (Azadirachta indica) Leaf Extract', 'Australian Tea Tree Leaf Oil', 'Organic Glycerin', 'Witch Hazel'],
    usage: 'Massage 1–2 pumps onto wet skin in circular motions. Rinse thoroughly with cool water.',
    image: '/src/assets/images/product_skin_body_1791561256053.jpg',
    fssaiCategory: 'Cosmetic / Ayurvedic Formulation',
    inStock: true,
    rating: 4.7,
    reviewsCount: 124
  },
  {
    id: 'prod-vitamin-c-serum',
    name: 'Radiant Vitamin C & Hyaluronic Serum',
    category: 'skin-body',
    categoryLabel: 'Skin & Body',
    price: 1199,
    distributorPrice: 899,
    pv: 16,
    size: '30ml Dropper Bottle',
    tagline: '15% stable ethyl ascorbic acid with botanicals.',
    description: 'Brightening daily serum combining stable, non-irritating vitamin C, multi-weight hyaluronic acid, and fermented green tea extract to revive dull complexion and protect against oxidative stressors.',
    benefits: ['Visibly evens skin tone & texture', 'Deep hydration across dermal layers', 'Photostable formula that does not oxidize quickly', 'Fragrance-free and vegan'],
    keyIngredients: ['3-O-Ethyl Ascorbic Acid (15%)', 'Sodium Hyaluronate', 'Ferulic Acid', 'Kakadu Plum Extract'],
    usage: 'Dispense 3–4 drops onto freshly cleansed fingertips and press into face and neck before moisturizer and sunscreen.',
    image: '/src/assets/images/product_skin_body_1791561256053.jpg',
    badge: 'Bestseller',
    fssaiCategory: 'Cosmetic Formulation',
    inStock: true,
    rating: 4.9,
    reviewsCount: 204
  },

  // Home Wellness
  {
    id: 'prod-diffuser',
    name: 'Ceramic Ultrasonic Essential Oil Diffuser',
    category: 'home-wellness',
    categoryLabel: 'Home Wellness',
    price: 2499,
    distributorPrice: 1875,
    pv: 32,
    size: '300ml Matte Ceramic Unit',
    tagline: 'Whisper-quiet ultrasonic misting with warm ambient glow.',
    description: 'Minimalist hand-finished matte ceramic diffuser that disperses micro-fine aromatherapy mists while maintaining the therapeutic potency of essential oils. Features automatic shut-off and dual timer modes.',
    benefits: ['Whisper-quiet ultrasonic technology (<20dB)', 'Covers up to 450 sq. ft.', 'Warm soothing ambient LED night light', 'BPA-free reservoir with auto shut-off'],
    keyIngredients: ['Handmade Matte Ceramic Shell', 'Medical-Grade BPA-Free Tank', 'Ultrasonic Transducer Plate'],
    usage: 'Fill tank with clean room temperature water up to max line. Add 4–6 drops of pure essential oil. Select 3h or 6h continuous mist.',
    image: '/src/assets/images/hero_vitanest_wellness_1791561199230.jpg',
    badge: 'Staff Pick',
    fssaiCategory: 'Home Electrical Wellness (RoHS Compliant)',
    inStock: true,
    rating: 5.0,
    reviewsCount: 93
  },
  {
    id: 'prod-floor-cleaner',
    name: 'Bio-Enzyme Natural Floor Cleaner',
    category: 'home-wellness',
    categoryLabel: 'Home Wellness',
    price: 499,
    distributorPrice: 375,
    pv: 7,
    size: '1000ml Concentrated Bottle',
    tagline: 'Citrus bio-enzymes, neem extract, and lemongrass.',
    description: '100% biodegradable floor cleaning concentrate made from fermented citrus peel enzymes and indigenous botanicals. Non-toxic, baby-safe, and pet-friendly with a naturally fresh citrus aroma.',
    benefits: ['Pet and child friendly surfaces', 'Naturally repels ants and house insects', 'Zero chlorine, ammonia, or synthetic fragrance', '1 bottle lasts up to 60 washes'],
    keyIngredients: ['Fermented Citrus Peel Bio-Enzymes', 'Neem Seed Oil Extract', 'Pure Lemongrass Essential Oil', 'Plant-Based Surfactants'],
    usage: 'Dilute 1 capful (15ml) in half a bucket of water (4-5L) and mop floors normally. No rinsing needed.',
    image: '/src/assets/images/starter_kit_showcase_1791561214102.jpg',
    fssaiCategory: 'Eco-Certified Home Care',
    inStock: true,
    rating: 4.8,
    reviewsCount: 76
  },
  {
    id: 'prod-incense',
    name: 'Hand-Rolled Sacred Herbal Incense Sticks',
    category: 'home-wellness',
    categoryLabel: 'Home Wellness',
    price: 299,
    distributorPrice: 225,
    pv: 4,
    size: '40 Sticks + Ceramic Stand',
    tagline: 'Charcoal-free incense made from temple flowers and resins.',
    description: 'Artisanal, chemical-free incense sticks hand-rolled by women’s self-help collectives using upcycled floral offerings, pure frankincense resin, and natural cedarwood powder.',
    benefits: ['100% charcoal-free and sulfur-free', 'Low-smoke, soot-free combustion', 'Soothing natural aroma that lingers gently', 'Includes hand-made ceramic holder'],
    keyIngredients: ['Upcycled Marigold & Rose Petals', 'Boswellia Serrata (Frankincense) Resin', 'Himalayan Cedarwood Powder', 'Natural Bamboo Core'],
    usage: 'Light the coated tip. Blow out flame gently and place on the ceramic holder in a well-ventilated room.',
    image: '/src/assets/images/starter_kit_showcase_1791561214102.jpg',
    fssaiCategory: 'Handicraft & Natural Aromatics',
    inStock: true,
    rating: 4.9,
    reviewsCount: 131
  }
];

export const COMPENSATION_RANKS: DistributorRank[] = [
  {
    name: 'Distributor',
    monthlyTeamVolume: 0,
    personalBonusRate: 20, // 20% margin
    sponsorBonusRate: 5,
    monthlyPerformanceBonus: 0,
    perks: [
      '20% retail discount on personal and direct sales',
      '5% direct sponsor commission on personally introduced members',
      'Access to distributor backoffice and training webinars',
      'Personal replicated web storefront'
    ],
    badgeColor: 'bg-[#E3EBE4] text-[#2C4A2E]'
  },
  {
    name: 'Silver',
    monthlyTeamVolume: 25000,
    personalBonusRate: 25, // 25% margin
    sponsorBonusRate: 5,
    tier2BonusRate: 2,
    monthlyPerformanceBonus: 2000,
    perks: [
      '25% retail discount margin on direct orders',
      '5% direct sponsor bonus + 2% 2nd tier team override',
      '₹2,000 monthly consistent performance bonus',
      'Silver Recognition Certificate & Pin',
      'Priority distributor fulfillment queue'
    ],
    badgeColor: 'bg-[#DDE5E7] text-[#334D52]'
  },
  {
    name: 'Gold',
    monthlyTeamVolume: 75000,
    personalBonusRate: 28, // 28% margin
    sponsorBonusRate: 5,
    tier2BonusRate: 3,
    tier3BonusRate: 1.5,
    monthlyPerformanceBonus: 7500,
    perks: [
      '28% retail margin on all catalog items',
      '5% direct + 3% 2nd tier + 1.5% 3rd tier team overrides',
      '₹7,500 monthly team leadership bonus',
      'VIP Invitation to Regional VitaNest Leadership Summit',
      'Dedicated relationship manager support'
    ],
    badgeColor: 'bg-[#F2E8D5] text-[#694E1B]'
  },
  {
    name: 'Platinum',
    monthlyTeamVolume: 200000,
    personalBonusRate: 30, // 30% margin
    sponsorBonusRate: 5,
    tier2BonusRate: 3,
    tier3BonusRate: 2,
    monthlyPerformanceBonus: 20000,
    perks: [
      'Maximum 30% retail margin on direct customer orders',
      '5% tier 1 + 3% tier 2 + 2% tier 3 team volume bonus',
      '₹20,000 monthly high-performance executive bonus',
      'All-Inclusive Annual Luxury Wellness Retreat Trip for Top Performers',
      'Advisory Council seat & advance new formulation previews'
    ],
    badgeColor: 'bg-[#E2DEEA] text-[#473B5E]'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Sunita Mehra',
    location: 'Pune, Maharashtra',
    role: 'Independent Distributor (Gold Rank)',
    joinedYear: '2021',
    quote: 'I started VitaNest because I was already recommending the organic Ashwagandha and Tulsi tea to my yoga students. The ethical, product-first structure means I never felt like a pushy salesperson—I genuinely share formulations that improve people’s well-being.',
    outcome: 'Consistently earns supplemental income of ₹14,000–₹19,000/month while working 6 hours weekly around her family routine.',
    favoriteProduct: 'Organic Ashwagandha & Tulsi Tea',
    complianceNote: 'Sunita’s results are based on 3 years of consistent customer consultations. Individual distributor earnings depend on personal retail effort and sales skills.'
  },
  {
    id: 't-2',
    author: 'Rajesh & Kavita Sharma',
    location: 'Jaipur, Rajasthan',
    role: 'Distributor Partners (Platinum Rank)',
    joinedYear: '2020',
    quote: 'The Consumer Protection Direct Selling Rules in India made us very cautious about network companies. VitaNest stood out because 90%+ of revenue comes from genuine repeat customer orders, not sign-up fees. We qualified for the Kerala Wellness Retreat last November.',
    outcome: 'Built a customer network of 120+ monthly recurring wellness product buyers across 4 cities.',
    favoriteProduct: 'Plant-Based Protein & Essential Oil Diffuser',
    complianceNote: 'The annual retreat incentive requires maintaining Platinum qualifications for 6 consecutive months. Results vary significantly across participants.'
  },
  {
    id: 't-3',
    author: 'Dr. Ananya Roy',
    location: 'Bengaluru, Karnataka',
    role: 'Distributor & Holistic Lifestyle Coach (Silver Rank)',
    joinedYear: '2022',
    quote: 'As someone who reviews ingredient panels rigorously, seeing clean FSSAI nutraceutical standards with zero cheap maltodextrin fillers won my trust. The ₹2,999 starter kit gave me full-size products to verify before ever suggesting them to clients.',
    outcome: 'Introduced 18 active home wellness consultants who focus on clean beauty and daily nutrition.',
    favoriteProduct: 'Vital Greens Superfood Mix & Neem Wash',
    complianceNote: 'Dr. Roy endorses VitaNest products as dietary lifestyle supplements, not medical treatments for specific pathological conditions.'
  }
];

export const TRAINING_LESSONS: TrainingLesson[] = [
  {
    id: 'tl-1',
    title: 'Direct Selling Rules 2021: Ethical & Legal Standards',
    duration: '18 min',
    category: 'Compliance',
    description: 'A comprehensive walkthrough of the Consumer Protection (Direct Selling) Rules 2021, mandatory income disclaimers, FSSAI regulations, and consumer privacy guidelines.',
    keyTakeaways: [
      'Understanding why product sales to consumers must always drive income',
      'The prohibition of pyramid / money circulation schemes under Indian law',
      'Clear rules on product claims: never promise disease cures or medical treatments',
      'Mandatory 30-day consumer return and buyback rights'
    ]
  },
  {
    id: 'tl-2',
    title: 'The Science of Clean Wellness: Our 4 Product Lines',
    duration: '24 min',
    category: 'Product Knowledge',
    description: 'Deep dive into our plant protein extraction, KSM-66 organic ashwagandha bioavailability, bio-enzymes home chemistry, and non-comedogenic skincare.',
    keyTakeaways: [
      'How to explain adaptogens simply to health-conscious consumers',
      'Differentiating whole-leaf botanicals from synthetic extracts',
      'Proper storage and daily serving recommendations for clients',
      'FSSAI labeling standards and dietary supplement hygiene'
    ]
  },
  {
    id: 'tl-3',
    title: 'Consultative Wellness Selling: Building Honest Customer Trust',
    duration: '22 min',
    category: 'Consultative Selling',
    description: 'Step-by-step techniques to listen to your prospective customers, assess lifestyle routines, and offer helpful natural wellness recommendations without pressure.',
    keyTakeaways: [
      'How to conduct a 5-minute daily wellness questionnaire',
      'Hosting cozy, low-stress home wellness tea tastings and skincare demos',
      'Handling consumer queries transparently with verified batch certificates',
      'Post-purchase follow-up systems to ensure high satisfaction and repeat reorders'
    ]
  },
  {
    id: 'tl-4',
    title: 'Distributor Backoffice & Digital Storefront Setup',
    duration: '15 min',
    category: 'Digital Tools',
    description: 'How to customize your replicated web link, monitor team point volumes (PV/BV), process direct customer dropship orders, and track monthly payouts.',
    keyTakeaways: [
      'Sharing your personal link via WhatsApp and social channels compliantly',
      'Understanding the difference between Retail Margin and Team PV Overrides',
      'Downloading monthly tax invoices and GST/TDS compliance statements',
      'Using the built-in customer order fulfillment tracker'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Compliance & Legal',
    question: 'How does VitaNest comply with Indian Direct Selling regulations?',
    answer: 'VitaNest operates strictly under the Consumer Protection (Direct Selling) Rules, 2021 and the Direct Selling Guidelines. We are an incorporated Indian entity with a verified Grievance Redressal Officer, registered FSSAI licenses, transparent buyback/refund policies, and zero entry fees for earning. All commissions originate solely from genuine product sales to end consumers—never from recruiting people.'
  },
  {
    id: 'faq-2',
    category: 'Compliance & Legal',
    question: 'Can I make medical or disease-curing claims about VitaNest products?',
    answer: 'No. Strictly prohibited. Under Food Safety and Standards Authority of India (FSSAI) and AYUSH regulations, all VitaNest products are nutraceuticals, herbal infusions, dietary supplements, or cosmetic formulations. They are designed to support general well-being, nutrition, and daily vitality. They are not drugs and cannot be claimed to diagnose, treat, cure, or prevent any illness or chronic disease.'
  },
  {
    id: 'faq-3',
    category: 'Business Opportunity',
    question: 'What is included in the ₹2,999 Starter Kit, and is it refundable?',
    answer: 'The ₹2,999 Starter Kit includes 5 full-size bestsellers (Greens Mix, Ashwagandha, Neem Face Wash, Tulsi Tea, Aloe Gel), official physical & digital compliance manuals, your personal web storefront link, and 1 year of backoffice tools. Yes! Under our 30-Day Consumer & Distributor Buyback Policy, if you change your mind within 30 days of receiving your kit, you can return unused, merchantable products for a full refund minus shipping.'
  },
  {
    id: 'faq-4',
    category: 'Business Opportunity',
    question: 'How do distributors earn money with VitaNest?',
    answer: 'Earnings come from two primary sources: (1) Retail Profit: You buy products at 20%–30% distributor discount and sell at Maximum Retail Price (MRP), pocketing the direct margin immediately. (2) Team Bonus: If you introduce other independent consultants who also sell genuine products, you receive a 5% monthly bonus on their personal sales volume, plus leadership rank performance bonuses (Silver, Gold, Platinum) as your network generates verified customer orders.'
  },
  {
    id: 'faq-5',
    category: 'Business Opportunity',
    question: 'Is there any monthly purchase quota or inventory hoarding requirement?',
    answer: 'No. VitaNest strictly enforces an anti-inventory-loading rule. Distributors are never pressured to purchase inventory they cannot sell or consume. You can fulfill orders on demand directly through our dropshipping system—your customer places an order via your link, VitaNest ships directly to their doorstep, and your retail profit is credited to your backoffice account.'
  },
  {
    id: 'faq-6',
    category: 'Products',
    question: 'Are VitaNest products third-party laboratory tested?',
    answer: 'Yes. Every batch undergoes rigorous microbiological testing, heavy metals screening (lead, arsenic, cadmium, mercury), and active compound standardization. Batch analysis reports (COA) are publicly downloadable from our training portal.'
  },
  {
    id: 'faq-7',
    category: 'Orders & Shipping',
    question: 'What are the delivery timelines and shipping charges across India?',
    answer: 'Orders above ₹999 qualify for complimentary nationwide shipping. For orders below ₹999, a flat shipping charge of ₹75 applies. Standard delivery takes 2–4 business days in metro cities and 4–7 business days in regional hubs with SMS tracking.'
  }
];

export const DEMO_DISTRIBUTOR: DistributorProfile = {
  id: 'vn-dist-8491',
  name: 'Priya Sharma',
  distributorCode: 'VN-IND-8491',
  rank: 'Gold',
  joinedDate: 'March 14, 2022',
  replicatedLink: 'https://vitanest.in/ref/priya-wellness',
  currentMonthRetailSales: 48500,
  currentMonthTeamVolume: 82400,
  sponsorCount: 8,
  estimatedEarnings: 18740,
  nextRankTarget: 200000,
  recentOrders: [
    {
      id: 'ORD-9841',
      customer: 'Meera Deshmukh',
      itemsSummary: 'Plant Protein (500g) + Greens Mix (250g)',
      amount: 3198,
      date: 'Today, 10:15 AM',
      status: 'Shipped'
    },
    {
      id: 'ORD-9839',
      customer: 'Naveen Kumar',
      itemsSummary: 'Ashwagandha KSM-66 (x2) + Tulsi Tea',
      amount: 2047,
      date: 'Yesterday, 4:20 PM',
      status: 'Delivered'
    },
    {
      id: 'ORD-9825',
      customer: 'Sneha Patel',
      itemsSummary: 'Vitamin C Serum + Neem Face Wash',
      amount: 1698,
      date: 'Oct 7, 2026',
      status: 'Delivered'
    },
    {
      id: 'ORD-9810',
      customer: 'Rohan Verma',
      itemsSummary: 'Starter Kit (₹2,999) - New Consultant',
      amount: 2999,
      date: 'Oct 5, 2026',
      status: 'Delivered'
    }
  ],
  downlineMembers: [
    { name: 'Aarav Nair', code: 'VN-IND-8910', rank: 'Silver', monthlySales: 28400, activeStatus: true },
    { name: 'Kavita Joshi', code: 'VN-IND-9022', rank: 'Distributor', monthlySales: 16200, activeStatus: true },
    { name: 'Deepak Roy', code: 'VN-IND-9145', rank: 'Silver', monthlySales: 24800, activeStatus: true },
    { name: 'Shreya Sen', code: 'VN-IND-9289', rank: 'Distributor', monthlySales: 8900, activeStatus: true },
    { name: 'Manoj Pillai', code: 'VN-IND-9340', rank: 'Distributor', monthlySales: 4100, activeStatus: false }
  ]
};
