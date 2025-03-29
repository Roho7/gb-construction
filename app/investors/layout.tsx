import React from 'react'
import { siteConfig } from '../_utils/utils';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: 'Investors - GB Construction',
      description: 'Investors can find all the information they need about GB Construction here.',
      openGraph: {
        title: 'Investors - GB Construction',
        description: 'Investors can find all the information they need about GB Construction here.',
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
        title: 'Investors - GB Construction',
        description: 'Investors can find all the information they need about GB Construction here.',
        images: [siteConfig().ogImage],
        creator: siteConfig().twitter,
      },
    };
  }

const InvetorsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default InvetorsLayout