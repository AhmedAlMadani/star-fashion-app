import React from "react";

import COLLECTION_DATA from "./Collections.data";

import Preview from "../../components/collections-preview/Preview";

class CollectionPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : COLLECTION_DATA
        };
        
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="collection-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <Preview key={id} {...otherCollectionProps} />
                    )) 
                }
            </div>
        )
    }
}
export default CollectionPage;