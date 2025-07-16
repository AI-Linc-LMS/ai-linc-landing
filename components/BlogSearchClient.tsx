 'use client';

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';
import { BlogList } from './BlogList';
import { Blog } from '@/lib/types/blog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface BlogSearchClientProps {
  initialBlogs: Blog[];
}

export default function BlogSearchClient({ initialBlogs }: BlogSearchClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags from initial blogs
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialBlogs.forEach(blog => 
      blog.tags?.forEach(tag => tags.add(tag))
    );
    return Array.from(tags).sort();
  }, [initialBlogs]);

  // Filter blogs based on search term and selected tags
  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter(blog => {
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => blog.tags?.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [initialBlogs, searchTerm, selectedTags]);

  // Handle tag selection toggle
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      <div className="mt-8 max-w-xl mx-auto flex space-x-4">
        <div className="relative flex-grow">
          <Input 
            type="text" 
            placeholder="Search blogs by title, author, or content..." 
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          {(searchTerm || selectedTags.length > 0) && (
            <button 
              onClick={clearFilters}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="w-6 h-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4">
            <h4 className="text-sm font-medium mb-4">Filter by Tags</h4>
            <div className="space-y-2">
              {allTags.map(tag => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox 
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                  <Label htmlFor={tag}>{tag}</Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12 bg-muted/50 rounded-xl">
          <p className="text-muted-foreground text-xl">
            No blogs found matching your search criteria.
          </p>
        </div>
      ) : (
        <BlogList blogs={filteredBlogs} />
      )}
    </div>
  );
}