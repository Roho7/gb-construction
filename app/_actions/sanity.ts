// ./src/sanity/lib/client.ts
import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Create the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for better performance
  perspective: 'published', // Show only published content
})

// Set up the image URL builder
const builder = imageUrlBuilder(client)

// Helper function to generate image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function for fetching data with typed results
export async function fetchSanity<T>(query: string, params = {}): Promise<T> {
  try {
    return await client.fetch<T>(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw new Error(`Failed to fetch data from Sanity: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}