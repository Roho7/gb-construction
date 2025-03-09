import React from 'react';
import { PortableText } from '../_actions/portableText';

interface SanityContentProps {
  content: any;
  className?: string;
}

/**
 * A reusable component for rendering Sanity Portable Text content
 * 
 * @example
 * ```tsx
 * // In your page component:
 * import { SanityContent } from '@/components/SanityContent';
 * 
 * // Fetch your content from Sanity
 * const { content } = await fetchSanity(`*[_type == "page" && slug.current == "about"][0].content`);
 * 
 * // Render it in your component
 * return <SanityContent content={content} className="my-custom-class" />;
 * ```
 */
export function SanityContent({ content, className = '' }: SanityContentProps) {
  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      <PortableText value={content} />
    </div>
  );
} 