import React from 'react';
import Link from 'next/link';
import { Blog } from '@/lib/types/blog';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Clock, User } from 'lucide-react';

interface BlogListProps {
  blogs: Blog[];
}

export function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.slug}`} passHref>
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
            {blog.coverImage && (
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={blog.coverImage} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime} min read</span>
                </div>
              </div>
              
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
} 