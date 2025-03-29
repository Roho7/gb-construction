'use client'
import React, { useMemo } from 'react'
import Image from 'next/image'
import { useData } from '@/app/_hooks/useData';
import { usePathname } from 'next/navigation';

type Props = {
    title: string;
}

const PageHeader = ({title}: Props) => {
  const {allImages} = useData();
  const pathname = usePathname();
  const headerImage = useMemo(() => {
    return allImages.find((image) => image.route === pathname && image.section === "header")?.imageUrl;
  }, [allImages, pathname]);
  return (
      <section className="relative h-[400px] md:h-[500px] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-10" />
      {<Image
        src={headerImage || "/images/business-hero.jpg"}
        alt="GB Construction Business Segment"
        fill
        className="object-cover"
        priority
      />}
      <div className="container relative z-20 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
        </h1>
        <div className="w-20 h-1 bg-blue-400 mb-6" />
      </div>
    </section>
  )
}

export default PageHeader