import React from "react";
import './Item.styles.scss'

const Item = ({id, name, imageUrl, price}) => (
    <div className="item">
        <div 
            className="image" 
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
        />
        <div className="footer">
            <span className="name"> {name} </span>
            <span className="price"> {price} </span>
        </div>
    </div>
)

export default Item;