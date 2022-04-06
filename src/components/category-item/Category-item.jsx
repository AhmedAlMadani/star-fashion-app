import { useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import './Category-item.styles.scss'

const CategoryItem = ({section}) => {
    const {t} = useTranslation("en");
    const {imageUrl,title, linkUrl} = section;
    const navigate = useNavigate();
    const navigateToLinkUrl = () => navigate(linkUrl);
    return(
        <div className="section-container" onClick={navigateToLinkUrl}>
            <div className='background-image' style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="section-body-container">
                <h2>
                    {title.toUpperCase()}
                </h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}
export default CategoryItem;
