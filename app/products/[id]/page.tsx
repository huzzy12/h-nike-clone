import ProductClient from './ProductClient';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}
