import React from 'react';
import {Link} from 'react-router-dom'
class CreateProducts extends React.Component {

    constructor(){
        super();
    }

    render() {
        return(
            <>
            <h1>This is Create Products</h1>
            <Link to="/">Home</Link>
        </>
        )
    }

}



export default CreateProducts