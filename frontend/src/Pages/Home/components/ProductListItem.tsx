import { Link } from 'react-router-dom';
import { Product } from '../../../swagger-api/products/Api';

interface ProductListItemProps {
  product: Product
}

export const ProductListItem = ( props: ProductListItemProps) =>
    <Link
    to={`/product/${props.product.id}`}
    className="block"
>
    <div className="aspect-w-1 aspect-h-1">
        <img
            loading="lazy"
            alt="Simple Watch"
            className="object-cover rounded"
            src={props.product.image_path as unknown as string}
        />
    </div>

    <div className="mt-2">
        <h5 className="font-medium">
            {props.product.name}
        </h5>

        <p className="mt-1 text-sm text-gray-700">
            $150
        </p>
    </div>
</Link>;