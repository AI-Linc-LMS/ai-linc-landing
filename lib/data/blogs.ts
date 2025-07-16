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
