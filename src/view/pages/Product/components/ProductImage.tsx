import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductImageProps {
  image_name: string;
}

export function ProductImage({ image_name }: ProductImageProps) {
  return (
    <LazyLoadImage
      className=""
      src={`/products/${image_name}`}
      effect="blur"
      alt="Imagem do Produto"
      threshold={100}
    />
  );
}
