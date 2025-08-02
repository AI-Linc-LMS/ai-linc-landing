import React from 'react';
import { Blog } from '@/lib/types/blog';
import { Badge } from './ui/badge';
import { Clock, User, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogDetailProps {
  blog: Blog;
}

export function BlogDetail({ blog }: BlogDetailProps) {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-background">
      {blog.coverImage && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={blog.coverImage} 
            alt={blog.title} 
            className="w-full h-[400px] object-cover"
          />
        </div>
      )}
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">{blog.title}</h1>
        
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{blog.readTime} min read</span>
          </div>
        </div>
        
        {blog.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
} 