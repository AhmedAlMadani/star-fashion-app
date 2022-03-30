import React from 'react';

import './menu-card.styles.scss';


const MenuCard = ({imageUrl, linkUrl, title, size, history, match}) => {
  return (
      <div className={`${size} menu-card`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
      </div>
    )
};

export default MenuCard;
