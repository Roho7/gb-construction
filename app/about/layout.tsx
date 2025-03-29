import { Metadata } from 'next';
import React from 'react'
import { siteConfig } from '../_utils/utils';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About GB Construction - Our History & Vision',
    description: 'Learn about GB Construction\'s journey, our mission, values, and the team behind our success in water infrastructure projects across West Bengal',
    openGraph: {
      title: 'About GB Construction - Our History & Vision',
      description: 'Learn about GB Construction\'s journey, our mission, values, and the team behind our success in water infrastructure projects across West Bengal',
      type: 'website',
      url: siteConfig().baseUrl,
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About GB Construction - Our History & Vision',
      description: 'Learn about GB Construction\'s journey, our mission, values, and the team behind our success in water infrastructure projects across West Bengal',
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  };
}

const AboutLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default AboutLayout