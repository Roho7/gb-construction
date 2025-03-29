'use client'

import { CategoryType, DocumentType, getCategories, getDocuments, getImages, getProjects, ImageType, ProjectType } from '@/app/_actions/queries';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

// Define the shape of our context
interface DataContextType {
  projects: ProjectType[];
  categories: CategoryType[];
  isLoading: boolean;
  error: Error | null;
  allImages: ImageType[];
  documents: DocumentType[];
}

// Create the context with default values
const DataContext = createContext<DataContextType>({
  projects: [],
  categories: [],
  isLoading: false,
  error: null,
  allImages: [],
  documents: [],
});

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [allImages, setAllImages] = useState<ImageType[]>([]);
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const projectData = await getProjects();
        const categoryData = await getCategories();
        const imageData = await getImages();
        const documentData = await getDocuments();
        setProjects(projectData);
        setCategories(categoryData);
        setAllImages(imageData);
        setDocuments(documentData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(() => ({
    projects,
    categories,
    isLoading,
    error,
    allImages,
    documents
  }), [projects, categories, isLoading, error, allImages, documents]);

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
