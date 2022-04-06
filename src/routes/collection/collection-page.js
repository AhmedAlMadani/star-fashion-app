import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';

import './collections.styles.scss';

const Collections = () => {

    return(
        <Routes>
            <Route index element = {<CategoriesPreview />} />
            <Route path = ":category" element = {<Category />} />
        </Routes>
        
    )
}
export default Collections;