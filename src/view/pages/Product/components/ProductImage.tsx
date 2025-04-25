import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductImageProps {
  image_name: string;
}

export function ProductImage({ image_name }: ProductImageProps) {
  return (
    <div className="bg-white rounded-3xl w-full h-full max-w-[780px] max-h-[720px] flex items-center justify-center">
      <LazyLoadImage
        className="w-full h-full p-2"
        src={`/products/${image_name}`}
        effect="blur"
        alt="Imagem do Produto"
        threshold={100}
      />
    </div>
  );
}
