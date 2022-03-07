import React from "react";

import COLLECTION_DATA from "./Collections.data";

class CollectionPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : COLLECTION_DATA
        }
        
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="collection-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <div></div>
                    )) 
                }
            </div>
        )
    }
}
export default CollectionPage;