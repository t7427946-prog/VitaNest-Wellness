export type ProductCategory = 'all' | 'daily-nutrition' | 'herbal-care' | 'skin-body' | 'home-wellness';

export interface Product {
  id: string;
  name: string;
  category: 'daily-nutrition' | 'herbal-care' | 'skin-body' | 'home-wellness';
  categoryLabel: string;
  price: number;
  distributorPrice: number;
  pv: number; // Point Value for compensation
  size: string;
  tagline: string;
  description: string;
  benefits: string[];
  keyIngredients: string[];
  usage: string;
  image: string;
  badge?: string;
  fssaiCategory?: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface StarterKit {
  id: string;
  name: string;
  price: number;
  pv: number;
  image: string;
  description: string;
  itemsIncluded: string[];
  perks: string[];
}

export interface CartItem {
  product: Product | { id: string; name: string; price: number; image: string; size: string; categoryLabel: string };
  quantity: number;
}

export interface DistributorRank {
  name: 'Distributor' | 'Silver' | 'Gold' | 'Platinum';
  monthlyTeamVolume: number;
  personalBonusRate: number; // Retail margin %
  sponsorBonusRate: number; // Tier 1 team bonus %
  tier2BonusRate?: number;
  tier3BonusRate?: number;
  monthlyPerformanceBonus: number;
  perks: string[];
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  joinedYear: string;
  quote: string;
  outcome: string;
  favoriteProduct: string;
  complianceNote: string;
}

export interface TrainingLesson {
  id: string;
  title: string;
  duration: string;
  category: 'Compliance' | 'Product Knowledge' | 'Consultative Selling' | 'Digital Tools';
  description: string;
  keyTakeaways: string[];
  videoThumbnail?: string;
}

export interface FAQItem {
  id: string;
  category: 'Products' | 'Business Opportunity' | 'Compliance & Legal' | 'Orders & Shipping';
  question: string;
  answer: string;
}

export interface DistributorProfile {
  id: string;
  name: string;
  distributorCode: string;
  rank: 'Distributor' | 'Silver' | 'Gold' | 'Platinum';
  joinedDate: string;
  replicatedLink: string;
  currentMonthRetailSales: number;
  currentMonthTeamVolume: number;
  sponsorCount: number;
  estimatedEarnings: number;
  nextRankTarget: number;
  recentOrders: {
    id: string;
    customer: string;
    itemsSummary: string;
    amount: number;
    date: string;
    status: 'Shipped' | 'Processing' | 'Delivered';
  }[];
  downlineMembers: {
    name: string;
    code: string;
    rank: string;
    monthlySales: number;
    activeStatus: boolean;
  }[];
}
