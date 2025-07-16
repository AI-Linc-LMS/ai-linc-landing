import { Blog } from "../types/blog";

export const blogPosts: Blog[] = [
  {
    id: "1",
    title: "Introduction to AI-Powered Learning",
    slug: "ai-powered-learning-intro",
    author: "John Doe",
    date: "2024-01-15",
    excerpt:
      "Explore how AI is transforming the landscape of educational technology.",
    content: `# Introduction to AI-Powered Learning

AI is revolutionizing the way we approach education and skill development. In this blog post, we'll dive deep into the transformative potential of AI in learning platforms.

## Key Highlights
- Personalized learning experiences
- Adaptive content delivery
- Real-time feedback mechanisms

Stay tuned for more insights!`,
    tags: ["AI", "Education", "Technology"],
    coverImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    readTime: 5,
  },
  {
    id: "2",
    title: "Building Scalable Web Applications",
    slug: "scalable-web-apps",
    author: "Jane Smith",
    date: "2024-02-20",
    excerpt:
      "Learn best practices for creating robust and scalable web applications.",
    content: `# Building Scalable Web Applications

Scalability is crucial in modern web development. This blog explores strategies to build applications that can handle growth.

## Key Strategies
- Microservices architecture
- Efficient state management
- Performance optimization techniques

More details coming soon!`,
    tags: ["Web Development", "Architecture", "Performance"],
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    readTime: 7,
  },
  {
    id: "3",
    title: "Generative AI: Transforming Creative Industries",
    slug: "generative-ai-creative-revolution",
    author: "Emily Chen",
    date: "2024-03-10",
    excerpt: 
      "Discover how generative AI is reshaping design, art, and content creation across multiple industries.",
    content: `# Generative AI: The Creative Revolution

Generative AI is not just a technological breakthrough; it's a paradigm shift in creative expression. From art to marketing, AI is redefining what's possible.

## Exploring the Frontiers
- AI in graphic design
- Automated content generation
- Ethical considerations of AI creativity

The future is here, and it's incredibly exciting!`,
    tags: ["Generative AI", "Creativity", "Innovation"],
    coverImage: 
      "https://images.unsplash.com/photo-1677442135394-633f44c15a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    readTime: 6,
  },
  {
    id: "4",
    title: "AI in Healthcare: Revolutionizing Patient Care",
    slug: "ai-healthcare-innovation",
    author: "Dr. Michael Rodriguez",
    date: "2024-04-05",
    excerpt: 
      "Explore groundbreaking AI applications that are transforming diagnosis, treatment, and patient management.",
    content: `# AI: The New Frontier in Healthcare

Artificial Intelligence is not just a technological tool; it's becoming a critical partner in medical innovation.

## Key Innovations
- Predictive diagnostics
- Personalized treatment plans
- Medical image analysis
- Remote patient monitoring

AI is making healthcare more precise, accessible, and human-centric.`,
    tags: ["AI", "Healthcare", "Medical Technology"],
    coverImage: 
      "https://images.unsplash.com/photo-1584982751345-519ade5bca54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    readTime: 8,
  },
  {
    id: "5",
    title: "Ethical AI: Navigating the Moral Landscape",
    slug: "ethical-ai-challenges",
    author: "Sarah Thompson",
    date: "2024-04-20",
    excerpt: 
      "A deep dive into the ethical challenges and responsible development of artificial intelligence.",
    content: `# The Ethical Imperative in AI Development

As AI becomes more powerful, the need for robust ethical frameworks has never been more critical.

## Exploring Ethical Dimensions
- Bias and fairness in AI systems
- Privacy and data protection
- Transparency in AI decision-making
- Societal impact of autonomous systems

Responsible innovation is our collective responsibility.`,
    tags: ["AI Ethics", "Technology", "Social Responsibility"],
    coverImage: 
      "https://images.unsplash.com/photo-1526374965328-7f61d4b3c4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    readTime: 7,
  }
];

// ✅ Make this async to match usage in App Router
export async function getAllBlogs(): Promise<Blog[]> {
  return blogPosts;
}

// ✅ Already async - good!
export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogPosts.find((blog) => blog.slug === slug));
    }, 0);
  });
}
