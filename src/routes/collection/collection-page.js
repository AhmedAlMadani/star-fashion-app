import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card";
import './collections.styles.scss';

const Collections = () => {
    const { products } = useContext(ProductsContext);
    return(
        <div className="products-container">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
export default Collections;