import React from "react";
import './Preview.styles.scss'

import Item from "../collection-item/Item";

const Preview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item,idx) => idx<4)
                    .map(({id, ...otherItemsProps}) => (
                        <Item key={id} {...otherItemsProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default Preview;