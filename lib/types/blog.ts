export interface Blog {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  content: string;
  excerpt: string;
  tags?: string[];
  coverImage?: string;
  readTime?: number;
} 