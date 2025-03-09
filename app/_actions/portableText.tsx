import React from 'react';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import { urlFor } from './sanity';
import Image from 'next/image';
import Link from 'next/link';

// Define custom components for rendering Portable Text
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-64 md:h-96 my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            fill
            className="object-cover"
          />
          {value.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    callToAction: ({ value }: any) => {
      return (
        <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
          {value.description && <p className="mb-4 text-blue-700">{value.description}</p>}
          {value.url && (
            <Link 
              href={value.url} 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {value.buttonText || 'Learn More'}
            </Link>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      return (
        <Link 
          href={value.href} 
          rel={rel} 
          target={target} 
          className="text-blue-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
    highlight: ({ children }: any) => (
      <span className="bg-yellow-200 px-1 rounded">{children}</span>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-5 mb-2">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
};

// Export the PortableText component with our custom components
export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />;
} 