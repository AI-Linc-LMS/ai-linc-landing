import React from 'react';
import { BlogList } from '@/components/BlogList';
import { getAllBlogs } from '@/lib/data/blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Linc - Blog',
  description: 'Explore insightful articles and tutorials on AI, technology, and innovation',
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Latest Insights</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Dive into our collection of thought-provoking articles covering AI, technology, and innovation.
        </p>
      </header>
      
      <BlogList blogs={blogs} />
    </div>
  );
} 