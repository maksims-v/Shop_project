import { Product } from 'entities/Product/model/types/Product';

export interface ProductCardProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductCard = (props: ProductCardProps) => {
  const { products, isLoading } = props;

  return <div></div>;
};
