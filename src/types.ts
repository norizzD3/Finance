export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Make Money Online' | 'Personal Finance' | 'Investing' | 'Credit & Loans';
  author: string;
  publishedAt: string;
  featuredImage: string;
  readingTime: string;
  tags: string[];
}

export interface Tool {
  id: string;
  name: string;
  path: string;
  description: string;
  icon: string;
}
