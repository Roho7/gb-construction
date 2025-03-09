// Example query in your Next.js page

import { groq } from "next-sanity";
import { client, fetchSanity } from "./sanity";

// Define TypeScript interfaces for your Sanity data
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface ImageType {
  title: string;
  alt: string;
  caption: string;
  imageUrl: string;
  dimensions: ImageDimensions;
  section: string;
  // Add any other fields you need
}

export interface ProjectType {
  title: string;
  description: string;
  mainImage: string;
  categories: {_ref: string}[];
  startedAt: string;
  completedAt: string;
}

export interface CategoryType {
  _id: string;
  title: string;
  description: string;
}

// Query for about page images
const aboutPageImagesQuery = groq`*[_type == "gb-pictures" && route == "/about"] {
  title,
  alt,
  caption,
  "imageUrl": image.asset->url,
  "dimensions": image.asset->metadata.dimensions,
  section
}| order(position asc)`;

// Function to get about page images with proper typing
export async function getAboutPageImages(): Promise<ImageType[]> {
  const images = await client.fetch<ImageType[]>(aboutPageImagesQuery);
  console.log(images);
  return images;
}

const projectsQuery = groq`*[_type == "gb-projects"] {
  title,
  description,
  "mainImage": mainImage.asset->url,
categories,
  startedAt,
  completedAt
}| order(position asc)`;


const imageQuery = (route?: string) => groq`*[_type == "gb-pictures" ${route ? `&& route == "${route}"` : ""}] {
  title,
  alt,
  caption,
  "imageUrl": image.asset->url,
  "dimensions": image.asset->metadata.dimensions,
  section
}`;

const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  description
}`;


// Interface for homepage data
export interface HomePageData {
  title: string;
  description: string;
  sections: Array<{
    _type: string;
    heading: string;
    subheading?: string;
    content?: string;
    image?: string;
  }>;
}


export async function getProjectsData(): Promise<ProjectType[]> {
  return await client.fetch<ProjectType[]>(projectsQuery);
}

export async function getImages(route?: string): Promise<ImageType[]> {
  return await client.fetch<ImageType[]>(imageQuery(route));
}

export async function getCategories(): Promise<CategoryType[]> {
  return await client.fetch<CategoryType[]>(categoriesQuery);
}
