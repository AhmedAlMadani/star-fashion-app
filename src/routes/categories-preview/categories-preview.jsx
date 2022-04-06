import { useContext, Fragment } from "react";
import Preview from "../../components/category-preview/preview";
import { CategoriesContext } from "../../contexts/categories.context";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return(
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return(
                    <Preview key={title} title={title} products={products} />
                )
            })}
        </Fragment>
        
    )
}
export default CategoriesPreview;