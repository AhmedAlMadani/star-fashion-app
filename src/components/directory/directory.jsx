import CategoryItem from '../category-item/Category-item';
import './directory.styles.scss'

const Directory = ({sections}) =>{
    return(
        <div className="directory-container">
            {sections.map((section)=>(
                <CategoryItem key={section.id} section={section}  />
            ))}
        </div>
    )
}
export default Directory;