import React from 'react';
import { BlogList } from '@/components/BlogList';
import { getAllBlogs } from '@/lib/data/blogs';
import { Metadata } from 'next';
import BlogSearchClient from '@/components/BlogSearchClient';

export const metadata: Metadata = {
  title: 'AI Linc - Blog',
  description: 'Explore insightful articles and tutorials on AI, technology, and innovation',
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="container mx-auto py-12 px-4">
      <header className="text-center mb-12  py-12 rounded-xl shadow-sm">
        <h1 className="text-5xl font-extrabold mb-4 text-primary">
          Our Latest Insights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Dive into our collection of thought-provoking articles covering cutting-edge AI, transformative technologies, and innovative solutions.
        </p>

        <BlogSearchClient initialBlogs={blogs} />
      </header>
    </div>
  );
} 