import { Link } from 'react-router-dom';

import './preview.styles.scss';

import ProductCard from '../product-card/product-card';


const Preview = ({title, products}) => {
    return(
        <div className='preview-container'>
            <h2>
                <Link className='title' to={title}> 
                    {title.toUpperCase()} 
                </Link>
            </h2>
            <div className='preview'>
                {
                    products
                    .filter((_, idx) => idx<4)
                    .map((product)=> (
                    <ProductCard key={products.id} product={product}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Preview;