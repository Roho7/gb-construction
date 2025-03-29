// Example query in your Next.js page

import { groq } from "next-sanity";
import { client, fetchSanity } from "./sanity";

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
  route: string;
  // Add any other fields you need
}

export interface DocumentType {
  title: string
  category: string
  url: string
  caption: string
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
  section,
  route
}`;

const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  description
}`;


const documentsQuery = groq`*[_type == "documents"] {
  title,
  category,
  "url": file.asset->url,
  caption
}`;



export async function getProjectsData(): Promise<ProjectType[]> {
  return await client.fetch<ProjectType[]>(projectsQuery);
}

export async function getImages(route?: string): Promise<ImageType[]> {
  return await client.fetch<ImageType[]>(imageQuery(route));
}

export async function getCategories(): Promise<CategoryType[]> {
  return await client.fetch<CategoryType[]>(categoriesQuery);
}

export async function getDocuments(): Promise<DocumentType[]> {
  return await client.fetch<DocumentType[]>(documentsQuery);
}

export async function getProjects(): Promise<ProjectType[]>{
  return await client.fetch<ProjectType[]>(projectsQuery)
}