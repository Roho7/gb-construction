import { urlFor } from './sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

/**
 * Utility functions for working with Sanity images
 */

export interface ImageTransformOptions {
  width?: number;
  height?: number;
  format?: 'jpg' | 'png' | 'webp';
  quality?: number;
  blur?: number;
  sharpen?: number;
  saturation?: number;
  background?: string;
  crop?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'focalpoint';
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
}

/**
 * Get a transformed image URL from Sanity
 * 
 * @param image The Sanity image source
 * @param options Transformation options
 * @returns The transformed image URL
 */
export function getImageUrl(image: SanityImageSource, options: ImageTransformOptions = {}): string {
  if (!image) {
    return '';
  }

  let imageUrl = urlFor(image);

  // Apply transformations based on options
  if (options.width) {
    imageUrl = imageUrl.width(options.width);
  }
  
  if (options.height) {
    imageUrl = imageUrl.height(options.height);
  }
  
  if (options.format) {
    imageUrl = imageUrl.format(options.format);
  }
  
  if (options.quality) {
    imageUrl = imageUrl.quality(options.quality);
  }
  
  if (options.blur) {
    imageUrl = imageUrl.blur(options.blur);
  }
  
  if (options.sharpen) {
    imageUrl = imageUrl.sharpen(options.sharpen);
  }
  
  if (options.saturation) {
    imageUrl = imageUrl.saturation(options.saturation);
  }
  
  if (options.background) {
    imageUrl = imageUrl.bg(options.background);
  }
  
  if (options.fit) {
    imageUrl = imageUrl.fit(options.fit);
  }
  
  if (options.crop) {
    imageUrl = imageUrl.crop(options.crop);
  }

  return imageUrl.url();
}

/**
 * Get responsive image URLs for different screen sizes
 * 
 * @param image The Sanity image source
 * @param baseOptions Base transformation options
 * @returns Object with URLs for different screen sizes
 */
export function getResponsiveImageUrls(
  image: SanityImageSource,
  baseOptions: ImageTransformOptions = {}
) {
  return {
    small: getImageUrl(image, { ...baseOptions, width: 640 }),
    medium: getImageUrl(image, { ...baseOptions, width: 1024 }),
    large: getImageUrl(image, { ...baseOptions, width: 1920 }),
    default: getImageUrl(image, baseOptions),
  };
} 