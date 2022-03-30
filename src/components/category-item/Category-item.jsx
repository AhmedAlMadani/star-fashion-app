import './Category-item.styles.scss'
const CategoryItem = ({section}) => {
    const {imageUrl,title} = section;
    return(
        <div className="section-container">
            <div className='background-image' style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="section-body-container">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}
export default CategoryItem;
