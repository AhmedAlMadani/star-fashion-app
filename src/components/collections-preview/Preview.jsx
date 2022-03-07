import React from "react";
import './Preview.styles.scss'

const Preview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
        </div>
    )
}

export default Preview;