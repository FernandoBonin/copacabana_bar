import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryProductExplorer } from '@/components/CategoryProductExplorer';
import {
  getAllCategories,
  getCategoryBySlug,
} from '@/data/categories';
import { getProductsByCategory } from '@/data/products';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const allCategories = getAllCategories();
  const products = getProductsByCategory(category.slug);

  return (
    <CategoryProductExplorer
      category={category}
      allCategories={allCategories}
      products={products}
    />
  );
}
