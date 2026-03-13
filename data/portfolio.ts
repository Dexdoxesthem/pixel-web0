// pixel/data/portfolio.ts

export interface PortfolioCategory {
  title: string;
  description: string;
  stats: string[];
  images: string[];
  videos: string[];
}

export const portfolioData: Record<string, PortfolioCategory> = {
  wedding: {
    title: "Wedding Cinematography & Photography",
    description: "Capturing your moments, defining your legacy since 2015.",
    stats: ["500+ Weddings", "Pan-India Coverage", "Cinematic 4K"],
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552", "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"],
    videos: ["https://youtu.be/L7JYDOKIf_U"]
  },
  advertisements: {
    title: "Promotional & Ad Production",
    description: "Strategic visual storytelling for brands and businesses.",
    stats: ["80+ Brand Projects", "Social Media Optimized", "High Conversion"],
    images: ["https://images.unsplash.com/photo-1493119508027-2b584f234d6c"],
    videos: ["https://youtu.be/vebmmJxiqVg"]
  },
  ceremonies_parties: {
    title: "Rice Ceremony & Birthday",
    description: "Celebrating the milestones of life with joy and color.",
    stats: ["200+ Birthdays", "Vibrant Candids", "Quick Delivery"],
    images: ["https://images.unsplash.com/photo-1530103862676-fa390d79d56b"],
    videos: ["https://youtu.be/n_UyeA49L4c"]
  },
  // ... add your other categories here (prewedding, model_shoot, product_shoot, other)
};